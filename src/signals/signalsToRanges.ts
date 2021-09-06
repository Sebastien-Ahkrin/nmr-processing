interface SignalsToRangesOptions {
  tolerance?: number;
  frequency?: number;
}

interface WrappedSignal {
  from: number;
  to: number;
  original: Signal1D;
}

export interface Jcoupling {
  coupling: number;
}

export interface Signal1D {
  delta: number;
  js?: Jcoupling[];
  nbAtoms: number;
}

interface Range {
  from: number;
  to: number;
  integration: number;
  signals: Signal1D[];
}

export function signalsToRanges(
  signals: Signal1D[],
  options: SignalsToRangesOptions = {},
): Range[] {
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
  let range = {} as Range;
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
