import sum from 'ml-array-sum';
import { joinPatterns } from '../utilities/joinPatterns';
const localeCompare = (a, b) => a.localeCompare(b);
const localeCompareJcouplingKeys = (a, b) => {
    const aa = `${a.diaIDs.sort(localeCompare).join(' ')}`;
    const bb = `${b.diaIDs.sort(localeCompare).join(' ')}`;
    return localeCompare(aa, bb);
};
const areThanClose = (a, b, tolerance) => Math.abs(a.coupling - b.coupling) < tolerance;
const takeCareDiaIDs = (a, b, tolerance) => localeCompareJcouplingKeys(a, b) === 0 && areThanClose(a, b, tolerance);
/**
 * Join couplings smaller than a define tolerance.
 * The resulting coupling should be an average of the existing one.
 * If distance is specified and is not always the same this property will be removed.
 */
export function signalJoinCouplings(signal, options = {}) {
    const { tolerance = 0.05, ignoreDiaIDs = false } = options;
    if (!signal.js || signal.js.length < 2)
        return signal;
    if (ignoreDiaIDs) {
        checkJs(signal);
        return groupJCouplings(signal, areThanClose, tolerance);
    }
    else {
        checkJsAndDiaID(signal);
        return groupJCouplings(signal, takeCareDiaIDs, tolerance);
    }
}
function groupJCouplings(signal, comparator, tolerance) {
    signal.js.sort((a, b) => b.coupling - a.coupling);
    let currentGroup = [signal.js[0]];
    let groups = [currentGroup];
    for (let i = 1; i < signal.js.length; i++) {
        let currentJ = signal.js[i];
        if (comparator(currentGroup[currentGroup.length - 1], currentJ, tolerance)) {
            currentGroup.push(currentJ);
        }
        else {
            currentGroup = [currentJ];
            groups.push(currentGroup);
        }
    }
    signal.js = [];
    for (let group of groups) {
        let coupling = sum(group.map((group) => group.coupling)) / group.length;
        let atoms = distinctValues(group
            .filter((group) => group.atoms)
            .map((group) => group.atoms)
            .flat());
        let assignment = distinctValues(group
            .filter((group) => group.assignment)
            .map((group) => group.assignment)
            .flat()).join(' ');
        let diaIDs = distinctValues(group
            .filter((group) => group.diaIDs)
            .map((group) => group.diaIDs)
            .flat());
        let distances = distinctValues(group.map((group) => group.distance));
        let multiplicity = joinPatterns(group
            .filter((group) => group.multiplicity)
            .map((group) => group.multiplicity));
        let newJ = {
            coupling,
            multiplicity,
        };
        if (diaIDs.length === 1)
            newJ.diaIDs = diaIDs;
        if (distances.length === 1 && distances[0])
            newJ.distance = distances[0];
        if (assignment.length > 0)
            newJ.assignment = assignment;
        if (atoms.length > 0)
            newJ.atoms = atoms;
        signal.js.push(newJ);
    }
    return signal;
}
function distinctValues(array) {
    const onlyDifferents = new Set();
    for (const element of array) {
        onlyDifferents.add(element);
    }
    return Array.from(onlyDifferents);
}
function checkJsAndDiaID(signal) {
    if (!signal.js)
        throw new Error('there is not js');
    for (const jcoupling of signal.js) {
        if (!jcoupling.diaIDs)
            throw new Error('there is not diaIDs');
    }
}
function checkJs(signal) {
    if (!signal.js)
        throw new Error('there is not js');
}
//# sourceMappingURL=signalJoinCouplings.js.map