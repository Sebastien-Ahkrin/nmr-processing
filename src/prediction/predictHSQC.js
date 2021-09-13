import { predictCarbon } from './predictCarbon';
import { predictProton } from './predictProton';
import { predict2D } from './utils/predict2D';

/**
 * Generate the correlation bidimensional nmr peaks based on the number of bonds between a pair of atoms
 * @param {Molecule} molecule - openchemlib molecule instance
 * @param {object} [options = {}] - options
 * @param {number} [options.minLength = 1] - minimum number of bonds to take into account.
 * @param {number} [options.maxLength = 1] - maximum number of bonds to take into account.
 * @param {object} [options.predictOptions={}] - options for predictors. The object should has properties
 * with name equal to the value of options.from and options.to.
 * @param {object} [options.predictions={}] - mono dimensional signal to generate the bidimenionals cross peaks.
 * The object should has properties with name equal to "H" and "C".
 * the value of each prediction should be similar that predictProton and predictCarbon.
 * @param {object} [options.predictor={H: predictProton, C: predictCarbon}] - mono dimensional predictors. The object should has properties with name
 * equal to "H" and "C".
 * @param {number} [options.joinDistance={ H: 0.05, C: 0.5 }] - signals with euclidean distance in ppm less than this it will
 * joined into a zone.
 * @returns {Promise<object>} - object with molfile, diaIDs, 2D signals joined signals and zones.
 */

export async function predictHSQC(molecule, options = {}) {
  let {
    minLength = 1,
    maxLength = 1,
    predictor = { H: predictProton, C: predictCarbon },
    predictions,
    joinDistance = { H: 0.05, C: 0.5 },
    predictOptions,
  } = options;

  return predict2D(molecule, {
    from: 'H',
    to: 'C',
    predictor,
    minLength,
    maxLength,
    predictions,
    predictOptions,
    joinDistance,
  });
}
