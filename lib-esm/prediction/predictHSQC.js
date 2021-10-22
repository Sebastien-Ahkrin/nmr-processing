import { predictCarbon } from './predictCarbon';
import { predictProton } from './predictProton';
import { predict2D } from './utils/predict2D';
/**
 * Generate the correlation bidimensional nmr peaks based on the number of bonds between a pair of atoms
 * @returns {Promise<object>} - object with molfile, diaIDs, 2D signals joined signals and zones.
 */
export async function predictHSQC(molecule, options = {}) {
    let { minLength = 1, maxLength = 1, predictor = { H: predictProton, C: predictCarbon }, predictions, joinDistance = { H: 0.05, C: 0.5 }, predictOptions, } = options;
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
//# sourceMappingURL=predictHSQC.js.map