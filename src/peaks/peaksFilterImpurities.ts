import { impurities } from '../constants/impurities';
import type { ImpuritySignal } from '../constants/impurities';

import type { NMRPeak1D } from './NMRPeak1D';

const toCheck = ['solvent', 'h2o', 'tms'];

type Solvent = keyof typeof impurities;

export interface OptionsPeaksFilterImpurities {
  /**
   * Solvent name.
   */
  solvent?: Solvent | '(cd3)2so' | 'meod';
  /**
   * tolerance in ppm to assign a impurity.
   * @default 0.025
   */
  error?: number;
  /**
   * If it is true, it remove the peaks otherwise it assigns the kind of the signal with the name of the impurity
   * @default false
   */
  remove?: boolean;
}

interface OptionsCheckImpurity {
  name: string;
  error: number;
  remove: boolean;
}

/**
 * Try to remove peaks of impurities.
 */

export function peaksFilterImpurities(
  peakList: NMRPeak1D[],
  options: OptionsPeaksFilterImpurities = {},
) {
  let { solvent, error = 0.025, remove = false } = options;

  if (solvent) {
    if (solvent === '(cd3)2so') solvent = 'dmso';
    if (solvent === 'meod') solvent = 'cd3od';
    let solventImpurities = impurities[solvent];
    for (let impurity of toCheck) {
      let impurityShifts = solventImpurities[impurity];
      checkImpurity(peakList, impurityShifts, {
        error,
        remove,
        name: impurity,
      });
    }
  }
  return peakList;
}

function checkImpurity(
  peakList: NMRPeak1D[],
  impurity: ImpuritySignal[],
  options: OptionsCheckImpurity,
) {
  let { name, error, remove } = options;
  let j, tolerance, difference;
  let i = impurity.length;
  while (i--) {
    j = peakList.length;
    while (j--) {
      tolerance = error + peakList[j].width;
      difference = Math.abs(impurity[i].shift - peakList[j].x);
      if (difference < tolerance) {
        // && (impurity[i].multiplicity === '' || (impurity[i].multiplicity.indexOf(peakList[j].multiplicity)) { // some impurities has multiplicities like 'bs' but at presents it is unsupported
        if (remove) {
          peakList.splice(j, 1);
        } else {
          peakList[j].kind = name;
        }
      }
    }
  }
}
