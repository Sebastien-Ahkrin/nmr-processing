import mean from 'ml-array-mean';
import sum from 'ml-array-sum';

import { signalJoinCouplings } from '../signal/signalJoinCouplings';
import { signalNormalize } from '../signal/signalNormalize';
import { Jcoupling } from '../types/jcoupling';

import type { Signal1D } from '../types/signal1D';

interface SignalsJoinOptions {
  tolerance?: number;
}
/**
 * Join signals if all the same diaID
 * diaID must be present at the level of the signal and the coupling so practically it only applies on simulated data
 */
export function signalsJoin(
  signals: Signal1D[],
  options: SignalsJoinOptions = {},
) {
  const { tolerance = 0.1 } = options;
  // diaIDs is mandatory everywhere
  for (let signal of signals) {
    if (!signal.diaIDs || !(signal.diaIDs.length === 1)) return signals;
    for (let coupling of signal.js || []) {
      if (
        !coupling.diaIDs ||
        !(coupling.diaIDs.length === 1) ||
        coupling.multiplicity !== 'd'
      ) {
        return signals;
      }
    }
  }

  // we group them by diaIDs
  const localeCompare = (a: string, b: string) => a.localeCompare(b);
  const localeCompareJcouplingKeys = (a: Jcoupling, b: Jcoupling) =>
    localeCompare(
      `${tryToJoin(a.diaIDs)}${a.distance || ''}`,
      `${tryToJoin(b.diaIDs)}${b.distance || ''}`,
    );
  const tryToJoin = (diaIDs?: string[]) => (diaIDs ? diaIDs.join('-') : '');

  const groupedSignals: { [index: string]: Signal1D[] } = {};
  for (let signal of signals) {
    signal = signalNormalize(signal); // we have a copy
    signal.js = (signal.js || []).sort(localeCompareJcouplingKeys);
    let id = `${tryToJoin(signal.diaIDs)} ${signal.js
      .map((j: Jcoupling) => `${tryToJoin(j.diaIDs)} ${j.distance || ''}`)
      .sort(localeCompare)
      .join(' ')}`;
    if (!groupedSignals[id]) {
      groupedSignals[id] = [];
    }
    groupedSignals[id].push(signal);
  }

  // for each group we need to combine assignments and average couplings
  let newSignals = [];
  for (let key in groupedSignals) {
    const group = groupedSignals[key];

    // joining couplings only if diaID and distance are equal
    for (let i = 0; i < group[0].js.length; i++) {
      const coupling = group[0].js[i];
      js.push({
        diaIDs: group[0].js[i].diaIDs,
        distance: group[0].js[i].distance,
        multiplicity: group[0].js[i].multiplicity,
        coupling: mean(group.map((item) => item.js[i].coupling)),
      });
    }

    let signal: Signal1D = {
      nbAtoms: sum(group.map((item) => item.nbAtoms || 0)),
      delta: mean(group.map((item) => item.delta)),
      diaIDs: group[0].diaIDs,
      atomIDs: group
        .map((item) => item.atomIDs || [])
        .flat(),
      js,
    };

    const assignment = group
      .map((item) => item.assignment)
      .filter((item) => item)
      .join(' ');

    if (assignment.length > 0) signal.assignment = assignment;

    newSignals.push(signal);
  }
  newSignals = newSignals
    .map((signal) => {
      signal = signalNormalize(signalJoinCouplings(signal, { tolerance }));
      if (signal.js) {
        signal.multiplicity = signal.js.reduce((multiplicity, jCoupling) => {
          return `${multiplicity}${jCoupling.multiplicity}`;
        }, '');
      }
      return signal;
    })
    .sort((a, b) => a.delta - b.delta);
  return newSignals;
}
