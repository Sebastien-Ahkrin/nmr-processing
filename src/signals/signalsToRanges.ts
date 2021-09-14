import { MakeMandatory } from '../types/MakeMandatory';
import type { Signal1D } from '../types/signal1D';
import type { Range } from '../types/range';

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

type Signals1DWithNbAtoms = MakeMandatory<Signal1D, 'nbAtoms'>;
type RangeFullfiled = MakeMandatory<Range, 'integration' | 'signals'>;

interface WrappedSignal {
  from: number;
  to: number;
  original: Signals1DWithNbAtoms;
}

function checkNbAtoms(signals: Signal1D[]): asserts signals is Signals1DWithNbAtoms[] {
  for (let signal of signals) {
    if (!signal.nbAtoms) throw new Error('nbAtoms is mandatory');
  }
}

export function signalsToRanges(
  signals: Signal1D[],
  options: SignalsToRangesOptions = {},
): Range[] {
  checkNbAtoms(signals);

  const { tolerance = 0.05, frequency = 400 } = options;

  let wrapped = signals.map((signal) => ({
    original: signal,
  })) as WrappedSignal[];

  wrapped.forEach((signal) => {
    let halfWidth =
      (signal.original.js || []).reduce(
        (total, j) => (total += j.coupling / frequency),
        0,
      ) /
        2 +
      tolerance;
    signal.from = signal.original.delta - halfWidth;
    signal.to = signal.original.delta + halfWidth;
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
