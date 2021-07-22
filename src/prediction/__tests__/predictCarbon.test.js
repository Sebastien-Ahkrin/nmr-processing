import OCL from 'openchemlib/minimal';

import { predictCarbon } from '../predictCarbon';

import carbonDBWithStatistic from './data/carbonDB-withStatistic';
import carbonDBWithoutStatistic from './data/carbonDB-withoutStatistic';

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

describe('carbon prediction', () => {
  const molecule = OCL.Molecule.fromMolfile(molfile);
  it('ethylbenzene', async () => {
    const prediction = await predictCarbon(molecule);
    expect(prediction.joinedSignals).toHaveLength(6);
    expect(prediction.signals).toHaveLength(8);
    expect(prediction.joinedSignals[0]).toStrictEqual({
      delta: 128.4,
      assignment: [0, 6],
      diaID: ['daD@@LdRTIT@E@@q@TGzP`NET'],
      nbAtoms: 2,
      j: [],
    });
  });
  it('ethylbenzene localDB', async () => {
    const prediction = await predictCarbon(molecule, {
      database: carbonDBWithoutStatistic,
    });
    expect(prediction.joinedSignals).toHaveLength(6);
    expect(prediction.signals).toHaveLength(8);
    expect(prediction.joinedSignals[0]).toStrictEqual({
      delta: 128.4,
      assignment: [0, 6],
      diaID: ['daD@@LdRTIT@E@@q@TGzP`NET'],
      nbAtoms: 2,
      j: [],
    });
  });
  it('ethylbenzene localDB with statistic', async () => {
    const prediction = await predictCarbon(molecule, {
      database: carbonDBWithStatistic,
    });
    expect(prediction.joinedSignals).toHaveLength(6);
    expect(prediction.signals).toHaveLength(8);
    const firstSignal = prediction.joinedSignals[0];
    expect(firstSignal.delta).toStrictEqual(128.4);
    expect(!firstSignal.statistic).toStrictEqual(false);
  });
});
