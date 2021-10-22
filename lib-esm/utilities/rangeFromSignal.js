import { couplingValues } from '../constants/couplingValues';
export function rangeFromSignal(signal, options = {}) {
    const { nucleus = '1h', frequency = 400 } = options;
    const { tolerance = getTolerance(nucleus) / frequency } = options;
    let halfWidth = (signal.js || []).reduce((total, j) => {
        const { coupling, multiplicity = 'd' } = j;
        return total + (couplingValues[multiplicity] * coupling) / frequency;
    }, 0) /
        2 +
        tolerance;
    return {
        from: signal.delta - halfWidth,
        to: signal.delta + halfWidth,
    };
}
function getTolerance(nucleus) {
    switch (nucleus.toLocaleLowerCase()) {
        case '1h':
            return 1.5;
        case '13C':
            return 3;
        default:
            return 2;
    }
}
//# sourceMappingURL=rangeFromSignal.js.map