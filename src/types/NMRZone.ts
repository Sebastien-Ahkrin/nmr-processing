import type { NMRSignal2D } from './NMRSignal2D';

interface FromTo {
  from: number;
  to: number;
}

export interface NMRZone {
  x: FromTo;
  y: FromTo;
  id?: string;
  signals: NMRSignal2D;
}
