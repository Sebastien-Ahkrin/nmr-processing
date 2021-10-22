import mean from 'ml-array-mean';
import sum from 'ml-array-sum';
import { signalJoinCouplings } from '../signal/signalJoinCouplings';
const localeCompare = (a, b) => a.localeCompare(b);
const localeCompareJcouplingKeys = (a, b) => {
    const aa = `${a.diaIDs.join(' ')}${a.distance}`;
    const bb = `${b.diaIDs.join(' ')}${b.distance}`;
    return localeCompare(aa, bb);
};
function checkForMandatory(signals) {
    for (const signal of signals) {
        if (!signal.js)
            throw new Error('there is not js');
        if (!signal.diaIDs)
            throw new Error('there is not diaIDs');
        for (const jcoupling of signal.js) {
            if (!jcoupling.diaIDs)
                throw new Error('there is not diaIDs');
            if (!jcoupling.distance)
                throw new Error('there is not distance');
        }
    }
}
/**
 * Join signals if all the same diaID
 */
export function signalsJoin(signals, options = {}) {
    checkForMandatory(signals);
    const { joinCouplings = {} } = options;
    const { tolerance, ignoreDiaIDs } = joinCouplings;
    // we group them by diaIDs
    const copySignals = JSON.parse(JSON.stringify(signals));
    const groupedSignals = {};
    for (let signal of copySignals) {
        signal.js = signal.js.sort(localeCompareJcouplingKeys);
        const keyDiaIDs = signal.diaIDs.join(' ');
        let id = `${keyDiaIDs} ${signal.js
            .map((j) => `${j.diaIDs.join(' ')} ${j.distance}`)
            .sort(localeCompare)
            .join(' ')}`;
        if (!groupedSignals[id]) {
            groupedSignals[id] = [];
        }
        groupedSignals[id].push(signal);
    }
    // for each group we need to combine assignments and average couplings
    let newSignals = [];
    Object.values(groupedSignals).forEach((group) => {
        // joining couplings only if diaID and distance are equal
        let js = [];
        for (let i = 0; i < group[0].js.length; i++) {
            const coupling = group[0].js[i];
            js.push({
                diaIDs: coupling.diaIDs,
                distance: coupling.distance,
                multiplicity: coupling.multiplicity,
                coupling: mean(group.map((item) => item.js[i].coupling)),
            });
        }
        let signal = {
            nbAtoms: sum(group.map((item) => item.nbAtoms || 0)),
            delta: mean(group.map((item) => item.delta)),
            diaIDs: group[0].diaIDs,
            atoms: group.map((item) => item.atoms || []).flat(),
            js,
        };
        const assignment = group
            .map((item) => item.assignment)
            .filter((item) => item)
            .join(' ');
        if (assignment.length > 0)
            signal.assignment = assignment;
        newSignals.push(signal);
    });
    newSignals = newSignals
        .map((signal) => {
        let newSignal = signalJoinCouplings(signal, {
            tolerance,
            ignoreDiaIDs,
        });
        if (newSignal.js) {
            newSignal.multiplicity = newSignal.js.reduce((multiplicity, jCoupling) => {
                return `${multiplicity}${jCoupling.multiplicity}`;
            }, '');
        }
        return newSignal;
    })
        .sort((a, b) => a.delta - b.delta);
    return newSignals;
}
//# sourceMappingURL=signalsJoin.js.map