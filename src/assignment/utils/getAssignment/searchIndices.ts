import { SpectraData } from '../../getAssignments';

import { isSpectraData1D } from './isSpectraData1D';

export function searchIndices(signalId: string, spectra: SpectraData[]) {
  for (let spectrumIndex = 0; spectrumIndex < spectra.length; spectrumIndex++) {
    const spectrum = spectra[spectrumIndex];
    const data = isSpectraData1D(spectrum) ? spectrum.ranges : spectrum.zones;
    for (let elementIndex = 0; elementIndex < data.length; elementIndex++) {
      const signals = data[elementIndex].signals || [];
      for (let signalIndex = 0; signalIndex < signals.length; signalIndex++) {
        if (signalId === signals[signalIndex].id) {
          return { spectrumIndex, signalIndex, elementIndex };
        }
      }
    }
  }
  throw new Error(`There is not a signal with ${signalId} ID`);
}
