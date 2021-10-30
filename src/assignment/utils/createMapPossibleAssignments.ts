import { MakeMandatory } from '../../types/MakeMandatory';
import type { RestrictionByCS, Targets } from '../get1HAssignments';

import type { Predictions1Hassignments } from './buildAssignments';

type RestrictionByCSMandatory = MakeMandatory<
  RestrictionByCS,
  'chemicalShiftRestriction' | 'tolerance' | 'useChemicalShiftScore'
>;

interface CreateMapPossibleAssignments {
  predictions: Predictions1Hassignments;
  restrictionByCS: RestrictionByCSMandatory;
  targets: Targets;
}

export interface PossibleAssignmentMap {
  [key: string]: string[];
}
export function createMapPossibleAssignments(
  props: CreateMapPossibleAssignments,
) {
  const { restrictionByCS, predictions, targets } = props;

  const { tolerance: toleranceCS, chemicalShiftRestriction } = restrictionByCS;

  let errorAbs = Math.abs(toleranceCS);

  const expandMap: PossibleAssignmentMap = {};
  for (const diaID in predictions) {
    let prediction = predictions[diaID];
    if (prediction.error) prediction.error = Math.abs(prediction.error);
    expandMap[diaID] = [];

    if (targets) {
      for (const targetID in targets) {
        let target = targets[targetID];
        const { nbAtoms } = prediction;
        const { integration } = target;

        const couldBeAssigned =
          integration > 0 ? nbAtoms - integration < 1 : true;
        if (couldBeAssigned) {
          if (
            !chemicalShiftRestriction ||
            typeof prediction.delta === 'undefined'
          ) {
            // Chemical shift is not a restriction
            expandMap[diaID].push(targetID);
          } else {
            let error = errorAbs;
            if (prediction.error) {
              error = Math.max(error, prediction.error);
            }
            const delta =
              target.signals && target.signals.length > 0
                ? target.signals[0].delta
                : (target.to + target.from) / 2;

            let distAfterLimit = Math.abs(prediction.delta - delta - errorAbs);
            if (distAfterLimit < 4 * errorAbs) {
              expandMap[diaID].push(targetID);
            }
          }
        }
      }
    }
    expandMap[diaID].push('*');
  }
  return expandMap;
}
