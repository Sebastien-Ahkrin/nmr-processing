import OCL from 'openchemlib/minimal';

import { predictCarbon } from '../predictCarbon';

import carbonDBWithStatistic from './data/carbonDB-withStatistic';
import carbonDBWithoutStatistic from './data/carbonDB-withoutStatistic';

describe('carbon prediction', () => {
  const molecule = OCL.Molecule.fromSmiles('CCc1ccccc1');
  it('ethylbenzene', async () => {
    const prediction = await predictCarbon(molecule);
    expect(prediction.joinedSignals).toHaveLength(6);
    expect(prediction.signals).toHaveLength(8);
  });
  it('ethylbenzene localDB', async () => {
    const prediction = await predictCarbon(molecule, {
      database: carbonDBWithoutStatistic,
    });
    expect(prediction.joinedSignals).toHaveLength(6);
    expect(prediction.signals).toHaveLength(8);
  });
  it('ethylbenzene localDB with statistic', async () => {
    const prediction = await predictCarbon(molecule, {
      database: carbonDBWithStatistic,
    });
    expect(prediction.joinedSignals).toHaveLength(6);
    expect(prediction.signals).toHaveLength(8);
    expect(!prediction.joinedSignals[0].statistic).toStrictEqual(false);
  });
});
