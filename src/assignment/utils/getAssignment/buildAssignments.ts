import treeSet from 'ml-tree-set';
import { Types } from 'nmr-correlation';
import { Molecule } from 'openchemlib';
import { getConnectivityMatrix } from 'openchemlib-utils';

import {
  NMRSignal1D,
  PredictCarbonOptions,
  PredictProtonOptions,
} from '../../..';
import { predictCarbon } from '../../../prediction/predictCarbon';
import { predictProton } from '../../../prediction/predictProton';
import { MakeMandatory } from '../../../utilities/MakeMandatory';
import { StoreAssignments } from '../buildAssignments';

import { SpectraDataWithIds } from './checkIDs';
import {
  createMapPossibleAssignment,
  MapPossibleAssignments,
} from './createMapPossibleAssignment';
import { AssignmentSolution, exploreTree } from './exploreTree';
import { TargetsByAtomType } from './getTargetsAndCorrelations';
import { isSpectraData1D } from './isSpectraData1D';
import { searchIndices } from './searchIndices';

const comparator = (a: AssignmentSolution, b: AssignmentSolution) => {
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

export interface RestrictionByCS {
  chemicalShiftRestriction: boolean;
  tolerance: { [key: string]: number };
  useChemicalShiftScore: boolean;
}

export interface BuildAssignmentInput {
  spectra: SpectraDataWithIds[];
  molecule: Molecule;
  restrictionByCS: RestrictionByCS;
  timeout: number;
  minScore: number;
  nbAllowedUnAssigned: number;
  maxSolutions: number;
  correlations: Types.Values;
  assignmentOrder: Array<Array<AtomTypes>>;
  predictions: {
    H?: NMRSignal1D[];
    C?: NMRSignal1D[];
  };
  predictionOptions: {
    H?: PredictProtonOptions;
    C?: PredictCarbonOptions;
  };
  targets: TargetsByAtomType;
}

type NMRSignal1DFromPrediction = MakeMandatory<
  NMRSignal1D,
  'nbAtoms' | 'diaIDs' | 'atoms'
>;

function checkNMRSignal1D(
  signals: NMRSignal1D[],
): asserts signals is NMRSignal1DFromPrediction[] {
  const keys: Array<'nbAtoms' | 'diaIDs' | 'atoms'> = [
    'nbAtoms',
    'diaIDs',
    'atoms',
  ];
  for (const signal of signals) {
    for (let key of keys) {
      if (!signal[key]) throw new Error(`property ${key} does not exist`);
    }
  }
}

export interface Prediction extends NMRSignal1DFromPrediction {
  diaIDIndex: number;
  allHydrogens: number;
  protonsCount: number;
  pathLength: number[];
}

export interface Predictions {
  [key: string]: Prediction;
}

export interface PredictionsByAtomType {
  [key: string]: Predictions;
}

export interface InfoByAtomType {
  [key: string]: { nSources: number; currentIndex: number };
}

export const getAllHydrogens = {
  C: (m: Molecule, i: number) => m.getAllHydrogens(i),
  H: () => 1,
};

export async function buildAssignments(props: BuildAssignmentInput) {
  const {
    spectra,
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
  let diaIDPeerPossibleAssignment: DiaIDPeerPossibleAssignment = {};
  for (const atomTypesToPredict of assignmentOrder) {
    for (const atomType of atomTypesToPredict) {
      const options = predictionOptions[atomType];
      const predictedSignals = inputPrediction[atomType];
      let { joinedSignals } = predictedSignals
        ? { joinedSignals: predictedSignals }
        : await predictor[atomType](molecule, options);

      checkNMRSignal1D(joinedSignals);

      if (!predictions[atomType]) predictions[atomType] = {};
      for (let prediction of joinedSignals) {
        const diaID = prediction.diaIDs[0];
        const index = prediction.atoms[0];
        const allHydrogens = getAllHydrogens[atomType](molecule, index);
        predictions[atomType][diaID] = {
          ...prediction,
          diaIDIndex: index,
          allHydrogens: prediction.nbAtoms * allHydrogens,
          protonsCount: allHydrogens,
          pathLength: pathLengthMatrix[index] as number[],
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

    diaIDPeerPossibleAssignment = {};
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

    for (let partial of sourceOfPartials) {
      exploreTree(
        {
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

  return annotateSpectraData({
    store,
    spectra,
    diaIDPeerPossibleAssignment,
    targets,
  });
}

interface AnnotateSpectraDataInput {
  store: StoreAssignments;
  spectra: SpectraDataWithIds[];
  targets: TargetsByAtomType;
  diaIDPeerPossibleAssignment: DiaIDPeerPossibleAssignment;
}

function annotateSpectraData(input: AnnotateSpectraDataInput) {
  const { store, spectra, diaIDPeerPossibleAssignment, targets } = input;
  const { solutions } = store;
  const mapSignalId: any = {};
  const atomTypes = Object.keys(targets) as AtomTypes[];
  for (const atomType of atomTypes) {
    const targetByAtomType = targets[atomType];
    for (const targetId in targetByAtomType) {
      let target = targetByAtomType[targetId];
      for (const link of target.link) {
        const signalId = link.signal.id;
        if (mapSignalId[signalId]) continue;
        mapSignalId[link.signal.id] = searchIndices(signalId, spectra);
      }
    }
  }

  const result = [];
  for (let solution of solutions.elements) {
    const spectraResult = JSON.parse(
      JSON.stringify(spectra),
    ) as SpectraDataWithIds[];
    const { assignment, score } = solution;
    const atomTypes = Object.keys(assignment) as AtomTypes[];
    for (const atomType of atomTypes) {
      const targetByAtomType = targets[atomType];
      const assignmentPeerAtomType = assignment[atomType];
      for (let index = 0; index < assignmentPeerAtomType.length; index++) {
        const targetID = assignmentPeerAtomType[index];
        if (targetID === '*') continue;
        const target = targetByAtomType[targetID];
        const diaId = diaIDPeerPossibleAssignment[atomType][index];
        for (let link of target.link) {
          const signalID = link.signal.id;
          const { spectrumIndex, elementIndex, signalIndex } =
            mapSignalId[signalID];
          const spectrum = spectraResult[spectrumIndex];
          if (isSpectraData1D(spectrum)) {
            let { ranges } = spectrum;
            let range = ranges[elementIndex];
            let signal = range.signals[signalIndex];
            if (!signal.diaIDs) signal.diaIDs = [];
            signal.diaIDs.push(diaId);
          } else {
            const axis = link.axis as 'x' | 'y';
            const signal = spectrum.zones[elementIndex].signals[signalIndex];
            if (!signal[axis].diaIDs) signal[axis].diaIDs = [];
            signal[axis].diaIDs?.push(diaId);
          }
        }
      }
    }
    result.push({
      score,
      assignment: spectraResult,
    });
  }
  return result;
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
