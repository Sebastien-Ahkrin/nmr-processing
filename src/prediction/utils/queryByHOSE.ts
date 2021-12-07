import type { DataBaseStructure } from '../dataStructure';

import type { GroupedDiaIDsWithHose } from './getFilteredIDiaIDs';

export interface Prediction {
  diaIDs: string[];
  delta: number | null;
  atoms: number[];
  nbAtoms: number;
  level: number | null;
  statistic?: {
    mean: number;
    sd: number;
    min: number;
    max: number;
    nb: number;
  };
}
export function queryByHose(
  diaIDs: GroupedDiaIDsWithHose,
  db: DataBaseStructure,
  options: { maxSphereSize: number },
): Prediction[] {
  const { maxSphereSize } = options;

  const toReturn = [];
  for (const element of diaIDs) {
    let res;
    let level = null;
    for (let k = maxSphereSize; !res && k >= 0; k--) {
      if (db[k]) {
        res = db[k][element.hose[k]];
        level = k;
      }
    }

    for (const atomNumber of element.atoms) {
      let atom = {
        diaIDs: [element.oclID],
        delta: res ? res[0] : null,
        atoms: [atomNumber],
        nbAtoms: 1,
        level: level,
        statistic:
          res && res.length > 1
            ? {
                mean: res[1],
                sd: res[2],
                min: res[3],
                max: res[4],
                nb: res[5],
              }
            : undefined,
      };
      toReturn.push(atom);
    }
  }
  return toReturn;
}
