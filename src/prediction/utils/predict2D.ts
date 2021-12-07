import { agnes, Cluster } from 'ml-hclust';
import { Matrix } from 'ml-matrix';
import { Molecule } from 'openchemlib';
import {
  getGroupedDiastereotopicAtomIDs,
  getPathsInfo,
} from 'openchemlib-utils';
import type {
  AtomInfo,
  GroupDiastereotopicAtomIDs,
  PathInfo,
} from 'openchemlib-utils';

import type { NMRSignal1D } from '../../signals/NMRSignal1D';
import type { MakeMandatory } from '../../utilities/MakeMandatory';
import type { NMRSignal2D } from '../../xyz/NMRSignal2D';
import type { PredictCarbon, PredictCarbonOptions } from '../predictCarbon';
import type { PredictProton, PredictProtonOptions } from '../predictProton';
import type { Prediction1D } from '../prediction1D';

import { getNuclei } from './getNuclei';
import { getPredictions } from './getPredictions';

/**
 * Generate the correlation bidimensional nmr peaks based on the number of bonds between a pair of atoms
 * @returns {object} - object with molfile, diaIDs, 2D signals and zones.
 */

export type Predictor = PredictCarbon | PredictProton;

export interface Predictors {
  [key: string]: Predictor | undefined;
  H?: Predictor;
  C?: Predictor;
}

interface JoinDistanceOption {
  [key: string]: number;
  H: number;
  C: number;
}

export interface Predict2DOptions {
  /**
   * nucleus label to use in the X axis
   */
  from?: 'H' | 'C';
  /**
   * nucleus label to use in the Y axis
   */
  to?: 'H' | 'C';
  /**
   * maximum number of bonds to take into account.
   */
  maxLength?: number;
  /**
   * minimum number of bonds to take into account
   * @default 0
   */
  minLength?: number;
  /**
   * mono dimensional predictors.
   */
  predictor?: Predictors;
  /**
   *  mono dimensional signal to generate the bidimenionals cross peaks.
   * The object should has properties with name equal to "H" and "C".
   */
  predictOptions?: PredictOptions;
  /**
   * signals with euclidean distance in ppm less than this it will
   * joined into a zone.
   * @default {H:0.05,C:0.5}
   */
  joinDistance?: JoinDistanceOption;
  /**
   * mono dimensional signal to generate the bidimenionals cross peaks.
   * The object should has properties with name equal to "H" and "C".
   * the value of each prediction should be similar that predictProton and predictCarbon.
   */
  predictions?: Predictions;
  /**
   * if true, the self correlation signal will be add to the prediction.
   * @default false
   */
  includeDiagonal?: boolean;
}

export interface PredictOptions {
  [key: string]: PredictProtonOptions | PredictCarbonOptions | undefined;
  H?: PredictProtonOptions;
  C?: PredictCarbonOptions;
}

export interface Predictions {
  [key: string]: Prediction1D | undefined;
  H?: Prediction1D;
  C?: Prediction1D;
}

type GroupDiastereotopicAtomIDsWithAtomInfo = GroupDiastereotopicAtomIDs & {
  atomInfo: PathInfo;
};

type PredictHMBCOptionsWithFromTo = MakeMandatory<
  Predict2DOptions,
  'from' | 'to'
>;

function checkFromTo(
  options: Predict2DOptions,
): asserts options is PredictHMBCOptionsWithFromTo {
  if (!options.from || !options.to) {
    throw new Error('options from and to are mandatory');
  }
}

interface Signal1DByDiaID {
  [key: string]: { [key: string]: NMRSignal1D };
}

