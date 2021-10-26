import type { NMRPeak1D } from './NMRPeak1D';
import type { Jcoupling } from './jcoupling';

export interface NMRSignal1D {
  delta: number;
  js?: Jcoupling[];
  atoms?: number[];
  assignment?: string;
  kind?: string;
  multiplicity?: string;
  diaIDs?: string[];
  nbAtoms?: number;
  integration?: number;
  peaks?: NMRPeak1D[];
  statistic?: {
    mean: number;
    sd: number;
    min: number;
    max: number;
    nb: number;
  };
}
