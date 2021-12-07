import type { Molecule } from 'openchemlib';

import type { NMRSignal1D } from '../signals/NMRSignal1D';
import type { NMRRange } from '../xy/NMRRange';

export interface Prediction1D {
  molfile: string;
  diaIDs: string[];
  nucleus: string;
  joinedSignals: NMRSignal1D[];
  signals: NMRSignal1D[];
  ranges: NMRRange[];
  molecule: Molecule;
}
