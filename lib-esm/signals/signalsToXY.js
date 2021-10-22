import rescale from 'ml-array-rescale';
import arraySequentialFill from 'ml-array-sequential-fill';
import { signalsToSpinSystem } from './simulation/signalsToSpinSystem';
import simulate1D from './simulation/simulate1D';
import { splitSpinSystem } from './simulation/splitSpinSystem';
function checkForMandatory(signals) {
    for (const signal of signals) {
        if (!signal.js)
            throw new Error('There is not js');
        // if (!signal.diaID) throw new Error('There is not diaID');
        if (!signal.atoms)
            throw new Error('There is not atoms');
        for (const j of signal.js) {
            // if (!j.diaID) throw new Error('There is not diaID');
            if (!j.atoms)
                throw new Error('There is not atoms');
        }
    }
}
/**
 * Generate a spectrum from an array of singals
 */
export function signalsToXY(signals, options = {}) {
    checkForMandatory(signals);
    let { frequency = 400, shape = {
        kind: 'gaussian',
    }, from = 0, to = 10, lineWidth = 1, nbPoints = 16 * 1024, maxValue = 1e8, maxClusterSize = 8, } = options;
    if (signals.length === 0) {
        return {
            x: arraySequentialFill({ from, to, size: nbPoints }),
            y: Array.from(new Float64Array(nbPoints)),
        };
    }
    let spinSystem = signalsToSpinSystem(signals);
    spinSystem.clusters = splitSpinSystem(spinSystem, {
        frequency,
        maxClusterSize,
    });
    let spectrum = simulate1D(spinSystem, {
        frequency,
        from,
        to,
        nbPoints,
        lineWidth,
        shape,
    });
    if (maxValue) {
        spectrum.y = rescale(spectrum.y, { max: maxValue });
    }
    return spectrum;
}
//# sourceMappingURL=signalsToXY.js.map