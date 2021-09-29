import type { Molecule } from 'openchemlib';

import type { Range } from "./range";
import type { Signal1D } from "./signal1D";

export interface Prediction1D {
  molfile: string;
  diaIDs: string[];
  nucleus: string;
  joinedSignals: Signal1D[];
  signals: Signal1D[];
  ranges: Range[];
  molecule: Molecule;
}
