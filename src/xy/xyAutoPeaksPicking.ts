import { DataXY } from 'cheminfo-types';
import { gsd, joinBroadPeaks, optimizePeaks } from 'ml-gsd';
import {
  xyExtract,
  xNoiseSanPlot,
  xAbsoluteMedian,
} from 'ml-spectra-processing';

import type { NMRPeak1D } from '../types/NMRPeak1D';
/**
 * Implementation of the peak picking method described by Cobas in:
 * A new approach to improving automated analysis of proton NMR spectra
 * through Global Spectral Deconvolution (GSD)
 * http://www.spectrosco-pyeurope.com/images/stories/ColumnPDFs/TD_23_1.pdf
 */

interface OptionsGetCutOff {
  noiseLevel?: number;
  useSanPlot: boolean;
  thresholdFactor: number;
}

interface OptionsGetPeakList {
  /**
   * Noise threshold in spectrum y units. Default is three/thresholdFactor times the absolute median of data.y.
   * @default `median(data.y) * (options.thresholdFactor || 3)`
   */
  noiseLevel?: number;
  /**
   * Threshold to determine if a given peak should be considered as a noise, bases on its relative height compared to the highest peak.
   * @default 0.01
   */
  minMaxRatio: number;
  /**
   * If broadRatio is higher than 0, then all the peaks which second derivative smaller than broadRatio * maxAbsSecondDerivative will be marked with the soft mask equal to true.
   * @default 0.00025
   */
  broadRatio: number;
  /**
   * Select the peak intensities from a smoothed version of the independent variables.
   * @default true
   */
  smoothY: boolean;
  /**
   * If it is true, the peaks parameters will be optimized.
   * @default false
   */
  optimize: boolean;
  /**
   * factor to determine the width at the moment to group the peaks in signals in 'GSD.optimizePeaks' function.
   * @default 4
   */
  factorWidth: number;
  /**
   * if it is true, it optimizes the x and intensity by extrapolation.
   */
  realTopDetection: boolean;
  /**
   * options to shape used to adapt the FWHM
   * @default {kind:'gaussian'}
   */
  shape: { kind: string };
  /**
   * options for optimization step, kind represent the algorithm
   * @default {kind:'lm'}
   */
  optimization: { kind: string };
  /**
   * Threshold to determine if some peak is candidate to clustering into range.
   * @default 0.25
   */
  broadWidth: number;
  /**
   * Options for savitz Golay
   */
  sgOptions: { windowSize: number; polynomial: number };
}

export interface OptionsXYAutoPeaksPicking extends Partial<OptionsGetPeakList> {
  /**
   * Low limit value in the x axis to extract a sub set of points from the input data.
   */
  from?: number;
  /**
   * Upper limit value in the x axis to extract a sub set of points from the input data.
   */
  to?: number;
  /**
   * the factor that multiplies the noise level to set up a threshold to select peaks with respect to the intensity.
   * @default 3
   */
  thresholdFactor?: number;
  /**
   * If it is true, it check for negative peaks.
   * @default false
   */
  lookNegative?: boolean;
  /**
   * If it is true, it calculate the noise level by sanPlot method.
   * @default false
   */
  useSanPlot?: boolean;
}

export function xyAutoPeaksPicking(
  data: DataXY,
  options: OptionsXYAutoPeaksPicking = {},
): NMRPeak1D[] {
  const {
    from,
    to,
    noiseLevel,
    thresholdFactor = 3,
    minMaxRatio = 0.05,
    broadRatio = 0.00025,
    useSanPlot = false,
    smoothY = true,
    optimize = false,
    factorWidth = 4,
    realTopDetection = true,
    shape = { kind: 'gaussian' },
    optimization = { kind: 'lm' },
    broadWidth = 0.25,
    lookNegative = false,
    sgOptions = { windowSize: 9, polynomial: 3 },
  } = options;

  if (from !== undefined && to !== undefined) {
    data = xyExtract(data, { zones: [{ from, to }] });
  }

  const cutOff = getCutOff(data.y, { noiseLevel, useSanPlot, thresholdFactor });

  let getPeakOptions = {
    shape,
    broadWidth,
    optimize,
    factorWidth,
    sgOptions,
    minMaxRatio,
    broadRatio,
    noiseLevel: cutOff.positive,
    smoothY,
    optimization,
    realTopDetection,
  };

  let peaks = getPeakList(data, getPeakOptions);

  if (lookNegative) {
    getPeakOptions.noiseLevel = cutOff.negative;
    peaks.push(...getNegativePeaks(data, getPeakOptions));
  }
  return peaks;
}

function getPeakList(data: DataXY, options: OptionsGetPeakList) {
  const {
    shape,
    broadWidth,
    optimize,
    factorWidth,
    sgOptions,
    minMaxRatio,
    broadRatio,
    noiseLevel,
    smoothY,
    optimization,
    realTopDetection,
  } = options;

  let peakList = gsd(data, {
    shape,
    sgOptions,
    minMaxRatio,
    broadRatio,
    noiseLevel,
    smoothY,
    realTopDetection,
  });

  if (broadWidth) {
    peakList = joinBroadPeaks(peakList, {
      width: broadWidth,
      shape,
      optimization,
    });
  }

  if (optimize) {
    peakList = optimizePeaks(data, peakList, {
      shape,
      factorWidth,
      optimization,
    });
  }

  return peakList;
}

function getNegativePeaks(data: DataXY, options: OptionsGetPeakList) {
  let { x, y } = data;
  let negativeDataY = new Float64Array(data.y.length);
  for (let i = 0; i < negativeDataY.length; i++) {
    negativeDataY[i] = -1 * y[i];
  }

  let peakList = getPeakList({ x, y: negativeDataY }, options);

  for (const peak of peakList) {
    peak.y *= -1;
  }
  return peakList;
}

function getCutOff(data: number[] | Float64Array, options: OptionsGetCutOff) {
  const { noiseLevel, useSanPlot, thresholdFactor } = options;

  const formatResult = (noiseLevel: number) =>
    typeof noiseLevel === 'number'
      ? { positive: noiseLevel, negative: -noiseLevel }
      : noiseLevel;

  if (noiseLevel) {
    return formatResult(noiseLevel);
  } else {
    return useSanPlot
      ? xNoiseSanPlot(data, { factorStd: thresholdFactor })
      : formatResult(xAbsoluteMedian(data) * thresholdFactor);
  }
}
