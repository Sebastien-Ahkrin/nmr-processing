import { couplingPatterns } from '../constants/couplingPatterns';
import { Jcoupling } from '../types/jcoupling';
import type { Signal1D } from '../types/signal1D';

import { OptionsSignalsToXY, signalsToXY } from './signalsToXY';

/**
 * Create the xy object from an array of 1D signals.
 * @param {Array<number>} signals Array of signals with assigned or unassigned couplings.
 * @param {*} options options for signalsToXY function.
 * @returns
 */

export function hackSignalsToXY(
  signals: Signal1D[],
  options: OptionsSignalsToXY = {},
) {
  let newSignals = signals.slice();

  signals.forEach((signal, s) => {
    const { js: jCouplings = [], atomIDs: signalAssignment = [s] } = signal;

    let { newCouplings, tempSignals } = checkCouplings(
      jCouplings,
      newSignals,
      signalAssignment,
    );

    if (tempSignals.length > 0) newSignals.push(...tempSignals);

    newSignals[s].js = newCouplings;
    newSignals[s].atomIDs = signalAssignment;
  });

  return signalsToXY(newSignals, options);
}

function checkCouplings(
  jCouplings: Jcoupling[],
  signals: Signal1D[],
  signalAssignment: number[],
) {
  let newSignalAssignment = signals.length - 1;
  let tempSignals: Signal1D[] = [];
  const newCouplings = jCouplings.reduce<Jcoupling[]>(
    (newCouplings, jCoupling) => {
      const { atomIDs = [], multiplicity, coupling } = jCoupling;
      if (atomIDs.length === 0) {
        if (coupling && multiplicity) {
          let tempCouplings: Jcoupling[] = [];
          const nbLinks = couplingPatterns.indexOf(multiplicity);
          for (let i = 0; i < nbLinks; i++) {
            newSignalAssignment++;
            tempCouplings.push({
              coupling,
              atomIDs: [newSignalAssignment],
            });
            tempSignals.push(
              formatSignal(coupling, [newSignalAssignment], signalAssignment),
            );
          }
          newCouplings.push(...tempCouplings);
        }
      } else {
        newCouplings.push(jCoupling);
      }
      return newCouplings;
    },
    [],
  );
  return { newCouplings, tempSignals };
}

function formatSignal(
  coupling: number,
  newSignalAssignment: number[],
  signalAssignment: number[],
) {
  return {
    delta: 100000,
    atomIDs: newSignalAssignment,
    js: [
      {
        coupling,
        atomIDs: signalAssignment,
      },
    ],
  };
}
