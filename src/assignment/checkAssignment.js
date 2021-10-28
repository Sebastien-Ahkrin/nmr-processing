import OCL from 'openchemlib';

import { autoAssignment } from './autoAssignment';
import arbutinData from './data/ethyl-benzene.json';

(async () => {
const molfile = String(arbutinData.molecules[0].molfile);
const correlationData = arbutinData.correlations.values;
const molecule = OCL.Molecule.fromMolfile(molfile);
let result = await autoAssignment(molecule, {
  nbAllowedUnAssigned: 1,
  justAssign: ['C', 'H'],
  correlations: correlationData,
  minScore: 0.1,
  restrictionByCS: {
    tolerance: 1,
    useChemicalShiftScore: true,
    chemicalShiftRestriction: true,
  },
  predictionOptions: {
    C: {
      webserviceURL: 'https://nmr-prediction.service.zakodium.com/v1/predict/carbon'
    }
  }
});
console.log('result', result[0].assignment);
})()