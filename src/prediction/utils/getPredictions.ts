import type { Molecule } from 'openchemlib';

import type { Prediction1D } from '../prediction1D';

import type { Predictions, PredictOptions, Predictors } from './predict2D';

export async function getPredictions(
  key: string,
  molecule: Molecule,
  predictOptions: PredictOptions,
  predictor?: Predictors,
  predictions?: Predictions,
) {
  let prediction: Prediction1D | undefined;
  if (predictions?.[key]) {
    prediction = predictions[key];
  } else if (predictor) {
    const fromPredictor = predictor[key];
    prediction = fromPredictor
      ? await fromPredictor(molecule, predictOptions[key])
      : undefined;
  }
  return prediction;
}
