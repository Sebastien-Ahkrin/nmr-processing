import treeSet from 'ml-tree-set';

import { RestrictionByCS, Targets, NMRSignal1DWithAtomsAndDiaIDs } from '../get1HAssignments';

import { createMapPossibleAssignments } from './createMapPossibleAssignments';
import { exploreTreeRec } from './exploreTreeRec';
import type { SolutionAssignment } from './exploreTreeRec';

const comparator = (a: SolutionAssignment, b: SolutionAssignment) => {
  return b.score - a.score;
};

export interface BuildAssignmentsProps {
  restrictionByCS: RestrictionByCS;
  timeout: number;
  minScore: number;
  nbAllowedUnAssigned: number;
  maxSolutions: number;
  targets: Targets;
  joinedSignals: NMRSignal1DWithAtomsAndDiaIDs[];
}

export interface Signals1HAssignment extends NMRSignal1DWithAtomsAndDiaIDs {
  diaIDIndex: number;
  allHydrogens: number;
  error?: number;
}

export interface Predictions1Hassignments {
  [key: string]: Signals1HAssignment;
}

export interface Store1HAssignments {
  solutions: treeSet;
  nSolutions: number;
}

export async function buildAssignments(props: BuildAssignmentsProps) {
  const {
    restrictionByCS,
    timeout,
    minScore,
    nbAllowedUnAssigned,
    maxSolutions,
    targets,
    joinedSignals,
  } = props;

  let date = new Date();
  let timeStart = date.getTime();

  let store: Store1HAssignments = {
    solutions: new treeSet(comparator),
    nSolutions: 0,
  };

  let nSources = joinedSignals.length;
  const predictions: Predictions1Hassignments = {};

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
    restrictionByCS,
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
      restrictionByCS,
      timeout,
      timeStart,
      targets,
      predictions,
      maxSolutions,
      lowerBoundScore: minScore,
      nbAllowedUnAssigned,
      possibleAssignmentMap,
      diaIDPeerPossibleAssignment,
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
