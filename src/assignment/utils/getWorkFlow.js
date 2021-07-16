/**
 * if hsqc is present in experimentTypes we can just predict 13C
 * spectrum and try to assign the carbons first.
 * @param {*} correlations
 * @param {*} justAssign
 */

function getAtomTypesToPredict(correlations, justAssign = []) {

  if (!Array.isArray(justAssign)) justAssign = [ justAssign ];

  const experimentTypes = extractExperimentType(correlations);

  const { hasHSQC, types } = experimentTypes;
  let workFlow = { assignmentOrder: [], experimentTypes };

  if (justAssign.some((e) => e === 'H' || e === 'C')) {
    workFlow.assignmentOrder.push(
      justAssign.filter((type) => type === 'H' || type === 'C'),
    );
  } else {
    if (hasHSQC) {
      workFlow.assignmentOrder.push(['C'], ['H']);
    } else {
      workFlow.assignmentOrder.push(
        types.filter((type) => type === 'H' || type === 'C'),
      );
    }
  }

  return workFlow;
}

export default getAtomTypesToPredict;

function extractExperimentType(correlations) {
  const experimentTypes = { types: [] };
  for (const correlation of correlations) {
    let experimentType = correlation.experimentType;
    if (experimentType === '1d') {
      experimentType = `${correlation.atomType.toUpperCase()}`;
    }
    if (!experimentTypes.types.includes(experimentType)) {
      experimentTypes.types.push(experimentType);
    }
    for (const link of correlation.link) {
      experimentType = link.experimentType;
      if (experimentType === '1d') {
        experimentType = `${link.atomType[0].toUpperCase()}`;
      }
      if (!experimentTypes.types.includes(experimentType)) {
        experimentTypes.types.push(experimentType);
      }
    }
  }
  experimentTypes.hasProton = experimentTypes.types.includes('H');
  experimentTypes.hascarbon = experimentTypes.types.includes('C');
  experimentTypes.hasHSQC = experimentTypes.types.includes('hsqc');
  return experimentTypes;
}
