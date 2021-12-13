import type { NMRRange, NMRSignal1D, NMRSignal2D, NMRZone } from '../../..';
import { MakeMandatory } from '../../../utilities/MakeMandatory';
import type {
  SpectraData,
  SpectraData1D,
  SpectraData2D,
} from '../../getAssignments';
import generateID from '../generateID';

export interface NMRZoneWithIds extends Omit<NMRZone, 'signals' | 'id'> {
  id: string;
  signals: Array<MakeMandatory<NMRSignal2D, 'id'>>;
}

export interface NMRRangeWithIds extends Omit<NMRRange, 'id' | 'signals'> {
  id: string;
  signals: Array<MakeMandatory<NMRSignal1D, 'id'>>;
}

interface SpectraData1DWithIds extends Omit<SpectraData1D, 'ranges'> {
  ranges: { values: NMRRangeWithIds[] };
}
interface SpectraData2DWithIds extends Omit<SpectraData2D, 'zones'> {
  zones: { values: NMRZoneWithIds[] };
}

export type SpectraDataWithIds = SpectraData1DWithIds | SpectraData2DWithIds;

export function formatData(input: SpectraData[] = []): SpectraDataWithIds[] {
  let inputClone = JSON.parse(JSON.stringify(input)) as SpectraData[];
  let spectra: SpectraDataWithIds[] = [];
  for (const spectraData of inputClone) {
    const { info } = spectraData;
    if (isSpectraData1D(spectraData)) {
      let data = addIDs(spectraData.ranges) as NMRRangeWithIds[];
      for (const element of spectraData.ranges) {
        const { integration } = element;
        for (let signal of element.signals || []) {
          if (!signal.integration) signal.integration = integration;
        }
      }
      spectra.push({ info, ranges: { values: data } });
    } else {
      let data = addIDs(spectraData.zones) as NMRZoneWithIds[];
      spectra.push({ info, zones: { values: data } });
    }
  }
  return spectra;
}

function isSpectraData1D(spectrum: SpectraData): spectrum is SpectraData1D {
  return 'ranges' in spectrum;
}

function hasIDs(
  data: NMRRange[] | NMRZone[],
): asserts data is NMRRangeWithIds[] | NMRZoneWithIds[] {
  for (const element of data) {
    if (!element.id) throw new Error('A range/zone has not an ID');
    for (let signal of element.signals || []) {
      if (!signal.id) throw new Error('A signal has not an ID');
    }
  }
}

function addIDs(input: NMRRange[] | NMRZone[]) {
  const data = JSON.parse(JSON.stringify(input)) as NMRRange[] | NMRZone[];
  for (const element of data) {
    if (!element.id) element.id = generateID();
    for (let signal of element.signals || []) {
      if (!signal.id) signal.id = generateID();
    }
  }
  hasIDs(data);
  return data;
}
