import { DataXY } from 'cheminfo-types';
import { gsd, joinBroadPeaks, optimizePeaks } from 'ml-gsd';
import type {
  Peak1D,
  GSDOptions,
  OptimizePeaksOptions,
  JoinBroadPeaksOptions,
} from 'ml-gsd';
import {
  xyExtract,
  xNoiseSanPlot,
  xAbsoluteMedian,
} from 'ml-spectra-processing';

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

export interface GetPeakListOptions
  extends GSDOptions,
    OptimizePeaksOptions,
    JoinBroadPeaksOptions {
  /**
   * If it is true, the peaks parameters will be optimized.
   * @default false
   */
  optimize: boolean;
}

export interface OptionsXYAutoPeaksPicking
  extends Partial<GetPeakListOptions> {
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
): Peak1D[] {
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

  let getPeakOptions: GetPeakListOptions = {
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

function getPeakList(data: DataXY, options: GetPeakListOptions) {
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
    noiseLevel,
    smoothY,
    realTopDetection,
  });

  if (broadWidth) {
    peakList = joinBroadPeaks(data, peakList, {
      broadRatio,
      broadWidth,
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

function getNegativePeaks(data: DataXY, options: GetPeakListOptions) {
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
