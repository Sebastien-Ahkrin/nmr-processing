import { Molecule } from 'openchemlib';
import { addDiastereotopicMissingChirality } from 'openchemlib-utils';

import { NMRRange, NMRRangeWithIntegration } from '..';
import {
  predictCarbon,
  PredictCarbonOptions,
} from '../prediction/predictCarbon';
import type { NMRSignal1D } from '../signals/NMRSignal1D';

import type {
  NMRSignal1DWithAtomsAndDiaIDs,
  Targets,
} from './get1HAssignments';
import { RestrictionByCS, buildAssignments } from './utils/buildAssignments';
import generateID from './utils/generateID';

function checkAtomsAndDiaIDs(
  signals: NMRSignal1D[],
): asserts signals is NMRSignal1DWithAtomsAndDiaIDs[] {
  for (const signal of signals) {
    if (!signal.atoms) throw new Error('signal has not atoms property');
    if (!signal.diaIDs) throw new Error('signal has not diaIDs property');
    if (!signal.nbAtoms) throw new Error('signal has not nbAtoms property');
  }
}

function checkIntegration(ranges: NMRRange[]) {
  for (let range of ranges) {
    if (range.integration === undefined) range.integration = 0;
  }
  return ranges as NMRRangeWithIntegration[];
}

export interface Get13CAssignmentsOptions {
  restrictionByCS?: Partial<RestrictionByCS>;
  /**
   * min score to accept an assignment
   * @default 1
   */
  minScore?: number;
  /**
   * maximal number of assignments to return
   * @default 10
   */
  maxSolutions?: number;
  /**
   * number of allowed unassignment signals
   * @default 0
   */
  nbAllowedUnAssigned?: number;
  /**
   * time limit in miliseconds to finish the assignment procedure.
   * @default 6000
   */
  timeout?: number;
  /**
   * prediction options
   */
  predictionOptions?: PredictCarbonOptions;
}

export async function get13CAssignments(
  ranges: NMRRange[],
  molecule: Molecule,
  options: Get13CAssignmentsOptions = {},
) {
  let {
    restrictionByCS = {},
    minScore = 1,
    maxSolutions = 10,
    nbAllowedUnAssigned = 0,
    timeout = 6000,
    predictionOptions = {},
  } = options;

  if (!molecule) {
    throw new Error('It is needed a OCL molecule instance to assign');
  }

  addDiastereotopicMissingChirality(molecule);
  const { joinedSignals } = await predictCarbon(molecule, predictionOptions);

  checkAtomsAndDiaIDs(joinedSignals);
  const copyRanges = checkIntegration(ranges);

  const targets: Targets = {};
  for (const range of copyRanges) {
    const { id = generateID() } = range;
    targets[id] = JSON.parse(JSON.stringify(range));
  }

  return buildAssignments({
    restrictionByCS,
    timeout,
    minScore,
    nbAllowedUnAssigned,
    maxSolutions,
    targets,
    joinedSignals,
    useIntegrationRestriction: false,
  });
}
