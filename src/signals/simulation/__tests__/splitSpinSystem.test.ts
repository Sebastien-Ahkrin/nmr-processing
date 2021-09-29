import { Signal1D } from '../../../types/signal1D';
import { signalsToSpinSystem } from '../signalsToSpinSystem';
import { splitSpinSystem } from '../splitSpinSystem';

const butaneSignals: Signal1D[] = [
  {
    atomIDs: [4],
    nbAtoms: 1,
    delta: 1,
    js: [
      { coupling: 18, atomIDs: [5] },
      { coupling: 18, atomIDs: [6] },
      { coupling: 7, atomIDs: [7] },
      { coupling: 7, atomIDs: [8] },
    ],
  },
  {
    atomIDs: [5],
    nbAtoms: 1,
    delta: 1,
    js: [
      { coupling: 18, atomIDs: [4] },
      { coupling: 18, atomIDs: [6] },
      { coupling: 7, atomIDs: [7] },
      { coupling: 7, atomIDs: [8] },
    ],
  },
  {
    atomIDs: [6],
    nbAtoms: 1,
    delta: 1,
    js: [
      { coupling: 18, atomIDs: [4] },
      { coupling: 18, atomIDs: [5] },
      { coupling: 7, atomIDs: [7] },
      { coupling: 7, atomIDs: [8] },
    ],
  },
  {
    atomIDs: [7],
    nbAtoms: 1,
    delta: 1.5,
    js: [
      { coupling: 18, atomIDs: [8] },
      { coupling: 7, atomIDs: [4] },
      { coupling: 7, atomIDs: [5] },
      { coupling: 7, atomIDs: [6] },
      { coupling: 7, atomIDs: [9] },
      { coupling: 7, atomIDs: [10] },
    ],
  },
  {
    atomIDs: [8],
    nbAtoms: 1,
    delta: 1.5,
    js: [
      { coupling: 18, atomIDs: [7] },
      { coupling: 7, atomIDs: [4] },
      { coupling: 7, atomIDs: [5] },
      { coupling: 7, atomIDs: [6] },
      { coupling: 7, atomIDs: [9] },
      { coupling: 7, atomIDs: [10] },
    ],
  },
  {
    atomIDs: [9],
    nbAtoms: 1,
    delta: 1.5,
    js: [
      { coupling: 18, atomIDs: [10] },
      { coupling: 7, atomIDs: [7] },
      { coupling: 7, atomIDs: [8] },
      { coupling: 7, atomIDs: [11] },
      { coupling: 7, atomIDs: [12] },
      { coupling: 7, atomIDs: [13] },
    ],
  },
  {
    atomIDs: [10],
    nbAtoms: 1,
    delta: 1.5,
    js: [
      { coupling: 18, atomIDs: [9] },
      { coupling: 7, atomIDs: [7] },
      { coupling: 7, atomIDs: [8] },
      { coupling: 7, atomIDs: [11] },
      { coupling: 7, atomIDs: [12] },
      { coupling: 7, atomIDs: [13] },
    ],
  },
  {
    atomIDs: [11],
    nbAtoms: 1,
    delta: 1,
    js: [
      { coupling: 18, atomIDs: [13] },
      { coupling: 18, atomIDs: [12] },
      { coupling: 7, atomIDs: [9] },
      { coupling: 7, atomIDs: [10] },
    ],
  },
  {
    atomIDs: [12],
    nbAtoms: 1,
    delta: 1,
    js: [
      { coupling: 18, atomIDs: [11] },
      { coupling: 18, atomIDs: [13] },
      { coupling: 7, atomIDs: [9] },
      { coupling: 7, atomIDs: [10] },
    ],
  },
  {
    atomIDs: [13],
    nbAtoms: 1,
    delta: 1,
    js: [
      { coupling: 18, atomIDs: [11] },
      { coupling: 18, atomIDs: [12] },
      { coupling: 7, atomIDs: [9] },
      { coupling: 7, atomIDs: [10] },
    ],
  },
];

const propylCloride: Signal1D[] = [
  {
    atomIDs: [4],
    nbAtoms: 1,
    delta: 1,
    js: [
      { coupling: 18, atomIDs: [5] },
      { coupling: 18, atomIDs: [6] },
      { coupling: 7, atomIDs: [7] },
      { coupling: 7, atomIDs: [8] },
    ],
  },
  {
    atomIDs: [5],
    nbAtoms: 1,
    delta: 1,
    js: [
      { coupling: 18, atomIDs: [4] },
      { coupling: 18, atomIDs: [6] },
      { coupling: 7, atomIDs: [7] },
      { coupling: 7, atomIDs: [8] },
    ],
  },
  {
    atomIDs: [6],
    nbAtoms: 1,
    delta: 1,
    js: [
      { coupling: 18, atomIDs: [4] },
      { coupling: 18, atomIDs: [5] },
      { coupling: 7, atomIDs: [7] },
      { coupling: 7, atomIDs: [8] },
    ],
  },
  {
    //CH2
    atomIDs: [7],
    nbAtoms: 1,
    delta: 1.5,
    js: [
      { coupling: 18, atomIDs: [8] },
      { coupling: 7, atomIDs: [4] },
      { coupling: 7, atomIDs: [5] },
      { coupling: 7, atomIDs: [6] },
      { coupling: 7, atomIDs: [9] },
      { coupling: 7, atomIDs: [10] },
    ],
  },
  {
    atomIDs: [8],
    nbAtoms: 1,
    delta: 1.5,
    js: [
      { coupling: 18, atomIDs: [7] },
      { coupling: 7, atomIDs: [4] },
      { coupling: 7, atomIDs: [5] },
      { coupling: 7, atomIDs: [6] },
      { coupling: 7, atomIDs: [9] },
      { coupling: 7, atomIDs: [10] },
    ],
  },
  {
    //CH2Cl
    atomIDs: [9],
    nbAtoms: 1,
    delta: 4.5,
    js: [
      { coupling: 18, atomIDs: [10] },
      { coupling: 7, atomIDs: [7] },
      { coupling: 7, atomIDs: [8] },
    ],
  },
  {
    atomIDs: [10],
    nbAtoms: 1,
    delta: 4.5,
    js: [
      { coupling: 18, atomIDs: [9] },
      { coupling: 7, atomIDs: [7] },
      { coupling: 7, atomIDs: [8] },
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
