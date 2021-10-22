import { predictCOSY } from './predictCOSY';
import { predictCarbon } from './predictCarbon';
import { predictHMBC } from './predictHMBC';
import { predictHSQC } from './predictHSQC';
import { predictProton } from './predictProton';
import { getPredictions } from './utils/getPredictions';
/**
 * Generate the correlation bidimensional nmr peaks based on the number of bonds between a pair of atoms
 * @returns {Promise<object>} - object with molfile, diaIDs, 1D and 2D signals, joined signals, ranges and zones.
 */
export async function predictAll(molecule, options = {}) {
    let { from = 'H', to = 'C', predictor = { H: predictProton, C: predictCarbon }, predictions, joinDistance = { H: 0.05, C: 0.5 }, predictOptions = {}, } = options;
    const xPrediction = await getPredictions(from, molecule, predictOptions, predictor, predictions);
    const yPrediction = await getPredictions(to, molecule, predictOptions, predictor, predictions);
    if (!xPrediction || !yPrediction) {
        throw new Error('predictions are not availaible');
    }
    predictions = {
        H: xPrediction,
        C: yPrediction
    };
    const { molfile, diaIDs } = xPrediction;
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
//# sourceMappingURL=predictAll.js.map