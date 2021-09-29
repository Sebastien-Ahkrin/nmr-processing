import type { Matrix } from 'ml-matrix';

export interface SpinSystem {
  clusters: number[][];
  couplingConstants: Matrix;
  chemicalShifts: number[];
  multiplicity: number[];
  connectivity: Matrix;
}
