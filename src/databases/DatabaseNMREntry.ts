import { NMRRange } from '../xy/NMRRange';

export interface DatabaseNMREntry {
  smiles?: string;
  solvent: string;
  nucleus: string;
  jcampURL?: string;
  names?: string[];
  meta?: Record<string, string>;
  ranges: NMRRange[];
}
