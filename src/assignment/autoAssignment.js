import { addDiastereotopicMissingChirality } from 'openchemlib-utils';

import { buildAssignment } from './utils/buildAssignment';
import { getTargetsAndCorrelations } from './utils/getTargetsAndCorrelations';
import getWorkFlow from './utils/getWorkFlow';
import { buildCorrelationData } from 'nmr-correlation';
import generateID from './utils/generateID';
// /**
//  *
//  * @param {number} [props.errorCS = -1] - determine the restriction with respect to chemical shift, if it is negative the chemical shift is not taken in account in scoring
//  * if it is equal to zero the chemical shift is not a restriction, and positive to restrict the assignment by chemical shift too.
//  */

//  {
//   /**
//    * It has the number of each atoms in the chemical structure. e.g. { C: 6, H: 6 }
//    */
//   atoms: { [key: string]: number };

//   spectra: Array<Spectrum1D | Spectrum2D>;
//   /**
//    * Instance of Molecule
//    */
//   molecule: Molecule;
// }

// interface Spectrum1D {
//   ranges: NMRRange[]
//   info: any
// }

// interface Spectrum2D {
//   zones: NMRZone[]
//   info: any;
// }

export async function autoAssignment(input, options = {}) {
  let {
    restrictionByCS = {},
    justAssign,
    minScore = 1,
    maxSolutions = 10,
    nbAllowedUnAssigned = 0,
    timeout = 6000,
    predictionOptions = {},
    predictions = {},
    correlation: correlationOptions,
  } = options;

  const {
    tolerance = 1,
    useChemicalShiftScore = false,
    chemicalShiftRestriction = true,
  } = restrictionByCS;

  const molecule = input.molecule;

  if (!molecule) throw new Error('It is needed a molecule to assign');

  molecule.addImplicitHydrogens();
  addDiastereotopicMissingChirality(molecule);

  const spectra = addIDs(input);

  const { targets, correlations } = getTargetsAndCorrelations(spectra, correlationOptions);

  if (!correlations) {
    throw new Error('It is needed the target signals to assign');
  }

  const { assignmentOrder } = getWorkFlow(correlations, justAssign);

  return null;

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
    correlations,
    targets,
    predictionOptions,
    predictions,
  });
  return solutions.solutions.elements;
}

function addIDs(input = []) {
  let spectra = JSON.parse(JSON.stringify(input));
  for (const spectrum of spectra) {
    const { ranges, zones } = spectrum;
    let data = ranges ? ranges : zones;
    for (const element of data) {
      const { integration } = element;
      if (!element.id) element.id = generateID();
      for (let signal of element.signals) {
        if (!signal.id) signal.id = generateID();
        if (!signal.integration) signal.integration = integration;
      }
    }
  }
  return spectra;
}
