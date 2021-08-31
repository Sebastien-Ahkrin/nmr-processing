declare module 'ml-sparse-matrix' {
  interface OptionsContructor {
    threshold: number;
    minLoadFactor: number;
    maxLoadFactor: number;
    distinct: number;
    freeEntries: number;
    lowWaterMark: number;
  }
  class SparseMatrix {
    public rows: number;
    public columns: number;
    public constructor(rows: SparseMatrix);

    public constructor(
      rows: number,
      columns: number,
      options?: OptionsContructor,
    );

    public constructor(rows: number[][], columns: Partial<OptionsContructor>);

    public forEachNonZero(
      callback: (i: number, j: number, v: number) => void,
    ): this;

    public static eye(rows: number, columns?: number): SparseMatrix;

    public kroneckerProduct(other: SparseMatrix): SparseMatrix;
    public add(other: SparseMatrix): SparseMatrix;
    public mul(other: number): SparseMatrix;
    public mmul(other: SparseMatrix)
  }
}
