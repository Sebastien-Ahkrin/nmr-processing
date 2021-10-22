import { agnes } from 'ml-hclust';
import { Matrix } from 'ml-matrix';
import { getGroupedDiastereotopicAtomIDs, getPathsInfo, } from 'openchemlib-utils';
import { getNuclei } from './getNuclei';
import { getPredictions } from './getPredictions';
function checkFromTo(options) {
    if (!options.from || !options.to) {
        throw new Error('options from and to are mandatory');
    }
}
export async function predict2D(molecule, options = {}) {
    checkFromTo(options);
    let { from, to, minLength = 0, maxLength, predictOptions = {}, predictions, predictor, joinDistance = { H: 0.05, C: 0.5 }, includeDiagonal = false, } = options;
    molecule.addImplicitHydrogens();
    let diaIDs = getGroupedDiastereotopicAtomIDs(molecule);
    const paths = getPathsInfo(molecule, {
        fromLabel: from,
        toLabel: to,
        minLength,
        maxLength,
    });
    let diaIDswithAtomInfo = [];
    for (let diaID of diaIDs) {
        diaIDswithAtomInfo.push({
            ...diaID,
            atomInfo: JSON.parse(JSON.stringify(paths[diaID.atoms[0]])),
        });
    }
    const xPrediction = await getPredictions(from, molecule, predictOptions, predictor, predictions);
    const yPrediction = from === to
        ? xPrediction
        : await getPredictions(to, molecule, predictOptions, predictor, predictions);
    if (!xPrediction || !yPrediction) {
        throw new Error('predictions are not availaible');
    }
    const spectra = {
        x: xPrediction,
        y: yPrediction,
    };
    const signalsByDiaID = {
        x: {},
        y: {},
    };
    for (const axis in signalsByDiaID) {
        for (const signal of spectra[axis].joinedSignals) {
            if (!signal.diaIDs)
                throw new Error('Signal has not diaIDs');
            signalsByDiaID[axis][signal.diaIDs[0]] = signal;
        }
    }
    let group = {};
    for (const diaID of diaIDswithAtomInfo) {
        const atom = diaID.atomInfo;
        if (atom.paths.length < 1)
            continue;
        if (!signalsByDiaID.x[atom.oclID])
            continue;
        const currentPaths = atom.paths;
        for (const path of currentPaths) {
            if (!signalsByDiaID.y[paths[path.to].oclID])
                continue;
            let fromToDiaID = {
                x: atom,
                y: paths[path.to],
            };
            const key = `${fromToDiaID.x.oclID}-${fromToDiaID.y.oclID}`;
            if (key === `${atom.oclID}-${atom.oclID}` || group[key]) {
                continue;
            }
            let peak = { z: 100 };
            let signal = { x: {}, y: {} };
            for (let axis in fromToDiaID) {
                let diaID = fromToDiaID[axis].oclID;
                peak[axis] = signalsByDiaID[axis][diaID].delta;
                signal[axis].delta = signalsByDiaID[axis][diaID].delta;
                signal[axis].diaIDs = [diaID];
                signal[axis].atoms = signalsByDiaID[axis][diaID].atoms;
            }
            signal.peaks = [peak];
            group[key] = signal;
        }
    }
    if (includeDiagonal)
        addSelftCorrelation(group, { paths, signalsByDiaID });
    // clusterize signals by distance
    const joinedSignals = Object.values(group);
    const zones = createZones(joinedSignals, { joinDistance, from, to });
    return {
        molfile: molecule.toMolfile(),
        diaIDs: spectra.x.diaIDs,
        nuclei: getNuclei({ from, to }),
        joinedSignals,
        signals: splitSignals(joinedSignals),
        zones,
        molecule,
    };
}
function splitSignals(joinedSignals) {
    let signals = [];
    for (const signal of joinedSignals) {
        for (const xAtom of signal.x.atoms || []) {
            for (const yAtom of signal.y.atoms || []) {
                let newSignal = JSON.parse(JSON.stringify(signal));
                newSignal.x.atoms = [xAtom];
                newSignal.y.atoms = [yAtom];
                signals.push(newSignal);
            }
        }
    }
    return signals;
}
function addSelftCorrelation(group, options) {
    const { paths = [], signalsByDiaID } = options;
    for (const atom of paths) {
        if (atom.paths.length < 1)
            continue;
        let diaID = atom.oclID;
        if (!signalsByDiaID.x[diaID])
            continue;
        if (group[`${diaID}-${diaID}`])
            continue;
        let signal = { x: {}, y: {} };
        let peak = { z: 1 };
        for (let axis of ['x', 'y']) {
            peak[axis] = signalsByDiaID[axis][diaID].delta;
            signal[axis].delta = signalsByDiaID[axis][diaID].delta;
            signal[axis].diaIDs = [diaID];
            signal[axis].atoms = signalsByDiaID[axis][diaID].atoms;
        }
        signal.peaks = [peak];
        group[`${atom.oclID}-${atom.oclID}`] = signal;
    }
}
function createZones(signals, options) {
    const { joinDistance, from, to } = options;
    const deltas = new Matrix(signals.map((e) => [e.x.delta, e.y.delta]));
    const minX = deltas.minColumn(0);
    const maxX = deltas.maxColumn(0);
    const minY = deltas.minColumn(1);
    const maxY = deltas.maxColumn(1);
    deltas.mulColumn(0, 1 / (maxX - minX));
    deltas.mulColumn(1, 1 / (maxY - minY));
    const cutOff = Math.sqrt(Math.pow(joinDistance[from] / (maxX - minX), 2) +
        Math.pow(joinDistance[to] / (maxY - minY), 2));
    let hClusters = agnes(deltas.to2DArray(), { method: 'centroid' });
    const clusters = splitClusters([hClusters], cutOff);
    const zones = [];
    for (const cluster of clusters) {
        const signal = [];
        if (cluster.isLeaf)
            signal.push(signals[cluster.index]);
        for (const child of cluster.children) {
            for (const index of child.indices()) {
                signal.push(signals[index]);
            }
        }
        zones.push({
            ...fromTo(signal, { joinDistance, from, to }),
            signals: signal,
        });
    }
    return zones;
}
function fromTo(signals, options) {
    const { joinDistance, from, to } = options;
    let minX = Number.MAX_SAFE_INTEGER;
    let minY = Number.MAX_SAFE_INTEGER;
    let maxX = Number.MIN_SAFE_INTEGER;
    let maxY = Number.MIN_SAFE_INTEGER;
    for (const signal of signals) {
        if (signal.x.delta < minX)
            minX = signal.x.delta;
        if (signal.x.delta > maxX)
            maxX = signal.x.delta;
        if (signal.y.delta < minY)
            minY = signal.y.delta;
        if (signal.y.delta > maxY)
            maxY = signal.y.delta;
    }
    return {
        x: { from: minX - joinDistance[from], to: maxX + joinDistance[from] },
        y: { from: minY - joinDistance[to], to: maxY + joinDistance[to] },
    };
}
function splitClusters(clusters, maxDistance) {
    let originalLength = clusters.length;
    for (let i = 0; i < clusters.length; i++) {
        const cluster = clusters[i];
        if (cluster.height > maxDistance) {
            clusters.push(...cluster.children);
            clusters.splice(i--, 1);
        }
    }
    return clusters.length < originalLength
        ? splitClusters(clusters, maxDistance)
        : clusters;
}
//# sourceMappingURL=predict2D.js.map