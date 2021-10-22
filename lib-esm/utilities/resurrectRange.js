import { rangeFromSignal } from './rangeFromSignal';
import { splitParenthesis } from './splitParenthesis';
import { splitPatterns } from './splitPatterns';
export function resurrectRange(part, options = {}) {
    const { nucleus = '1h', frequency = 400 } = options;
    const split = splitParenthesis(part);
    if (!split.before)
        return;
    // before parenthesis there should be only numbers but we will still split with space
    const beforeParts = split.before
        .split(/(?: |(?<=[0-9])-)/)
        .map((part) => Number(part))
        .filter((part) => !Number.isNaN(part));
    if (beforeParts.length < 1 || beforeParts.length > 2) {
        return;
    }
    const from = beforeParts[0];
    const to = beforeParts.length > 1 ? beforeParts[1] : beforeParts[0];
    const insideParts = split.inside.split(/ *, */);
    let signal = { delta: NaN, js: [] };
    let range = { from, to, signals: [signal] };
    const integrationParts = insideParts.filter((part) => part.match(/^[0-9]+H$/));
    if (integrationParts.length === 1) {
        range.integration = Number(integrationParts[0].replace('H', ''));
    }
    const multiplicityParts = insideParts.filter((part) => part.match(/^[a-zA-Z]+$/));
    if (multiplicityParts.length === 1) {
        const multiplicity = multiplicityParts[0];
        if (multiplicity === 'm') {
            if (beforeParts.length === 1) {
                // a complex signal
                signal.delta = beforeParts[0];
                signal.multiplicity = multiplicity;
            }
            else {
                // a real range
                signal.delta = (beforeParts[0] + beforeParts[1]) / 2;
                signal.multiplicity = multiplicity;
            }
        }
        else {
            // looks like a real multiplicity, s, d, dd, etc..
            if (beforeParts.length === 1) {
                // a complex signal
                signal.delta = beforeParts[0];
                signal.multiplicity = multiplicity;
            }
        }
    }
    const jCouplings = insideParts
        .filter((part) => part.match(/(Hz|J|^[0-9.]+$)/))
        .map((jCoupling) => Number(jCoupling.replace(/[^0-9.]/g, '')));
    const multiplicities = splitPatterns(signal.multiplicity || '');
    if (multiplicities.length === jCouplings.length) {
        for (let i = 0; i < multiplicities.length; i++) {
            if (!signal.js) {
                throw new Error('signal has not js');
            }
            signal.js.push({
                coupling: jCouplings[i],
                multiplicity: multiplicities[i],
            });
        }
    }
    if (range.from === range.to) {
        range = { ...range, ...rangeFromSignal(signal, { nucleus, frequency }) };
    }
    return range;
}
//# sourceMappingURL=resurrectRange.js.map