import { generateSpectrum2D } from 'spectrum-generator';
import { writeFileSync} from 'fs'
import { xyzAutoPeaksPicking } from '../xyzAutoPeaksPicking';

describe('testing', () => {
  it('same nbpoints', () => {
    const spectrum = generateSpectrum2D([{ x: 4.99, y: 4.99, z: 100 }, { x: 5.01, y: 5.01, z: 100 }, { x: 5.01, y: 4.99, z: 100 }, { x: 4.99, y: 5.01, z: 100 }], {
      generator: { from: 4.8, to: 5.2, nbPoints: 128 },
      peaks: { width: { x: 0.01, y: 0.01}}
    });
    console.log(spectrum.minX, spectrum.maxX);
    writeFileSync('spectrum.json', JSON.stringify(spectrum.z.map(e => Array.from(e))));
    const zones = xyzAutoPeaksPicking(spectrum, {
      observedFrequencies: [400, 400],
      convolutionByFFT: true,
      kernel: {sigma: 1.4}
    });
    console.log(zones);
    expect(zones).toHaveLength(1);
  });
});
