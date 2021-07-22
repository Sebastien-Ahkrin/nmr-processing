import mean from 'ml-array-mean';
import sum from 'ml-array-sum';

import { signalJoinCouplings } from '../signal/signalJoinCouplings';
import { signalNormalize } from '../signal/signalNormalize';
/**
 * Join signals if all the same diaID
 * diaID must be present at the level of the signal and the coupling so practically it only applies on simulated data
 */
export function signalsJoin(signals, options = {}) {
  const { tolerance = 0.1 } = options;
  // diaIDs is mandatory everywhere
  for (let signal of signals) {
    if (!signal.diaID || !signal.diaID.length === 1) return signals;
    for (let coupling of signal.js) {
      if (
        !coupling.diaID ||
        !coupling.diaID.length === 1 ||
        coupling.multiplicity !== 'd'
      ) {
        return signals;
      }
    }
  }

  // we group them by diaIDs
  const groupedSignals = {};
  for (let signal of signals) {
    signal = signalNormalize(signal); // we have a copy
    signal.js = signal.js.sort((a, b) =>
      a.diaID + a.distance < b.diaID + b.distance ? 1 : -1,
    );
    let id = `${signal.diaID[0]} ${signal.js
      .map((j) => `${j.diaID[0]} ${j.distance}`)
      .sort()
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
    const js = [];
    for (let i = 0; i < group[0].js.length; i++) {
      js.push({
        diaID: group[0].js[i].diaID,
        distance: group[0].js[i].distance,
        multiplicity: group[0].js[i].multiplicity,
        coupling: mean(group.map((item) => item.js[i].coupling)),
      });
    }

    newSignals.push({
      nbAtoms: sum(group.map((item) => item.nbAtoms)),
      delta: mean(group.map((item) => item.delta)),
      diaID: group[0].diaID,
      assignment: group
        .map((item) => item.assignment)
        .flat()
        .filter((item) => item),
      js,
    });
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
