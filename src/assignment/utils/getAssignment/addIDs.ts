import type { NMRRange, NMRSignal1D, NMRSignal2D, NMRZone } from "../../..";
import { MakeMandatory } from "../../../utilities/MakeMandatory";
import type { SpectraData, SpectraData1D, SpectraData2D } from "../../getAssignments";
import generateID from "../generateID";

export type NMRZoneWithIds = Exclude<
  MakeMandatory<NMRZone, 'id'>,
  'signals'
> & { signals: MakeMandatory<NMRSignal2D, 'id'> };

export type NMRRangeWithIds = Exclude<
  MakeMandatory<NMRRange, 'id'>,
  'signals'
> & { signals: MakeMandatory<NMRSignal1D, 'id'> };

type SpectraData1DWithIds = Exclude<SpectraData1D, 'range'> & { ranges: NMRRangeWithIds[] }
type SpectraData2DWithIds = Exclude<SpectraData2D, 'zones'> & { zones: NMRZoneWithIds[] }

export type SpectraDataWithIds = SpectraData1DWithIds | SpectraData2DWithIds;

export function addIDs(input: SpectraData[] = []): SpectraDataWithIds[] {
  let spectra = JSON.parse(JSON.stringify(input));
  for (const spectrum of spectra) {
    const { ranges, zones } = spectrum;
    let data = ranges ? ranges : zones;
    for (const element of data) {
      const { integration } = element;
      if (!element.id) element.id = generateID();
      for (let signal of element.signals) {
        if (!signal.id) signal.id = generateID();
        if (!signal.integration) signal.integration = integration;
      }
    }
  }
  return spectra;
}