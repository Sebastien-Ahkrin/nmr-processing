import sum from 'ml-array-sum';

import type { MakeMandatory } from '../types/MakeMandatory';
import { Jcoupling } from '../types/jcoupling';
import { Signal1D } from '../types/signal1D';
import { joinPatterns } from '../utilities/joinPatterns';

export interface SignalsJoinCouplingsOptions {
  /**
   * tolerance to merge the couplings
   * @default 0.05
   */
  tolerance?: number;
}

type JcouplingFromPrediction = MakeMandatory<
  Jcoupling,
  'multiplicity' | 'diaIDs' | 'distance'
>;
type Signal1DWidthDiaID = MakeMandatory<Signal1D, 'diaIDs'>;
type Signal1DWidthJsAndDiaID = Omit<Signal1DWidthDiaID, 'js'> & {
  js: JcouplingFromPrediction[];
};

function checkForMandatory(
  signal: Signal1D,
): asserts signal is Signal1DWidthJsAndDiaID {
  if (!signal.js) throw new Error('there is not js');
  if (!signal.diaIDs) throw new Error('there is not diaIDs');
  for (const jcoupling of signal.js) {
    if (!jcoupling.diaID) throw new Error('there is not diaID');
    if (!jcoupling.distance) throw new Error('there is not diaID');
  }
}

/**
 * Join couplings smaller than a define tolerance.
 * The resulting coupling should be an average of the existing one.
 * This function will also ensure that assignment and diaID are arrays.
 * If distance is specified and is not always the same this property will be removed.
 */
export function signalJoinCouplings(
  signal: Signal1D,
  options: SignalsJoinCouplingsOptions = {},
) {
  const { tolerance = 0.05 } = options;

  checkForMandatory(signal);

  if (!signal.js || signal.js.length < 2) return signal;

  // we group the couplings that are less than the expected tolerance
  let currentGroup = [signal.js[0]];
  let groups = [currentGroup];
  for (let i = 1; i < signal.js.length; i++) {
    let currentJ = signal.js[i];
    if (
      currentGroup[currentGroup.length - 1].coupling - currentJ.coupling <
      tolerance
    ) {
      currentGroup.push(currentJ);
    } else {
      currentGroup = [currentJ];
      groups.push(currentGroup);
    }
  }

  signal.js = [];
  for (let group of groups) {
    let coupling = sum(group.map((group) => group.coupling)) / group.length;
    let atomIDs = distinctValues(
      group
        .filter((group) => group.atomIDs)
        .map((group) => group.atomIDs)
        .flat(),
    );
    let assignment = distinctValues(
      group
        .filter((group) => group.assignment && group.assignment.length > 0)
        .map((group) => group.assignment),
    ).join(' ');

    let diaID = distinctValues(
      group
        .filter((group) => group.diaID)
        .map((group) => group.diaID)
        .flat(),
    );
    let distances = distinctValues(group.map((group) => group.distance));
    let multiplicity = joinPatterns(group.map((group) => group.multiplicity));

    let newJ = {
      coupling,
      multiplicity,
    };
    if (diaID.length > 0) newJ.diaID = diaID;
    if (distances.length === 1 && distances[0]) newJ.distance = distances[0];
    if (assignment.length > 0) newJ.assignment = assignment;
    if (atomIDs.length > 0) newJ.atomIDs = atomIDs;
    signal.js.push(newJ);
  }

  return signal;
}

function distinctValues(array) {
  return [...new Set(array)];
}
