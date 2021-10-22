import { couplingPatterns } from '../constants/couplingPatterns';
import { signalsToXY } from './signalsToXY';
/**
 * Create the xy object from an array of 1D signals.
 * @param signals Array of signals with assigned or unassigned couplings.
 */
export function hackSignalsToXY(signals, options = {}) {
    let newSignals = JSON.parse(JSON.stringify(signals));
    signals.forEach((signal, s) => {
        const { js: jCouplings = [], atoms: signalAssignment = [s] } = signal;
        let { newCouplings, tempSignals } = checkCouplings(jCouplings, newSignals, signalAssignment);
        if (tempSignals.length > 0)
            newSignals.push(...tempSignals);
        newSignals[s].js = newCouplings;
        newSignals[s].atoms = signalAssignment;
    });
    return signalsToXY(newSignals, options);
}
function checkCouplings(jCouplings, signals, signalAssignment) {
    let newSignalAssignment = signals.length - 1;
    let tempSignals = [];
    const newCouplings = jCouplings.reduce((newCouplings, jCoupling) => {
        const { atoms = [], multiplicity, coupling } = jCoupling;
        if (atoms.length === 0) {
            if (coupling && multiplicity) {
                let tempCouplings = [];
                const nbLinks = couplingPatterns.indexOf(multiplicity);
                for (let i = 0; i < nbLinks; i++) {
                    newSignalAssignment++;
                    tempCouplings.push({
                        coupling,
                        atoms: [newSignalAssignment],
                    });
                    tempSignals.push(formatSignal(coupling, [newSignalAssignment], signalAssignment));
                }
            }
            else {
                newCouplings.push(jCoupling);
            }
        }
        return newCouplings;
    }, []);
    return { newCouplings, tempSignals };
}
function formatSignal(coupling, newSignalAssignment, signalAssignment) {
    return {
        delta: 100000,
        atoms: newSignalAssignment,
        js: [
            {
                coupling,
                atoms: signalAssignment,
            },
        ],
    };
}
//# sourceMappingURL=hackSignalsToXY.js.map