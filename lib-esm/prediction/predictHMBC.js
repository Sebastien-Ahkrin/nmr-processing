import { predictCarbon } from './predictCarbon';
import { predictProton } from './predictProton';
import { predict2D } from './utils/predict2D';
export async function predictHMBC(molecule, options = {}) {
    let { minLength = 2, maxLength = 3, predictor = { H: predictProton, C: predictCarbon }, predictOptions, predictions, joinDistance = { H: 0.05, C: 0.5 }, } = options;
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
//# sourceMappingURL=predictHMBC.js.map