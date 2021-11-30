declare module 'ml-simple-clustering' {
  export = simpleClustering;
  function simpleClustering(
    dataMatrix: number[] | number[][],
    options?: OptionsSimpleClustering,
  ): number[][];
}

interface OptionsSimpleClustering {
  threshold?: number;
  out?: 'assignment' | 'indexes' | 'values';
}
