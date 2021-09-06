import { Jcoupling } from '..';
import type { Signal1D } from '../types/signal1D';

export interface Jcoupling {
  coupling: number;
  atomIDs?: number[];
  assignment?: string | string[];
  diaIDs: string[];
  multiplicity: string;
}

/**
 * Ensure that atomIDs and diaIDs are arrays and coupling are sorted
 * @param {object} signal
 * @returns signal
 */
export function signalNormalize(signal: Signal1D) {
  let newSignal = JSON.parse(JSON.stringify(signal));

  if (signal.atomIDs && !Array.isArray(signal.atomIDs)) {
    newSignal.atomIDs = [signal.atomIDs];
  }
  if (signal.assignment && Array.isArray(signal.assignment)) {
    newSignal.assignment = signal.assignment.join(' ');
  }
  if (signal.diaIDs && !Array.isArray(signal.diaIDs)) {
    newSignal.diaIDs = [signal.diaIDs];
  }

  if (!newSignal.js) newSignal.js = [];

  const couplings = newSignal.js;
  for (const coupling of couplings) {
    if (coupling.assignment && Array.isArray(coupling.assignment)) {
      coupling.assignment = coupling.assignment.join(' ');
    }
    if (coupling.diaIDs && !Array.isArray(coupling.diaIDs)) {
      coupling.diaIDs = [coupling.diaIDs];
    }
  }
  newSignal.js = newSignal.js.sort((a: Jcoupling, b: Jcoupling) => b.coupling - a.coupling);

  return signal;
}
