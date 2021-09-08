import type { Jcoupling } from './jcoupling';

interface Signal1D {
  delta: number;
  // js: Jcoupling[];
  atomIDs: number[];
  assignment?: string | string[];
  diaIDs?: string[];
  nbAtoms?: number;
}
