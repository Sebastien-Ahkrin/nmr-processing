import fetch from 'cross-fetch';

import { signalsToRanges } from '../signals/signalsToRanges';

import { fetchPrediction } from './utils/fetchPrediction';
import { flatGroupedDiaIDs } from './utils/flatGroupedDiaIDs';
import { getFilteredIDiaIDs } from './utils/getFilteredIDiaIDs';
import { queryByHose } from './utils/queryByHOSE';

const cache = {};

async function loadDB(
  url = 'https://www.lactame.com/lib/nmr-processing-data/20210711/carbon.js',
) {
  if (cache[url]) {
    return cache[url];
  }
  const response = await fetch(url);
  cache[url] = await response.json();
  return cache[url];
}

/**
 * Make a query to a hose code based database to predict carbon chemical shift
 * @param {Molecule} molecule - openchemlib molecule instance.
 * @param {object} [options={}]
 * @param {string} [options.url] url of a custom database.
 * @param {object} options.database - custom database, each entry in the levels should has
 * an array as value [median] or [median, mean, sd, min, max, nb] for statistic purpose.
 * @param {number} options.maxSphereSize - max level to take into account in the query. If is not specified
 * the max level in the database will be used.
 * @param {string} [options.webserviceURL]
 * @returns {Promise<object>} - object with molfile, diaIDs, signals, joined signals by diaIDs and ranges.
 */

export async function predictCarbon(molecule, options = {}) {
  let { url, database, webserviceURL } = options;

  if (webserviceURL) {
    return fetchPrediction(molecule, { webserviceURL });
  }

  database = database || (await loadDB(url));

  const maxLevel = database.length - 1;

  let { maxSphereSize = maxLevel } = options;

  if (maxSphereSize > maxLevel) maxSphereSize = maxLevel;

  const { groupedDiaIDs, carbonDiaIDs, molfile } = getFilteredIDiaIDs(
    molecule,
    {
      maxSphereSize,
    },
  );

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
    const { atomIDs, nbAtoms, delta, diaIDs, statistic } = prediction;
    signals.push({
      delta,
      atomIDs,
      diaIDs: diaIDs,
      nbAtoms,
      statistic,
      js: [],
    });
  }
  return signals;
}

function joinSignalByDiaID(signals) {
  let joinedSignals = {};
  for (let signal of signals) {
    let diaID = signal.diaIDs[0];
    if (!joinedSignals[diaID]) {
      joinedSignals[diaID] = JSON.parse(JSON.stringify(signal));
    } else {
      joinedSignals[diaID].nbAtoms += signal.nbAtoms;
      joinedSignals[diaID].atomIDs.push(...signal.atomIDs);
    }
  }
  return Object.values(joinedSignals);
}
