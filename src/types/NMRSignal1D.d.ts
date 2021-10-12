import type { Jcoupling } from './jcoupling';
import { GSDPeak } from './ml-gsd/index.d';

interface NMRSignal1D {
  delta: number;
  js?: Jcoupling[];
  atomIDs?: number[];
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
