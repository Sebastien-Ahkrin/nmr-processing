import OCL from 'openchemlib/minimal';

import { predictAll } from '../predictAll';

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

describe('predict all nmr spectrum', () => {
  const molecule = OCL.Molecule.fromMolfile(molfile);

  it('hmbc benzene', async () => {
    const result = await predictAll(molecule, {
      predictOptions: {
        C: {
          database: carbonDB,
        },
      },
    });
    const signals = result.hmbc.joinedSignals;

    const expectedDeltasHMBC = [
      [0.992, 28.7],
      [0.992, 144.2],
      [2.653, 14.6],
      [2.653, 144.2],
      [2.653, 128.8],
      [7.162, 28.7],
      [7.162, 144.2],
      [7.162, 128.4],
      [7.162, 127.8],
      [7.162, 128.8],
      [7.26, 144.2],
      [7.26, 128.8],
      [7.26, 127.8],
      [7.26, 128.4],
      [7.196, 128.8],
      [7.196, 128.4],
    ];

    const stringDeltas = expectedDeltasHMBC.map((d) =>
      d.map((e) => e.toFixed(3)).join('-'),
    );
    const deltas = signals.map(
      (signal) => `${signal.x.delta.toFixed(3)}-${signal.y.delta.toFixed(3)}`,
    );
    stringDeltas.sort();
    deltas.sort();
    expect(stringDeltas).toStrictEqual(deltas);

    const cosySignals = result.cosy.joinedSignals;
    const cosyDeltas = cosySignals.map((e) => [e.x.delta, e.y.delta]);

    expect(cosyDeltas).toStrictEqual([
      [7.26, 7.196],
      [7.26, 7.162],
      [7.196, 7.26],
      [7.162, 7.26],
      [2.653, 0.992],
      [0.992, 2.653],
      [7.26, 7.26],
      [7.196, 7.196],
      [7.162, 7.162],
      [2.653, 2.653],
      [0.992, 0.992],
    ]);

    const hsqcSignals = result.hsqc.joinedSignals;
    const hsqcDeltas = hsqcSignals.map((e) => [e.x.delta, e.y.delta]);

    expect(hsqcDeltas).toStrictEqual([
      [7.26, 128.4],
      [7.196, 127.8],
      [7.162, 128.8],
      [2.653, 28.7],
      [0.992, 14.6],
    ]);
  });

  it('webservice', async () => {
    const result = await predictAll(molecule, {
      predictOptions: {
        C: {
          webserviceURL:
            'https://nmr-prediction.service.zakodium.com/v1/predict/carbon',
        },
      },
    });
    const signals = result.hmbc.joinedSignals;

    const expectedDeltasHMBC = [
      [0.992, 28.7],
      [0.992, 144.2],
      [2.653, 14.6],
      [2.653, 144.2],
      [2.653, 128.8],
      [7.162, 28.7],
      [7.162, 144.2],
      [7.162, 128.4],
      [7.162, 127.8],
      [7.162, 128.8],
      [7.26, 144.2],
      [7.26, 128.8],
      [7.26, 127.8],
      [7.26, 128.4],
      [7.196, 128.8],
      [7.196, 128.4],
    ];

    const stringDeltas = expectedDeltasHMBC.map((d) =>
      d.map((e) => e.toFixed(3)).join('-'),
    );
    const deltas = signals.map(
      (signal) => `${signal.x.delta.toFixed(3)}-${signal.y.delta.toFixed(3)}`,
    );
    stringDeltas.sort();
    deltas.sort();
    expect(stringDeltas).toStrictEqual(deltas);

    const cosySignals = result.cosy.joinedSignals;
    const cosyDeltas = cosySignals.map((e) => [e.x.delta, e.y.delta]);

    expect(cosyDeltas).toStrictEqual([
      [7.26, 7.196],
      [7.26, 7.162],
      [7.196, 7.26],
      [7.162, 7.26],
      [2.653, 0.992],
      [0.992, 2.653],
      [7.26, 7.26],
      [7.196, 7.196],
      [7.162, 7.162],
      [2.653, 2.653],
      [0.992, 0.992],
    ]);

    const hsqcSignals = result.hsqc.joinedSignals;
    const hsqcDeltas = hsqcSignals.map((e) => [e.x.delta, e.y.delta]);

    expect(hsqcDeltas).toStrictEqual([
      [7.26, 128.4],
      [7.196, 127.8],
      [7.162, 128.8],
      [2.653, 28.7],
      [0.992, 14.6],
    ]);
  });
});
