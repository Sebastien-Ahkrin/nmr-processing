import type { Signal1D } from '../types/signal1D';

import { OptionsSignalsToXY, signalsToXY } from './signalsToXY';


const patterns = ['s', 'd', 't', 'q', 'quint', 'h', 'sept', 'o', 'n'];

/**
 * Create the xy object from an array of 1D signals.
 * @param {Array<number>} signals Array of signals with assigned or unassigned couplings.
 * @param {*} options options for signalsToXY function.
 * @returns
 */

export function checkSignalsToXY(
  signals: Partial<Signal1D>[],
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

function checkCouplings(jCouplings, signals, signalAssignment) {
  let newSignalAssignment = signals.length - 1;
  let tempSignals = [];
  const newCouplings = jCouplings.reduce((newCouplings, jCoupling) => {
    const { atomIDs = [], multiplicity, coupling } = jCoupling;
    if (atomIDs.length === 0) {
      if (coupling && multiplicity) {
        let tempCouplings = [];
        const nbLinks = patterns.indexOf(multiplicity);
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
  }, []);
  return { newCouplings, tempSignals };
}

function formatSignal(coupling, newSignalAssignment, signalAssignment) {
  return {
    delta: 1000,
    atomIDs: newSignalAssignment,
    js: [
      {
        coupling,
        atomIDs: signalAssignment,
      },
    ],
  };
}
