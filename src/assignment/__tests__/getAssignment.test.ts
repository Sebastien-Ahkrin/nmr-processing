import { toBeDeepCloseTo, toMatchCloseTo } from 'jest-matcher-deep-close-to';
import OCL from 'openchemlib';

import { getAssignments, SpectraData } from '../getAssignments';
import {
  NMRSignal1DWithId,
  NMRSignal2DWithId,
  SpectraData1DWithIds,
  SpectraData2DWithIds,
  SpectraDataWithIds,
} from '../utils/getAssignment/checkIDs';
import { isSpectraData1D } from '../utils/getAssignment/isSpectraData1D';
import { searchIndices } from '../utils/getAssignment/searchIndices';

import resultEthylbenzene from './data/ethylBenzeneAssignmentResult.json';
import ethylbenzeneData from './data/ethylbenzeneData.json';
import ethylbenzeneCarbonPrediction from './data/ethylbenzenePrediction_C.json';
import ethylbenzeneProtonPrediction from './data/ethylbenzenePrediction_H.json';

import { writeFileSync } from 'fs';

function isSignal1D(
  signal: NMRSignal2DWithId | NMRSignal1DWithId,
): signal is NMRSignal1DWithId {
  return 'delta' in signal;
}

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

function checkMatchIDs(
  assignment: SpectraDataWithIds[],
  assignmentResult: SpectraDataWithIds[],
): void {
  for (let spectrum of assignment) {
    const data = isSpectraData1D(spectrum) ? spectrum.ranges : spectrum.zones;
    for (let dataRZ of data) {
      for (let signal of dataRZ.signals) {
        const signalId = signal.id;
        const { spectrumIndex, elementIndex, signalIndex } = searchIndices(
          signalId,
          assignmentResult,
        );
        if (isSignal1D(signal)) {
          if (!signal.diaIDs) continue;
          const spectrumResult = assignmentResult[
            spectrumIndex
          ] as SpectraData1DWithIds;
          const signalResult =
            spectrumResult.ranges[elementIndex].signals[signalIndex];
          expect(signal.diaIDs).toMatchCloseTo(signalResult.diaIDs);
        } else {
          const axis = ['x', 'y'] as Array<'x' | 'y'>;
          for (const axe of axis) {
            if (!signal[axe].diaIDs) continue;
            const spectrumResult = assignmentResult[
              spectrumIndex
            ] as SpectraData2DWithIds;
            const signalResult =
              spectrumResult.zones[elementIndex].signals[signalIndex];
            expect(signal[axe].diaIDs).toMatchCloseTo(signalResult[axe].diaIDs);
          }
        }
      }
    }
  }
}

describe('automatic assignment', () => {
  const molfile = String(ethylbenzeneData.molfile);
  const spectra = ethylbenzeneData.spectra as SpectraData[];
  const molecule = OCL.Molecule.fromMolfile(molfile);
  it('simple assignment', async () => {
    let result = await getAssignments(
      { molecule, spectra },
      {
        nbAllowedUnAssigned: 1,
        minScore: 0.01,
        maxSolutions: 2,
        predictions: {
          C: ethylbenzeneCarbonPrediction,
          H: ethylbenzeneProtonPrediction,
        },
        restrictionByCS: {
          tolerance: { H: 0.2, C: 1 },
          useChemicalShiftScore: true,
          chemicalShiftRestriction: true,
        },
      },
    );

    const { score, assignment } = result[0];
    // console.log(resultEthylbenzene)
    const { score: scoreResult } = resultEthylbenzene[0];
    const assignmentResult = resultEthylbenzene[0]
      .assignment as SpectraDataWithIds[];

    expect(score).toBeDeepCloseTo(scoreResult, 3);
    checkMatchIDs(assignment, assignmentResult);
  });

  it.only('simple assignment', async () => {
    let result = await getAssignments(
      { molecule, spectra },
      {
        nbAllowedUnAssigned: 1,
        minScore: 0.01,
        maxSolutions: 10,
        // justAssign: [['C', 'H']],
        predictions: {
          C: ethylbenzeneCarbonPrediction,
          H: ethylbenzeneProtonPrediction,
        },
        restrictionByCS: {
          tolerance: { H: 0.2, C: 1 },
          useChemicalShiftScore: true,
          chemicalShiftRestriction: true,
        },
      },
    );
    writeFileSync('result.json', JSON.stringify(result));
    // const { score, assignment } = result[0];

    // const { score: scoreResult } = resultEthylbenzene[0];
    // const assignmentResult = resultEthylbenzene[0]
    //   .assignment as SpectraDataWithIds[];

    // expect(score).toBeDeepCloseTo(scoreResult, 3);
    // checkMatchIDs(assignment, assignmentResult);
  }, 50000);
  // it('simple assignment carbon', async () => {
  //   let result = await getAssignments(molecule, {
  //     nbAllowedUnAssigned: 1,
  //     justAssign: ['C'],
  //     correlations: correlationData,
  //     minScore: 0.1,
  //     predictions: {
  //       C: ethylbenzeneCarbonPrediction,
  //       H: ethylbenzeneProtonPrediction,
  //     },
  //     restrictionByCS: {
  //       tolerance: 1,
  //       useChemicalShiftScore: true,
  //       chemicalShiftRestriction: true,
  //     },
  //   });
  //   expect(result.slice(0, 2)).toStrictEqual([
  //     {
  //       assignment: [
  //         'b6wETfG8',
  //         'NLVyaLm8',
  //         'NLVyaLm8',
  //         '*',
  //         'wr5sUESf',
  //         'Prpn4huA',
  //       ],
  //       score: 0.4014945600794756,
  //     },
  //     {
  //       assignment: [
  //         'NLVyaLm8',
  //         'b6wETfG8',
  //         'NLVyaLm8',
  //         '*',
  //         'wr5sUESf',
  //         'Prpn4huA',
  //       ],
  //       score: 0.4014945600794756,
  //     },
  //   ]);
  // }, 50000);
});
