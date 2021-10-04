import { DoubleArray } from 'cheminfo-types';
import { SpectrumGenerator } from 'spectrum-generator';

import { hackSignalsToXY } from '../signals/hackSignalsToXY';
import { MakeMandatory } from '../types/MakeMandatory';
import type { NMRRange } from '../types/NMRRange';
import type { NMRSignal1D } from '../types/NMRSignal1D';
import { fromToArray } from '../utilities/fromToArray';

type rangeWithSignal = MakeMandatory<NMRRange, 'signals'>;

function checkForSignals(
  ranges: NMRRange[],
): asserts ranges is rangeWithSignal[] {
  for (let range of ranges) {
    if (!range.signals) throw new Error('range has not signals');
  }
}
export function rangesToXY(ranges: NMRRange[], options: any = {}) {
  checkForSignals(ranges);
  let {
    frequency = 400,
    lineWidth = 1,
    from = 0,
    to = 10,
    nbPoints = 16 * 1024,
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
  };

  let spectrum: DoubleArray = new Float64Array(nbPoints);
  for (const range of ranges) {
    const { integration, signals } = range;
    let rangeSpectrum: DoubleArray = new Float64Array(nbPoints);
    for (const signal of signals) {
      const { multiplicity } = signal;
      let signalSpectrum =
        multiplicity === 'm' || multiplicity === 'b' || multiplicity === 'br s'
          ? broadPeakOrMultipletSpectrum([signal], spectrumOptions).y
          : hackSignalsToXY([signal], spectrumOptions).y;
      normalizeSpectrum(signalSpectrum, [signal]);
      addSpectrum(rangeSpectrum, signalSpectrum);
    }
    if (range.integration) {
      normalizeSpectrum(rangeSpectrum, signals, { integration });
    }
    addSpectrum(spectrum, rangeSpectrum);
  }

  return {
    x: fromToArray(from, to, nbPoints),
    y: spectrum,
  };
}

function broadPeakOrMultipletSpectrum(
  signals: NMRSignal1D[],
  options: any = {},
) {
  const { lineWidth, frequency } = options;
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
  signals: NMRSignal1D[],
  options: any = {},
) {
  const {
    integration = signals.reduce((acc, signal) => {
      const { integration = 1 } = signal;
      return acc + integration;
    }, 0),
  } = options;
  const sum = (spectrum as Float64Array).reduce(
    (acc: number, element: number) => acc + element,
    0,
  );

  const norma = (integration / sum) * 1e6;
  if (sum !== 0) {
    for (let i = 0; i < spectrum.length; i++) {
      spectrum[i] *= norma;
    }
  }
}
