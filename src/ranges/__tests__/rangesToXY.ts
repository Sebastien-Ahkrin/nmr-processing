import { xyAutoPeaksPicking } from '../../xy/xyAutoPeaksPicking';
import { rangesToXY } from '../rangesToXY';

describe('general test', () => {
  it('s, br s', () => {
    const ranges = [
      {
        from: 1,
        to: 1.5,
        signals: [
          {
            delta: 1.25,
            multiplicity: 's',
          },
        ],
      },
      {
        from: 1.5,
        to: 1.7,
        signals: [
          {
            delta: 1.6,
            multiplicity: 'b',
          },
        ],
      },
    ];

    const spectrum = rangesToXY(ranges, { nbPoints: 16 * 1024, from: 1, to: 1.7});
    const peaks = xyAutoPeaksPicking(spectrum);
    expect(peaks).toHaveLength(2);
  });
});
