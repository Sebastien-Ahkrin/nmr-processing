import type { FromTo } from 'cheminfo-types';
import type { Peak2D } from 'ml-matrix-peaks-finder';

export interface Signal2DAxisData {
  nucleus?: string;
  delta: number;
  resolution?: number;
  atoms?: number[];
  diaIDs?: string[];
}
export interface NMRSignal2D {
  x: Signal2DAxisData;
  y: Signal2DAxisData;
  j?: {
    pathLength?: number | FromTo;
  };
  id?: string;
  peaks?: Peak2D[];
  kind?: string;
}
