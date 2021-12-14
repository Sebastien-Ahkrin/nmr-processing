import { getCorrelationDelta } from 'nmr-correlation';

import { PossibleAssignmentMap } from '../createMapPossibleAssignments';

import {
  AtomTypes,
  PredictionsByAtomType,
  RestrictionByCS,
} from './buildAssignments';
import { TargetsByAtomType } from './getTargetsAndCorrelations';

export interface PossibleAssignments {
  [key: string]: string[];
}
export interface MapPossibleAssignments {
  [key: string]: PossibleAssignmentMap;
}
export interface CreateMapPossibleAssignmentOptions {
  restrictionByCS: RestrictionByCS;
  predictions: PredictionsByAtomType;
  targets: TargetsByAtomType;
}
export function createMapPossibleAssignment(
  expandMap: MapPossibleAssignments,
  props: CreateMapPossibleAssignmentOptions,
) {
  const { restrictionByCS, predictions, targets } = props;

  const { tolerance: toleranceCS, chemicalShiftRestriction } = restrictionByCS;

  const atomTypes = Object.keys(predictions) as AtomTypes[];

  for (const atomType of atomTypes) {
    let errorAbs = toleranceCS[atomType];
    let predictionByAtomType = predictions[atomType];
    let targetByAtomType = targets[atomType];
    if (!expandMap[atomType]) expandMap[atomType] = {};
    for (const diaID in predictionByAtomType) {
      let prediction = predictionByAtomType[diaID];
      expandMap[atomType][diaID] = [];

      if (targetByAtomType) {
        for (const targetID in targetByAtomType) {
          let target = targetByAtomType[targetID];
          const { nbAtoms, protonsCount: protonsCountFromPrediction } =
            prediction;
          const { integration, protonsCount } = target;

          const couldBeAssigned = !integration
            ? true
            : atomType === 'H'
            ? nbAtoms - integration < 1
            : protonsCount.length > 0
            ? protonsCount.some(
                (count: number) => protonsCountFromPrediction === count,
              )
            : true;
          if (couldBeAssigned) {
            if (
              !chemicalShiftRestriction ||
              typeof prediction.delta === 'undefined'
            ) {
              // Chemical shift is not a restriction
              expandMap[atomType][diaID].push(targetID);
            } else {
              let targetDelta = getCorrelationDelta(target);
              if (targetDelta === undefined)
                {throw new Error(`Correlation has not delta`);}
              let distAfterLimit = Math.abs(
                prediction.delta - targetDelta - errorAbs,
              );

              if (distAfterLimit < 4 * errorAbs) {
                expandMap[atomType][diaID].push(targetID);
              }
            }
          }
        }
      }
      expandMap[atomType][diaID].push('*');
    }
  }
  return expandMap;
}
