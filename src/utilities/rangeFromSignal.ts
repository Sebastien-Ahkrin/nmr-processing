import { couplingValues } from '../constants/couplingValues';
import type { NMRSignal1D } from '../signals/NMRSignal1D';

export interface RangeFromSignalOptions {
  /**
   * nucleus
   * @default '1h'
   */
  nucleus: string;
  /**
   * frequency observed
   * @default 400
   */
  frequency: number;
}

export function rangeFromSignal(signal: NMRSignal1D, options: any = {}) {
  const { nucleus = '1h', frequency = 400 } = options;
  const { tolerance = getTolerance(nucleus) / frequency } = options;
  let halfWidth =
    (signal.js || []).reduce((total, j) => {
      const { coupling, multiplicity = 'd' } = j;
      return total + (couplingValues[multiplicity] * coupling) / frequency;
    }, 0) /
      2 +
    tolerance;
  return {
    from: signal.delta - halfWidth,
    to: signal.delta + halfWidth,
  };
}

function getTolerance(nucleus: string) {
  switch (nucleus.toLocaleLowerCase()) {
    case '1h':
      return 1.5;
    case '13C':
      return 3;
    default:
      return 2;
  }
}
