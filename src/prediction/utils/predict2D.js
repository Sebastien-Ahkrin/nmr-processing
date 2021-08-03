import { agnes } from 'ml-hclust';
import { Matrix } from 'ml-matrix';
import {
  getGroupedDiastereotopicAtomIDs,
  getPathsInfo,
} from 'openchemlib-utils';

import { getNucleus } from './getNucleus';


/**
 * Generate the correlation bidimensional nmr peaks based on the number of bonds between a pair of atoms
 * @param {Molecule} molecule - openchemlib molecule instance
 * @param {object} [options = {}] - options
 * @param {number} [options.minLength = 0] - minimum number of bonds to take into account.
 * @param {number} options.maxLength- maximum number of bonds to take into account.
 * @param {string} options.from - nucleus label to use in the X axis.
 * @param {string} options.to - nucleus label to use in the Y axis.
 * @param {object} [options.predictOptions={}] - options for predictors. The object should has properties
 * with name equal to the value of options.from and options.to.
 * @param {object} [options.predictions={}] - mono dimensional signal to generate the bidimenionals cross peaks.
 * The object should has properties with name equal to the value of options.from and options.to,
 * the value of each prediction should be similar that predictProton and predictCarbon.
 * @param {object} options.predictor - mono dimensional predictors. The object should has properties with name
 * equal to the value of options.from and options.to
 * @param {number} [options.joinDistance={ H: 0.05, C: 0.5 }] - signals with euclidean distance in ppm less than this it will
 * joined into a zone.
 * @param {boolean} [options.includeDiagonal=false] - if true, the self correlation signal will be add to the prediction.
 * @returns {object} - object with molfile, diaIDs, 2D signals and zones.
 */

export async function predict2D(molecule, options = {}) {
  let {
    minLength = 0,
    maxLength,
    from,
    to,
    predictOptions = {},
    predictions = {},
    predictor,
    joinDistance = { H: 0.05, C: 0.5 },
    includeDiagonal = false,
  } = options;

  molecule.addImplicitHydrogens();

  let diaIDs = getGroupedDiastereotopicAtomIDs(molecule);

  const paths = getPathsInfo(molecule, {
    fromLabel: from,
    toLabel: to,
    minLength,
    maxLength,
  });

  for (let diaID of diaIDs) {
    diaID.atomInfo = JSON.parse(JSON.stringify(paths[diaID.atoms[0]]));
  }

  const spectra = {
    x:
      predictions[from] ||
      (await predictor[from](molecule, predictOptions[from])),
    y: {},
  };

  spectra.y =
    from === to
      ? spectra.x
      : predictions[to] || (await predictor[to](molecule, predictOptions[to]));

  const signalsByDiaID = { x: {}, y: {} };
  for (const axis in signalsByDiaID) {
    for (const signal of spectra[axis].joinedSignals) {
      signalsByDiaID[axis][signal.diaIDs[0]] = signal;
    }
  }

  let group = {};
  for (let i = 0; i < diaIDs.length; i++) {
    const atom = diaIDs[i].atomInfo;
    if (atom.paths.length < 1) continue;

    if (!signalsByDiaID.x[atom.oclID]) continue;

    const currentPaths = atom.paths;
    for (const path of currentPaths) {
      if (!signalsByDiaID.y[paths[path.to].oclID]) continue;

      let fromToDiaID = { x: atom, y: paths[path.to] };

      const key = `${fromToDiaID.x.oclID}-${fromToDiaID.y.oclID}`;

      if (key === `${atom.oclID}-${atom.oclID}` || group[key]) {
        continue;
      }

      let signal = { x: {}, y: {} };
      for (let axis in fromToDiaID) {
        let diaID = fromToDiaID[axis].oclID;
        signal[axis].delta = signalsByDiaID[axis][diaID].delta;
        signal[axis].diaIDs = [diaID];
        signal[axis].atoms = signalsByDiaID[axis][diaID].atomIDs;
      }

      group[key] = signal;
    }
  }

  if (includeDiagonal) addSelftCorrelation(group, { paths, signalsByDiaID });

  // clusterize signals by distance
  const joinedSignals = Object.values(group);
  const zones = createZones(joinedSignals, { joinDistance, from, to });

  return {
    molfile: molecule.toMolfile(),
    diaIDs: spectra.x.diaIDs,
    nucleus: getNucleus({from, to}),
    joinedSignals,
    signals: splitSignals(joinedSignals),
    zones,
    molecule,
  };
}

function splitSignals(joinedSignals) {
  let signals = [];
  for (let i = 0; i < joinedSignals.length; i++) {
    const signal = joinedSignals[i];
    for (const xAtom of signal.x.atoms) {
      for (const yAtom of signal.y.atoms) {
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
    if (atom.paths.length < 1) continue;

    let diaID = atom.oclID;
    if (!signalsByDiaID.x[diaID]) continue;
    if (group[`${diaID}-${diaID}`]) continue;

    let signal = { x: {}, y: {} };

    for (let axis of ['x', 'y']) {
      signal[axis].delta = signalsByDiaID[axis][diaID].delta;
      signal[axis].diaIDs = [diaID];
      signal[axis].atoms = signalsByDiaID[axis][diaID].atomIDs;
    }

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

  const cutOff = Math.sqrt(
    Math.pow(joinDistance[from] / (maxX - minX), 2) +
      Math.pow(joinDistance[to] / (maxY - minY), 2),
  );

  let hClusters = agnes(deltas.to2DArray(), { method: 'centroid' });
  const clusters = splitClusters([hClusters], cutOff);

  const zones = [];
  for (const cluster of clusters) {
    const signal = [];
    if (cluster.isLeaf) signal.push(signals[cluster.index]);
    for (const child of cluster.children) {
      for (const index of child.indices()) {
        signal.push(signals[index]);
      }
    }

    zones.push({
      ...fromTo(signal, { joinDistance, from, to }),
      signal,
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
  for (let i = 0; i < signals.length; i++) {
    if (signals[i].x.delta < minX) minX = signals[i].x.delta;
    if (signals[i].x.delta > maxX) maxX = signals[i].x.delta;
    if (signals[i].y.delta < minY) minY = signals[i].y.delta;
    if (signals[i].y.delta > maxY) maxY = signals[i].y.delta;
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
