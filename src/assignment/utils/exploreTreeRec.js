import { partialScore } from './partialScore';

export function exploreTreeRec(props, infoByAtomTypes, partial, store) {
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
  let first = props.first
  const currentDate = new Date();
  if (currentDate.getTime() - timeStart > timeout) {
    new Error('timeout expired');
    return store;
  }

  for (const atomType of currentAtomTypes) {
    const { currentIndex, nSources } = infoByAtomTypes[atomType];

    if (currentIndex === nSources - 1 && partial[atomType][currentIndex] !== null) {
      console.log('atomType', atomType, partial)
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
      // if (currentIndex > 4) {
      //   console.log('score', score, partial);
      // }
      // console.log(partial)
      if (score === 0) {
        if (targetID === '*') {
          // console.log('atom', atomType, currentIndex)
          partial[atomType][currentIndex] = null;
          // console.log(partial)
        }
        continue;
      }
      // if (infoByAtomTypes.H.currentIndex === 4) {
      //   console.log(partial, infoByAtomTypes, possibleAssignments, currentIndex, atomType, currentAtomTypes);
      // }
      if (
        isLastOne(currentAtomTypes, infoByAtomTypes) &&
        score >= lowerBoundScore
      ) {
        // if (first) {
        //   first = false;
        //   console.log(partial, infoByAtomTypes, possibleAssignments, currentIndex, atomType, currentAtomTypes);
        // }
        addSolution(store, { predictions, partial, score, maxSolutions });
      } else if (currentIndex < nSources - 1) {
        // console.log('continue', currentIndex, nSources, infoByAtomTypes[atomType].currentIndex , currentDate.getTime())
        const newInfo = JSON.parse(JSON.stringify(infoByAtomTypes));
        newInfo[atomType].currentIndex += 1;
        exploreTreeRec(
          {
            first,
            currentAtomTypes,
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
          newInfo,
          JSON.parse(JSON.stringify(partial)),
          store,
        );
      }
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

function isLastOne(currentAtomTypes, infoByAtomTypes) {
  let lastOne = true;
  for (const atomType of currentAtomTypes) {
    const { currentIndex, nSources } = infoByAtomTypes[atomType];
    lastOne = lastOne && currentIndex === nSources - 1;
  }
  return lastOne;
}

function doubleAssignmentPenalty(partial, predictions) {
  let nbDoubleAssignment = 0;
  for (const atomType in predictions) {
    const nbSources = Object.keys(predictions[atomType]).length;
    let assignments = new Set(partial[atomType]);
    nbDoubleAssignment += nbSources - assignments.size;
  }
  return nbDoubleAssignment > 0 ? 2 * nbDoubleAssignment : 1;
}