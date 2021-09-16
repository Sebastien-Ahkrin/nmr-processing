import sum from 'ml-array-sum';

import { joinPatterns } from '../utilities/joinPatterns';

import type { MakeMandatory } from '../types/MakeMandatory';
import { Signal1D } from '../types/signal1D';
import { Jcoupling } from '../types/jcoupling';
import { from } from 'form-data';

export interface SignalsJoinCouplingsOptions {
  /**
   * tolerance to merge the couplings
   * @default 0.05
   */
  tolerance?: number;
  /**
   * if it's true, the j coupling will be joined by proximity
   * @default false
   */
  ignoreDiaIDs?: boolean;
}

type JcouplingWithDiaID = MakeMandatory<Jcoupling, 'diaID'>;
type Signal1DWidthJs = MakeMandatory<Signal1D, 'js'>;
type Signal1DWidthJsAndDiaID = Omit<Signal1DWidthJs, 'js'> & {
  js: JcouplingWithDiaID[];
};

const areThanClose = (a: Jcoupling, b: Jcoupling, tolerance: number) =>
  a.coupling - b.coupling < tolerance;

const takeCareDiaIDs = (
  a: JcouplingWithDiaID,
  b: JcouplingWithDiaID,
  tolerance: number,
) => a.diaID === b.diaID && areThanClose(a, b, tolerance);

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
  const { tolerance = 0.05, ignoreDiaIDs = false } = options;

  if (ignoreDiaIDs) {
    checkJs(signal);
    return groupJCouplings(signal, areThanClose, tolerance);
  } else {
    checkJsAndDiaID(signal);
    return groupJCouplings(signal, takeCareDiaIDs, tolerance);
  }
}

function groupJCouplings(
  signal: Signal1DWidthJs,
  comparator: any,
  tolerance: number,
) {
  let currentGroup = [signal.js[0]];
  let groups = [currentGroup];
  for (let i = 1; i < signal.js.length; i++) {
    let currentJ = signal.js[i];
    if (
      comparator(currentGroup[currentGroup.length - 1], currentJ, tolerance)
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
        .flat() as number[],
    ) as number[];

    let assignment = distinctValues(
      group
        .filter((group) => group.assignment)
        .map((group) => group.assignment)
        .flat() as string[],
    ).join(' ');

    let diaIDs = distinctValues(
      group
        .filter((group) => group.diaID)
        .map((group) => group.diaID)
        .flat() as string[],
    ) as string[];

    let distances = distinctValues(
      group.map((group) => group.distance) as number[],
    ) as number[];

    let multiplicity = joinPatterns(
      group
        .filter((group) => group.multiplicity)
        .map((group) => group.multiplicity) as string[],
    );

    let newJ: Jcoupling = {
      coupling,
      multiplicity,
    };

    if (diaIDs.length === 1) newJ.diaID = diaIDs[0];
    if (distances.length === 1 && distances[0]) newJ.distance = distances[0];
    if (assignment.length > 0) newJ.assignment = assignment;
    if (atomIDs.length > 0) newJ.atomIDs = atomIDs;
    signal.js.push(newJ);

    return signal;
  }
}

function distinctValues(array: string[] | number[]) {
  const onlyDifferents = new Set();
  for (const element of array) {
    onlyDifferents.add(element);
  }

  return Array.from(onlyDifferents);
}

function checkJsAndDiaID(
  signal: Signal1D,
): asserts signal is Signal1DWidthJsAndDiaID {
  if (!signal.js) throw new Error('there is not js');
  for (const jcoupling of signal.js) {
    if (!jcoupling.diaID) throw new Error('there is not diaID');
  }
}

function checkJs(signal: Signal1D): asserts signal is Signal1DWidthJs {
  if (!signal.js) throw new Error('there is not js');
}
