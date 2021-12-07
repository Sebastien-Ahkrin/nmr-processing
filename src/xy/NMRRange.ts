import type { NMRSignal1D } from '../signals/NMRSignal1D';

export interface NMRRange {
  from: number;
  to: number;
  id?: string;
  diaIDs?: string[];
  kind?: string;
  pubIntegral?: number;
  integration?: number;
  multiplicity?: string;
  signals?: NMRSignal1D[];
}
