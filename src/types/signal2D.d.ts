import type { MPFPeak } from './MPFPeak';

export interface Signal2DAxisData {
  nucleus?: string;
  delta: number;
  resolution?: number;
  atomIDs?: number[];
  diaIDs?: string[];
  fromTo?: {
    from: number;
    to: number
  };
}
export interface Signal2D {
  x: Signal2DAxisData;
  y: Signal2DAxisData;
  peaks?: MPFPeak[];
  _highlight?: (number | string)[];
}
