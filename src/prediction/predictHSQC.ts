import { Molecule } from 'openchemlib';

import { predictCarbon, PredictCarbonOptions } from './predictCarbon';
import { predictProton, PredictProtonOptions } from './predictProton';
import type { Prediction1D } from './prediction1D';
import { predict2D, Predictor } from './utils/predict2D';

export interface PredictHSQCOptions {
  /**
   * maximum number of bonds to take into account.
   * @default 1
   */
  maxLength?: number;
  /**
   * minimum number of bonds to take into account
   * @default 1
   */
  minLength?: number;
  /**
   * mono dimensional predictors. The object should has properties with name
   * equal to "H" and "C".
   */
  predictor?: { H?: Predictor; C?: Predictor };
  /**
   *  mono dimensional signal to generate the bidimenionals cross peaks.
   * The object should has properties with name equal to "H" and "C".
   */
  predictOptions?: { H?: PredictProtonOptions; C?: PredictCarbonOptions };
  /**
   * signals with euclidean distance in ppm less than this it will
   * joined into a zone.
   * @default {H:0.05,C:0.5}
   */
  joinDistance?: { H: number; C: number };
  /**
   * mono dimensional signal to generate the bidimenionals cross peaks.
   * The object should has properties with name equal to "H" and "C".
   * the value of each prediction should be similar that predictProton and predictCarbon.
   */
  predictions?: {
    [key: string]: Prediction1D | undefined;
    H?: Prediction1D;
    C?: Prediction1D;
  };
}
/**
 * Generate the correlation bidimensional nmr peaks based on the number of bonds between a pair of atoms
 * @returns {Promise<object>} - object with molfile, diaIDs, 2D signals joined signals and zones.
 */

export async function predictHSQC(
  molecule: Molecule,
  options: PredictHSQCOptions = {},
) {
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
