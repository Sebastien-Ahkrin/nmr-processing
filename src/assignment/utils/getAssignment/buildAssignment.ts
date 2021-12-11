import treeSet from 'ml-tree-set';
import { Types } from 'nmr-correlation';
import { Molecule } from 'openchemlib';
import { getConnectivityMatrix } from 'openchemlib-utils';

import {
  NMRSignal1D,
  PredictCarbonOptions,
  Prediction1D,
  PredictProtonOptions,
} from '../../..';
import { MakeMandatory } from '../../../utilities/MakeMandatory';
import { predictCarbon } from '../../prediction/predictCarbon';
import { predictProton } from '../../prediction/predictProton';
import { RestrictionByCS, StoreAssignments } from '../buildAssignments';

import { createMapPossibleAssignment } from './createMapPossibleAssignment';
import { MapPossibleAssignments } from './createMapPossibleAssignments';
import { exploreTree } from './exploreTree';
import { TargetsByAtomType } from './getTargetsAndCorrelations';

const comparator = (a, b) => {
  return b.score - a.score;
};

const predictor = { H: predictProton, C: predictCarbon };

export type AtomTypes = 'H' | 'C';
export type CurrentAtoms = Array<AtomTypes>;
export interface Partial {
  [key: string]: Array<string | null>;
}

export interface DiaIDPeerPossibleAssignment {
  [key: string]: string[];
}

export interface BuildAssignmentInput {
  molecule: Molecule;
  restrictionByCS: RestrictionByCS;
  timeout: number;
  minScore: number;
  nbAllowedUnAssigned: number;
  maxSolutions: number;
  correlations: Types.Values;
  assignmentOrder: Array<Array<AtomTypes>>;
  predictions: {
    H?: Prediction1D;
    C?: Prediction1D;
  };
  predictionOptions: {
    H?: PredictProtonOptions;
    C?: PredictCarbonOptions;
  };
  targets: TargetsByAtomType;
}

export interface Prediction extends MakeMandatory<NMRSignal1D, 'nbAtoms'> {
  diaIDIndex: number;
  allHydrogens: number;
  protonsCount: number;
  pathLength: number[];
  error?: number;
}

export interface Predictions {
  [key: string]: Prediction;
}

export interface PredictionsByAtomType {
  [key: string]: Predictions;
};

export interface InfoByAtomType {
  [key: string]: { nSources: number; currentIndex: number };
}

export async function buildAssignment(props: BuildAssignmentInput) {
  const {
    molecule,
    restrictionByCS,
    timeout,
    minScore,
    nbAllowedUnAssigned,
    maxSolutions,
    correlations,
    assignmentOrder,
    predictionOptions,
    predictions: inputPrediction = {},
    targets,
  } = props;

  let date = new Date();
  let timeStart = date.getTime();
  let lowerBoundScore = minScore;

  const getAllHydrogens = {
    C: (m: Molecule, i: number) => m.getAllHydrogens(i),
    H: () => 1,
  };

  let store: StoreAssignments = {
    solutions: new treeSet(comparator),
    nSolutions: 0,
  };

  const pathLengthMatrix = getConnectivityMatrix(molecule, {
    pathLength: true,
  });

  let infoByAtomType: InfoByAtomType = {};
  const predictions: PredictionsByAtomType = {};
  let possibleAssignmentMap: MapPossibleAssignments = {};

  // console.log('assignmentOrder', assignmentOrder)
  for (const atomTypesToPredict of assignmentOrder) {
    for (const atomType of atomTypesToPredict) {
      const options = predictionOptions[atomType];
      let { joinedSignals } =
        inputPrediction[atomType] ||
        (await predictor[atomType](molecule, options));

      if (!predictions[atomType]) predictions[atomType] = {};
      for (let prediction of joinedSignals) {
        // @TODO: REFACTOR it could be missed if the CS is not a requirement
        const diaID = prediction.diaIDs[0];
        const index = prediction.atomIDs[0];
        const allHydrogens = getAllHydrogens[atomType](molecule, index);
        predictions[atomType][diaID] = {
          ...prediction,
          diaIDIndex: index,
          allHydrogens: prediction.nbAtoms * allHydrogens,
          protonsCount: allHydrogens,
          pathLength: pathLengthMatrix[index],
        };
      }
      infoByAtomType[atomType] = {
        nSources: joinedSignals.length,
        currentIndex: 0,
      };
    }

    possibleAssignmentMap = createMapPossibleAssignment(possibleAssignmentMap, {
      restrictionByCS,
      predictions,
      targets,
    });

    const diaIDPeerPossibleAssignment: DiaIDPeerPossibleAssignment = {};
    for (const atomType in possibleAssignmentMap) {
      diaIDPeerPossibleAssignment[atomType] = Object.keys(
        possibleAssignmentMap[atomType],
      );
    }

    let sourceOfPartials = getSourceOfPartials(
      store,
      infoByAtomType,
      atomTypesToPredict,
    );

    store = {
      solutions: new treeSet(comparator),
      nSolutions: 0,
    };

    let first = true;
    for (let partial of sourceOfPartials) {
      // if (!first) continue;
      // first = false;
      exploreTree(
        {
          first,
          currentAtomTypes: atomTypesToPredict,
          restrictionByCS,
          timeout,
          timeStart,
          targets,
          predictions,
          correlations,
          maxSolutions,
          lowerBoundScore,
          nbAllowedUnAssigned,
          possibleAssignmentMap,
          diaIDPeerPossibleAssignment,
        },
        infoByAtomType,
        partial,
        store,
      );
    }
  }

  return store;
}

function getSourceOfPartials(
  store: StoreAssignments,
  infoByAtomType: InfoByAtomType,
  currentAtoms: CurrentAtoms,
) {
  return store.nSolutions > 0
    ? store.solutions.elements.map((e) => {
        let currentAssignment = e.assignment;
        for (const atom of currentAtoms) {
          currentAssignment[atom] = fillPartial(infoByAtomType[atom].nSources);
        }
        return currentAssignment;
      })
    : initializePartials(infoByAtomType, currentAtoms);
}

function initializePartials(
  infoByAtomType: InfoByAtomType,
  currentAtoms: CurrentAtoms,
) {
  const partial: Partial = {};
  const atomsType = Object.keys(infoByAtomType) as CurrentAtoms;
  for (const atom of atomsType) {
    const value = currentAtoms.includes(atom) ? null : '*';
    partial[atom] = fillPartial(infoByAtomType[atom].nSources, value);
  }
  return [partial];
}

function fillPartial(nSources: number, value: string | null = null) {
  const partial: Array<string | null> = new Array(nSources);
  for (let i = 0; i < nSources; i++) {
    partial[i] = value;
  }
  return partial;
}
