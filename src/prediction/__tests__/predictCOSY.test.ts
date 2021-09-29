import OCL from 'openchemlib/minimal';

import { predictCOSY } from '../predictCOSY';

describe('prediction of 2D nmr spectrum', () => {
  const molecule = OCL.Molecule.fromSmiles('CCc1ccccc1');
  it('predict cosy', async () => {
    const result = await predictCOSY(molecule);
    const signals = result.joinedSignals;

    const expectedDeltas = [
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
    expect(result.nucleus).toStrictEqual(['1H', '1H']);
  }, 30000);
  it('predict cosy without diagonal', async () => {
    const result = await predictCOSY(molecule, { includeDiagonal: false });
    const signals = result.joinedSignals;
    const expectedDeltas = [
      [7.26, 7.196],
      [7.26, 7.162],
      [7.196, 7.26],
      [7.162, 7.26],
      [2.653, 0.992],
      [0.992, 2.653],
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
  }, 30000);
});
