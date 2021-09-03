import type { Signal1D } from '../types/signal1D';

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
  if (signal.js) {
    let couplings = signal.js;
    for (let coupling of couplings) {
      if (coupling.assignment && Array.isArray(coupling.assignment)) {
        coupling.assignment = coupling.assignment.join(' ');
      }
      if (coupling.diaIDs && !Array.isArray(coupling.diaIDs)) {
        coupling.diaIDs = [coupling.diaIDs];
      }
    }
    signal.js = signal.js.sort((a, b) => b.coupling - a.coupling);
  }
  return signal;
}
