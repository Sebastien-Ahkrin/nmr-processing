import {
  NMRRangeWithIds,
  NMRZoneWithIds,
  SpectraData1DWithIds,
  SpectraData2DWithIds,
  SpectraDataWithIds,
} from './checkIDs';
import { isSpectraData1D } from './isSpectraData1D';

interface SpectraData1DFormatted extends Omit<SpectraData1DWithIds, 'ranges'> {
  ranges: { values: NMRRangeWithIds[] };
}
interface SpectraData2DFormatted extends Omit<SpectraData2DWithIds, 'zones'> {
  zones: { values: NMRZoneWithIds[] };
}

export type SpectraDataFormatted =
  | SpectraData1DFormatted
  | SpectraData2DFormatted;

export function formatData(
  input: SpectraDataWithIds[] = [],
): SpectraDataFormatted[] {
  let inputClone = JSON.parse(JSON.stringify(input)) as SpectraDataWithIds[];
  let spectra: SpectraDataFormatted[] = [];
  for (const spectraData of inputClone) {
    const { info } = spectraData;
    if (isSpectraData1D(spectraData)) {
      spectra.push({ info, ranges: { values: spectraData.ranges } });
    } else {
      spectra.push({ info, zones: { values: spectraData.zones } });
    }
  }
  return spectra;
}
