import { impurities } from '../constants/impurities';
import type { ImpuritySignal } from '../constants/impurities';
import type { Peak } from '../xy/xyAutoPeaksPicking';

const toCheck = ['solvent', 'h2o', 'tms'];

type Solvent = keyof typeof impurities;

export interface OptionsPeakFilterImpurities {
  solvent?: Solvent | '(cd3)2so' | 'meod';
  error?: number;
  remove?: boolean;
}

/**
 * Try to remove peaks of impurities.
 * @param peakList-A list of initial parameters to be optimized. e.g. coming from a peak picking [{x, y, width}].
 * @param [options={}]-options
 * @param [options.solvent='']-solvent name.
 * @param [options.error=0.025]-tolerance in ppm to assign a impurity.
 */

export function peaksFilterImpurities(
  peakList: Peak[],
  options: OptionsPeakFilterImpurities = {},
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

interface OptionsCheckImpurity {
  name: string;
  error: number;
  remove: boolean;
}

function checkImpurity(
  peakList: Peak[],
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
