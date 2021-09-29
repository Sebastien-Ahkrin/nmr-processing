import mean from 'ml-array-mean';
import sum from 'ml-array-sum';

import { signalJoinCouplings } from '../signal/signalJoinCouplings';
import type { SignalJoinCouplingsOptions } from '../signal/signalJoinCouplings';
import type { MakeMandatory } from '../types/MakeMandatory';
import type { Jcoupling } from '../types/jcoupling';
import type { Signal1D } from '../types/signal1D';

export interface SignalsJoinOptions {
  /**
   * options for signalJoinCouplings
   * @default {}
   */
  joinCouplings?: SignalJoinCouplingsOptions;
}

type JcouplingFromPrediction = MakeMandatory<
  Jcoupling,
  'multiplicity' | 'diaIDs' | 'distance'
>;
type Signal1DWidthDiaID = MakeMandatory<Signal1D, 'diaIDs'>;
type Signal1DWidthJsAndDiaID = Omit<Signal1DWidthDiaID, 'js'> & {
  js: JcouplingFromPrediction[];
};

const localeCompare = (a: string, b: string) => a.localeCompare(b);
const localeCompareJcouplingKeys = (
  a: JcouplingFromPrediction,
  b: JcouplingFromPrediction,
) => {
  const aa = `${a.diaIDs.join(' ')}${a.distance}`;
  const bb = `${b.diaIDs.join(' ')}${b.distance}`;
  return localeCompare(aa, bb);
};
function checkForMandatory(
  signals: Signal1D[],
): asserts signals is Signal1DWidthJsAndDiaID[] {
  for (const signal of signals) {
    if (!signal.js) throw new Error('there is not js');
    if (!signal.diaIDs) throw new Error('there is not diaIDs');
    for (const jcoupling of signal.js) {
      if (!jcoupling.diaIDs) throw new Error('there is not diaIDs');
      if (!jcoupling.distance) throw new Error('there is not distance');
    }
  }
}
/**
 * Join signals if all the same diaID
 */
export function signalsJoin(
  signals: Signal1D[],
  options: SignalsJoinOptions = {},
) {
  checkForMandatory(signals);
  const { joinCouplings = {} } = options;
  const { tolerance, ignoreDiaIDs } = joinCouplings;
  // we group them by diaIDs

  const copySignals: Signal1DWidthJsAndDiaID[] = JSON.parse(
    JSON.stringify(signals),
  );

  const groupedSignals: { [index: string]: Signal1DWidthJsAndDiaID[] } = {};

  for (let signal of copySignals) {
    signal.js = signal.js.sort(localeCompareJcouplingKeys);
    const keyDiaIDs = signal.diaIDs.join(' ');
    let id = `${keyDiaIDs} ${signal.js
      .map((j: JcouplingFromPrediction) => `${j.diaIDs.join(' ')} ${j.distance}`)
      .sort(localeCompare)
      .join(' ')}`;
    if (!groupedSignals[id]) {
      groupedSignals[id] = [];
    }
    groupedSignals[id].push(signal);
  }
  // for each group we need to combine assignments and average couplings
  let newSignals: Signal1DWidthJsAndDiaID[] = [];
  Object.values(groupedSignals).forEach((group) => {
    // joining couplings only if diaID and distance are equal
    let js: JcouplingFromPrediction[] = [];
    for (let i = 0; i < group[0].js.length; i++) {
      const coupling = group[0].js[i];
      js.push({
        diaIDs: coupling.diaIDs,
        distance: coupling.distance,
        multiplicity: coupling.multiplicity,
        coupling: mean(group.map((item) => item.js[i].coupling)),
      });
    }
    let signal: Signal1DWidthJsAndDiaID = {
      nbAtoms: sum(group.map((item) => item.nbAtoms || 0)),
      delta: mean(group.map((item) => item.delta)),
      diaIDs: group[0].diaIDs,
      atomIDs: group.map((item) => item.atomIDs || []).flat(),
      js,
    };

    const assignment = group
      .map((item) => item.assignment)
      .filter((item) => item)
      .join(' ');

    if (assignment.length > 0) signal.assignment = assignment;

    newSignals.push(signal);
  });

  newSignals = newSignals
    .map((signal) => {
      let newSignal = signalJoinCouplings(signal, {
        tolerance,
        ignoreDiaIDs,
      }) as Signal1DWidthJsAndDiaID;
      if (newSignal.js) {
        newSignal.multiplicity = newSignal.js.reduce(
          (multiplicity, jCoupling) => {
            return `${multiplicity}${jCoupling.multiplicity}`;
          },
          '',
        );
      }
      return newSignal;
    })
    .sort((a, b) => a.delta - b.delta);

  return newSignals;
}
