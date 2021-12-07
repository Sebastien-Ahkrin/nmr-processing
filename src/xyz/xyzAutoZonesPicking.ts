import { Matrix } from 'ml-matrix';
import * as convolution from 'ml-matrix-convolution';
import * as matrixPeakFinders from 'ml-matrix-peaks-finder';
import type { Peak2D } from 'ml-matrix-peaks-finder';
import simpleClustering from 'ml-simple-clustering';

import { NMRZone } from '..';
import { determineRealTop } from '../peaks/util/determineRealTop';
import { getKernel } from '../peaks/util/getKernel';
import type { GetKernelOptions } from '../peaks/util/getKernel';
import * as PeakOptimizer from '../peaks/util/peakOptimizer';

import type { NMRSignal2D } from './NMRSignal2D';

const smallFilter = [
  [0, 0, 1, 2, 2, 2, 1, 0, 0],
  [0, 1, 4, 7, 7, 7, 4, 1, 0],
  [1, 4, 5, 3, 0, 3, 5, 4, 1],
  [2, 7, 3, -12, -23, -12, 3, 7, 2],
  [2, 7, 0, -23, -40, -23, 0, 7, 2],
  [2, 7, 3, -12, -23, -12, 3, 7, 2],
  [1, 4, 5, 3, 0, 3, 5, 4, 1],
  [0, 1, 3, 7, 7, 7, 3, 1, 0],
  [0, 0, 1, 2, 2, 2, 1, 0, 0],
];

