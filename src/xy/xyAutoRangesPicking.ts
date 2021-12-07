import type { DataXY } from 'cheminfo-types';

import { peaksFilterImpurities } from '../peaks/peaksFilterImpurities';
import type { OptionsPeaksFilterImpurities } from '../peaks/peaksFilterImpurities';
import { OptionsPeaksToRanges, peaksToRanges } from '../peaks/peaksToRanges';

import { xyAutoPeaksPicking } from './xyAutoPeaksPicking';
import type { OptionsXYAutoPeaksPicking } from './xyAutoPeaksPicking';

interface OptionsXYAutoRangesPicking {
  peakPicking?: OptionsXYAutoPeaksPicking;
  impurities?: OptionsPeaksFilterImpurities;
  ranges?: OptionsPeaksToRanges;
}

/**
 * Detect peaks, optimize parameters and compile multiplicity if required.
 */
export function xyAutoRangesPicking(
  data: DataXY,
  options: OptionsXYAutoRangesPicking = {},
) {
  let peaks = xyAutoPeaksPicking(data, options.peakPicking);
  peaks = peaksFilterImpurities(peaks, options.impurities);
  return peaksToRanges(data, peaks, options.ranges);
}
