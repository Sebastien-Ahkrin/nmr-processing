import { DoubleArray } from 'cheminfo-types';
import arraySequentialFill from 'ml-array-sequential-fill';
import type { Shape1D } from 'ml-peak-shape-generator';
import { SpectrumGenerator } from 'spectrum-generator';

import type { NMRSignal1D } from '../signals/NMRSignal1D';
import { hackSignalsToXY } from '../signals/hackSignalsToXY';
import type { MakeMandatory } from '../utilities/MakeMandatory';
import type { NMRRange } from '../xy/NMRRange';

type RangeWithSignal = MakeMandatory<NMRRange, 'signals'>;

export interface RangeToXYOptions {
  /**
   * frequency observed
   * @default 400
   */
  frequency: number;
  /**
   * line width to draw the signals
   * @default 1
   */
  lineWidth: number;
  /**
   * lower limit in the spectrum.
   * @default 0
   */
  from: number;
  /**
   * upper limit in the spectrum.
   * @default 10
   */
  to: number;
  /**
   * number of points of the spectrum.
   * @default 16384
   */
  nbPoints: number;
  /**
   * options of signals.
   * @default { kind: 'gaussian' }
   */
  shape: Shape1D;
}
function checkForSignals(
  ranges: NMRRange[],
): asserts ranges is RangeWithSignal[] {
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
    const { integration, signals = [] } = range;
    const { multiplicity: rangeMulplicity = '' } = range;
    if (rangeMulplicity === 'm' && signals.length < 1) {
      const { from, to } = range;
      signals.push({
        delta: (from + to) / 2,
        multiplicity: 'm',
      });
    }
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
    x: arraySequentialFill({ from, to, size: nbPoints }),
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

  if (sum !== 0) {
    const norma = (integration / sum) * 1e6;
    for (let i = 0; i < spectrum.length; i++) {
      spectrum[i] *= norma;
    }
  }
}
