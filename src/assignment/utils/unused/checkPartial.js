import correlationData from '../../data/ethyl-benzene.json';
import predictions from '../../data/ethylbenzenePredictions.json';
import { createMapPossibleAssignment } from '../createMapPossibleAssignment';
import { getTargetsAndCorrelations } from '../getTargetsAndCorrelations';
import { partialScore } from '../partialScore';


const { targets, correlations } = getTargetsAndCorrelations(correlationData.correlations.values);
let possibleAssignmentMap = createMapPossibleAssignment({
    restrictionByCS: {
      tolerance: 1,
      useChemicalShiftScore: true,
      chemicalShiftRestriction: true,
    },
    predictions,
    targets,
  });

  const diaIDPeerPossibleAssignment = Object.keys(possibleAssignmentMap);
const partial = [ 'MucR9YUm', 'NLVyaLm8', 'NLVyaLm8', '*', 'wr5sUESf', 'Prpn4huA' ];
const result = partialScore(partial, {
  predictions,
  atomType: 'C',
  targets,
  restrictionByCS: {
    tolerance: 1,
    useChemicalShiftScore: true,
  },
  nbAllowedUnAssigned: 1,
  diaIDPeerPossibleAssignment,
  correlations,
});

console.log(result);
