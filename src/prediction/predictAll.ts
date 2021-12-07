import type { Molecule } from 'openchemlib';

import { predictCOSY } from './predictCOSY';
import { predictCarbon, PredictCarbonOptions } from './predictCarbon';
import { predictHMBC } from './predictHMBC';
import { predictHSQC } from './predictHSQC';
import { predictProton, PredictProtonOptions } from './predictProton';
import type { Prediction1D } from './prediction1D';
import { getPredictions } from './utils/getPredictions';
import type { Predictor } from './utils/predict2D';

export interface PredictAllOptions {
  /**
   * nucleus label to use in the X axis
   * @default 'H'
   */
  from?: 'H' | 'C';
  /**
   * nucleus label to use in the Y axis
   * @default 'C';
   */
  to?: 'H' | 'C';
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
 * @returns {Promise<object>} - object with molfile, diaIDs, 1D and 2D signals, joined signals, ranges and zones.
 */

export async function predictAll(
  molecule: Molecule,
  options: PredictAllOptions = {},
) {
  let {
    from = 'H',
    to = 'C',
    predictor = { H: predictProton, C: predictCarbon },
    predictions,
    joinDistance = { H: 0.05, C: 0.5 },
    predictOptions = {},
  } = options;

  const xPrediction = await getPredictions(
    from,
    molecule,
    predictOptions,
    predictor,
    predictions,
  );

  const yPrediction = await getPredictions(
    to,
    molecule,
    predictOptions,
    predictor,
    predictions,
  );

  if (!xPrediction || !yPrediction) {
    throw new Error('predictions are not availaible');
  }

  predictions = {
    H: xPrediction,
    C: yPrediction,
  };

  const { molfile, diaIDs } = xPrediction;

  const spectra: any = {
    proton: predictions.H,
    carbon: predictions.C,
  };

  spectra.cosy = await predictCOSY(molecule, {
    predictions,
    joinDistance,
  });
  spectra.hsqc = await predictHSQC(molecule, {
    predictions,
    joinDistance,
  });
  spectra.hmbc = await predictHMBC(molecule, {
    predictions,
    joinDistance,
  });

  for (const key in spectra) {
    delete spectra[key].molfile;
    delete spectra[key].diaIDs;
  }

  return {
    molfile,
    diaIDs,
    ...spectra,
  };
}
