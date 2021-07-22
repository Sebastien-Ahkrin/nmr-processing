import treeSet from 'ml-tree-set';

import {
  getConnectivityMatrix,
} from 'openchemlib-utils';

import { exploreTreeRec } from './exploreTreeRec';

import { predictCarbon } from '../../prediction/predictCarbon';
import { predictProton } from '../../prediction/predictProton';

import { createMapPossibleAssignment } from './createMapPossibleAssignment';

const comparator = (a, b) => {
  return b.score - a.score;
};

const predictor = { H: predictProton, C: predictCarbon };

export async function buildAssignment(props) {
  const {
    molecule, 
    restrictionByCS,
    timeout,
    tolerance,
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

  let index = 0;
  let nSources = 0;
  let partial = [];
  const predictions = {};
  let predictionIndex = 0;
  let possibleAssignmentMap = {};
  
  for (const atomTypesToPredict of assignmentOrder) {
    for (const atomType of atomTypesToPredict) {
      const options = predictionOptions[atomType];
      const { joinedSignals } = await predictor[atomType](molecule, options);
      if (!predictions[atomType]) predictions[atomType] = {};
      for (let prediction of joinedSignals) {
        const diaID = prediction.diaID[0];
        const index = prediction.assignment[0];
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
    console.log(possibleAssignmentMap)
    const diaIDPeerPossibleAssignment = Object.keys(possibleAssignmentMap);

    for (; index < nSources; index++) {
      partial[index] = null;
    }

    exploreTreeRec(
      {
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

    predictionIndex = diaIDPeerPossibleAssignment.length;
  }

  return store;
}
