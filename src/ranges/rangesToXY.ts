import { DataXY, DoubleArray } from 'cheminfo-types';
import { SpectrumGenerator } from 'spectrum-generator';

import { hackSignalsToXY } from '../signals/hackSignalsToXY';
import { MakeMandatory } from '../types/MakeMandatory';
import type { Range } from '../types/range';
import type { Signal1D } from '../types/signal1D';
import { fromToArray } from '../utilities/fromToArray';

type rangeWithSignal = MakeMandatory<Range, 'signals'>;

function checkForSignals(ranges: Range[]): asserts ranges is rangeWithSignal[] {
  for (let range of ranges) {
    if (!range.signals) throw new Error('range has not signals');
  }
}
export function rangesToXY(ranges: Range[], options: any = {}) {
  checkForSignals(ranges);
  let {
    frequency = 400,
    lineWidth = 1,
    from = 0,
    to = 10,
    nbPoints = 16 * 1024,
    nbPeaksMultiplet = 21,
    shape = { kind: 'gaussian' },
  } = options;

  const addSpectrum = (a: DoubleArray, b: DoubleArray) => {
    for (let i = 0; i < nbPoints; i++) {
      a[i] += b[i];
    }
  };

  const spectrumOptions = {
    from,
    to,
    nbPoints,
    shape,
    lineWidth,
    frequency,
    nbPeaksMultiplet,
  };

  let spectrum: DoubleArray = new Float64Array(nbPoints);
  for (const range of ranges) {
    const { integration, signals } = range;
    let rangeSpectrum: DoubleArray = new Float64Array(nbPoints);
    for (const signal of signals) {
      const { multiplicity, delta } = signal;
      let signalSpectrum =
        multiplicity === 'm' || multiplicity === 'b' || multiplicity === 'br s'
          ? broadPeakOrMultipletSpectrum([signal], spectrumOptions).y
          : hackSignalsToXY([signal], spectrumOptions).y;
      normalizeSpectrum(signalSpectrum, [signal]);
      addSpectrum(rangeSpectrum, signalSpectrum);
    }
    if (range.integration)
      normalizeSpectrum(rangeSpectrum, signals, { integration });
    addSpectrum(spectrum, rangeSpectrum);
  }

  return {
    x: fromToArray(from, to, nbPoints),
    y: spectrum,
  };
}

function broadPeakOrMultipletSpectrum(signals: Signal1D[], options: any = {}) {
  const { lineWidth, frequency, nbPeaksMultiplet } = options;
  const spectrumGenerator = new SpectrumGenerator(options);

  const broadWidth = (lineWidth * 3) / frequency;
  for (let signal of signals) {
    const { multiplicity, delta, integration = 1 } = signal;
    if (multiplicity === 'b' || multiplicity === 'br s') {
      spectrumGenerator.addPeak({
        x: delta,
        y: integration,
        width: broadWidth,
      });
    } else {
      const peaks = peaksOfMultiplet(delta, {
        lineWidth,
        frequency,
      });
      spectrumGenerator.addPeaks(peaks);
    }
  }
  return spectrumGenerator.getSpectrum();
}

function peaksOfMultiplet(delta: number, options: any) {
  const {
    frequency,
    lineWidth,
    intensities = [1, 2, 5, 4, 5, 3, 4, 2, 1],
  } = options;

  const lineWidthPpm = lineWidth / frequency;
  const spaceBetweenPeaks = lineWidthPpm * 1.5;

  const peaks = [];
  const firstPeakPosition =
    delta - (spaceBetweenPeaks * intensities.length) / 2;
  for (let i = 0; i < intensities.length; i++) {
    peaks.push({
      x: firstPeakPosition + spaceBetweenPeaks * i,
      y: intensities[i],
      width: lineWidthPpm,
    });
  }

  return peaks;
}

function normalizeSpectrum(
  spectrum: DoubleArray,
  signals: Signal1D[],
  options: any = {},
) {
  const {
    integration = signals.reduce((acc, signal) => {
      const { integration = 1 } = signal;
      return acc + integration;
    }, 0),
  } = options;

  const sum = (spectrum as number[]).reduce(
    (acc: number, element: number) => acc + element,
    0,
  );

  const norma = (integration / sum) * 1e6;

  (spectrum as number[]).forEach((e, i, arr) => (arr[i] *= norma));
}