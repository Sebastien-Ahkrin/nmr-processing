import { StoreAssignments } from '../buildAssignments';

import {
  RestrictionByCS,
  DiaIDPeerPossibleAssignment,
  InfoByAtomType,
  Partial,
  CurrentAtoms,
  PredictionsByAtomType,
} from './buildAssignments';
import { MapPossibleAssignments } from './createMapPossibleAssignment';
import {
  CorrelationWithIntegration,
  TargetsByAtomType,
} from './getTargetsAndCorrelations';
import { partialScore } from './partialScore';

export interface ExploreTreeRecOptions {
  currentAtomTypes: CurrentAtoms;
  restrictionByCS: RestrictionByCS;
  timeout: number;
  timeStart: number;
  maxSolutions: number;
  targets: TargetsByAtomType;
  predictions: PredictionsByAtomType;
  correlations: CorrelationWithIntegration[];
  lowerBoundScore: number;
  nbAllowedUnAssigned: number;
  possibleAssignmentMap: MapPossibleAssignments;
  diaIDPeerPossibleAssignment: DiaIDPeerPossibleAssignment;
}

interface AddSolutionOptions
  extends Pick<ExploreTreeRecOptions, 'maxSolutions' | 'predictions'> {
  partial: Partial;
  score: number;
}

export function exploreTree(
  props: ExploreTreeRecOptions,
  infoByAtomTypes: InfoByAtomType,
  partial: Partial,
  store: StoreAssignments,
) {
  const {
    currentAtomTypes,
    restrictionByCS,
    timeout,
    timeStart,
    maxSolutions,
    targets,
    predictions,
    correlations,
    lowerBoundScore,
    nbAllowedUnAssigned,
    possibleAssignmentMap,
    diaIDPeerPossibleAssignment,
  } = props;

  const currentDate = new Date();
  if (currentDate.getTime() - timeStart > timeout) {
    new Error('timeout expired');
    return store;
  }

  for (const atomType of currentAtomTypes) {
    const { currentIndex, nSources } = infoByAtomTypes[atomType];

    if (
      currentIndex === nSources - 1 &&
      partial[atomType][currentIndex] !== null
    ) {
      continue;
    }

    const diaID = diaIDPeerPossibleAssignment[atomType][currentIndex];
    const possibleAssignments = possibleAssignmentMap[atomType][diaID];
    // console.log(currentIndex, nSources, possibleAssignments, partial);
    for (let targetID of possibleAssignments) {
      partial[atomType][currentIndex] = targetID;
      // console.log('partial', partial)
      let score = partialScore(partial, {
        diaIDPeerPossibleAssignment,
        nbAllowedUnAssigned,
        restrictionByCS,
        predictions,
        correlations,
        targets,
      });

      if (score === 0) {
        if (targetID === '*') {
          partial[atomType][currentIndex] = null;
        }
        continue;
      }

      if (
        isLastOne(currentAtomTypes, infoByAtomTypes) &&
        score >= lowerBoundScore
      ) {
        addSolution(store, { predictions, partial, score, maxSolutions });
      } else if (currentIndex < nSources - 1) {
        // console.log('continue', currentIndex, nSources, infoByAtomTypes[atomType].currentIndex , currentDate.getTime())
        const newInfo = JSON.parse(JSON.stringify(infoByAtomTypes));
        newInfo[atomType].currentIndex += 1;
        exploreTree(
          {
            currentAtomTypes,
            restrictionByCS,
            timeout,
            timeStart,
            maxSolutions,
            targets,
            predictions,
            correlations,
            lowerBoundScore,
            nbAllowedUnAssigned,
            possibleAssignmentMap,
            diaIDPeerPossibleAssignment,
          },
          newInfo,
          JSON.parse(JSON.stringify(partial)),
          store,
        );
      }
    }
  }
}

export interface AssignmentSolution {
  assignment: string[];
  score: number;
}

function addSolution(store: StoreAssignments, props: AddSolutionOptions) {
  let { score, maxSolutions, partial, predictions } = props;
  score /= doubleAssignmentPenalty(partial, predictions);
  let solution: AssignmentSolution = {
    assignment: JSON.parse(JSON.stringify(partial)),
    score: score,
  };

  if (store.nSolutions >= maxSolutions) {
    if (solution.score > store.solutions.last().score) {
      store.solutions.pollLast();
      store.solutions.add(solution);
    }
  } else {
    store.solutions.add(solution);
    store.nSolutions++;
  }
}

function isLastOne(
  currentAtomTypes: CurrentAtoms,
  infoByAtomTypes: InfoByAtomType,
) {
  let lastOne = true;
  for (const atomType of currentAtomTypes) {
    const { currentIndex, nSources } = infoByAtomTypes[atomType];
    lastOne = lastOne && currentIndex === nSources - 1;
  }
  return lastOne;
}

function doubleAssignmentPenalty(
  partial: Partial,
  predictions: PredictionsByAtomType,
) {
  let nbDoubleAssignment = 0;
  for (const atomType in predictions) {
    const nbSources = Object.keys(predictions[atomType]).length;
    let assignments = new Set(partial[atomType]);
    nbDoubleAssignment += nbSources - assignments.size;
  }
  return nbDoubleAssignment > 0 ? 2 * nbDoubleAssignment : 1;
}
