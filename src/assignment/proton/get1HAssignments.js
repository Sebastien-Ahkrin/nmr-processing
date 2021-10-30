import { addDiastereotopicMissingChirality } from 'openchemlib-utils';

import { predictProton } from '../../prediction/predictProton';

import { buildAssignments } from './buildAssignments';
import generateID from './generateID';

export async function get1HAssignments(ranges, molecule, options = {}) {
  let {
    restrictionByCS = {},
    minScore = 1,
    maxSolutions = 10,
    nbAllowedUnAssigned = 0,
    timeout = 6000,
    predictionOptions = {},
  } = options;

  if (!molecule) {
    throw new Error('It is needed a OCL molecule instance to assign');
  }

  molecule.addImplicitHydrogens();
  addDiastereotopicMissingChirality(molecule);

  const { joinedSignals } = await predictProton(molecule, predictionOptions);

  const targets = {};
  for (const range of ranges) {
    const { id = generateID() } = range;
    targets[id] = JSON.parse(JSON.stringify(range));
  }

  return buildAssignments({
    restrictionByCS,
    timeout,
    minScore,
    nbAllowedUnAssigned,
    maxSolutions,
    targets,
    joinedSignals,
  });
}
