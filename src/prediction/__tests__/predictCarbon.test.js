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
    expect(!prediction.joinedSignals[0].statistic).toBe(false);
  });
  it('empty molecule', async () => {
    const molecule = new OCL.Molecule(16, 16);
    const result = await predictCarbon(molecule);
    expect(result.diaIDs).toStrictEqual([]);
    expect(result.joinedSignals).toStrictEqual([]);
    expect(result.signals).toStrictEqual([]);
    expect(result.ranges).toStrictEqual([]);
    expect(result.molecule.getAllAtoms()).toBe(0);
    expect(result.molecule.getAllBonds()).toBe(0);
  });
  it('webserviceURL', async () => {
    const molecule = OCL.Molecule.fromSmiles('CCOCC');
    const result = await predictCarbon(molecule, {
      webserviceURL:
        'https://nmr-prediction.service.zakodium.com/v1/predict/carbon',
    });
    expect(result.diaIDs).toHaveLength(15);
    expect(result.joinedSignals).toHaveLength(2);
    expect(result.signals).toHaveLength(4);
    expect(result.ranges).toHaveLength(2);
    expect(result.molecule.getAllAtoms()).toBe(15);
    expect(result.molecule.getAllBonds()).toBe(14);
  });
});
