import fetch from 'cross-fetch';
import type { Molecule } from 'openchemlib';

import { signalsToRanges } from '../signals/signalsToRanges';
import { MakeMandatory } from '../types/MakeMandatory';
import type { DataBaseStructure } from '../types/dataStructure';
import { Prediction1D } from '../types/prediction1D';
import { Signal1D } from '../types/signal1D';

import { fetchPrediction } from './utils/fetchPrediction';
import { flatGroupedDiaIDs } from './utils/flatGroupedDiaIDs';
import { getFilteredIDiaIDs } from './utils/getFilteredIDiaIDs';
import { Prediction, queryByHose } from './utils/queryByHOSE';



const cache: { [key: string]: DataBaseStructure } = {};

async function loadDB(
  url = 'https://www.lactame.com/lib/nmr-processing-data/20210711/carbon.js',
) {
  if (cache[url]) {
    return cache[url];
  }
  const response = await fetch(url);
  const database: DataBaseStructure = await response.json();
  cache[url] = database;
  return database;
}

export interface PredictCarbonOptions {
  /**
   * URL pointing to a database in json format
   */
  url?: string;
  /**
   *  custom database, each entry in the levels should has
   * an array as value [median] or [median, mean, sd, min, max, nb] for statistic purpose.
   */
  database?: DataBaseStructure;
  /**
   * URL of a webService that returns the prediction.
   */
  webserviceURL?: string;
  /**
   *  max level to take into account in the query. If is not specified
   * the max level in the database will be used.
   * @default 'maximum level in the database'
   */
  maxSphereSize?: number;
}

export type PredictCarbon = typeof predictCarbon;

type Signal1DFromPrediction = MakeMandatory<Signal1D, 'nbAtoms' | 'atomIDs' | 'diaIDs'>
function checkFromPrediction(signal: Signal1D): asserts signal is Signal1DFromPrediction {
  if (!signal.atomIDs) throw new Error('There is not atomIDs');
  if (!signal.diaIDs) throw new Error('There is not diaIDs');
  if (!signal.nbAtoms) throw new Error('There is not nbAtoms');
}
/**
 * Make a query to a hose code based database to predict carbon chemical shift
 * @returns {Promise<object>} - object with molfile, diaIDs, signals, joined signals by diaIDs and ranges.
 */

export async function predictCarbon(
  molecule: Molecule,
  options: PredictCarbonOptions = {},
): Promise<Prediction1D> {
  let { url, database, webserviceURL } = options;

  if (webserviceURL) {
    return fetchPrediction(molecule, { webserviceURL });
  }

  if (!database) database = await loadDB(url);

  if(!database) {
    throw new Error('There is not a database');
  }

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

function formatSignals(predictions: Prediction[]) {
  let signals = [];
  for (const prediction of predictions) {
    const { atomIDs, nbAtoms, delta, diaIDs, statistic } = prediction;
    const signal = {
      delta: delta || -1000,
      atomIDs,
      diaIDs: diaIDs,
      multiplicity: 's',
      nbAtoms,
      statistic,
      js: [],
    }
    signals.push(signal as Signal1D);
  }
  return signals;
}

function joinSignalByDiaID(signals: Signal1D[]) {
  let joinedSignals: {[key: string]: Signal1DFromPrediction} = {};
  for (let signal of signals) {
    checkFromPrediction(signal);
    let diaID = signal.diaIDs[0];
    if (!joinedSignals[diaID]) {
      joinedSignals[diaID] = JSON.parse(JSON.stringify(signal)) as Signal1DFromPrediction;
    } else {
      joinedSignals[diaID].nbAtoms += signal.nbAtoms;
      joinedSignals[diaID].atomIDs.push(...signal.atomIDs);
    }
  }
  return Object.values(joinedSignals);
}
