import type { MPFPeak } from './MPFPeak';

export interface Signal2DAxisData {
  nucleus?: string;
  delta: number;
  resolution?: number;
  atoms?: number[];
  diaIDs?: string[];
  fromTo?: {
    from: number;
    to: number
  };
}
export interface NMRSignal2D {
  x: Signal2DAxisData;
  y: Signal2DAxisData;
  id?: string;
  peaks?: MPFPeak[];
  kind?: string;
  //eslint-disable-next-line
  _highlight?: (number | string)[];
}
