import { partialScore } from './partialScore';

export function exploreTreeRec(props, predictionIndex, partial, store) {
  const {
    atomTypes,
    nSources,
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
    console.warn('timeout expired');
    return store;
  }
  const diaID = diaIDPeerPossibleAssignment[predictionIndex];
  const possibleAssignments = possibleAssignmentMap[diaID];

  for (let targetID of possibleAssignments) {
    partial[predictionIndex] = targetID;
    let score = partialScore(partial, {
      diaIDPeerPossibleAssignment,
      nbAllowedUnAssigned,
      restrictionByCS,
      atomTypes,
      predictions,
      correlations,
      targets,
    });

    if (score > 0) {
      if (predictionIndex === nSources - 1 && score >= lowerBoundScore) {
        score /= doubleAssignmentPenalty(partial, predictions);
        store.nSolutions++;
        let solution = {
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
      } else {
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
            lowerBoundScore,
            nbAllowedUnAssigned,
            possibleAssignmentMap,
            diaIDPeerPossibleAssignment,
          },
          predictionIndex + 1,
          JSON.parse(JSON.stringify(partial)),
          store,
        );
      }
    } else {
      if (targetID === '*') {
        partial[predictionIndex] = null;
      }
    }
  }
}

function doubleAssignmentPenalty(partial, predictions) {
  let firstIndex = 0;
  let nbDoubleAssignment = 0;
  for (const atomType in predictions) {
    const nbSources = Object.keys(predictions[atomType]).length;
    let assignments = new Set(partial.slice(firstIndex, nbSources));
    nbDoubleAssignment += nbSources - assignments.size;
    firstIndex += nbSources;
  }
  return nbDoubleAssignment > 0 ? 2 * nbDoubleAssignment : 1;
}
