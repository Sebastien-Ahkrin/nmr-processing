import { signalsJoin } from '../signalsJoin';

import signals from './data/signals.json';

test('signalsJoin', () => {
  const result = signalsJoin(signals, {
    joinCouplings: { ignoreDiaIDs: true },
  });

  expect(result).toStrictEqual([
    {
      nbAtoms: 2,
      delta: 3.25,
      diaIDs: ['D'],
      multiplicity: 'dd',
      atomIDs: [],
      assignment: 'a b',
      js: [
        { diaIDs: ['A'], distance: 3, multiplicity: 'd', coupling: 3 },
        { diaIDs: ['B'], distance: 3, multiplicity: 'd', coupling: 2 },
      ],
    },
    {
      nbAtoms: 1,
      delta: 3.5,
      diaIDs: ['X'],
      multiplicity: 't',
      atomIDs: [],
      js: [
        {
          multiplicity: 't',
          distance: 3,
          coupling: 1.0005,
        },
      ],
    },
  ]);
});
