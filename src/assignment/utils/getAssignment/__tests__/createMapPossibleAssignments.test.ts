import { Molecule } from 'openchemlib';
import { getConnectivityMatrix } from 'openchemlib-utils';

import ethylbenzeneData from '../../../__tests__/data/ethylbenzeneData.json';
import ethylbenzeneCarbonPrediction from '../../../__tests__/data/ethylbenzenePrediction_C.json';
import ethylbenzeneProtonPrediction from '../../../__tests__/data/ethylbenzenePrediction_H.json';
import {
  AtomTypes,
  getAllHydrogens,
  PredictionsByAtomType,
} from '../buildAssignments';
import { SpectraDataWithIds } from '../checkIDs';
import { createMapPossibleAssignment } from '../createMapPossibleAssignment';
import { getTargetsAndCorrelations } from '../getTargetsAndCorrelations';

const molecule = Molecule.fromMolfile(ethylbenzeneData.molfile);
const spectraData = ethylbenzeneData.spectra as SpectraDataWithIds[]
const { targets } = getTargetsAndCorrelations(spectraData);

const pathLengthMatrix = getConnectivityMatrix(molecule, {
  pathLength: true,
});

const originalPredictions = {
  C: ethylbenzeneCarbonPrediction,
  H: ethylbenzeneProtonPrediction,
};
describe('AutoAssignment - createMapPossibleAssignment', () => {
  const predictions: PredictionsByAtomType = {};
  for (const atomType of ['H', 'C'] as AtomTypes[]) {
    const joinedSignals = originalPredictions[atomType];
    for (let prediction of joinedSignals) {
      // @TODO: REFACTOR it could be missed if the CS is not a requirement
      const diaID = prediction.diaIDs[0];
      const index = prediction.atoms[0];
      const allHydrogens = getAllHydrogens[atomType](molecule, index);
      if (!predictions[atomType]) predictions[atomType] = {};
      predictions[atomType][diaID] = {
        ...prediction,
        diaIDIndex: index,
        allHydrogens: prediction.nbAtoms * allHydrogens,
        protonsCount: allHydrogens,
        pathLength: pathLengthMatrix[index] as number[],
      };
    }
  }
  it('create map', () => {
    const result = createMapPossibleAssignment(
      {},
      {
        restrictionByCS: {
          tolerance: { H: 0.2, C: 2 },
          useChemicalShiftScore: true,
          chemicalShiftRestriction: true,
        },
        predictions,
        targets,
      },
    );
    // expect(result.C.carbon1).toStrictEqual(['6dVPFnCT', '*']);
    // expect(result.C.carbon2).toStrictEqual(['aFEmeB3j', '*']);
    // expect(result.C.carbon3).toStrictEqual(['rc5vsGS0', '*']);
    // expect(result.C.carbon4).toStrictEqual(['*']);
  });
});
