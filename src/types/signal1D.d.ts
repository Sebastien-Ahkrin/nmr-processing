interface Jcoupling {
  coupling: number;
  atomIDs: number[];
}

export interface Signal1D {
  delta: number;
  js: Jcoupling[];
  atomIDs: number[];
  diaIDs: string[];
  nbAtoms: number;
}
