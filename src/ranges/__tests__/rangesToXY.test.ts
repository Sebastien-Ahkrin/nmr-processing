import { resurrect } from '../..';
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

    const spectrum = rangesToXY(ranges, { nbPoints: 1024, from: 1, to: 1.7 });
    const peaks = xyAutoPeaksPicking(spectrum);
    expect(peaks).toHaveLength(2);
  });

  it('d, m', () => {
    const ranges = [
      {
        from: 1,
        to: 1.5,
        signals: [
          {
            delta: 1.25,
            multiplicity: 'd',
            js: [{ coupling: 16, multiplicity: 'd' }],
          },
        ],
      },
      {
        from: 1.55,
        to: 1.7,
        signals: [
          {
            delta: 1.6,
            multiplicity: 'm',
          },
        ],
      },
    ];

    const spectrum = rangesToXY(ranges, { nbPoints: 1024, from: 1.1, to: 1.7 });
    const peaks = xyAutoPeaksPicking(spectrum);
    expect(peaks).toHaveLength(11);
  });
  it.skip('from ACS', () => {
    const acs = `1H NMR (CDCl3, 400 MHz) d: 5.55 (d, J = 8.1 Hz, 1H, H-10 ), 4.72 (br s, 1H),
    4.29 (m, 1H, H-50 ), 3.53 (m, 2H, H-30 , H-40 ), 3.42  
    (m, 1H, H-20 ), 3.15 (dd, J = 6.0 Hz, J = 10.0 Hz, 1H, H-3), 3.00 (td, J = 11.0 Hz,  
    J = 4.5 Hz, 1H, H-19), 1.69 (s, 1H, H-30)`;
    const ranges = resurrect(acs);
    expect(ranges).toHaveLength(7)
  });
});
