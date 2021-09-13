import { signalNormalize } from '../signalNormalize';

import tttt from './data/tttt.json';

describe('signalNormalize', () => {
  it('tttt', () => {
    const result = signalNormalize(tttt);
    expect(result).toStrictEqual({
      nbAtoms: 1,
      delta: 3,
      atomIDs: [2],
      diaIDs: ['C'],
      js: [
        { coupling: 9, multiplicity: 't', diaIDs: ['D'] },
        { coupling: 8, multiplicity: 't', diaIDs: ['C'] },
        {
          coupling: 2,
          multiplicity: 't',
          diaIDs: ['B'],
          assignment: 'def',
        },
        {
          coupling: 1,
          multiplicity: 't',
          diaIDs: ['A'],
          assignment: 'abc',
        },
      ],
    });
  });
});
