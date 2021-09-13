import { partialScore } from './assignment/utils/partialScore';
import correlationData from './assignment/data/ethyl-benzene.json';
import predictions from './assignment/data/ethylbenzenePredictions';
import { formatCorrelations } from './assignment/utils/formatCorrelations';
import { predictCarbon } from './prediction/predictCarbon';

const { targets, correlations } = formatCorrelations(correlationData.correlations.values);
const diaIDPeerPossibleAssignment = Object.keys(predictions.C).map(e => predictions.C[e].diaID[0])
let partial = [ 'b6wETfG8', 'NLVyaLm8', 'MucR9YUm', '*', 'wr5sUESf', 'Prpn4huA' ]
// partial[0] = 'aFEmeB3j';
// console.log(predictions)

const result = partialScore(partial, {
  predictions,
  atomTypes: ['C'],
  targets,
  restrictionByCS: {
    tolerance: 1,
    useChemicalShiftScore: true,
  },
  unassigned: 1,
  diaIDPeerPossibleAssignment,
  correlations,
});

console.log(result)