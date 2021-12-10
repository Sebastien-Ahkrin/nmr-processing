import { getCorrelationDelta, Types } from 'nmr-correlation';

import { RestrictionByCS } from '../buildAssignments';

import { AtomTypes, Partial, PredictionsByAtomType } from './buildAssignment';
import { TargetsByAtomType } from './getTargetsAndCorrelations';
import groupCarbonTargetByIntegrationZone from './groupCarbonTargetByIntegrationZone';

export interface PartialScoreOptions {
  diaIDPeerPossibleAssignment: { [key: string]: string[] };
  restrictionByCS: RestrictionByCS;
  nbAllowedUnAssigned: number;
  correlations: Types.Values;
  predictions: PredictionsByAtomType;
  targets: TargetsByAtomType;
}

interface ObjectStringArray {
  [key: string]: string[];
}

interface ObjectObjectStringArray {
  [key: string]: ObjectStringArray;
}

export function partialScore(partial: Partial, props: PartialScoreOptions) {
  const {
    diaIDPeerPossibleAssignment,
    nbAllowedUnAssigned,
    restrictionByCS,
    predictions,
    targets,
    correlations,
  } = props;

  const { tolerance: toleranceCS, useChemicalShiftScore } = restrictionByCS;
  let countStars = 0;
  let totalPartial = 0;
  let partialInverse: ObjectObjectStringArray = {};
  let activeDomainOnPrediction: { [key: string]: number[] } = {};
  const atomTypes = Object.keys(partial) as AtomTypes[];
  for (const atomType of atomTypes) {
    const currentPartialInverse: ObjectStringArray = {};
    const partialAssignment = partial[atomType] || [];
    partialInverse[atomType] = currentPartialInverse;
    activeDomainOnPrediction[atomType] = [];
    totalPartial += partialAssignment.length;
    for (let i = 0; i < partialAssignment.length; i++) {
      const targetID = partialAssignment[i];
      if (targetID && targetID !== '*') {
        activeDomainOnPrediction[atomType].push(i);
        if (!currentPartialInverse[targetID]) {
          currentPartialInverse[targetID] = [];
        }
        currentPartialInverse[targetID].push(
          diaIDPeerPossibleAssignment[atomType][i],
        );
      }
      if (targetID === '*') countStars++;
    }
  }
  if (countStars > nbAllowedUnAssigned) return 0;

  const activeDomainOnTarget: ObjectStringArray = {};
  for (const atomType in partialInverse) {
    activeDomainOnTarget[atomType] = Object.keys(partialInverse[atomType]);
  }

  const valuesActiveDomainOnTarget = Object.values(activeDomainOnTarget);
  if (
    valuesActiveDomainOnTarget.reduce(
      (sum, e) => (e.length === 0 ? sum + 1 : sum),
      0,
    ) === valuesActiveDomainOnTarget.length
  ) {
    return 0;
  }

  const getPredictionByDiaID = getPrediction.bind({}, predictions);
  // check the integration
  const targetByIntegral: {
    atomType: string;
    targetIDs: string[];
    integration: number;
  }[] = [];

  for (const atomType in partial) {
    if (atomType === 'C' && activeDomainOnTarget[atomType].length > 0) {
      targetByIntegral.push(
        ...groupCarbonTargetByIntegrationZone(
          activeDomainOnTarget[atomType],
          targets[atomType],
          correlations,
        ),
      );
    } else {
      for (let targetID of activeDomainOnTarget[atomType]) {
        targetByIntegral.push({
          atomType,
          targetIDs: [targetID],
          integration: targets.H[targetID].integration,
        });
      }
    }
  }
  for (const group of targetByIntegral) {
    const { integration, atomType } = group;

    if (integration === undefined || isNaN(integration)) continue;

    let total = 0;
    for (let targetID of group.targetIDs) {
      let targetToSource = partialInverse[atomType][targetID];
      for (const diaID of targetToSource) {
        const { prediction, atomType: atomOfPrediction } =
          getPredictionByDiaID(diaID);
        if (atomType === atomOfPrediction) total += prediction.allHydrogens;
      }
    }
    if (total - integration >= 0.5) {
      return 0;
    }
  }

  //chemical shift score
  let count = 1;
  let chemicalShiftScore = 1;
  if (useChemicalShiftScore) {
    chemicalShiftScore = 0;
    count = 0;
    for (const atomType of Object.keys(partial) as AtomTypes[]) {
      const partialPeerAtomType = partial[atomType];
      const targetsPeerAtomType = targets[atomType];
      for (let index = 0; index < partialPeerAtomType.length; index++) {
        const targetID = partialPeerAtomType[index];
        if (targetID && targetID !== '*') {
          count++;
          let diaID = diaIDPeerPossibleAssignment[atomType][index];
          let source = predictions[atomType][diaID];
          let target = targetsPeerAtomType[targetID];
          let error = toleranceCS;
          // if (source.error) {
          //   error = Math.max(source.error, toleranceCS);
          // }
          if (typeof source.delta === 'undefined') {
            // Chemical shift is not a restriction
            chemicalShiftScore += 1;
          } else {
            const targetDelta = getCorrelationDelta(target);

            if (targetDelta === undefined) {
              throw new Error('correlation has not delta');
            }

            let diff = Math.abs(source.delta - targetDelta);
            if (diff < error) {
              //@TODO: check for a better discriminant
              chemicalShiftScore += 1;
            } else {
              diff = Math.abs(diff - error);
              chemicalShiftScore += (-0.25 / error) * diff + 1;
            }
          }
        }
      }
    }
    if (count > 0) {
      chemicalShiftScore /= count;
    }
  }

  let scoreOn2D = 0;
  // console.log(activeDomainOnTarget, howManyActived(activeDomainOnTarget));
  if (howManyActived(activeDomainOnTarget) > 1) {
    let andConstrains = {};
    let activeDomain = [];
    // console.log(activeDomainOnPrediction);
    for (const atomType in activeDomainOnPrediction) {
      activeDomain = activeDomain.concat(
        activeDomainOnPrediction[atomType].map((e) => ({ index: e, atomType })),
      );
    }
    // console.log('activeDomain', activeDomain);
    for (let i = 0; i < activeDomain.length; i++) {
      const { atomType: atomTypeI, index: indexI } = activeDomain[i];
      const predictionI =
        predictions[atomTypeI][diaIDPeerPossibleAssignment[atomTypeI][indexI]];
      for (let j = i + 1; j < activeDomain.length; j++) {
        const { atomType: atomTypeJ, index: indexJ } = activeDomain[j];
        const predictionJ =
          predictions[atomTypeJ][
            diaIDPeerPossibleAssignment[atomTypeJ][indexJ]
          ];
        let pathLength = predictionI.pathLength[predictionJ.diaIDIndex];
        let isPossible = pathLength < 5;

        let partialI = partial[atomTypeI][indexI];
        let partialJ = partial[atomTypeJ][indexJ];
        let keyOnTargerMap =
          partialI > partialJ
            ? `${partialJ} ${partialI}`
            : `${partialI} ${partialJ}`;

        let areLinked = checkLinking(
          {
            from: {
              targetID: partialI,
              atomType: atomTypeI,
            },
            to: {
              targetID: partialJ,
              atomType: atomTypeJ,
            },
          },
          targets,
        );

        let partialScore2D = isPossible
          ? areLinked
            ? 1
            : 0
          : !areLinked
          ? 1
          : 0;

        andConstrains[keyOnTargerMap] = andConstrains[keyOnTargerMap]
          ? Math.max(andConstrains[keyOnTargerMap], partialScore2D)
          : partialScore2D;
      }
    }

    let sumAnd = 0;
    for (let key in andConstrains) {
      sumAnd += andConstrains[key];
    }

    scoreOn2D =
      sumAnd / ((activeDomain.length * (activeDomain.length - 1)) / 2);
  }
  // console.log('CH', chemicalShiftScore, scoreOn2D);
  const penaltyByStarts = countStars / totalPartial;
  if (chemicalShiftScore === 0) return scoreOn2D - penaltyByStarts;

  if (scoreOn2D === 0) return chemicalShiftScore - penaltyByStarts;
  return (chemicalShiftScore + scoreOn2D) / 2 - penaltyByStarts;
}

function checkLinking(partials, correlations) {
  const { from, to } = partials;
  if (from.targetID === to.targetID) return true;
  let correlationI = correlations[from.atomType][from.targetID];
  for (let key of ['link', 'indirectLinks']) {
    for (const link of correlationI[key]) {
      if (link.signal.id === to.targetID) return true;
    }
  }
  return false;
}

function getPrediction(predictions: PredictionsByAtomType, diaID: string) {
  const atomTypes = Object.keys(predictions) as AtomTypes[];
  for (const atomType of atomTypes) {
    const predictionByAtomType = predictions[atomType];
    if (!predictionByAtomType) throw new Error(`prediction by ${atomType}`);
    if (predictionByAtomType[diaID]) {
      return { atomType, prediction: predictionByAtomType[diaID] };
    }
  }
  throw new Error(`There is not prediction for ${diaID}`);
}

function howManyActived(actived: ObjectStringArray) {
  let sum = 0;
  for (const atom in actived) {
    sum += actived[atom].length;
  }
  return sum;
}
