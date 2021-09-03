import type { Signal1D } from '../types/signal1D';
/**
 * Return
 * @param {*} signal
 */

export function signalMultiplicityPattern(signal: Signal1D) {
  let js = signal.js;
  let pattern = '';
  if (js && js.length > 0) {
    for (let coupling of js) {
      pattern += coupling.multiplicity;
    }
  } else if (signal.delta) {
    pattern = 's';
  } else {
    pattern = 'm';
  }
  return pattern;
}
