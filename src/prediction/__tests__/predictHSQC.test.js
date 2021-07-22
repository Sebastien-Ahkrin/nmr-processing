import OCL from 'openchemlib/minimal';

import { predictHSQC } from '../predictHSQC';

import carbonDB from './data/carbonDB-withoutStatistic.json';

const molfile = `Benzene, ethyl-, ID: C100414
  NIST    16081116462D 1   1.00000     0.00000
Copyright by the U.S. Sec. Commerce on behalf of U.S.A. All rights reserved.
  8  8  0     0  0              1 V2000
    0.5015    0.0000    0.0000 C   0  0  0  0  0  0           0  0  0
    0.0000    0.8526    0.0000 C   0  0  0  0  0  0           0  0  0
    1.5046    0.0000    0.0000 C   0  0  0  0  0  0           0  0  0
    2.0062    0.8526    0.0000 C   0  0  0  0  0  0           0  0  0
    3.0092    0.8526    0.0000 C   0  0  0  0  0  0           0  0  0
    1.5046    1.7554    0.0000 C   0  0  0  0  0  0           0  0  0
    0.5015    1.7052    0.0000 C   0  0  0  0  0  0           0  0  0
    3.5108    0.0000    0.0000 C   0  0  0  0  0  0           0  0  0
  1  2  2  0     0  0
  3  1  1  0     0  0
  2  7  1  0     0  0
  4  3  2  0     0  0
  4  5  1  0     0  0
  6  4  1  0     0  0
  5  8  1  0     0  0
  7  6  2  0     0  0
M  END
`;

describe('prediction of 2D nmr spectrum', () => {
  const molecule = OCL.Molecule.fromMolfile(molfile);
  it('predict HSQC', async () => {
    const result = await predictHSQC(molecule, {
      predictOptions: {
        C: {
          database: carbonDB,
        },
      },
    });
    const signals = result.joinedSignals;
    const deltas = signals.map((e) => [e.x.delta, e.y.delta]);

    expect(deltas).toStrictEqual([
      [7.26, 128.4],
      [7.196, 127.8],
      [7.162, 128.8],
      [2.653, 28.7],
      [0.992, 14.6],
    ]);
  });
});
