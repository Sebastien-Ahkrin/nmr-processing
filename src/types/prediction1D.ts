import type { Molecule } from 'openchemlib';

import type { NMRRange } from "./NMRRange";
import type { NMRSignal1D } from "./NMRSignal1D";

export interface Prediction1D {
  molfile: string;
  diaIDs: string[];
  nucleus: string;
  joinedSignals: NMRSignal1D[];
  signals: NMRSignal1D[];
  ranges: NMRRange[];
  molecule: Molecule;
}
