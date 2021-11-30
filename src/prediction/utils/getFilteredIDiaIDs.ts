import type { Molecule } from 'openchemlib';
import {
  getGroupedDiastereotopicAtomIDs,
  getHoseCodesFromDiastereotopicID,
  addDiastereotopicMissingChirality,
} from 'openchemlib-utils';
import type { GroupDiastereotopicAtomIDs } from 'openchemlib-utils';

export interface GroupDiaIDsWithHose extends GroupDiastereotopicAtomIDs {
  hose: string[];
}

export type GroupedDiaIDsWithHose = GroupDiaIDsWithHose[];

export function getFilteredIDiaIDs(
  molecule: Molecule,
  options: { maxSphereSize: number },
) {
  const { maxSphereSize } = options;

  molecule.addImplicitHydrogens();
  molecule.addMissingChirality();
  addDiastereotopicMissingChirality(molecule);

  const molfile = molecule.toMolfile();

  let groupedDiaIDs = getGroupedDiastereotopicAtomIDs(molecule);

  let carbonDiaIDs = groupedDiaIDs
    .filter((e) => e.atomLabel === 'C')
    .sort((a, b) => {
      if (a.atomLabel === b.atomLabel) {
        return b.counter - a.counter;
      }
      return a.atomLabel < b.atomLabel ? 1 : -1;
    }) as any;

  const OCL = molecule.getOCL();
  for (const diaId of carbonDiaIDs) {
    diaId.hose = getHoseCodesFromDiastereotopicID(
      OCL.Molecule.fromIDCode(diaId.oclID),
      {
        maxSphereSize,
      },
    );
  }

  let toReturn = {
    molfile,
    carbonDiaIDs: carbonDiaIDs as GroupedDiaIDsWithHose,
    groupedDiaIDs,
  };

  return toReturn;
}
