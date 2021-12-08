import { Molecule } from 'openchemlib';
import { addDiastereotopicMissingChirality } from 'openchemlib-utils';

import { Prediction1D } from '..';
import type { PredictCarbonOptions } from '../prediction/predictCarbon';
import type { PredictProtonOptions } from '../prediction/predictProton';
import { NMRRange } from '../xy/NMRRange';
import { NMRZone } from '../xyz/NMRZone';

import type { RestrictionByCS } from './utils/buildAssignments';
import { addIDs } from './utils/getAssignment/addIDs';
import { getTargetsAndCorrelations } from './utils/getAssignment/getTargetsAndCorrelations';

export interface SpectraData1D {
  ranges: NMRRange[];
  info: any;
}

export interface SpectraData2D {
  zones: NMRZone[];
  info: any;
}

export type SpectraData = SpectraData1D | SpectraData2D;

export interface GetAutoAssignmentInput {
  /**
   * It has the number of each atoms in the chemical structure. e.g. { C: 6, H: 6 }
   */
  atoms: { [key: string]: number };

  spectra: SpectraData[];
  /**
   * Instance of Molecule
   */
  molecule: Molecule;
}

export interface GetAssignmentsOptions {
  justAssign?: Array<'H' | 'C'>;

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
   * predictions
   */
  predictions?: {
    H?: Prediction1D;
    C?: Prediction1D;
  };
  /**
   * prediction options
   */
  predictionOptions?: {
    H?: PredictProtonOptions;
    C?: PredictCarbonOptions;
  };
  /**
   * correlation options
   */
  correlation?: {
    tolerance?: number;
  };
}

export async function getAssignment(
  input: GetAutoAssignmentInput,
  options: GetAssignmentsOptions = {},
) {
  let {
    restrictionByCS = {},
    justAssign,
    minScore = 1,
    maxSolutions = 10,
    nbAllowedUnAssigned = 0,
    timeout = 6000,
    predictionOptions = {},
    predictions = {},
    correlation: correlationOptions,
  } = options;

  const {
    tolerance = 1,
    useChemicalShiftScore = false,
    chemicalShiftRestriction = true,
  } = restrictionByCS;

  const molecule = input.molecule;

  if (!molecule) throw new Error('It is needed a molecule to assign');

  molecule.addImplicitHydrogens();
  addDiastereotopicMissingChirality(molecule);

  const spectra = addIDs(input.spectra);

  const { targets, correlations } = getTargetsAndCorrelations(
    spectra,
    correlationOptions,
  );

  console.log(targets)
  return null;
  // const { assignmentOrder } = getWorkFlow(correlations, justAssign);

  // const solutions = await buildAssignment({
  //   restrictionByCS: {
  //     tolerance,
  //     useChemicalShiftScore,
  //     chemicalShiftRestriction,
  //   },
  //   timeout,
  //   minScore,
  //   maxSolutions,
  //   molecule,
  //   assignmentOrder,
  //   nbAllowedUnAssigned,
  //   correlations,
  //   targets,
  //   predictionOptions,
  //   predictions,
  // });
  // return solutions.solutions.elements;
}
