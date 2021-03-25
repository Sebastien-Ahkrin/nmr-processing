import { couplingPatterns } from '../constants/couplingPatterns';

/**
 * Join couplings smaller than a define tolerance.
 * The resulting coupling should be an average of the existing one.
 * @param {object} signal
 * @param {object} [options={}]
 * @param {number} [options.tolerance=0.05] tolerance to merge the couplings
 */
export function signalJoinCouplings(signal, options = {}) {
  const { tolerance = 0.05 } = options;
  let couplings = signal.j;
  if (couplings && couplings.length > 0) {
    signal = JSON.parse(JSON.stringify(signal));
    let cont = couplings[0].assignment ? couplings[0].assignment.length : 1;
    let newNmrJs = [];
    let diaIDs = [];
    let assignment = [];
    couplings.sort(function (a, b) {
      return b.coupling - a.coupling;
    });
    if (couplings[0].diaID) {
      diaIDs = [couplings[0].diaID];
    }
    if (couplings[0].assignment) {
      assignment = [...couplings[0].assignment];
    }
    for (let i = 0; i < couplings.length - 1; i++) {
      if (
        Math.abs(couplings[i].coupling - couplings[i + 1].coupling) < tolerance
      ) {
        cont += couplings[i + 1].assignment
          ? couplings[i + 1].assignment.length
          : 1;
        if (couplings[i + 1].diaID) diaIDs.push(couplings[i + 1].diaID);
        if (couplings[i + 1].assignment) {
          assignment.push(...couplings[i + 1].assignment);
        }
      } else {
        let jTemp = {
          coupling: Math.abs(couplings[i].coupling),
          multiplicity: couplingPatterns[cont],
        };
        if (diaIDs.length > 0) {
          jTemp.diaID = diaIDs;
        }
        if (assignment.length > 0) {
          jTemp.assignment = assignment;
        }

        newNmrJs.push(jTemp);

        if (couplings[i + 1].diaID) {
          diaIDs = [couplings[i + 1].diaID];
        }
        if (couplings[i + 1].assignment) {
          assignment = [...couplings[i + 1].assignment];
        }
        cont = couplings[i + 1].assignment
          ? couplings[i + 1].assignment.length
          : 1;
      }
    }
    let jTemp = {
      coupling: Math.abs(couplings[couplings.length - 1].coupling),
      multiplicity: couplingPatterns[cont],
    };
    if (diaIDs.length > 0) {
      jTemp.diaID = diaIDs;
    }
    if (assignment.length > 0) {
      jTemp.assignment = assignment;
    }
    newNmrJs.push(jTemp);

    signal.j = newNmrJs;
  }
  return signal;
}
