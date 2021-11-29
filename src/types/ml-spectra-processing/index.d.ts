declare module 'ml-spectra-processing' {
  interface XYNumberArray {
    x: Array<number> | Float64Array;
    y: Array<number> | Float64Array;
  }

  function xyExtract(
    data: XYNumberArray,
    options?: { zones: { from: number; to: number }[] },
  ): XYNumberArray;

  interface XNoiseSanPlotOptions {
    mask?: boolean[];
    cutOff?: number;
    logBaseY?: number;
    refine?: boolean;
    magnitudeMode?: boolean;
    scaleFactor?: number;
    factorStd?: number;
    fixOffset?: boolean;
  }

  interface XNoiseSanPlotResult {
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
    options?: XNoiseSanPlotOptions,
  ): XNoiseSanPlotResult;

  function xAbsoluteMedian(data: number[] | Float64Array): number;

  interface XGetFromToIndexOptions {
    fromIndex?: number;
    toIndex?: number;
    from?: number;
    to?: number;
  }

  interface XYIntegrationOptions extends XGetFromToIndexOptions {}

  function xyIntegration(
    data: XYNumberArray,
    options?: XYIntegrationOptions,
  ): number;

  function xGetFromToIndex(
    x: number[] | Float64Array,
    options?: XGetFromToIndexOptions,
  ): number;
}
