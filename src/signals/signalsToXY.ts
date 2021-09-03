import rescale from 'ml-array-rescale';
import type { Shape1DOption } from 'spectrum-generator';
import type { Signal1D } from '../types/signal1D';

import { signalsToSpinSystem } from './simulation/signalsToSpinSystem';
import simulate1D from './simulation/simulate1D';
import { splitSpinSystem } from './simulation/splitSpinSystem';

export interface OptionsSignalsToXY {
  frequency?: number;
  from?: number;
  to?: number;
  shape?: Shape1DOption;
  lineWidth?: number;
  nbPoints?: number;
  maxValue?: number;
  maxClusterSize?: number;
}

export interface Jcoupling {
  coupling: number;
  atomIDs: number[];
  multiplicity: string;
}

export interface Signal1D {
  delta: number;
  js: Jcoupling[];
  atomIDs: number[];
}

/**
 * Generate a spectrum from an array of singals
 * @param {array} signals
 * @param {object} [options={}]
 * @param {number} [options.maxValue=1e8] Default height of the simulated spectrum
 * @param {number} [options.frequency=400] - The frequency in Mhz of the fake spectrometer that records the spectrum.
 * @param {number} [options.maxClusterSize=8] - Maximum number of atoms on each cluster that can be considered to be simulated together. It affects the the quality and speed of the simulation.
 * @param {number} [options.lineWidth=1] - The linewidth of the output spectrum, expresed in Hz.
 * @param {object} [options.shape={}]
 * @param {string} [options.shape.kind='gaussian'] - kind of shape to generate the spectrum.
 * @param {object} [options.shape.options={}] - spectrum and shape options. See spectrum-generator for more information about shape options.
 * @param {number} [options.from=0] - The low limit of the ordinate variable.
 * @param {number} [options.to=10] - The upper limit of the ordinate variable.
 * @param {number} [options.nbPoints=16*1024] - Number of points of the output spectrum.
 * @returns  {object} an object of the kind {x:[], y:[]}
 */
export function signalsToXY(
  signals: Signal1D[],
  options: OptionsSignalsToXY = {},
) {
  let {
    frequency = 400,
    shape = {
      kind: 'gaussian',
    },
    from = 0,
    to = 10,
    lineWidth = 1,
    nbPoints = 16 * 1024,
    maxValue = 1e8,
    maxClusterSize = 8,
  } = options;

  let spinSystem = signalsToSpinSystem(signals);

  spinSystem.clusters = splitSpinSystem(spinSystem, {
    frequency,
    maxClusterSize,
  });

  let spectrum = simulate1D(spinSystem, {
    frequency,
    from,
    to,
    nbPoints,
    lineWidth,
    shape,
  });

  if (maxValue) {
    spectrum.y = rescale(spectrum.y, { max: maxValue });
  }

  return spectrum;
}
