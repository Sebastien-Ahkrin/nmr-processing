import type { Targets } from '../get1HAssignments';

import type {
  RestrictionByCS,
  StoreAssignments1D,
  Predictions1Dassignments,
} from './buildAssignments';
import type { PossibleAssignmentMap } from './createMapPossibleAssignments';
import { partialScore } from './partialScore';

export interface ExploreTreeRecProps {
  nSources: number;
  restrictionByCS: RestrictionByCS;
  timeout: number;
  timeStart: number;
  maxSolutions: number;
  targets: Targets;
  useIntegrationRestriction: boolean;
  predictions: Predictions1Dassignments;
  lowerBoundScore: number;
  nbAllowedUnAssigned: number;
  possibleAssignmentMap: PossibleAssignmentMap;
  diaIDPeerPossibleAssignment: string[];
}
export function exploreTreeRec(
  props: ExploreTreeRecProps,
  currentIndex: number,
  partial: Array<string | null>,
  store: StoreAssignments1D,
) {
  const {
    nSources,
    restrictionByCS,
    timeout,
    timeStart,
    maxSolutions,
    targets,
    predictions,
    lowerBoundScore,
    nbAllowedUnAssigned,
    possibleAssignmentMap,
    useIntegrationRestriction,
    diaIDPeerPossibleAssignment,
  } = props;

  const currentDate = new Date();
  if (currentDate.getTime() - timeStart > timeout) {
    new Error('timeout expired');
    return store;
  }

  const diaID = diaIDPeerPossibleAssignment[currentIndex];
  const possibleAssignments = possibleAssignmentMap[diaID];
  for (let targetID of possibleAssignments) {
    partial[currentIndex] = targetID;
    let score = partialScore(partial, {
      useIntegrationRestriction,
      diaIDPeerPossibleAssignment,
      nbAllowedUnAssigned,
      restrictionByCS,
      predictions,
      targets,
    });

    if (score === 0) {
      if (targetID === '*') {
        partial[currentIndex] = null;
      }
      continue;
    }

    if (currentIndex === nSources - 1 && score >= lowerBoundScore) {
      addSolution(store, { predictions, partial, score, maxSolutions });
    } else if (currentIndex < nSources - 1) {
      exploreTreeRec(
        {
          nSources,
          restrictionByCS,
          timeout,
          timeStart,
          maxSolutions,
          targets,
          predictions,
          lowerBoundScore,
          nbAllowedUnAssigned,
          possibleAssignmentMap,
          useIntegrationRestriction,
          diaIDPeerPossibleAssignment,
        },
        currentIndex + 1,
        JSON.parse(JSON.stringify(partial)),
        store,
      );
    }
  }
}

export interface SolutionAssignment {
  assignment: string[];
  score: number;
}

interface AddSolutionProps {
  score: number;
  maxSolutions: number;
  partial: Array<string | null>;
  predictions: Predictions1Dassignments;
}

function addSolution(store: StoreAssignments1D, props: AddSolutionProps) {
  let { score, maxSolutions, partial, predictions } = props;
  score /= doubleAssignmentPenalty(partial, predictions);
  store.nSolutions++;
  let solution: SolutionAssignment = {
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

function doubleAssignmentPenalty(
  partial: Array<string | null>,
  predictions: Predictions1Dassignments,
) {
  const nbSources = Object.keys(predictions).length;
  let assignments = new Set(partial);
  let nbDoubleAssignment = nbSources - assignments.size;
  return nbDoubleAssignment > 0 ? 2 * nbDoubleAssignment : 1;
}
