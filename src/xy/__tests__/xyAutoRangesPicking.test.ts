import { toBeDeepCloseTo, toMatchCloseTo } from 'jest-matcher-deep-close-to';
import tripletQuadruplet from 'nmr-xy-testdata/data/pure/d1-2_j7.json';

import { xyAutoRangesPicking } from '../xyAutoRangesPicking';

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

describe('xyAutoRangesPicking', () => {
  it('a triplet and a quadruplet', () => {
    let ranges = xyAutoRangesPicking(tripletQuadruplet, {});
    expect(ranges).toHaveLength(2);
    expect(ranges[1]).toMatchCloseTo(
      {
        from: 1.96628,
        to: 2.03413,
        integration: 40,
        signals: [
          {
            multiplicity: 'q',
            js: [{ coupling: 7, multiplicity: 'q' }],
            delta: 2,
          },
        ],
      },
      2,
    );
    expect(ranges[0]).toMatchCloseTo(
      {
        from: 0.97473,
        to: 1.02492,
        integration: 60,
        signals: [
          {
            multiplicity: 't',
            js: [{ coupling: 7, multiplicity: 't' }],
            delta: 1,
          },
        ],
      },
      2,
    );
  });
});