export async function predict2D(
  molecule: Molecule,
  options: Predict2DOptions = {},
) {
  checkFromTo(options);

  let {
    from,
    to,
    minLength = 0,
    maxLength,
    predictOptions = {},
    predictions,
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

  let diaIDswithAtomInfo: GroupDiastereotopicAtomIDsWithAtomInfo[] = [];
  for (let diaID of diaIDs) {
    diaIDswithAtomInfo.push({
      ...diaID,
      atomInfo: JSON.parse(JSON.stringify(paths[diaID.atoms[0]])) as PathInfo,
    });
  }

  const xPrediction = await getPredictions(
    from,
    molecule,
    predictOptions,
    predictor,
    predictions,
  );

  const yPrediction =
    from === to
      ? xPrediction
      : await getPredictions(
          to,
          molecule,
          predictOptions,
          predictor,
          predictions,
        );

  if (!xPrediction || !yPrediction) {
    throw new Error('predictions are not availaible');
  }

  const spectra: { [key: string]: Prediction1D } = {
    x: xPrediction,
    y: yPrediction,
  };

  const signalsByDiaID: Signal1DByDiaID = {
    x: {},
    y: {},
  };
  for (const axis in signalsByDiaID) {
    for (const signal of spectra[axis].joinedSignals) {
      if (!signal.diaIDs) throw new Error('Signal has not diaIDs');
      signalsByDiaID[axis][signal.diaIDs[0]] = signal;
    }
  }

  let group: { [key: string]: NMRSignal2D } = {};
  for (const diaID of diaIDswithAtomInfo) {
    const atom = diaID.atomInfo;
    if (atom.paths.length < 1) continue;

    if (!signalsByDiaID.x[atom.oclID]) continue;

    const currentPaths = atom.paths;
    for (const path of currentPaths) {
      if (!signalsByDiaID.y[paths[path.to].oclID]) continue;

      let fromToDiaID: { [key: string]: AtomInfo } = {
        x: atom,
        y: paths[path.to],
      };

      const key = `${fromToDiaID.x.oclID}-${fromToDiaID.y.oclID}`;

      if (key === `${atom.oclID}-${atom.oclID}` || group[key]) {
        continue;
      }

      let peak: any = { z: 100 };
      let signal: any = { x: {}, y: {} };
      for (let axis in fromToDiaID) {
        let diaID = fromToDiaID[axis].oclID;
        peak[axis] = signalsByDiaID[axis][diaID].delta;
        signal[axis].delta = signalsByDiaID[axis][diaID].delta;
        signal[axis].diaIDs = [diaID];
        signal[axis].atoms = signalsByDiaID[axis][diaID].atoms;
      }

      signal.peaks = [peak];

      group[key] = signal as NMRSignal2D;
    }
  }

  if (includeDiagonal) addSelftCorrelation(group, { paths, signalsByDiaID });

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

function splitSignals(joinedSignals: NMRSignal2D[]) {
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

interface AddSelftCorrelationOptions {
  paths: PathInfo[];
  signalsByDiaID: Signal1DByDiaID;
}
function addSelftCorrelation(
  group: { [key: string]: NMRSignal2D },
  options: AddSelftCorrelationOptions,
) {
  const { paths = [], signalsByDiaID } = options;
  for (const atom of paths) {
    if (atom.paths.length < 1) continue;

    let diaID = atom.oclID;
    if (!signalsByDiaID.x[diaID]) continue;
    if (group[`${diaID}-${diaID}`]) continue;

    let signal: any = { x: {}, y: {} };

    let peak: any = { z: 1 };
    for (let axis of ['x', 'y']) {
      peak[axis] = signalsByDiaID[axis][diaID].delta;
      signal[axis].delta = signalsByDiaID[axis][diaID].delta;
      signal[axis].diaIDs = [diaID];
      signal[axis].atoms = signalsByDiaID[axis][diaID].atoms;
    }

    signal.peaks = [peak];

    group[`${atom.oclID}-${atom.oclID}`] = signal as NMRSignal2D;
  }
}

interface CreateZonesOptions {
  joinDistance: JoinDistanceOption;
  from: string;
  to: string;
}
function createZones(signals: NMRSignal2D[], options: CreateZonesOptions) {
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
      signals: signal,
    });
  }
  return zones;
}

function fromTo(signals: NMRSignal2D[], options: CreateZonesOptions) {
  const { joinDistance, from, to } = options;
  let minX = Number.MAX_SAFE_INTEGER;
  let minY = Number.MAX_SAFE_INTEGER;
  let maxX = Number.MIN_SAFE_INTEGER;
  let maxY = Number.MIN_SAFE_INTEGER;
  for (const signal of signals) {
    if (signal.x.delta < minX) minX = signal.x.delta;
    if (signal.x.delta > maxX) maxX = signal.x.delta;
    if (signal.y.delta < minY) minY = signal.y.delta;
    if (signal.y.delta > maxY) maxY = signal.y.delta;
  }
  return {
    x: { from: minX - joinDistance[from], to: maxX + joinDistance[from] },
    y: { from: minY - joinDistance[to], to: maxY + joinDistance[to] },
  };
}

function splitClusters(clusters: Cluster[], maxDistance: number): Cluster[] {
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
