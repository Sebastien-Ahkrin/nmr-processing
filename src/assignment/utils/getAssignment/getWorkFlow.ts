import { Types } from 'nmr-correlation';

import { AtomTypes } from './buildAssignments';
/**
 * if hsqc is present in experimentTypes we can just predict 13C
 * spectrum and try to assign the carbons first.
 * @param {*} correlations
 * @param {*} justAssign
 */

function getWorkFlow(
  correlations: Types.Values,
  justAssign: Array<AtomTypes[]> = [],
) {
  const experimentTypes = extractExperimentType(correlations);

  const { hasHSQC, types } = experimentTypes;
  

  if (justAssign.length > 0) {
    return { assignmentOrder: justAssign, experimentTypes };
  }

  const assignmentOrder: Array<AtomTypes[]> = [];

  if (hasHSQC) {
    assignmentOrder.push(['C'], ['H']);
  } else {
    assignmentOrder.push(
      types.filter((type) => type === 'H' || type === 'C') as AtomTypes[],
    );
  }

  return { assignmentOrder, experimentTypes };
}

export default getWorkFlow;

interface ExperimentTypes {
  types: string[];
  hasProton: boolean;
  hasCarbon: boolean;
  hasHSQC: boolean;
}

function extractExperimentType(correlations: Types.Values): ExperimentTypes {
  const types: string[] = [];
  for (const correlation of correlations) {
    let experimentType: string = correlation.experimentType;
    if (experimentType === '1d') {
      experimentType = `${correlation.atomType.toUpperCase()}`;
    }
    if (!types.includes(experimentType)) {
      types.push(experimentType);
    }
    for (const link of correlation.link) {
      experimentType = link.experimentType;
      if (experimentType === '1d') {
        experimentType = `${link.atomType[0].toUpperCase()}`;
      }
      if (!types.includes(experimentType)) {
        types.push(experimentType);
      }
    }
  }

  return {
    types,
    hasProton: types.includes('H'),
    hasCarbon: types.includes('C'),
    hasHSQC: types.includes('hsqc'),
  };
}
