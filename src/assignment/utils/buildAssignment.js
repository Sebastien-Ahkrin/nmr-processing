import treeSet from 'ml-tree-set';
import { getConnectivityMatrix } from 'openchemlib-utils';

import { predictCarbon } from '../../prediction/predictCarbon';
import { predictProton } from '../../prediction/predictProton';

import { createMapPossibleAssignment } from './createMapPossibleAssignment';
import { exploreTreeRec } from './exploreTreeRec';

const comparator = (a, b) => {
  return b.score - a.score;
};

const predictor = { H: predictProton, C: predictCarbon };

export async function buildAssignment(props) {
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
    targets,
  } = props;

  let date = new Date();
  let timeStart = date.getTime();
  let lowerBoundScore = minScore;

  const getAllHydrogens = {
    C: (m, i) => m.getAllHydrogens(i),
    H: () => 1,
  };

  let store = {
    solutions: new treeSet(comparator),
    nSolutions: 0,
  };

  const pathLengthMatrix = getConnectivityMatrix(molecule, {
    pathLength: true,
  });

  let atomTypes = [];
  let nSourcesByAtomtype = {};
  const predictions = {};
  let predictionIndex = 0;
  let possibleAssignmentMap = {};

  // console.log('assignmentOrder', assignmentOrder)
  for (const atomTypesToPredict of assignmentOrder) {
    for (const atomType of atomTypesToPredict) {
      const options = predictionOptions[atomType];
      const { joinedSignals } = await predictor[atomType](molecule, options);
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
      nSourcesByAtomtype[atomType] = joinedSignals.length;
    }

    createMapPossibleAssignment(possibleAssignmentMap, {
      restrictionByCS,
      predictions,
      targets,
    });

    const diaIDPeerPossibleAssignment = {};
    for (const atomType in possibleAssignmentMap) {
      diaIDPeerPossibleAssignment[atomType] = Object.keys(possibleAssignmentMap[atomType]);
    }

    let sourceOfPartials = getSourceOfPartials(store, nSourcesByAtomtype, atomTypesToPredict);

    store = {
      solutions: new treeSet(comparator),
      nSolutions: 0,
    };

    let first = true;
    for (let partial of sourceOfPartials) {
      if (!first) continue;
      first = false;
      exploreTreeRec(
        {
          atomTypesToPredict,
          nSourcesByAtomtype,
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
        predictionIndex,
        partial,
        store,
      );
    }
    predictionIndex = diaIDPeerPossibleAssignment.length;
  }

  return store;
}

function getSourceOfPartials(store, nSourcesByAtomtype, currentAtoms) {
  return store.nSolutions > 0 ? store.solutions.elements.map((e) => {
    let currentAssignment = e.assignment;
    for (const atom of currentAtoms) {
      currentAssignment[atom] = fillPartial(nSourcesByAtomtype[atom]);
    }
    return currentAssignment;
  }) : initializePartials(nSourcesByAtomtype, currentAtoms);
}

function initializePartials(nSourcesByAtomtype, currentAtoms) {
  const partial = {};
  for (const atom in nSourcesByAtomtype) {
    const value = currentAtoms.includes(atom) ? null : '*';
    partial[atom] = fillPartial(nSourcesByAtomtype[atom], value);
  }
  return [partial]
}

function fillPartial(nSources, value = null) {
  const partial = new Array(nSources);
  for (let i = 0; i < nSources; i++) {
    partial[i] = value;
  }
  return partial;
}
