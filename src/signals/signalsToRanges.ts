import type { MakeMandatory } from '../utilities/MakeMandatory';
import { rangeFromSignal } from '../utilities/rangeFromSignal';
import type { NMRRange } from '../xy/NMRRange';

import type { NMRSignal1D } from './NMRSignal1D';

interface SignalsToRangesOptions {
  /**
   * minimal artificial width of a signal in ppm
   * @default 0.05
   */
  tolerance?: number;
  /**
   * Frequency in Hz of the spectrometer.
   * @default 400
   */
  frequency?: number;
}

type Signals1DWithNbAtoms = MakeMandatory<NMRSignal1D, 'nbAtoms'>;
type RangeFullfiled = MakeMandatory<NMRRange, 'integration' | 'signals'>;

interface WrappedSignal {
  from: number;
  to: number;
  original: Signals1DWithNbAtoms;
}

function checkNbAtoms(
  signals: NMRSignal1D[],
): asserts signals is Signals1DWithNbAtoms[] {
  for (let signal of signals) {
    if (!signal.nbAtoms) throw new Error('nbAtoms is mandatory');
  }
}

export function signalsToRanges(
  signals: NMRSignal1D[],
  options: SignalsToRangesOptions = {},
): NMRRange[] {
  checkNbAtoms(signals);

  const { tolerance = 0.05, frequency = 400 } = options;

  let wrapped = signals.map((signal) => ({
    original: signal,
  })) as WrappedSignal[];

  wrapped.forEach((signal) => {
    const fromTo = rangeFromSignal(signal.original, { frequency, tolerance });
    signal.from = fromTo.from;
    signal.to = fromTo.to;
  });

  wrapped = wrapped.sort((signal1, signal2) => signal1.from - signal2.from);

  let ranges = [];
  let range = {} as RangeFullfiled;
  for (let signal of wrapped) {
    if (range.from === undefined || signal.from > range.to) {
      range = {
        from: signal.from,
        to: signal.to,
        integration: signal.original.nbAtoms,
        signals: [signal.original],
      };
      ranges.push(range);
    } else {
      range.integration += signal.original.nbAtoms;
      if (signal.to > range.to) range.to = signal.to;
      range.signals.push(signal.original);
    }
  }
  return ranges;
}
