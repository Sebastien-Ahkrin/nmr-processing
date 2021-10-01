import { DataXY } from 'cheminfo-types';
import { SpectrumGenerator } from 'spectrum-generator';

import { hackSignalsToXY } from '../signals/hackSignalsToXY';
import { MakeMandatory } from '../types/MakeMandatory';
import type { Range } from '../types/range';
import type { Signal1D } from '../types/signal1D';

type rangeWithSignal = MakeMandatory<Range, 'signals'>;

function checkForSignals(ranges: Range[]): asserts ranges is rangeWithSignal[] {
  for (let range of ranges) {
    if (!range.signals) throw new Error('range has not signals');
  }
}
export function rangesToXY(ranges: Range[], options: any = {}) {
  checkForSignals(ranges);
  let { frequency = 400, lineWidth = 1 } = options;

  let signals = ranges.map((range) => range.signals).flat();
  let signalsWithMultiplicity = signals.filter((signal: Signal1D) => {
    const { multiplicity } = signal;
    return !(
      multiplicity === 'm' ||
      multiplicity === 'b' ||
      multiplicity === 'br s'
    );
  });

  const spectrum = hackSignalsToXY(signalsWithMultiplicity, options);

  normalizeSpectrum(spectrum, signalsWithMultiplicity);

  if (signals.length === signalsWithMultiplicity.length) return spectrum;

  const signalsWithMultiplet = signals.filter((signal: Signal1D) => {
    const { multiplicity } = signal;
    return (
      multiplicity === 'm' || multiplicity === 'b' || multiplicity === 'br s'
    );
  });

  const spectrumGenerator = new SpectrumGenerator(options);

  for (let signal of signalsWithMultiplet) {
    const broadWidth = (lineWidth * 3) / frequency;
    const { multiplicity, delta, integration = 1 } = signal;
    if (multiplicity === 'b' || multiplicity === 'br s') {
      spectrumGenerator.addPeak({
        x: delta,
        y: integration,
        width: broadWidth,
      });
    } else {
      const peaks = randomPeaks(delta, { lineWidth, frequency, integration });
      spectrumGenerator.addPeaks(peaks);
    }
  }

  const tempSpectrum = spectrumGenerator.getSpectrum(true);

  normalizeSpectrum(tempSpectrum, signalsWithMultiplet);

  spectrum.y.forEach((e, i, arr) => {
    arr[i] += tempSpectrum.y[i];
  });

  return spectrum;
}

function randomPeaks(delta: number, options: any = {}) {
  const {
    from = delta - 0.1,
    to = delta + 0.1,
    nbPeaks = 9,
    integration = 1,
    frequency,
    lineWidth,
  } = options;
  const lineWidthPpm = lineWidth / frequency;
  let peaks = [];
  let sum = 0;
  for (let i = 0; i < nbPeaks; i++) {
    const intensity = Math.random();
    peaks.push({
      x: from + Math.random() * (to - from),
      y: intensity,
      width: lineWidthPpm,
    });
    sum += integration;
  }

  const norma = integration / sum;
  for (let peak of peaks) {
    peak.y *= norma;
  }

  return peaks;
}

function normalizeSpectrum(spectrum: DataXY, signals: Signal1D[]) {
  let partialIntegration = signals.reduce((acc, signal) => {
    const { integration = 1 } = signal;
    return acc + integration;
  }, 0);
  const sum = (spectrum.y as number[]).reduce(
    (acc: number, element: number) => acc + element,
    0,
  );
  const norma = partialIntegration / sum;
  (spectrum.y as number[]).forEach((e, i, arr) => (arr[i] *= norma));
}