import type { NMRSignal1D } from '../../types/NMRSignal1D';
import { signalsToXY } from '../signalsToXY';

const signals: NMRSignal1D[] = [
  {
    atoms: [8],
    nbAtoms: 1,
    delta: 7.26,
    js: [
      { coupling: 7.758, atoms: [10] },
      { coupling: 7.718, atoms: [9] },
      { coupling: 1.596, atoms: [14] },
      { coupling: 0.507, atoms: [13] },
    ],
  },
  {
    atoms: [9],
    nbAtoms: 1,
    delta: 7.196,
    js: [
      { coupling: 7.718, atoms: [8] },
      { coupling: 7.718, atoms: [14] },
      { coupling: 1.293, atoms: [13] },
      { coupling: 1.292, atoms: [10] },
    ],
  },
  {
    atoms: [10],
    nbAtoms: 1,
    delta: 7.162,
    js: [
      { coupling: 7.758, atoms: [8] },
      { coupling: 1.292, atoms: [9] },
      { coupling: 0.985, atoms: [13] },
      { coupling: 0.507, atoms: [14] },
    ],
  },
  {
    atoms: [11],
    nbAtoms: 1,
    delta: 2.653,
    js: [
      { coupling: 7.392, atoms: [15] },
      { coupling: 7.392, atoms: [16] },
      { coupling: 7.392, atoms: [17] },
    ],
  },
  {
    atoms: [12],
    nbAtoms: 1,
    delta: 2.653,
    js: [
      { coupling: 7.392, atoms: [15] },
      { coupling: 7.392, atoms: [16] },
      { coupling: 7.392, atoms: [17] },
    ],
  },
  {
    atoms: [13],
    nbAtoms: 1,
    delta: 7.162,
    js: [
      { coupling: 7.758, atoms: [14] },
      { coupling: 1.293, atoms: [9] },
      { coupling: 0.985, atoms: [10] },
      { coupling: 0.507, atoms: [8] },
    ],
  },
  {
    atoms: [14],
    nbAtoms: 1,
    delta: 7.26,
    js: [
      { coupling: 7.758, atoms: [13] },
      { coupling: 7.718, atoms: [9] },
      { coupling: 1.596, atoms: [8] },
      { coupling: 0.507, atoms: [10] },
    ],
  },
  {
    atoms: [15],
    nbAtoms: 1,
    delta: 0.992,
    js: [
      { coupling: 7.392, atoms: [11] },
      { coupling: 7.392, atoms: [12] },
    ],
  },
  {
    atoms: [16],
    nbAtoms: 1,
    delta: 0.992,
    js: [
      { coupling: 7.392, atoms: [11] },
      { coupling: 7.392, atoms: [12] },
    ],
  },
  {
    atoms: [17],
    nbAtoms: 1,
    delta: 0.992,
    js: [
      { coupling: 7.392, atoms: [11] },
      { coupling: 7.392, atoms: [12] },
    ],
  },
];

const signalsLarge: NMRSignal1D[] = [];
for (let i = 0; i < 10; i++) {
  signalsLarge.push({
    atoms: [i],
    nbAtoms: 1,
    delta: i,
    js: [{ coupling: i, atoms: [(i + 1) % 10] }],
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
