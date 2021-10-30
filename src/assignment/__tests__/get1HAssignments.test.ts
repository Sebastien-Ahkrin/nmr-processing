import OCL from 'openchemlib';

import { get1HAssignments } from '../get1HAssignments';

import ethylbenzeneRange from './data/ethylbenzeneRanges.json';

describe('get1HAssignments', () => {
  it('ethylbenzene', async () => {
    const molecule = OCL.Molecule.fromSmiles('CCc1ccccc1');
    const assignments = await get1HAssignments(ethylbenzeneRange, molecule, {
      minScore: 0.1,
      maxSolutions: 10,
      restrictionByCS: {
        tolerance: 1,
        useChemicalShiftScore: true,
        chemicalShiftRestriction: true,
      },
    });
    expect(assignments).toHaveLength(2);
  });
});
