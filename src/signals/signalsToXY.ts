import rescale from 'ml-array-rescale';
import type { Shape1DOption } from 'spectrum-generator';

import { MakeMandatory } from '../types/MakeMandatory';
import { Jcoupling } from '../types/jcoupling';
import type { Signal1D } from '../types/signal1D';

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
  shape?: Shape1DOption;
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

type JcouplingFromPrediction = MakeMandatory<Jcoupling, 'distance'>;
type Signal1DWidthAtomsIDsAndDiaID = MakeMandatory<Signal1D, 'atomIDs'>;
type Signal1DWidthJsAndDiaID = Omit<Signal1DWidthAtomsIDsAndDiaID, 'js'> & {
  js: JcouplingFromPrediction[];
};

function checkForMandatory(
  signals: Signal1D[],
): asserts signals is Signal1DWidthJsAndDiaID[] {
  for (const signal of signals) {
    if (!signal.js) throw new Error('There is not js');
    // if (!signal.diaID) throw new Error('There is not diaID');
    if (!signal.atomIDs) throw new Error('There is not atomIDs');
    for (const j of signal.js) {
      // if (!j.diaID) throw new Error('There is not diaID');
      if (!j.atomIDs) throw new Error('There is not atomIDs');
    }
  }
}

/**
 * Generate a spectrum from an array of singals
 */
export function signalsToXY(
  signals: Signal1D[],
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
