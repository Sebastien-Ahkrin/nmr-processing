import type { Jcoupling } from './jcoupling';

interface Signal1D {
  delta: number;
  js?: Jcoupling[];
  atomIDs?: number[];
  assignment?: string;
  multiplicity?: string;
  diaID?: string;
  nbAtoms?: number;
}
