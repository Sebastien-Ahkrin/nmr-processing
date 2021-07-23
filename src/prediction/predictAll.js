import { predictCOSY } from './predictCOSY';
import { predictCarbon } from './predictCarbon';
import { predictHMBC } from './predictHMBC';
import { predictHSQC } from './predictHSQC';
import { predictProton } from './predictProton';

/**
 * Generate the correlation bidimensional nmr peaks based on the number of bonds between a pair of atoms
 * @param {Molecule} molecule - openchemlib molecule instance
 * @param {object} [options = {}] - options
 * @param {object} [options.predictOptions={}] - options for predictors. The object should has properties
 * with name equal to the value of options.from and options.to.
 * @param {object} [options.predictions={}] - mono dimensional signal to generate the bidimenionals cross peaks.
 * The object should has properties with name equal to "H" and "C".
 * the value of each prediction should be similar that predictProton and predictCarbon.
 * @param {object} [options.predictor={H: predictProton, C: predictCarbon}] - mono dimensional predictors. The object should has properties with name
 * equal to "H" and "C".
 * @param {number} [options.joinDistance={ H: 0.05, C: 0.5 }] - signals with euclidean distance in ppm less than this it will
 * joined into a zone.
 * @returns {Promise<object>} - object with molfile, diaIDs, 1D and 2D signals, joined signals, ranges and zones.
 */

export async function predictAll(molecule, options = {}) {
  let {
    from = 'H',
    to = 'C',
    predictor = { H: predictProton, C: predictCarbon },
    predictions = {},
    joinDistance = { H: 0.05, C: 0.5 },
    predictOptions,
  } = options;

  if (!predictions[from]) {
    predictions[from] = await predictor[from](molecule, predictOptions[from]);
  }
  if (!predictions[to]) {
    predictions[to] = await predictor[to](molecule, predictOptions[to]);
  }

  const { molfile, diaIDs } = predictions[from];

  const spectra = {
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
