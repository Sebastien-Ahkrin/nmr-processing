import type { Peak2D } from 'ml-matrix-peaks-finder';

export interface Signal2DAxisData {
  nucleus?: string;
  delta: number;
  resolution?: number;
  atoms?: number[];
  diaIDs?: string[];
  from: number;
  to: number;
}
export interface NMRSignal2D {
  x: Signal2DAxisData;
  y: Signal2DAxisData;
  id?: string;
  peaks?: Peak2D[];
  kind?: string;

  _highlight?: (number | string)[];
}