export interface Data2D {
  z: number[][] | Float64Array[];
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

export interface XYZAutoZonesPickingOptions {
  /**
   * max number of points in any dimension to pad the input data, this is needed to avoid lost peaks when the input matrix is too small.
   * @default 14
   */
  sizeToPad?: number;
  /**
   * If it's true, try to find the real maximum for each bidimensional peak.
   * @default true
   */
  realTopDetection?: boolean;
  /**
   * positive value filter small peaks by intensity
   * @default 0.5
   */
  thresholdFactor?: number;
  /**
   * specify the nuclei of each dimension
   * @default ['1H','1H']
   */
  nuclei?: string[];
  /**
   * specify the frequency for each dimension.
   */
  observedFrequencies: number[] | Float64Array;
  /**
   * If it's true, it try to ajust the shift and add missing cross peaks, useful only for homonuclear data.
   * @default false
   */
  enhanceSymmetry?: boolean;
  /**
   * If it's true, peaks with less than a specific percentage (maxPercentCutOff) of the maximum intensity will be removed.
   * @default true;
   */
  clean?: boolean;
  /**
   * percentage of maximum intensity as cutoff for small peaks.
   * @default 0.03
   */
  maxPercentCutOff?: number;
  /**
   * Specify the minimum distance in Hz for each dimension to join peaks in a signal.
   * @default [24,24]
   */
  tolerances?: number[];
  /**
   * If it is true, the convolution will be forced by FFT
   * @default true
   */
  convolutionByFFT?: boolean;
  /**
   * kernel options to calculate a laplacianOfGaussian kernel with a specify size.
   */
  kernel?: GetKernelOptions;
}

export function xyzAutoZonesPicking(
  spectraData: Data2D,
  options: XYZAutoZonesPickingOptions,
) {
  let {
    sizeToPad = 14,
    realTopDetection = true,
    thresholdFactor = 0.5,
    nuclei = ['1H', '1H'],
    observedFrequencies,
    enhanceSymmetry = false,
    clean = true,
    maxPercentCutOff = 0.03,
    tolerances = [24, 24],
    convolutionByFFT = true,
    kernel: kernelOptions,
  } = options;

  if (
    !Array.isArray(observedFrequencies) &&
    !ArrayBuffer.isView(observedFrequencies)
  ) {
    throw new Error('observedFrequencies is mandatory');
  }

  thresholdFactor = thresholdFactor === 0 ? 1 : Math.abs(thresholdFactor);

  let nbPoints = spectraData.z[0].length;
  let nbSubSpectra = spectraData.z.length;

  if (nbSubSpectra < sizeToPad) {
    spectraData = padData(spectraData, { width: sizeToPad });
    nbPoints = spectraData.z[0].length;
    nbSubSpectra = spectraData.z.length;
  }

  let absoluteData = new Float64Array(nbPoints * nbSubSpectra);
  let originalData = new Float64Array(nbPoints * nbSubSpectra);

  for (let iSubSpectra = 0; iSubSpectra < nbSubSpectra; iSubSpectra++) {
    let spectrum = spectraData.z[iSubSpectra];
    for (let iCol = 0; iCol < nbPoints; iCol++) {
      let index = iSubSpectra * nbPoints + iCol;
      absoluteData[index] = Math.abs(spectrum[iCol]);
      originalData[index] = spectrum[iCol]; //@todo pensar si se puede evitar originalData
    }
  }

  const kernel = kernelOptions ? getKernel(kernelOptions) : smallFilter;

  let convolutedSpectrum = convolutionByFFT
    ? convolution.fft(absoluteData, kernel, {
        rows: nbSubSpectra,
        cols: nbPoints,
      })
    : convolution.direct(absoluteData, kernel, {
        rows: nbSubSpectra,
        cols: nbPoints,
      });

  let peaksMC1 = matrixPeakFinders.findPeaks2DRegion(absoluteData, {
    originalData,
    filteredData: convolutedSpectrum,
    rows: nbSubSpectra,
    cols: nbPoints,
    nStdDev: thresholdFactor,
  });

  if (clean) {
    // Remove peaks with less than x% of the intensity of the highest peak
    peaksMC1 = PeakOptimizer.clean(peaksMC1, maxPercentCutOff);
  }

  let signals = createSignals2D(peaksMC1, {
    nRows: nbSubSpectra,
    nCols: nbPoints,
    minX: spectraData.minX,
    maxX: spectraData.maxX,
    minY: spectraData.minY,
    maxY: spectraData.maxY,
    absoluteData,
    originalData,
    tolerances,
    nuclei,
    observedFrequencies,
    realTopDetection,
  });

  if (enhanceSymmetry) {
    signals = PeakOptimizer.enhanceSymmetry(signals);
  }

  return formatZones(signals);
}

function formatZones(signals: NMRSignal2D[]) {
  let zones: NMRZone[] = [];
  for (const signal of signals) {
    let minMax1 = [Number.MAX_VALUE, 0];
    let minMax2 = [Number.MAX_VALUE, 0];
    for (const peak of signal.peaks || []) {
      if (peak.minX < minMax1[0]) {
        minMax1[0] = peak.minX;
      }
      if (peak.maxX > minMax1[1]) {
        minMax1[1] = peak.maxX;
      }
      if (peak.minY < minMax2[0]) {
        minMax2[0] = peak.minY;
      }
      if (peak.maxY > minMax2[1]) {
        minMax2[1] = peak.maxY;
      }
    }
    zones.push({
      x: {
        from: minMax1[0],
        to: minMax1[1],
      },
      y: {
        from: minMax2[0],
        to: minMax2[1],
      },
      signals: [signal],
    });
  }
  return zones;
}

/**
 * This function converts a set of 2D-peaks in 2D-signals. Each signal could be composed
 * of many 2D-peaks, and it has some additional information related to the NMR spectrum.
 * @private
 */

export interface CreateSignals2DOptions {
  nCols: number;
  nRows: number;
  absoluteData: number[] | Float64Array;
  originalData: number[] | Float64Array;
  observedFrequencies: number[] | Float64Array;
  tolerances: number[];
  nuclei: string[];
  realTopDetection: boolean;
  minY: number;
  maxY: number;
  minX: number;
  maxX: number;
}
const createSignals2D = (peaks: Peak2D[], options: CreateSignals2DOptions) => {
  let {
    nCols,
    nRows,
    absoluteData,
    originalData,
    observedFrequencies,
    tolerances,
    nuclei,
    realTopDetection,
    minY,
    maxY,
    minX,
    maxX,
  } = options;

  let [nucleusX, nucleusY] = nuclei;
  let [toleranceX, toleranceY] = tolerances;
  let [observeFrequencyX, observeFrequencyY] = observedFrequencies;

  let dy = (maxY - minY) / (nRows - 1);
  let dx = (maxX - minX) / (nCols - 1);

  if (realTopDetection) {
    peaks = determineRealTop(peaks, {
      nCols,
      absoluteData,
      originalData,
      minX,
      maxX,
      minY,
      maxY,
    });
  }

  for (let i = peaks.length - 1; i >= 0; i--) {
    let { x, y } = peaks[i];
    peaks[i].x = minX + dx * x;
    peaks[i].y = minY + dy * y;
    peaks[i].minX = minX + dx * peaks[i].minX;
    peaks[i].minY = minY + dy * peaks[i].minY;
    peaks[i].maxX = minX + dx * peaks[i].maxX;
    peaks[i].maxY = minY + dy * peaks[i].maxY;

    // Still having problems to correctly detect peaks on those areas. So I'm removing everything there.
  }
  // The connectivity matrix is an square and symmetric matrix, so we'll only store the upper diagonal in an
  // array like form
  let connectivity = [];
  for (let i = 0; i < peaks.length; i++) {
    for (let j = i; j < peaks.length; j++) {
      if (
        Math.abs(peaks[i].x - peaks[j].x) * observeFrequencyX < toleranceX &&
        Math.abs(peaks[i].y - peaks[j].y) * observeFrequencyY < toleranceY
      ) {
        // 24*24Hz We cannot distinguish peaks with less than 20 Hz of separation
        connectivity.push(1);
      } else {
        connectivity.push(0);
      }
    }
  }
  let clusters = simpleClustering(connectivity);

  let signals: NMRSignal2D[] = [];
  if (clusters) {
    for (const cluster of clusters) {
      let signal: any = {
        x: {
          delta: 0,
          nucleus: nucleusX,
          resolution: dx,
        },
        y: {
          delta: 0,
          nucleus: nucleusY,
          resolution: dy,
        },
      };
      let peaks2D: Peak2D[] = [];
      let sumZ = 0;

      for (let jPeak = 0; jPeak < cluster.length; jPeak++) {
        if (cluster[jPeak] === 1) {
          peaks2D.push(peaks[jPeak]);
          signal.x.delta += peaks[jPeak].x * peaks[jPeak].z;
          signal.y.delta += peaks[jPeak].y * peaks[jPeak].z;
          sumZ += peaks[jPeak].z;
        }
      }

      signal.x.delta /= sumZ;
      signal.y.delta /= sumZ;
      signal.peaks = peaks2D;
      signals.push(signal as NMRSignal2D);
    }
  }
  return signals;
};

const padData = (spectraData: Data2D, options: { width: number }) => {
  let { minX, maxX, minY, maxY } = spectraData;

  const width = options.width;

  let nbPoints = spectraData.z[0].length;
  let nbSubSpectra = spectraData.z.length;

  let yInterval = (maxY - minY) / (nbSubSpectra - 1);
  let xInterval = (maxX - minX) / (nbPoints - 1);

  let yDiff = width - nbSubSpectra;
  let xDiff = Math.max(width - nbPoints, 0);
  if (xDiff % 2) xDiff++;
  if (yDiff % 2) yDiff++;

  let xOffset = xDiff / 2;
  let yOffset = yDiff / 2;
  let newMatrix = Matrix.zeros(nbSubSpectra + yDiff, nbPoints + xDiff);
  for (let i = 0; i < nbSubSpectra; i++) {
    for (let j = 0; j < nbPoints; j++) {
      newMatrix.set(i + yOffset, j + xOffset, spectraData.z[i][j]);
    }
  }

  return {
    z: newMatrix.to2DArray(),
    minX: minX - xOffset * xInterval,
    maxX: maxX + xOffset * xInterval,
    minY: minY - yOffset * yInterval,
    maxY: maxY + yOffset * yInterval,
  };
};
