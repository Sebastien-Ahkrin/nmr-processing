import { addDiastereotopicMissingChirality } from 'openchemlib-utils';

import { buildAssignment } from './utils/buildAssignment';
import { getTargetsAndCorrelations } from './utils/getTargetsAndCorrelations';
import getWorkFlow from './utils/getWorkFlow';

/**
 *
 * @param {number} [props.errorCS = -1] - determine the restriction with respect to chemical shift, if it is negative the chemical shift is not taken in account in scoring
 * if it is equal to zero the chemical shift is not a restriction, and positive to restrict the assignment by chemical shift too.
 */

export async function autoAssignmentNew(input, options = {}) {
  let {
    restrictionByCS = {},
    justAssign,
    minScore = 1,
    maxSolutions = 10,
    nbAllowedUnAssigned = 0,
    timeout = 6000,
    predictionOptions = {},
    predictions = {},
  } = options;
}
export async function autoAssignment(molecule, props = {}) {
  let {
    correlations,
    restrictionByCS = {},
    justAssign,
    minScore = 1,
    maxSolutions = 10,
    nbAllowedUnAssigned = 0,
    timeout = 6000,
    predictionOptions = {},
    predictions = {},
  } = props;

  const {
    tolerance = 1,
    useChemicalShiftScore = false,
    chemicalShiftRestriction = true,
  } = restrictionByCS;

  if (!molecule) throw new Error('It is needed a molecule to assign');
  if (!correlations) {
    throw new Error('It is needed the target signals to assign');
  }

  molecule.addImplicitHydrogens();
  addDiastereotopicMissingChirality(molecule);

  const { targets, correlations: correlationsWithIndirectLinks } =
    getTargetsAndCorrelations(correlations);

  const { assignmentOrder } = getWorkFlow(correlations, justAssign);
  
  const solutions = await buildAssignment({
    restrictionByCS: {
      tolerance,
      useChemicalShiftScore,
      chemicalShiftRestriction,
    },
    timeout,
    minScore,
    maxSolutions,
    molecule,
    assignmentOrder,
    nbAllowedUnAssigned,
    correlations: correlationsWithIndirectLinks,
    targets,
    predictionOptions,
    predictions,
  });
  return solutions.solutions.elements;
}
