import { fetch } from 'cross-fetch';
import { Molecule } from 'openchemlib';

import type { Prediction1D } from '../prediction1D';

interface FetchPredictionOptions {
  webserviceURL: string;
}

export async function fetchPrediction(
  molecule: Molecule,
  options: FetchPredictionOptions,
): Promise<Prediction1D> {
  const { webserviceURL } = options;
  const response = await fetch(webserviceURL, {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify({ molfile: molecule.toMolfile() }),
    method: 'POST',
  });
  const prediction = (await response.json()).data;
  prediction.molecule = molecule
    .getOCL()
    .Molecule.fromMolfile(prediction.molfile);
  return prediction;
}
