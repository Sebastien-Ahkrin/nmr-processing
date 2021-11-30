import treeSet from 'ml-tree-set';

import { Targets, NMRSignal1DWithAtomsAndDiaIDs } from '../get1HAssignments';

import { createMapPossibleAssignments } from './createMapPossibleAssignments';
import { exploreTreeRec } from './exploreTreeRec';
import type { SolutionAssignment } from './exploreTreeRec';

const comparator = (a: SolutionAssignment, b: SolutionAssignment) => {
  return b.score - a.score;
};

export interface RestrictionByCS {
  chemicalShiftRestriction: boolean;
  tolerance: number;
  useChemicalShiftScore: boolean;
}

export interface BuildAssignmentsProps {
  restrictionByCS?: Partial<RestrictionByCS>;
  timeout: number;
  minScore: number;
  useIntegrationRestriction: boolean;
  nbAllowedUnAssigned: number;
  maxSolutions: number;
  targets: Targets;
  joinedSignals: NMRSignal1DWithAtomsAndDiaIDs[];
}

export interface Signals1DAssignment extends NMRSignal1DWithAtomsAndDiaIDs {
  diaIDIndex: number;
  allHydrogens: number;
  error?: number;
}

export interface Predictions1Dassignments {
  [key: string]: Signals1DAssignment;
}

export interface StoreAssignments1D {
  solutions: treeSet;
  nSolutions: number;
}

export async function buildAssignments(props: BuildAssignmentsProps) {
  const {
    restrictionByCS = {},
    useIntegrationRestriction,
    timeout,
    minScore,
    nbAllowedUnAssigned,
    maxSolutions,
    targets,
    joinedSignals,
  } = props;

  const {
    tolerance = 1,
    useChemicalShiftScore = false,
    chemicalShiftRestriction = true,
  } = restrictionByCS;

  let date = new Date();
  let timeStart = date.getTime();

  let store: StoreAssignments1D = {
    solutions: new treeSet(comparator),
    nSolutions: 0,
  };

  let nSources = joinedSignals.length;
  const predictions: Predictions1Dassignments = {};

  for (let prediction of joinedSignals) {
    const diaID = prediction.diaIDs[0];
    const index = prediction.atoms[0];
    predictions[diaID] = {
      ...prediction,
      diaIDIndex: index,
      allHydrogens: prediction.nbAtoms,
    };
  }

  const possibleAssignmentMap = createMapPossibleAssignments({
    restrictionByCS: {
      tolerance,
      useChemicalShiftScore,
      chemicalShiftRestriction,
    },
    useIntegrationRestriction,
    predictions,
    targets,
  });

  const diaIDPeerPossibleAssignment = Object.keys(possibleAssignmentMap);

  let partial = fillPartial(nSources);

  store = {
    solutions: new treeSet(comparator),
    nSolutions: 0,
  };

  exploreTreeRec(
    {
      nSources,
      restrictionByCS: {
        tolerance,
        useChemicalShiftScore,
        chemicalShiftRestriction,
      },
      timeout,
      timeStart,
      targets,
      predictions,
      maxSolutions,
      lowerBoundScore: minScore,
      nbAllowedUnAssigned,
      possibleAssignmentMap,
      diaIDPeerPossibleAssignment,
      useIntegrationRestriction,
    },
    0,
    partial,
    store,
  );

  const assignments = [];
  for (const solution of store.solutions.elements) {
    const { assignment, score } = solution;
    const currentAssignment = JSON.parse(JSON.stringify(targets));
    for (let i = 0; i < assignment.length; i++) {
      let range = currentAssignment[assignment[i]];
      if (!range.diaIDs) range.diaIDs = [];
      if (assignment[i]) range.diaIDs.push(diaIDPeerPossibleAssignment[i]);
    }
    assignments.push({
      score,
      assignment: Object.values(currentAssignment),
    });
  }

  return assignments;
}

function fillPartial(nSources: number, value = null) {
  const partial = new Array(nSources);
  for (let i = 0; i < nSources; i++) {
    partial[i] = value;
  }
  return partial;
}
