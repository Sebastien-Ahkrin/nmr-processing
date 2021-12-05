import { partialScore } from './partialScore';

export function exploreTreeRec(props, currentIndex, partial, store) {
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
      diaIDPeerPossibleAssignment,
      nbAllowedUnAssigned,
      restrictionByCS,
      predictions,
      targets,
    });
    console.log(score, partial, currentIndex, nSources)
    if (score === 0) {
      if (targetID === '*') {
        partial[currentIndex] = null;
      }
      continue;
    }

    if (currentIndex === nSources - 1 && score >= lowerBoundScore) {
      console.log('pasa')
      addSolution(store, { predictions, partial, score, maxSolutions });
    } else if (currentIndex < nSources - 1) {
      console.log('pasa aqui')
      exploreTreeRec(
        {
          nSources,
          restrictionByCS,
          timeout,
          timeStart,
          targets,
          predictions,
          lowerBoundScore,
          nbAllowedUnAssigned,
          possibleAssignmentMap,
          diaIDPeerPossibleAssignment,
        },
        currentIndex + 1,
        JSON.parse(JSON.stringify(partial)),
        store,
      );
    }
  }
}

function addSolution(store, props) {
  let { score, maxSolutions, partial, predictions } = props;
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
}

function doubleAssignmentPenalty(partial, predictions) {
  const nbSources = Object.keys(predictions).length;
  let assignments = new Set(partial);
  let nbDoubleAssignment = nbSources - assignments.size;
  return nbDoubleAssignment > 0 ? 2 * nbDoubleAssignment : 1;
}
