import rescale from 'ml-array-rescale';
import arraySequentialFill from 'ml-array-sequential-fill';
import type { Shape1D } from 'ml-peak-shape-generator';

import type { MakeMandatory } from '../utilities/MakeMandatory';

import type { NMRSignal1D } from './NMRSignal1D';
import type { Jcoupling } from './jcoupling';
import { signalsToSpinSystem } from './simulation/signalsToSpinSystem';
import simulate1D from './simulation/simulate1D';
import { splitSpinSystem } from './simulation/splitSpinSystem';

export interface OptionsSignalsToXY {
  frequency?: number;
  /**
   * The low limit of the ordinate variable.
   * @default 0
   */
  from?: number;
  /**
   * The upper limit of the ordinate variable.
   * @default 10
   */
  to?: number;
  /**
   * Shape options for ml-spectrum-generator
   */
  shape?: Shape1D;
  /**
   * The linewidth of the output spectrum, expresed in Hz.
   * @default 1
   */
  lineWidth?: number;
  /**
   * Number of points of the output spectrum.
   * @default 16*1024
   */
  nbPoints?: number;
  /**
   * Default height of the simulated spectrum
   * @default 1e8
   */
  maxValue?: number;
  /**
   * Maximum number of atoms on each cluster that can be considered to be simulated together. It affects the the quality and speed of the simulation.
   * @default 8
   */
  maxClusterSize?: number;
}

type JcouplingFromPrediction = MakeMandatory<Jcoupling, 'pathLength'>;
type Signal1DWidthAtomsIDsAndDiaID = MakeMandatory<NMRSignal1D, 'atoms'>;
type Signal1DWidthJsAndDiaID = Omit<Signal1DWidthAtomsIDsAndDiaID, 'js'> & {
  js: JcouplingFromPrediction[];
};

function checkForMandatory(
  signals: NMRSignal1D[],
): asserts signals is Signal1DWidthJsAndDiaID[] {
  for (const signal of signals) {
    if (!signal.js) throw new Error('There is not js');
    // if (!signal.diaID) throw new Error('There is not diaID');
    if (!signal.atoms) throw new Error('There is not atoms');
    for (const j of signal.js) {
      // if (!j.diaID) throw new Error('There is not diaID');
      if (!j.atoms) throw new Error('There is not atoms');
    }
  }
}

/**
 * Generate a spectrum from an array of singals
 */
export function signalsToXY(
  signals: NMRSignal1D[],
  options: OptionsSignalsToXY = {},
) {
  checkForMandatory(signals);
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

  if (signals.length === 0) {
    return {
      x: arraySequentialFill({ from, to, size: nbPoints }),
      y: Array.from(new Float64Array(nbPoints)),
    };
  }

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
