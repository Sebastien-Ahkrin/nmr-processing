import groupCarbonTargetByIntegrationZone from './groupCarbonTargetByIntegrationZone';

export function partialScore(partial, props) {
  const {
    diaIDPeerPossibleAssignment,
    unassigned,
    atomTypes,
    restrictionByCS,
    predictions,
    targets,
    correlations,
  } = props;

  const { tolerance: toleranceCS, useChemicalShiftScore } = restrictionByCS;

  let partialInverse = {};
  let activeDomainOnPrediction = [];
  let countStars = 0;
  for (let i = 0; i < partial.length; i++) {
    const targetID = partial[i];
    if (targetID && targetID !== '*') {
      activeDomainOnPrediction.push(i);
      if (!partialInverse[targetID]) partialInverse[targetID] = [];
      partialInverse[targetID].push(diaIDPeerPossibleAssignment[i]);
    }
    if (targetID === '*') countStars++;
  }

  if (countStars > unassigned) return 0;

  const activeDomainOnTarget = Object.keys(partialInverse);

  if (activeDomainOnTarget.length === 0) return 0;

  const getPredictionByDiaID = getPrediction.bind({}, predictions);
  // check the integration
  const targetByIntegral = atomTypes.reduce((result, atomType) => {
    if (atomType === 'C') {
      result.push(
        ...groupCarbonTargetByIntegrationZone(
          activeDomainOnTarget,
          targets[atomType],
          correlations,
        ),
      );
    } else {
      for (let targetID of activeDomainOnTarget) {
        if(!targets.H[targetID]) continue;
        // console.log(`atomtype ${atomType}, targetID ${targetID}`, targets )
        result.push({
          atomType,
          targetIDs: [targetID],
          integration: targets.H[targetID].integration,
        });
      }
    }
    return result;
  }, []);
  console.log(targetByIntegral)
  for (const group of targetByIntegral) {
    const { integration } = group;

    if (integration === undefined || isNaN(integration)) continue;

    let total = 0;
    // console.log(group);
    for (let targetID of group.targetIDs) {
      let targetToSource = partialInverse[targetID];
      // console.log('targetTOSource', targetToSource);
      for (const diaID of targetToSource) {
        const { prediction, atomType } = getPredictionByDiaID(diaID);
        if (atomType === group.atomType) total += prediction.allHydrogens;
      }
    }
    // console.log(integration, total);
    if (total - integration >= 0.5) {
      return 0;
    }
  }

  //chemical shift score
  let count = 1;
  let chemicalShiftScore = 1;
  if (useChemicalShiftScore) {
    chemicalShiftScore = 0;
    count = 0;
    partial.forEach((targetID, index) => {
      if (targetID && targetID !== '*') {
        count++;
        let { atomType, prediction: source } = getPredictionByDiaID(
          diaIDPeerPossibleAssignment[index],
        );
        let target = targets[atomType][targetID];
        let error = toleranceCS;
        if (source.error) {
          error = Math.max(source.error, toleranceCS);
        }
        if (typeof source.delta === 'undefined') {
          // Chemical shift is not a restriction
          chemicalShiftScore += 1;
        } else {
          let diff = Math.abs(source.delta - target.signal.delta);
          if (diff < error) {
            //@TODO: check for a better discriminant
            chemicalShiftScore += 1;
          } else {
            diff = Math.abs(diff - error);
            chemicalShiftScore += (-0.25 / error) * diff + 1;
          }
        }
      }
    });
    if (count > 0) {
      chemicalShiftScore /= count;
    }
  }

  let scoreOn2D = 0;
  if (activeDomainOnTarget.length > 1) {
    let andConstrains = {};
    for (let i = 0; i < activeDomainOnPrediction.length; i++) {
      let { prediction: predictionI } = getPredictionByDiaID(
        diaIDPeerPossibleAssignment[i],
      );
      for (let j = i + 1; j < activeDomainOnPrediction.length; j++) {
        let { prediction: predictionJ } = getPredictionByDiaID(
          diaIDPeerPossibleAssignment[j],
        );
        let pathLength = predictionI.pathLength[predictionJ.diaIDIndex];
        let isPossible = pathLength < 5;

        let partialI = partial[activeDomainOnPrediction[i]];
        let partialJ = partial[activeDomainOnPrediction[j]];
        let keyOnTargerMap =
          partialI > partialJ
            ? `${partialJ} ${partialI}`
            : `${partialI} ${partialJ}`;

        let areLinked = checkLinking(partialI, partialJ, atomTypes, targets);

        let partialScore2D = isPossible
          ? areLinked
            ? 1
            : 0
          : !areLinked
          ? 1
          : 0;

        andConstrains[keyOnTargerMap] = andConstrains[keyOnTargerMap]
          ? Math.max(andConstrains[keyOnTargerMap], partialScore2D)
          : partialScore2D;
      }
    }

    let sumAnd = 0;
    for (let key in andConstrains) {
      sumAnd += andConstrains[key];
    }

    scoreOn2D =
      sumAnd /
      ((activeDomainOnTarget.length * (activeDomainOnTarget.length - 1)) / 2);
  }
  const penaltyByStarts = countStars / partial.length;
  // console.log(`CSScore ${chemicalShiftScore}, score2D ${scoreOn2D}, penalty: ${penaltyByStarts}`);
  if (chemicalShiftScore === 0) return scoreOn2D - penaltyByStarts;

  if (scoreOn2D === 0) return chemicalShiftScore - penaltyByStarts;

  return (chemicalShiftScore + scoreOn2D) / 2 - penaltyByStarts;
}

function checkLinking(partialI, partialJ, atomTypes, correlations) {
  if (partialI === partialJ) return true;
  for (const atomType of atomTypes) {
    let correlationI = correlations[atomType][partialI];
    if (!correlationI) continue;
    for (let key of ['link', 'indirectLinks']) {
      for (const link of correlationI[key]) {
        if (link.signal.id === partialJ) return true;
      }
    }
  }
  return false;
}

function getPrediction(predictions, diaID) {
  for (const atomType in predictions) {
    if (predictions[atomType][diaID]) {
      return { atomType, prediction: predictions[atomType][diaID] };
    }
  }
}
