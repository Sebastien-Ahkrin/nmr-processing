import { Molecule } from 'openchemlib';

import { predictProton, PredictProtonOptions } from './predictProton';
import type { Prediction1D } from './prediction1D';
import { predict2D, Predictor } from './utils/predict2D';

export interface PredictCOSYOptions {
  /**
   * maximum number of bonds to take into account.
   * @default 3
   */
  maxLength?: number;
  /**
   * minimum number of bonds to take into account
   * @default 2
   */
  minLength?: number;
  /**
   * mono dimensional predictors. The object should has properties with name
   * equal to "H" and "C".
   */
  predictor?: { H?: Predictor };
  /**
   *  mono dimensional signal to generate the bidimenionals cross peaks.
   * The object should has properties with name equal to "H" and "C".
   */
  predictOptions?: { H?: PredictProtonOptions };
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
  };
  /**
   * if true, the self correlation signal will be add to the prediction.
   * @default true
   */
  includeDiagonal?: boolean;
}
/**
 * Generate the correlation bidimensional nmr peaks based on the number of bonds between a pair of atoms
 * @returns {Promise<object>} - object with molfile, diaIDs, 2D signals joined signals and zones.
 */

export async function predictCOSY(
  molecule: Molecule,
  options: PredictCOSYOptions = {},
) {
  let {
    minLength = 2,
    maxLength = 3,
    predictions,
    predictor = { H: predictProton },
    predictOptions,
    joinDistance = { H: 0.05, C: 0.5 },
    includeDiagonal = true,
  } = options;

  return predict2D(molecule, {
    from: 'H',
    to: 'H',
    predictor,
    minLength,
    maxLength,
    joinDistance,
    predictions,
    includeDiagonal,
    predictOptions,
  });
}
