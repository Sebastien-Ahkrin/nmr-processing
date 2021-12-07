import { Molecule } from 'openchemlib';

import type { NMRRange } from '../xy/NMRRange';
import type { NMRZone } from '../xyz/NMRZone';

export interface NMRAssignmentType {
  /**
   * It has the number of each atoms in the chemical structure. e.g. { C: 6, H: 6 }
   */
  atoms: { [key: string]: number };
  /**
   * Contains the ranges for each nucleus or kind of experiment e.g. { H: [], C: [], apt: [], dept135: []}
   * the ranges represented with atom label only contain the range from a single pulse experiment or equivalent.
   */
  ranges: { [key: string]: NMRRange[] };
  /**
   * Contains the zones for each kind of experiment e.g. { H: [], C: [], apt: [], dept135: []};
   */
  zones: { [key: string]: NMRZone[] };
  /**
   * Instance of Molecule
   */
  molecule: Molecule;
}
