import type { NMRSignal1D } from './NMRSignal1D';

export interface NMRRange {
  from: number;
  to: number;
  diaIDs?: string[];
  kind?: string;
  pubIntegral?: number;
  integration?: number;
  signals?: NMRSignal1D[];
}
