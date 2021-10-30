export function partialScore(partial, props) {
  const {
    diaIDPeerPossibleAssignment,
    nbAllowedUnAssigned,
    restrictionByCS,
    predictions,
    targets,
  } = props;

  const { tolerance: toleranceCS, useChemicalShiftScore } = restrictionByCS;
  let countStars = 0;
  let totalPartial = 0;
  let partialInverse = {};
  let activeDomainOnPrediction = [];
  totalPartial += partial.length;
  for (let i = 0; i < partial.length; i++) {
    const targetID = partial[i];
    if (targetID && targetID !== '*') {
      activeDomainOnPrediction.push(i);
      if (!partialInverse[targetID]) {
        partialInverse[targetID] = [];
      }
      partialInverse[targetID].push(diaIDPeerPossibleAssignment[i]);
    }
    if (targetID === '*') countStars++;
  }
  if (countStars > nbAllowedUnAssigned) return 0;

  const activeDomainOnTarget = Object.keys(partialInverse);

  if (activeDomainOnTarget.length === 0) {
    return 0;
  }

  for (let targetID of activeDomainOnTarget) {
    let targetToSource = partialInverse[targetID];
    let total = 0;
    for (const diaID of targetToSource) {
      const prediction = predictions[diaID];
      total += prediction.allHydrogens;
    }

    const { integration } = targets[targetID];
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
    for (let index = 0; index < partial.length; index++) {
      const targetID = partial[index];
      if (targetID && targetID !== '*') {
        count++;
        let diaID = diaIDPeerPossibleAssignment[index];
        let source = predictions[diaID];
        let target = targets[targetID];
        let error = toleranceCS;
        if (source.error) {
          error = Math.max(source.error, toleranceCS);
        }
        if (typeof source.delta === 'undefined') {
          // Chemical shift is not a restriction
          chemicalShiftScore += 1;
        } else {
          let diff = Math.abs(source.delta - target.signal[0].delta);
          if (diff < error) {
            //@TODO: check for a better discriminant
            chemicalShiftScore += 1;
          } else {
            diff = Math.abs(diff - error);
            chemicalShiftScore += (-0.25 / error) * diff + 1;
          }
        }
      }
    }
    if (count > 0) {
      chemicalShiftScore /= count;
    }
  }
  // console.log('CH', chemicalShiftScore, scoreOn2D);
  const penaltyByStarts = countStars / totalPartial;

  return chemicalShiftScore - penaltyByStarts;
}
