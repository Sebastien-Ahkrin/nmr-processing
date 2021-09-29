declare module 'ml-spectra-processing' {
  interface XYNumberArray {
    x: Array<number> | Float64Array;
    y: Array<number> | Float64Array;
  }

  function xyExtract(
    data: XYNumberArray,
    options?: { zones: { from: number; to: number }[] },
  ): XYNumberArray;

  interface xNoiseSanPlotOptions {
    mask?: boolean[];
    cutOff?: number;
    logBaseY?: number;
    refine?: boolean;
    magnitudeMode?: boolean;
    scaleFactor?: number;
    factorStd?: number;
    fixOffset?: boolean;
  }

  interface xNoiseSanPlotResult {
    positive: number;
    negative: number;
    snr: number;
    sanplot: {
      positive: XYNumberArray;
      negative: XYNumberArray;
    };
  }
  function xNoiseSanPlot(
    data: number[] | Float64Array,
    options?: xNoiseSanPlotOptions,
  ): xNoiseSanPlotResult;

  function xAbsoluteMedian(data: number[] | Float64Array): number;

  interface xGetFromToIndexOptions {
    fromIndex?: number;
    toIndex?: number;
    from?: number;
    to?: number;
  }

  interface xyIntegrationOptions extends xGetFromToIndexOptions {}

  function xyIntegration(data: XYNumberArray, options?: xyIntegrationOptions): number;

  function xGetFromToIndex(x: number[] | Float64Array, options?: xGetFromToIndexOptions): number;
}
