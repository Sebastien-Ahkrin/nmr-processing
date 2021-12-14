import { SpectraData, SpectraData1D } from "../../getAssignments";

export function isSpectraData1D(spectrum: SpectraData): spectrum is SpectraData1D {
  return 'ranges' in spectrum;
}
