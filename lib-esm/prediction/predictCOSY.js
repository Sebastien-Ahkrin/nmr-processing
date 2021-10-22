import { predictProton } from './predictProton';
import { predict2D } from './utils/predict2D';
/**
 * Generate the correlation bidimensional nmr peaks based on the number of bonds between a pair of atoms
 * @returns {Promise<object>} - object with molfile, diaIDs, 2D signals joined signals and zones.
 */
export async function predictCOSY(molecule, options = {}) {
    let { minLength = 2, maxLength = 3, predictions, predictor = { H: predictProton }, predictOptions, joinDistance = { H: 0.05, C: 0.5 }, includeDiagonal = true, } = options;
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
//# sourceMappingURL=predictCOSY.js.map