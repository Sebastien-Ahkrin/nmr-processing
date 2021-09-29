import OCL from 'openchemlib/minimal';

import { predictHMBC } from '../predictHMBC';

import carbonDB from './data/carbonDB-withoutStatistic.json';

describe('prediction of 2D nmr spectrum', () => {
  const molecule = OCL.Molecule.fromSmiles('CCc1ccccc1');
  it('predict HBMC', async () => {
    jest.setTimeout(30000);
    const result = await predictHMBC(molecule, {
      predictOptions: {
        C: {
          database: carbonDB,
        },
      },
    });
    const signals = result.joinedSignals;
    const expectedDeltas = [
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

    const stringDeltas = expectedDeltas.map((d) =>
      d.map((e) => e.toFixed(3)).join('-'),
    );
    const deltas = signals.map(
      (signal) => `${signal.x.delta.toFixed(3)}-${signal.y.delta.toFixed(3)}`,
    );
    stringDeltas.sort((a: string, b: string) => a.localeCompare(b));
    deltas.sort((a: string, b: string) => a.localeCompare(b));
    expect(stringDeltas).toStrictEqual(deltas);
  });
});
