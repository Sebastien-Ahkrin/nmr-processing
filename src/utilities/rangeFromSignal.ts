import { couplingValues } from '../constants/couplingValues';
import type { NMRSignal1D } from '../types/NMRSignal1D';

export function rangeFromSignal(signal: NMRSignal1D, options: any = {}) {
  const { nucleus = '1h', frequency = 400 } = options;

  let halfWidth =
    ((signal.js || []).reduce((total, j) => {
      const { coupling, multiplicity = 'd' } = j;
      return total + couplingValues[multiplicity] * coupling;
    }, 0) /
      2 +
      getTolerance(nucleus)) /
    frequency;
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
