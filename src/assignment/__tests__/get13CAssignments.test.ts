import OCL from 'openchemlib';

import { get13CAssignments } from '../get13CAssignments';

import carbonRanges from './data/carbonRanges.json';

describe('get13CAssignments', () => {
  it('ethylbenzene', async () => {
    const molecule = OCL.Molecule.fromSmiles('C1=C(NC=N1)CC(C(=O)O)N');
    const assignments = await get13CAssignments(carbonRanges, molecule, {
      minScore: 0.1,
      maxSolutions: 10,
      restrictionByCS: {
        tolerance: 5,
      },
    });
    expect(assignments).toHaveLength(5);
  });
});
