import treeSet from 'ml-tree-set';

import { createMapPossibleAssignments } from './createMapPossibleAssignments';
import { exploreTreeRec } from './exploreTreeRec';

const comparator = (a, b) => {
  return b.score - a.score;
};

export async function buildAssignments(props) {
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

  let store = {
    solutions: new treeSet(comparator),
    nSolutions: 0,
  };

  let nSources = joinedSignals.length;
  const predictions = {};

  for (let prediction of joinedSignals) {
    const diaID = prediction.diaIDs[0];
    const index = prediction.atomIDs[0];
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

function fillPartial(nSources, value = null) {
  const partial = new Array(nSources);
  for (let i = 0; i < nSources; i++) {
    partial[i] = value;
  }
  return partial;
}
