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
    unassigned,
    maxSolutions,
    correlations,
    assignmentOrder,
    predictionOptions,
    targets,
  } = props;

  let date = new Date();
  let timeStart = date.getTime();
  let lowerBound = minScore;

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
  let nSources = 0;
  const predictions = {};
  let predictionIndex = 0;
  let possibleAssignmentMap = {};

  // console.log('assignmentOrder', assignmentOrder)
  for (const atomTypesToPredict of assignmentOrder) {
    for (const atomType of atomTypesToPredict) {
      atomTypes.push(atomType);
      const options = predictionOptions[atomType];
      const { joinedSignals } = await predictor[atomType](molecule, options);
      if (!predictions[atomType]) predictions[atomType] = {};
      for (let prediction of joinedSignals) {
        // console.log(prediction)
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
      nSources += joinedSignals.length;
    }

    createMapPossibleAssignment(possibleAssignmentMap, {
      restrictionByCS,
      predictions,
      targets,
    });
    console.log('posible assignment', possibleAssignmentMap);
    // console.log('prediction', predictions);
    const diaIDPeerPossibleAssignment = Object.keys(possibleAssignmentMap);

    let sourceOfPartials = getSourceOfPartial(store, nSources);

    store = {
      solutions: new treeSet(comparator),
      nSolutions: 0,
    };

    for (let partial of sourceOfPartials) {
      exploreTreeRec(
        {
          atomTypes,
          nSources,
          restrictionByCS,
          timeout,
          timeStart,
          targets,
          predictions,
          correlations,
          maxSolutions,
          lowerBound,
          unassigned,
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

function getSourceOfPartial(store, nSources) {
  return store.nSolutions > 0
    ? store.solutions.elements.map((e) => initializePartial(nSources, e.assignment))
    : [initializePartial(nSources)];
}

function initializePartial(nSources, partial = []) {
  for (let index = partial.length; index < nSources; index++) {
    partial.push(null);
  }
  return partial;
}

// function mergeSolutions(solution, store, maxSolutions) {
//   if (store.nSolutions >= maxSolutions) {
//     if (solution.score > store.solutions.last().score) {
//       store.solutions.pollLast();
//       store.solutions.add(solution);
//     }
//   } else {
//     store.solutions.add(solution);
//     store.nSolutions++;
//   }
// }
