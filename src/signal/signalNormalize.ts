import type { Jcoupling } from '../types/jcoupling';
import type { Signal1D } from '../types/signal1D';

/**
 * Ensure that atomIDs and diaIDs are arrays and coupling are sorted
 * @param {object} signal
 * @returns signal
 */
export function signalNormalize(signal: Partial<Signal1D>) {
  let newSignal = JSON.parse(JSON.stringify(signal));

  if (!signal.atomIDs) signal.atomIDs = [];
  if (!Array.isArray(signal.atomIDs)) {
    newSignal.atomIDs = [signal.atomIDs];
  }

  if (!signal.diaIDs) signal.diaIDs = [];
  if (!Array.isArray(signal.diaIDs)) {
    newSignal.diaIDs = [signal.diaIDs];
  }

  if (!newSignal.js) newSignal.js = [];

  const couplings = newSignal.js;
  for (const coupling of couplings) {
    if (coupling.assignment && Array.isArray(coupling.assignment)) {
      coupling.assignment = coupling.assignment.join(' ');
    }
    if (coupling.diaIDs) coupling.diaIDs = [];
    if (!Array.isArray(coupling.diaIDs)) {
      coupling.diaIDs = [coupling.diaIDs];
    }
  }
  newSignal.js = newSignal.js
    .forEach((j: Jcoupling, i: number, js: Jcoupling[]) => {
      if (j.distance === undefined) js[i].distance = -1;
    })
    .sort((a: Jcoupling, b: Jcoupling) => b.coupling - a.coupling);

  return newSignal as Signal1D;
}
