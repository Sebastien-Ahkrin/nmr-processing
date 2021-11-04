import { Targets } from '../get1HAssignments';

import type {
  Predictions1Dassignments,
  RestrictionByCS,
} from './buildAssignments';

interface PartialScoreOptions {
  restrictionByCS: RestrictionByCS;
  /**
   * number of allowed unassignment signals
   * @default 0
   */
  useIntegrationRestriction: boolean;
  nbAllowedUnAssigned: number;
  diaIDPeerPossibleAssignment: string[];
  predictions: Predictions1Dassignments;
  targets: Targets;
}

export function partialScore(
  partial: Array<string | null>,
  options: PartialScoreOptions,
) {
  const {
    useIntegrationRestriction,
    diaIDPeerPossibleAssignment,
    nbAllowedUnAssigned,
    restrictionByCS,
    predictions,
    targets,
  } = options;
  const { useChemicalShiftScore } = restrictionByCS;
  let countStars = 0;
  let totalPartial = partial.length;
  let partialInverse: {
    [key: string]: string[];
  } = {};
  let activeDomainOnPrediction: number[] = [];

  for (let i = 0; i < partial.length; i++) {
    const targetID = partial[i];
    if (targetID && targetID !== '*') {
      activeDomainOnPrediction.push(i);
      if (!partialInverse[targetID]) {
        partialInverse[targetID] = [];
      }
      partialInverse[targetID].push(diaIDPeerPossibleAssignment[i]);
    }
    if (targetID === '*') countStars++;
  }
  if (countStars > nbAllowedUnAssigned) return 0;

  const activeDomainOnTarget = Object.keys(partialInverse);

  if (activeDomainOnTarget.length === 0) {
    return 0;
  }

  if (useIntegrationRestriction) {
    for (let targetID of activeDomainOnTarget) {
      let targetToSource = partialInverse[targetID];
      let total = 0;
      for (const diaID of targetToSource) {
        const prediction = predictions[diaID];
        total += prediction.allHydrogens;
      }

      const { integration } = targets[targetID];
      if (total - integration >= 0.5) {
        return 0;
      }
    }
  }

  //chemical shift score
  let chemicalShiftScore = useChemicalShiftScore
    ? chemicalShiftScoring(partial, options)
    : 1;

  const penaltyByStarts = countStars / totalPartial;

  return chemicalShiftScore - penaltyByStarts;
}

function chemicalShiftScoring(
  partial: Array<string | null>,
  options: PartialScoreOptions,
) {
  const { tolerance } = options.restrictionByCS;
  const { diaIDPeerPossibleAssignment, predictions, targets } = options;

  let chemicalShiftScore = 0;
  let count = 0;
  for (let index = 0; index < partial.length; index++) {
    const targetID = partial[index];
    if (targetID && targetID !== '*') {
      count++;
      let diaID = diaIDPeerPossibleAssignment[index];
      let source = predictions[diaID];
      let target = targets[targetID];
      let error = tolerance;
      if (source.error) {
        error = Math.max(source.error, tolerance);
      }
      if (typeof source.delta === 'undefined') {
        // Chemical shift is not a restriction
        chemicalShiftScore += 1;
      } else {
        const delta =
          target.signals && target.signals.length > 0
            ? target.signals[0].delta
            : (target.to + target.from) / 2;
        let diff = Math.abs(source.delta - delta);
        if (diff < error) {
          chemicalShiftScore += 1;
        } else {
          diff = Math.abs(diff - error);
          chemicalShiftScore += (-0.25 / error) * diff + 1;
        }
      }
    }
  }
  if (count > 0) {
    chemicalShiftScore /= count;
  }
  return chemicalShiftScore;
}
