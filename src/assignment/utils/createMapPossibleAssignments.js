export function createMapPossibleAssignments(props) {
  const { restrictionByCS, predictions, targets } = props;

  const { tolerance: toleranceCS, chemicalShiftRestriction } = restrictionByCS;

  let errorAbs = Math.abs(toleranceCS);

  const expandMap = {};
  for (const diaID in predictions) {
    let prediction = predictions[diaID];
    prediction.error = Math.abs(prediction.error);
    expandMap[diaID] = [];

    if (targets) {
      for (const targetID in targets) {
        let target = targets[targetID];
        const { nbAtoms } = prediction;
        const { integration } = target;

        const couldBeAssigned =
          integration > 0 ? nbAtoms - integration < 1 : true;
        if (couldBeAssigned) {
          if (
            !chemicalShiftRestriction ||
            typeof prediction.delta === 'undefined'
          ) {
            // Chemical shift is not a restriction
            expandMap[diaID].push(targetID);
          } else {
            let error = errorAbs;
            if (prediction.error) {
              error = Math.max(error, prediction.error);
            }
            let distAfterLimit = Math.abs(
              prediction.delta - target.signal[0].delta - errorAbs,
            );
            if (distAfterLimit < 4 * errorAbs) {
              expandMap[diaID].push(targetID);
            }
          }
        }
      }
    }
    expandMap[diaID].push('*');
  }
  return expandMap;
}
