declare module 'openchemlib-utils' {
  import { Molecule } from 'openchemlib';

  export interface GroupDiastereotopicAtomIDs {
    counter: number;
    atoms: number[];
    oclID: string;
    atomLabel: string;
  }
  export type GroupedDiastereotopicAtomIDs = GroupDiastereotopicAtomIDs[];
  function getGroupedDiastereotopicAtomIDs(
    molecule: Molecule,
  ): GroupedDiastereotopicAtomIDs;

  interface GetHoseCodesForAtomOptions {
    minSphereSize?: number;
    maxSphereSize?: number;
    kind?: number;
    /**
     * Specify is the atom is already tagged
     * @default false
     */
    isTagged?: boolean;
  }

  type GetHoseCodesFromDiastereotopicIDOptions = GetHoseCodesForAtomOptions;

  function getHoseCodesFromDiastereotopicID(
    molecule: Molecule,
    options?: GetHoseCodesFromDiastereotopicIDOptions,
  ): string[];

  function getHoseCodesForAtom(
    originalMolecule: Molecule,
    rootAtom: number,
    options: GetHoseCodesForAtomOptions,
  ): string[];

  function addDiastereotopicMissingChirality(molecule: Molecule): Molecule;

  export interface GetPathsInfoOptions {
    fromLabel?: string;
    toLabel?: string;
    minLength?: number;
    maxLength?: number;
  }

  export interface PathInfo extends AtomInfo {
    paths: HoseCodesForPath[];
  }
  function getPathsInfo(molecule: Molecule, options?: GetPathsInfoOptions): PathInfo[];

  export interface AtomInfo {
    oclID: string;
    x: number;
    y: number;
    z: number;
    abnormalValence: number;
    charge: number;
    cipParity: number;
    color: number;
    customLabel: string;
    atomicNo: number;
    label: string;
    mass: number;
    radical: number;
    ringBondCount: number;
    ringSize: number;
    allHydrogens: number;
    connAtoms: number;
    allConnAtoms: number;
    implicitHydrogens: number;
    isAromatic: boolean;
    isAllylic: boolean;
    isStereoCenter: boolean;
    isRing: boolean;
    isSmallRing: boolean;
    isStabilized: boolean;
    extra: {
      singleBonds: number;
      doubleBonds: number;
      tripleBonds: number;
      aromaticBonds: number;
      totalBonds: number;
      labileHydrogen: boolean;
      hydrogenOnAtomicNo: number;
      /**
       * should be 1 (sp), 2 (sp2) or 3 (sp3)
       */
      cnoHybridation: number;
    };
  }
  type AtomsInfo = AtomInfo[];
  function getAtomsInfo(molecule: Molecule): AtomsInfo;

  export interface Hose {
    sphere: number;
    oclID: string;
  }
  type Hoses = Hose[];

  export interface HoseCodesForPath {
    atoms: number[];
    from: number;
    to: number,
    torsion?: number,
    hoses: Hoses;
    length: number;
  }

  function getHoseCodesForPath(molecule: Molecule, from: string, to: string, maxLength: number): HoseCodesForPath;

  export interface GetConnectivityMatrixOptions {
    /**
     * get the path length between atoms
     * @default false
     */
    pathLength?: boolean
    /**
     * set the nominal mass of the atoms on diagonal
     * @default false
     */
    mass?: boolean;
    /**
     * set the atomic number of the atom on diagonal
     * @default false;
     */
    atomicNo?: boolean;
    /**
     * set the atomic number of the atom on diagonal
     * @default false
     */
    negativeAtomicNo?: boolean;
    /**
     * set 1, 2 or 3 depending if single, double or triple bond
     * @default false
     */
    std?: boolean | number;
    /**
     * set 1, 2, 3 or 4 depending if single, double, triple or aromatic  bond
     * @default false;
     */
    stda?: boolean | number;
  }
  function getConnectivityMatrix(molecule: Molecule, options?: GetConnectivityMatrixOptions): number[][] | Float64Array[];

  function getDiastereotopicAtomIDs(molecule: Molecule): string[];
}
