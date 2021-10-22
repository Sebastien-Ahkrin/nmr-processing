import { rangeFromSignal } from '../utilities/rangeFromSignal';
function checkNbAtoms(signals) {
    for (let signal of signals) {
        if (!signal.nbAtoms)
            throw new Error('nbAtoms is mandatory');
    }
}
export function signalsToRanges(signals, options = {}) {
    checkNbAtoms(signals);
    const { tolerance = 0.05, frequency = 400 } = options;
    let wrapped = signals.map((signal) => ({
        original: signal,
    }));
    wrapped.forEach((signal) => {
        const fromTo = rangeFromSignal(signal.original, { frequency, tolerance });
        signal.from = fromTo.from;
        signal.to = fromTo.to;
    });
    wrapped = wrapped.sort((signal1, signal2) => signal1.from - signal2.from);
    let ranges = [];
    let range = {};
    for (let signal of wrapped) {
        if (range.from === undefined || signal.from > range.to) {
            range = {
                from: signal.from,
                to: signal.to,
                integration: signal.original.nbAtoms,
                signals: [signal.original],
            };
            ranges.push(range);
        }
        else {
            range.integration += signal.original.nbAtoms;
            if (signal.to > range.to)
                range.to = signal.to;
            range.signals.push(signal.original);
        }
    }
    return ranges;
}
//# sourceMappingURL=signalsToRanges.js.map