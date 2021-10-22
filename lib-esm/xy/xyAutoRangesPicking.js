import { peaksFilterImpurities } from '../peaks/peaksFilterImpurities';
import { peaksToRanges } from '../peaks/peaksToRanges';
import { xyAutoPeaksPicking } from './xyAutoPeaksPicking';
/**
 * Detect peaks, optimize parameters and compile multiplicity if required.
 */
export function xyAutoRangesPicking(data, options = {}) {
    let peaks = xyAutoPeaksPicking(data, options.peakPicking);
    peaks = peaksFilterImpurities(peaks, options.impurities);
    return peaksToRanges(data, peaks, options.ranges);
}
//# sourceMappingURL=xyAutoRangesPicking.js.map