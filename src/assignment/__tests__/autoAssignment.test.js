import OCL from 'openchemlib';

import {writeFileSync} from 'fs';

import { autoAssignment } from '../autoAssignment';

import ethylbenzeneData from './data/ethylbenzeneNewCosy.json';
import ethylbenzeneCarbonPrediction from './data/ethylbenzenePrediction_C.json';
import ethylbenzeneProtonPrediction from './data/ethylbenzenePrediction_H.json';

describe('automatic assignment', () => {
  const molfile = String(ethylbenzeneData.molecules[0].molfile);
  const correlationData = ethylbenzeneData.correlations.values;
  const molecule = OCL.Molecule.fromMolfile(molfile);
  it.only('simple assignment', async () => {
    console.log(correlationData)
    let result = await autoAssignment(molecule, {
      nbAllowedUnAssigned: 1,
      correlations: correlationData,
      minScore: 0.01,
      maxSolutions: 4,
      predictions: {
        C: ethylbenzeneCarbonPrediction,
        H: ethylbenzeneProtonPrediction,
      },
      restrictionByCS: {
        tolerance: 1,
        useChemicalShiftScore: true,
        chemicalShiftRestriction: true,
      },
    });
    console.log(result)
    // writeFileSync('result.json', JSON.stringify(result))
    expect(true).toBe(true);
  });
  it('simple assignment', async () => {
    let result = await autoAssignment(molecule, {
      nbAllowedUnAssigned: 1,
      justAssign: ['H'],
      correlations: correlationData,
      minScore: 0.01,
      predictions: {
        C: ethylbenzeneCarbonPrediction,
        H: ethylbenzeneProtonPrediction,
      },
      restrictionByCS: {
        tolerance: 1,
        useChemicalShiftScore: true,
        chemicalShiftRestriction: true,
      },
    });
    expect(true).toBe(true);
    expect(result).toStrictEqual([
      {
        assignment: [
          'Prpn4huA',
          'wr5sUESf',
          'MucR9YUm',
          'MucR9YUm',
          'b6wETfG8',
        ],
        score: 1,
      },
      {
        assignment: [
          'Prpn4huA',
          'wr5sUESf',
          'b6wETfG8',
          'MucR9YUm',
          'MucR9YUm',
        ],
        score: 0.9166666666666667,
      },
    ]);
  }, 50000);
  it('simple assignment carbon', async () => {
    let result = await autoAssignment(molecule, {
      nbAllowedUnAssigned: 1,
      justAssign: ['C'],
      correlations: correlationData,
      minScore: 0.1,
      predictions: {
        C: ethylbenzeneCarbonPrediction,
        H: ethylbenzeneProtonPrediction,
      },
      restrictionByCS: {
        tolerance: 1,
        useChemicalShiftScore: true,
        chemicalShiftRestriction: true,
      },
    });
    expect(result.slice(0, 2)).toStrictEqual([
      {
        assignment: [
          'b6wETfG8',
          'NLVyaLm8',
          'NLVyaLm8',
          '*',
          'wr5sUESf',
          'Prpn4huA',
        ],
        score: 0.4014945600794756,
      },
      {
        assignment: [
          'NLVyaLm8',
          'b6wETfG8',
          'NLVyaLm8',
          '*',
          'wr5sUESf',
          'Prpn4huA',
        ],
        score: 0.4014945600794756,
      },
    ]);
  }, 50000);
});
