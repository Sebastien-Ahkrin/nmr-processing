import { NMRSignal1D } from '../../types/NMRSignal1D';
import { signalsToXY } from '../signalsToXY';

const signals: NMRSignal1D[] = [
  {
    atomIDs: [8],
    nbAtoms: 1,
    delta: 7.26,
    js: [
      { coupling: 7.758, atomIDs: [10] },
      { coupling: 7.718, atomIDs: [9] },
      { coupling: 1.596, atomIDs: [14] },
      { coupling: 0.507, atomIDs: [13] },
    ],
  },
  {
    atomIDs: [9],
    nbAtoms: 1,
    delta: 7.196,
    js: [
      { coupling: 7.718, atomIDs: [8] },
      { coupling: 7.718, atomIDs: [14] },
      { coupling: 1.293, atomIDs: [13] },
      { coupling: 1.292, atomIDs: [10] },
    ],
  },
  {
    atomIDs: [10],
    nbAtoms: 1,
    delta: 7.162,
    js: [
      { coupling: 7.758, atomIDs: [8] },
      { coupling: 1.292, atomIDs: [9] },
      { coupling: 0.985, atomIDs: [13] },
      { coupling: 0.507, atomIDs: [14] },
    ],
  },
  {
    atomIDs: [11],
    nbAtoms: 1,
    delta: 2.653,
    js: [
      { coupling: 7.392, atomIDs: [15] },
      { coupling: 7.392, atomIDs: [16] },
      { coupling: 7.392, atomIDs: [17] },
    ],
  },
  {
    atomIDs: [12],
    nbAtoms: 1,
    delta: 2.653,
    js: [
      { coupling: 7.392, atomIDs: [15] },
      { coupling: 7.392, atomIDs: [16] },
      { coupling: 7.392, atomIDs: [17] },
    ],
  },
  {
    atomIDs: [13],
    nbAtoms: 1,
    delta: 7.162,
    js: [
      { coupling: 7.758, atomIDs: [14] },
      { coupling: 1.293, atomIDs: [9] },
      { coupling: 0.985, atomIDs: [10] },
      { coupling: 0.507, atomIDs: [8] },
    ],
  },
  {
    atomIDs: [14],
    nbAtoms: 1,
    delta: 7.26,
    js: [
      { coupling: 7.758, atomIDs: [13] },
      { coupling: 7.718, atomIDs: [9] },
      { coupling: 1.596, atomIDs: [8] },
      { coupling: 0.507, atomIDs: [10] },
    ],
  },
  {
    atomIDs: [15],
    nbAtoms: 1,
    delta: 0.992,
    js: [
      { coupling: 7.392, atomIDs: [11] },
      { coupling: 7.392, atomIDs: [12] },
    ],
  },
  {
    atomIDs: [16],
    nbAtoms: 1,
    delta: 0.992,
    js: [
      { coupling: 7.392, atomIDs: [11] },
      { coupling: 7.392, atomIDs: [12] },
    ],
  },
  {
    atomIDs: [17],
    nbAtoms: 1,
    delta: 0.992,
    js: [
      { coupling: 7.392, atomIDs: [11] },
      { coupling: 7.392, atomIDs: [12] },
    ],
  },
];

const signalsLarge: NMRSignal1D[] = [];
for (let i = 0; i < 10; i++) {
  signalsLarge.push({
    atomIDs: [i],
    nbAtoms: 1,
    delta: i,
    js: [{ coupling: i, atomIDs: [(i + 1) % 10] }],
  });
}

describe('spectrum from prediction', () => {
  it('1H chemical shift prediction', async () => {
    const spectrum = signalsToXY(signals, {
      shape: {
        kind: 'gaussian',
      },
      from: -1,
      to: 11,
      nbPoints: 16 * 1024,
    });
    expect(spectrum.x).toHaveLength(16 * 1024);
    expect(spectrum.x[0]).toStrictEqual(-1);
    expect(spectrum.x[spectrum.x.length - 1]).toBe(11);
    expect(Math.max(...spectrum.y)).toBeCloseTo(1e8);
  });

  it('small cluster', async () => {
    const spectrum = signalsToXY(signals, {
      maxClusterSize: 5,
    });
    expect(spectrum.x).toHaveLength(16 * 1024);
    expect(Math.max(...spectrum.y)).toBe(1e8);
  });

  it('large array', async () => {
    const spectrum = signalsToXY(signalsLarge, {
      maxClusterSize: 5,
    });
    expect(spectrum.x).toHaveLength(16 * 1024);
    expect(Math.max(...spectrum.y)).toBe(1e8);
  });
});
