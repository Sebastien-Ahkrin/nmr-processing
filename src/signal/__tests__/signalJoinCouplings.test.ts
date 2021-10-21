import { toBeDeepCloseTo, toMatchCloseTo } from 'jest-matcher-deep-close-to';

import { signalJoinCouplings } from '../signalJoinCouplings';

import dddd from './data/dddd.json';
import ddddAssignment from './data/ddddAssignment.json';
import ddddDiaID from './data/ddddDiaID.json';
import tttt from './data/tttt.json';

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

describe('signalJoinCouplings', () => {
  it('dddd to ddt', () => {
    const result = signalJoinCouplings(dddd, { ignoreDiaIDs: true });
    expect(result.js || []).toStrictEqual([
      { coupling: 9, multiplicity: 'd' },
      { coupling: 8, multiplicity: 'd' },
      {
        coupling: 7.00005,
        multiplicity: 't',
      },
    ]);
  });

  it('dddd to ddt with assignment', () => {
    const result = signalJoinCouplings(ddddAssignment, { ignoreDiaIDs: true });
    expect(result).toMatchCloseTo({
      atoms: [8],
      nbAtoms: 1,
      delta: 7.26,
      js: [
        { coupling: 9, multiplicity: 'd', atoms: [13] },
        { coupling: 8, multiplicity: 'd', atoms: [14] },
        { coupling: 7.0005, multiplicity: 't', atoms: [9, 10] },
      ],
    });
  });

  it('check dddd with tolerance 1.1', () => {
    const result = signalJoinCouplings(ddddDiaID, {
      tolerance: 1.1,
      ignoreDiaIDs: true,
    });
    expect(result).toStrictEqual({
      nbAtoms: 1,
      delta: 3,
      js: [
        { coupling: 9, multiplicity: 'd', diaIDs: ['D'] },
        {
          coupling: 2,
          multiplicity: 'q',
        },
      ],
    });
  });

  it('check ttt with tolerance 1.1', () => {
    const result = signalJoinCouplings(tttt, {
      tolerance: 1.1,
      ignoreDiaIDs: true,
    });
    expect(result).toStrictEqual({
      nbAtoms: 1,
      delta: 3,
      atoms: [2],
      diaIDs: ['C'],
      js: [
        {
          coupling: 8.5,
          multiplicity: 'quint',
          // diaIDs: ['D', 'C'],
        },
        {
          coupling: 1.5,
          multiplicity: 'quint',
          // diaIDs: ['B', 'A'],
          assignment: 'def abc',
        },
      ],
    });
  });
});
