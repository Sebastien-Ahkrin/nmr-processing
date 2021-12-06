export function createMapPossibleAssignment(expandMap, props) {
  const { restrictionByCS, predictions, targets } = props;

  const { tolerance: toleranceCS, chemicalShiftRestriction } = restrictionByCS;

  let errorAbs = Math.abs(toleranceCS);
  const atomTypes = Object.keys(predictions);

  for (const atomType of atomTypes) {
    let predictionByAtomType = predictions[atomType];
    let targetByAtomType = targets[atomType];
    if (!expandMap[atomType]) expandMap[atomType] = {};
    for (const diaID in predictionByAtomType) {
      let prediction = predictionByAtomType[diaID];
      prediction.error = Math.abs(prediction.error);
      expandMap[atomType][diaID] = [];

      if (targetByAtomType) {
        for (const targetID in targetByAtomType) {
          let target = targetByAtomType[targetID];
          const { nbAtoms, protonsCount: protonsCountFromPrediction } =
            prediction;
          const { integration, protonsCount } = target;

          const couldBeAssigned =
            integration > 0 && atomType === 'H'
              ? nbAtoms - integration < 1
              : protonsCount.length > 0
              ? protonsCount.some(
                  (count) => protonsCountFromPrediction === count,
                )
              : true;

          if (couldBeAssigned) {
            if (
              !chemicalShiftRestriction ||
              typeof prediction.delta === 'undefined'
            ) {
              // Chemical shift is not a restriction
              expandMap[atomType][diaID].push(targetID);
            } else {
              let error = errorAbs;
              if (prediction.error) {
                error = Math.max(error, prediction.error);
              }
              // console.log(
              //   `error ${error}, errorAbs ${target.signal.delta} predict delta ${prediction.delta} targetID ${targetID} predID ${diaID}`,
              // );
              let distAfterLimit = Math.abs(
                prediction.delta - target.signal.delta - errorAbs,
              );
              if (distAfterLimit < 4 * errorAbs) {
                expandMap[atomType][diaID].push(targetID);
              }
            }
          }
        }
      }
      expandMap[atomType][diaID].push('*');
    }
  }
  return expandMap;
}