import type { NMRSignal1D } from '../signals/NMRSignal1D';
/**
 * Return
 * @param {*} signal
 */

export function signalMultiplicityPattern(signal: NMRSignal1D) {
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
