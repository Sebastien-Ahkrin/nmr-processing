declare module 'ml-matrix-convolution' {
  interface ConvolutionOptions {
    rows: number;
    cols: number;
  }
  function fft(
    absoluteData: number[] | Float64Array,
    kernel: number[][] | Float64Array[],
    options: ConvolutionOptions,
  ): number[] | Float64Array;
  function direct(
    absoluteData: number[] | Float64Array,
    kernel: number[][] | Float64Array[],
    options: ConvolutionOptions,
  ): number[] | Float64Array;
}
