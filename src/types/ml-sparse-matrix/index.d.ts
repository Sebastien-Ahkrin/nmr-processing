declare module 'ml-sparse-matrix' {
  interface OptionsContructor {
    threshold: number;
    minLoadFactor: number;
    maxLoadFactor: number;
    distinct: number;
    freeEntries: number;
    lowWaterMark: number;
    initialCapacity: number;
  }
  class SparseMatrix {
    public rows: number;
    public columns: number;
    public constructor(rows: SparseMatrix);

    public constructor(
      rows: number,
      columns: number,
      options?: Partial<OptionsContructor>,
    );

    public constructor(rows: number[][], columns: Partial<OptionsContructor>);

    public forEachNonZero(
      callback: (i: number, j: number, v: number) => void,
    ): this;

    public static eye(rows: number, columns?: number): SparseMatrix;

    public kroneckerProduct(other: SparseMatrix): SparseMatrix;
    public add(other: SparseMatrix): SparseMatrix;
    public mul(other: number): SparseMatrix;
    public mmul(other: SparseMatrix): SparseMatrix;
    public get(rowIndex: number, columnIndex: number): number;
    public set(rowIndex: number, columnIndex: number, value: number): this;
    public clone(): SparseMatrix;
  }
}
