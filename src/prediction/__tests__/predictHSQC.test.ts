import OCL from 'openchemlib/minimal';

import { predictHSQC } from '../predictHSQC';

import carbonDB from './data/carbonDB-withoutStatistic.json';

describe('prediction of 2D nmr spectrum', () => {
  const molecule = OCL.Molecule.fromSmiles('CCc1ccccc1');
  it('predict HSQC', async () => {
    const result = await predictHSQC(molecule, {
      predictOptions: {
        C: {
          database: carbonDB,
        },
      },
    });

    const expectedDeltas = [
      [7.26, 128.4],
      [7.196, 127.8],
      [7.162, 128.8],
      [2.653, 28.7],
      [0.992, 14.6],
    ];

    const signals = result.joinedSignals;

    const stringDeltas = expectedDeltas.map((d) =>
      d.map((e) => e.toFixed(3)).join('-'),
    );
    const deltas = signals.map(
      (signal) => `${signal.x.delta.toFixed(3)}-${signal.y.delta.toFixed(3)}`,
    );
    stringDeltas.sort((a: string, b: string) => a.localeCompare(b));
    deltas.sort((a: string, b: string) => a.localeCompare(b));
    expect(stringDeltas).toStrictEqual(deltas);
  }, 30000);
});
