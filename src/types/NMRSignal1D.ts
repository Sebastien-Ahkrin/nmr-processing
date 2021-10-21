import type { GSDPeak } from 'ml-gsd';

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
  peaks?: GSDPeak[];
  statistic?: {
    mean: number;
    sd: number;
    min: number;
    max: number;
    nb: number;
  };
}
