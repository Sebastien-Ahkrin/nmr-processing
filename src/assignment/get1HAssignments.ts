import { Molecule } from 'openchemlib';
import { addDiastereotopicMissingChirality } from 'openchemlib-utils';

import { NMRRange } from '..';
import {
  predictProton,
  PredictProtonOptions,
} from '../prediction/predictProton';
import type { NMRSignal1D } from '../signals/NMRSignal1D';
import { MakeMandatory } from '../utilities/MakeMandatory';

import { buildAssignments, RestrictionByCS } from './utils/buildAssignments';
import generateID from './utils/generateID';

export type NMRSignal1DWithAtomsAndDiaIDs = MakeMandatory<
  NMRSignal1D,
  'atoms' | 'diaIDs' | 'nbAtoms'
>;

function checkAtomsAndDiaIDs(
  signals: NMRSignal1D[],
): asserts signals is NMRSignal1DWithAtomsAndDiaIDs[] {
  for (const signal of signals) {
    if (!signal.atoms) throw new Error('signal has not atoms property');
    if (!signal.diaIDs) throw new Error('signal has not diaIDs property');
    if (!signal.nbAtoms) throw new Error('signal has not nbAtoms property');
  }
}

export type NMRRangeWithIntegration = MakeMandatory<NMRRange, 'integration'>;

function checkForIntegration(
  ranges: NMRRange[],
): asserts ranges is NMRRangeWithIntegration[] {
  for (let range of ranges) {
    if (range.integration === undefined) {
      throw new Error('ranges has not integration property');
    }
  }
}

export interface Get1HAssignmentsOptions {
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
  predictionOptions?: PredictProtonOptions;
}

export interface Targets {
  [key: string]: NMRRangeWithIntegration;
}

export async function get1HAssignments(
  ranges: NMRRange[],
  molecule: Molecule,
  options: Get1HAssignmentsOptions = {},
) {
  let {
    restrictionByCS,
    minScore = 1,
    maxSolutions = 10,
    nbAllowedUnAssigned = 0,
    timeout = 6000,
    predictionOptions = {},
  } = options;

  if (!molecule) {
    throw new Error('It is needed a OCL molecule instance to assign');
  }

  molecule.addImplicitHydrogens();
  addDiastereotopicMissingChirality(molecule);

  const { joinedSignals } = await predictProton(molecule, predictionOptions);

  checkForIntegration(ranges);
  checkAtomsAndDiaIDs(joinedSignals);

  const targets: Targets = {};
  for (const range of ranges) {
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
    useIntegrationRestriction: true,
  });
}
