import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

//@ts-expect-error
import md5 from 'md5';
import OCL from 'openchemlib/minimal';

import { MakeMandatory } from '../../types/MakeMandatory';
import type { Range } from '../../types/range';
import { Signal1D } from '../../types/signal1D';
import { predictProton } from '../predictProton';

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

const cache = (molfile: string, value: any) => {
  const hash = md5(molfile);
  const cacheDir = join(__dirname, 'cache');
  const cacheFilename = join(cacheDir, hash);
  if (!existsSync(cacheDir)) mkdirSync(cacheDir);
  if (value === undefined) {
    if (existsSync(cacheFilename)) {
      return readFileSync(cacheFilename, 'utf8');
    } else {
      return;
    }
  } else {
    writeFileSync(cacheFilename, value, 'utf8');
  }
};

type Signal1DWithJs = MakeMandatory<Signal1D, 'js'>;
type RangeWithSignals = Omit<Range, 'signals'> & { signals: Signal1DWithJs[] };
function checkRange(range: Range): asserts range is RangeWithSignals {
  if (!range.signals) throw new Error('There is not signals in range');
  for (const signal of range.signals) {
    if (!signal.js) throw new Error('There is not js in signal');
  }
}
describe('predictProton', () => {
  it('1H chemical shift prediction', async () => {
    jest.setTimeout(30000);
    const molecule = OCL.Molecule.fromMolfile(molfile);
    const prediction = await predictProton(molecule, { cache });
    expect(Object.keys(prediction)).toStrictEqual([
      'molfile',
      'diaIDs',
      'nucleus',
      'joinedSignals',
      'signals',
      'ranges',
      'molecule',
    ]);
    let firstSignal = prediction.signals[0];

    expect(firstSignal).toStrictEqual({
      atomIDs: [8],
      diaIDs: ['did@`@f\\bbRaih@J@A~dHBIU@'],
      nbAtoms: 1,
      delta: 7.26,
      js: [
        {
          coupling: 7.758,
          atomIDs: [10],
          diaIDs: ['did@`@fTfYUn`HH@GzP`HeT'],
          multiplicity: 'd',
          distance: 3,
        },
        {
          coupling: 7.718,
          atomIDs: [9],
          diaIDs: ['did@`@fTfUvf`@h@GzP`HeT'],
          multiplicity: 'd',
          distance: 3,
        },
        {
          coupling: 1.596,
          atomIDs: [14],
          diaIDs: ['did@`@f\\bbRaih@J@A~dHBIU@'],
          multiplicity: 'd',
          distance: 4,
        },
        {
          coupling: 0.507,
          atomIDs: [13],
          diaIDs: ['did@`@fTfYUn`HH@GzP`HeT'],
          multiplicity: 'd',
          distance: 5,
        },
      ],
    });
    let firstJoinedSignal = prediction.joinedSignals[0];
    expect(firstJoinedSignal).toStrictEqual({
      nbAtoms: 3,
      delta: 0.992,
      multiplicity: 't',
      diaIDs: ['did@`@fTeYWaj@@@GzP`HeT'],
      atomIDs: [15, 16, 17],
      js: [
        {
          coupling: 7.392,
          multiplicity: 't',
          diaIDs: ['did@`@fTf[Waj@@bJ@_iB@bUP'],
          distance: 3,
        },
      ],
    });
    expect(prediction.ranges).toHaveLength(3);
    let lastRange = prediction.ranges[2];
    checkRange(lastRange);
    expect(lastRange.integration).toBe(5);
    expect(lastRange.signals).toHaveLength(3);
    expect(lastRange.signals[0].js).toHaveLength(4);
  });
  it('empty molecule', async () => {
    jest.setTimeout(30000);
    const molecule = new OCL.Molecule(16, 16);
    const result = await predictProton(molecule);
    expect(result.diaIDs).toStrictEqual([]);
    expect(result.joinedSignals).toStrictEqual([]);
    expect(result.signals).toStrictEqual([]);
    expect(result.ranges).toStrictEqual([]);
    expect(result.molecule.getAllAtoms()).toBe(0);
    expect(result.molecule.getAllBonds()).toBe(0);
  });
});
