import fetch from 'cross-fetch';
import { signalsToRanges } from '../signals/signalsToRanges';
import { fetchPrediction } from './utils/fetchPrediction';
import { flatGroupedDiaIDs } from './utils/flatGroupedDiaIDs';
import { getFilteredIDiaIDs } from './utils/getFilteredIDiaIDs';
import { queryByHose } from './utils/queryByHOSE';
const cache = {};
async function loadDB(url = 'https://www.lactame.com/lib/nmr-processing-data/20210711/carbon.js') {
    if (cache[url]) {
        return cache[url];
    }
    const response = await fetch(url);
    const database = await response.json();
    cache[url] = database;
    return database;
}
function checkFromPrediction(signal) {
    if (!signal.atoms)
        throw new Error('There is not atoms');
    if (!signal.diaIDs)
        throw new Error('There is not diaIDs');
    if (!signal.nbAtoms)
        throw new Error('There is not nbAtoms');
}
/**
 * Make a query to a hose code based database to predict carbon chemical shift
 * @returns {Promise<object>} - object with molfile, diaIDs, signals, joined signals by diaIDs and ranges.
 */
export async function predictCarbon(molecule, options = {}) {
    let { url, database, webserviceURL } = options;
    if (webserviceURL) {
        return fetchPrediction(molecule, { webserviceURL });
    }
    if (!database)
        database = await loadDB(url);
    if (!database) {
        throw new Error('There is not a database');
    }
    const maxLevel = database.length - 1;
    let { maxSphereSize = maxLevel } = options;
    if (maxSphereSize > maxLevel)
        maxSphereSize = maxLevel;
    const { groupedDiaIDs, carbonDiaIDs, molfile } = getFilteredIDiaIDs(molecule, {
        maxSphereSize,
    });
    let predictions = queryByHose(carbonDiaIDs, database, {
        maxSphereSize,
    });
    const signals = formatSignals(predictions);
    const joinedSignals = joinSignalByDiaID(signals);
    return {
        molfile,
        nucleus: '13C',
        diaIDs: flatGroupedDiaIDs(groupedDiaIDs),
        joinedSignals,
        signals,
        ranges: signalsToRanges(joinedSignals),
        molecule,
    };
}
function formatSignals(predictions) {
    let signals = [];
    for (const prediction of predictions) {
        const { atoms, nbAtoms, delta, diaIDs, statistic } = prediction;
        const signal = {
            delta: delta || NaN,
            atoms,
            diaIDs: diaIDs,
            multiplicity: 's',
            nbAtoms,
            statistic,
            js: [],
        };
        signals.push(signal);
    }
    return signals;
}
function joinSignalByDiaID(signals) {
    let joinedSignals = {};
    for (let signal of signals) {
        checkFromPrediction(signal);
        let diaID = signal.diaIDs[0];
        if (!joinedSignals[diaID]) {
            joinedSignals[diaID] = JSON.parse(JSON.stringify(signal));
        }
        else {
            joinedSignals[diaID].nbAtoms += signal.nbAtoms;
            joinedSignals[diaID].atoms.push(...signal.atoms);
        }
    }
    return Object.values(joinedSignals);
}
//# sourceMappingURL=predictCarbon.js.map