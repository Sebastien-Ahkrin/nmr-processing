import { toBeDeepCloseTo, toMatchCloseTo } from 'jest-matcher-deep-close-to';
import { getShape1D, Shape1D } from 'ml-peak-shape-generator';
import noisyBigPeakSmallPeak from 'nmr-xy-testdata/data/noisy/noisyBigPeakSmallPeak.json';
import tripletQuadruplet from 'nmr-xy-testdata/data/pure/d1-2_j7.json';

import { xyAutoPeaksPicking } from '../xyAutoPeaksPicking';

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

describe('xyAutoPeaksPicking', () => {
  it('a triplet and a quadruple', () => {
    let options = {};

    let peaks = xyAutoPeaksPicking(tripletQuadruplet, options);

    const widthToFWHM = getShape1D({ kind: 'gaussian' }).widthToFWHM;
    expect(peaks).toHaveLength(7);
    expect(peaks[1].x).toBeDeepCloseTo(0.999831, 3);
    expect(peaks[1].y / 100).toBeDeepCloseTo(14846602893.68, 1);
    expect(peaks[1].width).toBeDeepCloseTo(widthToFWHM(0.0021514892578125), 3);
  });
  it('mixed spectrum with small and big peaks', () => {
    let options = {
      thresholdFactor: 3,
      compile: false,
      clean: false,
      optimize: false,
      minMaxRatio: 0.01,
      integralType: 'sum',
      nH: 3,
      frequencyCluster: 16,
      widthFactor: 4,
      smoothY: false,
      broadWidth: 0.2,
      shape: { kind: 'lorentzian' } as Shape1D,
      broadRatio: 0,
    };

    let peaks = xyAutoPeaksPicking(noisyBigPeakSmallPeak, options);
    const widthToFWHM = getShape1D({ kind: 'lorentzian' }).widthToFWHM;

    const expectedResult: { [key: string]: any }[] = [
      { x: 2, y: 6.2683, width: 0.4, fwhm: widthToFWHM(0.4) },
      { x: 8, y: 316.503, width: 0.4, fwhm: widthToFWHM(0.4) },
    ];

    expectedResult.forEach((expected, i) => {
      let peak = peaks[i];
      for (let key in expected) {
        //@ts-expect-error
        if (typeof peak[key] === 'object') {
          //@ts-expect-error
          expect(peak[key]).toMatchCloseTo(expected[key], 2);
        } else {
          //@ts-expect-error
          expect(peak[key]).toBeCloseTo(expected[key], 2);
        }
      }
    });
  });

  it('negative spectrum', () => {
    let y = tripletQuadruplet.y;
    for (let i = 0; i < y.length; i++) {
      y[i] *= -1;
    }
    tripletQuadruplet.y = y;
    let options = { lookNegative: true };

    let peaks = xyAutoPeaksPicking(tripletQuadruplet, options);
    expect(peaks).toHaveLength(7);
    expect(peaks[1].x).toBeDeepCloseTo(0.999831, 3);
    expect(peaks[1].y / 100).toBeDeepCloseTo(-14846602893.68, 1);
    expect(peaks[1].width).toBeDeepCloseTo(0.0021514892578125, 3);
  });
});
