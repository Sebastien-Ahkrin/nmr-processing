import { Range } from '../types/range';

export interface DatabaseNMREntry {
  smiles?: string;
  solvent: string;
  nucleus: string;
  jcampURL?: string;
  names?: string[];
  meta?: Record<string, string>;
  ranges: Range[];
}
