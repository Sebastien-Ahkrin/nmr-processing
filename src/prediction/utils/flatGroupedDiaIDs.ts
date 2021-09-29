import type { GroupedDiastereotopicAtomIDs } from 'openchemlib-utils';

export function flatGroupedDiaIDs(groups: GroupedDiastereotopicAtomIDs) {
  let diaIDs = [];
  for (let group of groups) {
    for (let atom of group.atoms) {
      diaIDs[atom] = group.oclID;
    }
  }
  return diaIDs;
}
