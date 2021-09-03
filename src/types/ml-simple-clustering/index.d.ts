interface OptionsSimpleClustering {
  threshold?: number;
  out?: 'assignment' | 'indexes' | 'values';
}

declare module 'ml-simple-clustering' {
  export as namespace simpleClustering;

  export = simpleClustering;

  declare function simpleClustering(
    dataMatrix: number[] | number[][],
    options?: OptionsSimpleClustering,
  ): number[][];
}
