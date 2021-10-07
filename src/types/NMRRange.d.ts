import type { NMRSignal1D } from './NMRSignal1D';

export interface NMRRange {
  from: number;
  to: number;
  diaIDs?: string[];
  kind?: string;
  pubIntegral?: number;
  integration?: number;
  multiplicity?: string;
  signals?: NMRSignal1D[];
}
