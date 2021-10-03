import { NMRRange } from '../types/NMRRange.d';

export interface DatabaseNMREntry {
  smiles?: string;
  solvent: string;
  nucleus: string;
  jcampURL?: string;
  names?: string[];
  meta?: Record<string, string>;
  ranges: NMRRange[];
}
