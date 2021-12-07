import type { FromTo } from 'cheminfo-types';

import type { NMRSignal2D } from './NMRSignal2D';

export interface NMRZone {
  x: FromTo;
  y: FromTo;
  id?: string;
  signals: NMRSignal2D[];
}
