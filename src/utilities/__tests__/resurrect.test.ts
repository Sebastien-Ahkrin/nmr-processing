/* eslint-disable no-tabs */

import { resurrect } from '../resurrect';

describe('resurrect', () => {
  it.skip('angewandte Chemie', () => {
    const string = `
	1H-NMR (400 MHz, CDCl3) 5.96 (dd, J1 = 10.0 Hz, J2 = 5.4 Hz, 1 H), 5.71 (dd, J1 = 
	10.1 Hz, J2 = 1.1 Hz, 1 H), 5.14 (br. s, 1 H), 4.71 (dd, J1 = 11.1 Hz, J2 = 3.7 Hz, 1 H), 
	4.07 (sept., J = 6.2 Hz, 1 H), 2.41 (dd, J1 = 17.7 Hz, J2 = 11.2 Hz, 1 H), 2.23 (dd, J1 = 
	17.7 Hz, J2 = 4.1 Hz, 1 H), 1.29 (d, J = 6.2 Hz, 3 H), 1.19 (d, J = 6.1 Hz, 3 H), 1.00 (t, 
	J = 7.8 Hz, 9 H), 0.63 (q, J = 7.8 Hz, 6 H).`;
    const ranges = resurrect(string).ranges;
    expect(ranges).toMatchSnapshot();
  });

  it.skip('JOC', () => {
    const string = `
	H-NMR (CDCl, 300 MHz) 3.68 (s, 2H), 3.70-3.74 (m, 4H), 3.93 (dd, 1H, J = 9.7, 
	J2 = 3.7), 4.49 (d, 2 H, J = 4.1), 4.56-4.61 (m, 1H), 5.12 (s, 2H), 5.81 (d, 1H, J = 7.5), 
	7.24-7.37 (m, 10H).`;
    const ranges = resurrect(string).ranges;
    expect(ranges).toMatchSnapshot();
  });

  it('Tetrahedron', () => {
    const string = `
	1H NMR (CDCl3, 400 MHz) d: 5.55 (d, J = 8.1 Hz, 1H, H-10 ), 4.72 (br s, 1H),
	4.29 (m, 1H, H-50 ), 3.53 (m, 2H, H-30 , H-40 ), 3.42  
	(m, 1H, H-20 ), 3.15 (dd, J = 6.0 Hz, J = 10.0 Hz, 1H, H-3), 3.00 (td, J = 11.0 Hz,  
	J = 4.5 Hz, 1H, H-19), 1.69 (s, 1H, H-30)
`;
    const ranges = resurrect(string).ranges;
    expect(ranges).toMatchSnapshot();
  });

  it.skip('Parenthesis', () => {
    const string = `
1H NMR (400 MHz, CDCl3): d/ppm 0.89 (t, 3H, J = 7.0 Hz, CH3), 1.23-1.45 {m, 24H, CH3(CH2)12- 
}, 1.77 (qt, 2H, J = 7.4 Hz, -CH2CH2COO-), 2.58 (t, 2H, J = 7.5 Hz, -CH2COO-), 7.14 (d, 2H, J = 
8.7 Hz, Ar-H), 7.26 (d, 2H, J = 8.7 Hz, Ar-H), 7.41 (dd, 1H, J = 7.8 Hz, 4.9 Hz, Ar-H), 8.30 (d, 1H, 
J = 7.9 Hz, Ar-H), 8.51 (s, 1H, CH=N), 8.71 (dd, 1H, J = 4.7 Hz, 1.4 Hz, Ar-H), 9.02 (d, 1H, J = 
1.4 Hz, Ar-H). 
`;
    const ranges = resurrect(string).ranges;
    expect(ranges).toMatchSnapshot();
  });

  it('J. Org. Chem.', () => {
    const string = `1H NMR (CDCl3) δ 10.58 (b, 1H), 7.40 (d, 1H, J = 8.0 Hz), 6.19 (d, 1H, J = 7.6 Hz), 4.88 (s, 1H), 4.46 (m, 1H), 4.25 (m, 1H), 4.08 (m, 1H), 3.90−3.95 (m, 2H), 2.17 (s, 3H), 1.02 (s, 9H), 1.01 (s, 9H), 0.89 (s, 9H), 0.12 (s, 3H), 0.11 (s, 3H)`;
    const ranges = resurrect(string).ranges;
    expect(ranges).toMatchSnapshot();
  });
});
