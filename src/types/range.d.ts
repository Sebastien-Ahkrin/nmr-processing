import type { Signal1D } from './signal1D';

export interface Range {
  from: number;
  to: number;
  diaIDs?: string[];
  kind?: string;
  pubIntegral?: number;
  integration?: number;
  signals?: Signal1D[];
}
