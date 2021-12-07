import { couplingPatterns } from '../constants/couplingPatterns';

import type { NMRSignal1D } from './NMRSignal1D';
import type { Jcoupling } from './jcoupling';
import { OptionsSignalsToXY, signalsToXY } from './signalsToXY';

/**
 * Create the xy object from an array of 1D signals.
 * @param signals Array of signals with assigned or unassigned couplings.
 */

export function hackSignalsToXY(
  signals: NMRSignal1D[],
  options: OptionsSignalsToXY = {},
) {
  let newSignals = JSON.parse(JSON.stringify(signals));

  signals.forEach((signal, s) => {
    const { js: jCouplings = [], atoms: signalAssignment = [s] } = signal;

    let { newCouplings, tempSignals } = checkCouplings(
      jCouplings,
      newSignals,
      signalAssignment,
    );

    if (tempSignals.length > 0) newSignals.push(...tempSignals);

    newSignals[s].js = newCouplings;
    newSignals[s].atoms = signalAssignment;
  });

  return signalsToXY(newSignals, options);
}

function checkCouplings(
  jCouplings: Jcoupling[],
  signals: NMRSignal1D[],
  signalAssignment: number[],
) {
  let newSignalAssignment = signals.length - 1;
  let tempSignals: NMRSignal1D[] = [];
  const newCouplings = jCouplings.reduce<Jcoupling[]>(
    (newCouplings, jCoupling) => {
      const { atoms = [], multiplicity, coupling } = jCoupling;
      if (atoms.length === 0) {
        if (coupling && multiplicity) {
          let tempCouplings: Jcoupling[] = [];
          const nbLinks = couplingPatterns.indexOf(multiplicity);
          for (let i = 0; i < nbLinks; i++) {
            newSignalAssignment++;
            tempCouplings.push({
              coupling,
              atoms: [newSignalAssignment],
            });
            tempSignals.push(
              formatSignal(coupling, [newSignalAssignment], signalAssignment),
            );
          }
        } else {
          newCouplings.push(jCoupling);
        }
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
    atoms: newSignalAssignment,
    js: [
      {
        coupling,
        atoms: signalAssignment,
      },
    ],
  };
}
