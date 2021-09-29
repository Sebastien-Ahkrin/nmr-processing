import { Molecule } from 'openchemlib';

import { Zone } from './Zone';
import type { Range } from './range';

export interface NMRAssignmentType {
  /**
   * It has the number of each atoms in the chemical structure. e.g. { C: 6, H: 6 }
   */
  atoms: { [key: string]: number };
  /**
   * Contains the ranges for each nucleus or kind of experiment e.g. { H: [], C: [], apt: [], dept135: []}
   * the ranges represented with atom label only contain the range from a single pulse experiment or equivalent.
   */
  ranges: { [key: string]: Range[] };
  /**
   * Contains the zones for each kind of experiment e.g. { H: [], C: [], apt: [], dept135: []};
   */
  zones: { [key: string]: Zone[] };
  /**
   * Instance of Molecule
   */
  molecule: Molecule;
}