import type { NMRSignal1D } from '../../../types/NMRSignal1D';
import { signalsToSpinSystem } from '../signalsToSpinSystem';
import { splitSpinSystem } from '../splitSpinSystem';

const butaneSignals: NMRSignal1D[] = [
  {
    atoms: [4],
    nbAtoms: 1,
    delta: 1,
    js: [
      { coupling: 18, atoms: [5] },
      { coupling: 18, atoms: [6] },
      { coupling: 7, atoms: [7] },
      { coupling: 7, atoms: [8] },
    ],
  },
  {
    atoms: [5],
    nbAtoms: 1,
    delta: 1,
    js: [
      { coupling: 18, atoms: [4] },
      { coupling: 18, atoms: [6] },
      { coupling: 7, atoms: [7] },
      { coupling: 7, atoms: [8] },
    ],
  },
  {
    atoms: [6],
    nbAtoms: 1,
    delta: 1,
    js: [
      { coupling: 18, atoms: [4] },
      { coupling: 18, atoms: [5] },
      { coupling: 7, atoms: [7] },
      { coupling: 7, atoms: [8] },
    ],
  },
  {
    atoms: [7],
    nbAtoms: 1,
    delta: 1.5,
    js: [
      { coupling: 18, atoms: [8] },
      { coupling: 7, atoms: [4] },
      { coupling: 7, atoms: [5] },
      { coupling: 7, atoms: [6] },
      { coupling: 7, atoms: [9] },
      { coupling: 7, atoms: [10] },
    ],
  },
  {
    atoms: [8],
    nbAtoms: 1,
    delta: 1.5,
    js: [
      { coupling: 18, atoms: [7] },
      { coupling: 7, atoms: [4] },
      { coupling: 7, atoms: [5] },
      { coupling: 7, atoms: [6] },
      { coupling: 7, atoms: [9] },
      { coupling: 7, atoms: [10] },
    ],
  },
  {
    atoms: [9],
    nbAtoms: 1,
    delta: 1.5,
    js: [
      { coupling: 18, atoms: [10] },
      { coupling: 7, atoms: [7] },
      { coupling: 7, atoms: [8] },
      { coupling: 7, atoms: [11] },
      { coupling: 7, atoms: [12] },
      { coupling: 7, atoms: [13] },
    ],
  },
  {
    atoms: [10],
    nbAtoms: 1,
    delta: 1.5,
    js: [
      { coupling: 18, atoms: [9] },
      { coupling: 7, atoms: [7] },
      { coupling: 7, atoms: [8] },
      { coupling: 7, atoms: [11] },
      { coupling: 7, atoms: [12] },
      { coupling: 7, atoms: [13] },
    ],
  },
  {
    atoms: [11],
    nbAtoms: 1,
    delta: 1,
    js: [
      { coupling: 18, atoms: [13] },
      { coupling: 18, atoms: [12] },
      { coupling: 7, atoms: [9] },
      { coupling: 7, atoms: [10] },
    ],
  },
  {
    atoms: [12],
    nbAtoms: 1,
    delta: 1,
    js: [
      { coupling: 18, atoms: [11] },
      { coupling: 18, atoms: [13] },
      { coupling: 7, atoms: [9] },
      { coupling: 7, atoms: [10] },
    ],
  },
  {
    atoms: [13],
    nbAtoms: 1,
    delta: 1,
    js: [
      { coupling: 18, atoms: [11] },
      { coupling: 18, atoms: [12] },
      { coupling: 7, atoms: [9] },
      { coupling: 7, atoms: [10] },
    ],
  },
];

const propylCloride: NMRSignal1D[] = [
  {
    atoms: [4],
    nbAtoms: 1,
    delta: 1,
    js: [
      { coupling: 18, atoms: [5] },
      { coupling: 18, atoms: [6] },
      { coupling: 7, atoms: [7] },
      { coupling: 7, atoms: [8] },
    ],
  },
  {
    atoms: [5],
    nbAtoms: 1,
    delta: 1,
    js: [
      { coupling: 18, atoms: [4] },
      { coupling: 18, atoms: [6] },
      { coupling: 7, atoms: [7] },
      { coupling: 7, atoms: [8] },
    ],
  },
  {
    atoms: [6],
    nbAtoms: 1,
    delta: 1,
    js: [
      { coupling: 18, atoms: [4] },
      { coupling: 18, atoms: [5] },
      { coupling: 7, atoms: [7] },
      { coupling: 7, atoms: [8] },
    ],
  },
  {
    //CH2
    atoms: [7],
    nbAtoms: 1,
    delta: 1.5,
    js: [
      { coupling: 18, atoms: [8] },
      { coupling: 7, atoms: [4] },
      { coupling: 7, atoms: [5] },
      { coupling: 7, atoms: [6] },
      { coupling: 7, atoms: [9] },
      { coupling: 7, atoms: [10] },
    ],
  },
  {
    atoms: [8],
    nbAtoms: 1,
    delta: 1.5,
    js: [
      { coupling: 18, atoms: [7] },
      { coupling: 7, atoms: [4] },
      { coupling: 7, atoms: [5] },
      { coupling: 7, atoms: [6] },
      { coupling: 7, atoms: [9] },
      { coupling: 7, atoms: [10] },
    ],
  },
  {
    //CH2Cl
    atoms: [9],
    nbAtoms: 1,
    delta: 4.5,
    js: [
      { coupling: 18, atoms: [10] },
      { coupling: 7, atoms: [7] },
      { coupling: 7, atoms: [8] },
    ],
  },
  {
    atoms: [10],
    nbAtoms: 1,
    delta: 4.5,
    js: [
      { coupling: 18, atoms: [9] },
      { coupling: 7, atoms: [7] },
      { coupling: 7, atoms: [8] },
    ],
  },
];

describe('split spin system', () => {
  it('split butane', () => {
    let spinSystem = signalsToSpinSystem(butaneSignals);
    let result = splitSpinSystem(spinSystem, { maxClusterSize: 7 });
    expect(result[0]).toHaveLength(7);
    expect(result[0]).toStrictEqual([0, 1, 2, 3, 4, -6, -7]);
    expect(result[1]).toStrictEqual([-4, -5, 5, 6, 7, 8, 9]);
  });

  it('split propilclorine', () => {
    let spinSystem = signalsToSpinSystem(propylCloride);
    let result = splitSpinSystem(spinSystem, { maxClusterSize: 5 });
    expect(result[0]).toHaveLength(4);
    expect(result[1]).toHaveLength(5);
    expect(result[1]).toStrictEqual([0, 1, 2, -4, -5]);
    expect(result[0]).toStrictEqual([-4, -5, 5, 6]);
  });
});
