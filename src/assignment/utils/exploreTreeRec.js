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
    lowerBound,
    unassigned,
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

  let targetIndex = 0;
  for (let targetID of possibleAssignments) {
    partial[predictionIndex] = targetID;
    const score = partialScore(partial, {
      diaIDPeerPossibleAssignment,
      unassigned,
      restrictionByCS,
      atomTypes,
      predictions,
      correlations,
      targets,
    });
    // console.log(`partial ${partial}`)
    // console.log(`atomTypes: ${atomTypes},score ${score} nSources ${nSources}, index ${predictionIndex}, targetIndex ${targetIndex++}, lower ${lowerBound}`);
    if (score > 0) {
      if (predictionIndex === nSources - 1 && score >= lowerBound) {
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
            lowerBound,
            unassigned,
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
