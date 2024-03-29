export interface SolventImpurities {
  [key: string]: Impurity;
}

export interface Impurity {
  [key: string]: ImpuritySignal[];
}

export interface ImpuritySignal {
  proton: string;
  coupling: number;
  multiplicity: string;
  shift: number;
}
/* eslint-disable camelcase */
export const impurities: SolventImpurities = {
  cdcl3: {
    tms: [
      {
        proton: 'X',
        coupling: 0,
        multiplicity: '',
        shift: 0,
      },
    ],
    solvent: [
      {
        proton: 'X',
        coupling: 0,
        multiplicity: 'ds',
        shift: 7.26,
      },
    ],
    h2o: [
      {
        proton: 'H2O',
        coupling: 0,
        multiplicity: 'bs',
        shift: 1.56,
      },
    ],
    acetic_acid: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.1,
      },
    ],
    acetone: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.17,
      },
    ],
    acetonitrile: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.1,
      },
    ],
    benzene: [
      {
        proton: 'CH',
        coupling: 0,
        multiplicity: 's',
        shift: 7.36,
      },
    ],
    'tert-butyl_alcohol': [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.28,
      },
    ],
    'tert-butyl_methyl_ether': [
      {
        proton: 'CCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.19,
      },
      {
        proton: 'OCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.22,
      },
    ],
    bhtb: [
      {
        proton: 'ArH',
        coupling: 0,
        multiplicity: 's',
        shift: 6.98,
      },
      {
        proton: 'OHc',
        coupling: 0,
        multiplicity: 's',
        shift: 5.01,
      },
      {
        proton: 'ArCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.27,
      },
      {
        proton: 'ArC(CH3)3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.43,
      },
    ],
    chloroform: [
      {
        proton: 'CH',
        coupling: 0,
        multiplicity: 's',
        shift: 7.26,
      },
    ],
    cyclohexane: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 1.43,
      },
    ],
    '1,2-dichloroethane': [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 3.73,
      },
    ],
    dichloromethane: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 5.3,
      },
    ],
    diethyl_ether: [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 1.21,
      },
      {
        proton: 'CH2',
        coupling: 7,
        multiplicity: 'q',
        shift: 3.48,
      },
    ],
    diglyme: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 3.65,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 3.57,
      },
      {
        proton: 'OCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.39,
      },
    ],
    '1,2-dimethoxyethane': [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.4,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 3.55,
      },
    ],
    dimethylacetamide: [
      {
        proton: 'CH3CO',
        coupling: 0,
        multiplicity: 's',
        shift: 2.09,
      },
      {
        proton: 'NCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.02,
      },
      {
        proton: 'NCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.94,
      },
    ],
    dimethylformamide: [
      {
        proton: 'CH',
        coupling: 0,
        multiplicity: 's',
        shift: 8.02,
      },
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.96,
      },
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.88,
      },
    ],
    dimethyl_sulfoxide: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.62,
      },
    ],
    dioxane: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 3.71,
      },
    ],
    ethanol: [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 1.25,
      },
      {
        proton: 'CH2',
        coupling: 7,
        multiplicity: 'q',
        shift: 3.72,
      },
      {
        proton: 'OH',
        coupling: 5,
        multiplicity: 's,t',
        shift: 1.32,
      },
    ],
    ethyl_acetate: [
      {
        proton: 'CH3CO',
        coupling: 0,
        multiplicity: 's',
        shift: 2.05,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 'q',
        shift: 4.12,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 1.26,
      },
    ],
    ethyl_methyl_ketone: [
      {
        proton: 'CH3CO',
        coupling: 0,
        multiplicity: 's',
        shift: 2.14,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 'q',
        shift: 2.46,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 1.06,
      },
    ],
    ethylene_glycol: [
      {
        proton: 'CH',
        coupling: 0,
        multiplicity: 's',
        shift: 3.76,
      },
    ],
    'grease^f': [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 'm',
        shift: 0.86,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'br_s',
        shift: 1.26,
      },
    ],
    'n-hexane': [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 't',
        shift: 0.88,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 1.26,
      },
    ],
    hmpag: [
      {
        proton: 'CH3',
        coupling: 9.5,
        multiplicity: 'd',
        shift: 2.65,
      },
    ],
    methanol: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.49,
      },
      {
        proton: 'OH',
        coupling: 0,
        multiplicity: 's',
        shift: 1.09,
      },
    ],
    nitromethane: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 4.33,
      },
    ],
    'n-pentane': [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 7,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 1.27,
      },
    ],
    '2-propanol': [
      {
        proton: 'CH3',
        coupling: 6,
        multiplicity: 'd',
        shift: 1.22,
      },
      {
        proton: 'CH',
        coupling: 6,
        multiplicity: 'sep',
        shift: 4.04,
      },
    ],
    pyridine: [
      {
        proton: 'CH(2)',
        coupling: 0,
        multiplicity: 'm',
        shift: 8.62,
      },
      {
        proton: 'CH(3)',
        coupling: 0,
        multiplicity: 'm',
        shift: 7.29,
      },
      {
        proton: 'CH(4)',
        coupling: 0,
        multiplicity: 'm',
        shift: 7.68,
      },
    ],
    silicone_greasei: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 0.07,
      },
    ],
    tetrahydrofuran: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 1.85,
      },
      {
        proton: 'CH2O',
        coupling: 0,
        multiplicity: 'm',
        shift: 3.76,
      },
    ],
    toluene: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.36,
      },
      {
        proton: 'CH(o/p)',
        coupling: 0,
        multiplicity: 'm',
        shift: 7.17,
      },
      {
        proton: 'CH(m)',
        coupling: 0,
        multiplicity: 'm',
        shift: 7.25,
      },
    ],
    triethylamine: [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 1.03,
      },
      {
        proton: 'CH2',
        coupling: 7,
        multiplicity: 'q',
        shift: 2.53,
      },
    ],
  },
  '(cd3)2co': {
    tms: [
      {
        proton: 'X',
        coupling: 0,
        multiplicity: '',
        shift: 0,
      },
    ],
    solvent: [
      {
        proton: 'X',
        coupling: 0,
        multiplicity: '',
        shift: 2.05,
      },
    ],
    h2o: [
      {
        proton: 'H2O',
        coupling: 0,
        multiplicity: 's',
        shift: 2.84,
      },
    ],
    acetic_acid: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.96,
      },
    ],
    acetone: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.09,
      },
    ],
    acetonitrile: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.05,
      },
    ],
    benzene: [
      {
        proton: 'CH',
        coupling: 0,
        multiplicity: 's',
        shift: 7.36,
      },
    ],
    'tert-butyl_alcohol': [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.18,
      },
    ],
    'tert-butyl_methyl_ether': [
      {
        proton: 'CCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.13,
      },
      {
        proton: 'OCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.13,
      },
    ],
    bhtb: [
      {
        proton: 'ArH',
        coupling: 0,
        multiplicity: 's',
        shift: 6.96,
      },
      {
        proton: 'ArCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.22,
      },
      {
        proton: 'ArC(CH3)3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.41,
      },
    ],
    chloroform: [
      {
        proton: 'CH',
        coupling: 0,
        multiplicity: 's',
        shift: 8.02,
      },
    ],
    cyclohexane: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 1.43,
      },
    ],
    '1,2-dichloroethane': [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 3.87,
      },
    ],
    dichloromethane: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 5.63,
      },
    ],
    diethyl_ether: [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 1.11,
      },
      {
        proton: 'CH2',
        coupling: 7,
        multiplicity: 'q',
        shift: 3.41,
      },
    ],
    diglyme: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 3.56,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 3.47,
      },
      {
        proton: 'OCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.28,
      },
    ],
    '1,2-dimethoxyethane': [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.28,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 3.46,
      },
    ],
    dimethylacetamide: [
      {
        proton: 'CH3CO',
        coupling: 0,
        multiplicity: 's',
        shift: 1.97,
      },
      {
        proton: 'NCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3,
      },
      {
        proton: 'NCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.83,
      },
    ],
    dimethylformamide: [
      {
        proton: 'CH',
        coupling: 0,
        multiplicity: 's',
        shift: 7.96,
      },
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.94,
      },
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.78,
      },
    ],
    dimethyl_sulfoxide: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.52,
      },
    ],
    dioxane: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 3.59,
      },
    ],
    ethanol: [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 1.12,
      },
      {
        proton: 'CH2',
        coupling: 7,
        multiplicity: 'q',
        shift: 3.57,
      },
      {
        proton: 'OH',
        coupling: 5,
        multiplicity: 's,t',
        shift: 3.39,
      },
    ],
    ethyl_acetate: [
      {
        proton: 'CH3CO',
        coupling: 0,
        multiplicity: 's',
        shift: 1.97,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 'q',
        shift: 4.05,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 1.2,
      },
    ],
    ethyl_methyl_ketone: [
      {
        proton: 'CH3CO',
        coupling: 0,
        multiplicity: 's',
        shift: 2.07,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 'q',
        shift: 2.45,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 0.96,
      },
    ],
    ethylene_glycol: [
      {
        proton: 'CH',
        coupling: 0,
        multiplicity: 's',
        shift: 3.28,
      },
    ],
    'grease^f': [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 'm',
        shift: 0.87,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'br_s',
        shift: 1.29,
      },
    ],
    'n-hexane': [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 't',
        shift: 0.88,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 1.28,
      },
    ],
    hmpag: [
      {
        proton: 'CH3',
        coupling: 9.5,
        multiplicity: 'd',
        shift: 2.59,
      },
    ],
    methanol: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.31,
      },
      {
        proton: 'OH',
        coupling: 0,
        multiplicity: 's',
        shift: 3.12,
      },
    ],
    nitromethane: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 4.43,
      },
    ],
    'n-pentane': [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 0.88,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 1.27,
      },
    ],
    '2-propanol': [
      {
        proton: 'CH3',
        coupling: 6,
        multiplicity: 'd',
        shift: 1.1,
      },
      {
        proton: 'CH',
        coupling: 6,
        multiplicity: 'sep',
        shift: 3.9,
      },
    ],
    pyridine: [
      {
        proton: 'CH(2)',
        coupling: 0,
        multiplicity: 'm',
        shift: 8.58,
      },
      {
        proton: 'CH(3)',
        coupling: 0,
        multiplicity: 'm',
        shift: 7.35,
      },
      {
        proton: 'CH(4)',
        coupling: 0,
        multiplicity: 'm',
        shift: 7.76,
      },
    ],
    silicone_greasei: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 0.13,
      },
    ],
    tetrahydrofuran: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 1.79,
      },
      {
        proton: 'CH2O',
        coupling: 0,
        multiplicity: 'm',
        shift: 3.63,
      },
    ],
    toluene: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.32,
      },
      {
        proton: 'CH(o/p)',
        coupling: 0,
        multiplicity: 'm',
        shift: 7.5,
      },
      {
        proton: 'CH(m)',
        coupling: 0,
        multiplicity: 'm',
        shift: 7.5,
      },
    ],
    triethylamine: [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 0.96,
      },
      {
        proton: 'CH2',
        coupling: 7,
        multiplicity: 'q',
        shift: 2.45,
      },
    ],
  },
  dmso: {
    tms: [
      {
        proton: 'X',
        coupling: 0,
        multiplicity: '',
        shift: 0,
      },
    ],
    solvent: [
      {
        proton: 'X',
        coupling: 0,
        multiplicity: 'quint',
        shift: 2.5,
      },
    ],
    h2o: [
      {
        proton: 'H2O',
        coupling: 0,
        multiplicity: 's',
        shift: 3.33,
      },
    ],
    acetic_acid: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.91,
      },
    ],
    acetone: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.09,
      },
    ],
    acetonitrile: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.07,
      },
    ],
    benzene: [
      {
        proton: 'CH',
        coupling: 0,
        multiplicity: 's',
        shift: 7.37,
      },
    ],
    'tert-butyl_alcohol': [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.11,
      },
      {
        proton: 'OHc',
        coupling: 0,
        multiplicity: 's',
        shift: 4.19,
      },
    ],
    'tert-butyl_methyl_ether': [
      {
        proton: 'CCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.11,
      },
      {
        proton: 'OCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.08,
      },
    ],
    bhtb: [
      {
        proton: 'ArH',
        coupling: 0,
        multiplicity: 's',
        shift: 6.87,
      },
      {
        proton: 'OHc',
        coupling: 0,
        multiplicity: 's',
        shift: 6.65,
      },
      {
        proton: 'ArCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.18,
      },
      {
        proton: 'ArC(CH3)3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.36,
      },
    ],
    chloroform: [
      {
        proton: 'CH',
        coupling: 0,
        multiplicity: 's',
        shift: 8.32,
      },
    ],
    cyclohexane: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 1.4,
      },
    ],
    '1,2-dichloroethane': [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 3.9,
      },
    ],
    dichloromethane: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 5.76,
      },
    ],
    diethyl_ether: [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 1.09,
      },
      {
        proton: 'CH2',
        coupling: 7,
        multiplicity: 'q',
        shift: 3.38,
      },
    ],
    diglyme: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 3.51,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 3.38,
      },
      {
        proton: 'OCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.24,
      },
    ],
    '1,2-dimethoxyethane': [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.24,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 3.43,
      },
    ],
    dimethylacetamide: [
      {
        proton: 'CH3CO',
        coupling: 0,
        multiplicity: 's',
        shift: 1.96,
      },
      {
        proton: 'NCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.94,
      },
      {
        proton: 'NCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.78,
      },
    ],
    dimethylformamide: [
      {
        proton: 'CH',
        coupling: 0,
        multiplicity: 's',
        shift: 7.95,
      },
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.89,
      },
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.73,
      },
    ],
    dimethyl_sulfoxide: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.54,
      },
    ],
    dioxane: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 3.57,
      },
    ],
    ethanol: [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 1.06,
      },
      {
        proton: 'CH2',
        coupling: 7,
        multiplicity: 'q',
        shift: 3.44,
      },
      {
        proton: 'OH',
        coupling: 5,
        multiplicity: 's,t',
        shift: 4.63,
      },
    ],
    ethyl_acetate: [
      {
        proton: 'CH3CO',
        coupling: 0,
        multiplicity: 's',
        shift: 1.99,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 'q',
        shift: 4.03,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 1.17,
      },
    ],
    ethyl_methyl_ketone: [
      {
        proton: 'CH3CO',
        coupling: 0,
        multiplicity: 's',
        shift: 2.07,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 'q',
        shift: 2.43,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 0.91,
      },
    ],
    ethylene_glycol: [
      {
        proton: 'CH',
        coupling: 0,
        multiplicity: 's',
        shift: 3.34,
      },
    ],
    'grease^f': [],
    'n-hexane': [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 't',
        shift: 0.86,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 1.25,
      },
    ],
    hmpag: [
      {
        proton: 'CH3',
        coupling: 9.5,
        multiplicity: 'd',
        shift: 2.53,
      },
    ],
    methanol: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.16,
      },
      {
        proton: 'OH',
        coupling: 0,
        multiplicity: 's',
        shift: 4.01,
      },
    ],
    nitromethane: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 4.42,
      },
    ],
    'n-pentane': [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 0.88,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 1.27,
      },
    ],
    '2-propanol': [
      {
        proton: 'CH3',
        coupling: 6,
        multiplicity: 'd',
        shift: 1.04,
      },
      {
        proton: 'CH',
        coupling: 6,
        multiplicity: 'sep',
        shift: 3.78,
      },
    ],
    pyridine: [
      {
        proton: 'CH(2)',
        coupling: 0,
        multiplicity: 'm',
        shift: 8.58,
      },
      {
        proton: 'CH(3)',
        coupling: 0,
        multiplicity: 'm',
        shift: 7.39,
      },
      {
        proton: 'CH(4)',
        coupling: 0,
        multiplicity: 'm',
        shift: 7.79,
      },
    ],
    silicone_greasei: [],
    tetrahydrofuran: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 1.76,
      },
      {
        proton: 'CH2O',
        coupling: 0,
        multiplicity: 'm',
        shift: 3.6,
      },
    ],
    toluene: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.3,
      },
      {
        proton: 'CH(o/p)',
        coupling: 0,
        multiplicity: 'm',
        shift: 7.18,
      },
      {
        proton: 'CH(m)',
        coupling: 0,
        multiplicity: 'm',
        shift: 7.25,
      },
    ],
    triethylamine: [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 0.93,
      },
      {
        proton: 'CH2',
        coupling: 7,
        multiplicity: 'q',
        shift: 2.43,
      },
    ],
  },
  c6d6: {
    tms: [
      {
        proton: 'X',
        coupling: 0,
        multiplicity: '',
        shift: 0,
      },
    ],
    solvent: [
      {
        proton: 'X',
        coupling: 0,
        multiplicity: '',
        shift: 7.16,
      },
    ],
    h2o: [
      {
        proton: 'H2O',
        coupling: 0,
        multiplicity: 's',
        shift: 0.4,
      },
    ],
    acetic_acid: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.55,
      },
    ],
    acetone: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.55,
      },
    ],
    acetonitrile: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.55,
      },
    ],
    benzene: [
      {
        proton: 'CH',
        coupling: 0,
        multiplicity: 's',
        shift: 7.15,
      },
    ],
    'tert-butyl_alcohol': [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.05,
      },
      {
        proton: 'OHc',
        coupling: 0,
        multiplicity: 's',
        shift: 1.55,
      },
    ],
    'tert-butyl_methyl_ether': [
      {
        proton: 'CCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.07,
      },
      {
        proton: 'OCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.04,
      },
    ],
    bhtb: [
      {
        proton: 'ArH',
        coupling: 0,
        multiplicity: 's',
        shift: 7.05,
      },
      {
        proton: 'OHc',
        coupling: 0,
        multiplicity: 's',
        shift: 4.79,
      },
      {
        proton: 'ArCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.24,
      },
      {
        proton: 'ArC(CH3)3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.38,
      },
    ],
    chloroform: [
      {
        proton: 'CH',
        coupling: 0,
        multiplicity: 's',
        shift: 6.15,
      },
    ],
    cyclohexane: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 1.4,
      },
    ],
    '1,2-dichloroethane': [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 2.9,
      },
    ],
    dichloromethane: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 4.27,
      },
    ],
    diethyl_ether: [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 1.11,
      },
      {
        proton: 'CH2',
        coupling: 7,
        multiplicity: 'q',
        shift: 3.26,
      },
    ],
    diglyme: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 3.46,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 3.34,
      },
      {
        proton: 'OCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.11,
      },
    ],
    '1,2-dimethoxyethane': [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.12,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 3.33,
      },
    ],
    dimethylacetamide: [
      {
        proton: 'CH3CO',
        coupling: 0,
        multiplicity: 's',
        shift: 1.6,
      },
      {
        proton: 'NCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.57,
      },
      {
        proton: 'NCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.05,
      },
    ],
    dimethylformamide: [
      {
        proton: 'CH',
        coupling: 0,
        multiplicity: 's',
        shift: 7.63,
      },
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.36,
      },
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.86,
      },
    ],
    dimethyl_sulfoxide: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.68,
      },
    ],
    dioxane: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 3.35,
      },
    ],
    ethanol: [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 0.96,
      },
      {
        proton: 'CH2',
        coupling: 7,
        multiplicity: 'q',
        shift: 3.34,
      },
    ],
    ethyl_acetate: [
      {
        proton: 'CH3CO',
        coupling: 0,
        multiplicity: 's',
        shift: 1.65,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 'q',
        shift: 3.89,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 0.92,
      },
    ],
    ethyl_methyl_ketone: [
      {
        proton: 'CH3CO',
        coupling: 0,
        multiplicity: 's',
        shift: 1.58,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 'q',
        shift: 1.81,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 0.85,
      },
    ],
    ethylene_glycol: [
      {
        proton: 'CH',
        coupling: 0,
        multiplicity: 's',
        shift: 3.41,
      },
    ],
    'grease^f': [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 'm',
        shift: 0.92,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'br_s',
        shift: 1.36,
      },
    ],
    'n-hexane': [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 't',
        shift: 0.89,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 1.24,
      },
    ],
    hmpag: [
      {
        proton: 'CH3',
        coupling: 9.5,
        multiplicity: 'd',
        shift: 2.4,
      },
    ],
    methanol: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.07,
      },
    ],
    nitromethane: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.94,
      },
    ],
    'n-pentane': [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 0.86,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 1.23,
      },
    ],
    '2-propanol': [
      {
        proton: 'CH3',
        coupling: 6,
        multiplicity: 'd',
        shift: 0.95,
      },
      {
        proton: 'CH',
        coupling: 6,
        multiplicity: 'sep',
        shift: 3.67,
      },
    ],
    pyridine: [
      {
        proton: 'CH(2)',
        coupling: 0,
        multiplicity: 'm',
        shift: 8.53,
      },
      {
        proton: 'CH(3)',
        coupling: 0,
        multiplicity: 'm',
        shift: 6.66,
      },
      {
        proton: 'CH(4)',
        coupling: 0,
        multiplicity: 'm',
        shift: 6.98,
      },
    ],
    silicone_greasei: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 0.29,
      },
    ],
    tetrahydrofuran: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 1.4,
      },
      {
        proton: 'CH2O',
        coupling: 0,
        multiplicity: 'm',
        shift: 3.57,
      },
    ],
    toluene: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.11,
      },
      {
        proton: 'CH(o/p)',
        coupling: 0,
        multiplicity: 'm',
        shift: 7.02,
      },
      {
        proton: 'CH(m)',
        coupling: 0,
        multiplicity: 'm',
        shift: 7.13,
      },
    ],
    triethylamine: [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 0.96,
      },
      {
        proton: 'CH2',
        coupling: 7,
        multiplicity: 'q',
        shift: 2.4,
      },
    ],
  },
  cd3cn: {
    tms: [
      {
        proton: 'X',
        coupling: 0,
        multiplicity: '',
        shift: 0,
      },
    ],
    solvent: [
      {
        proton: 'X',
        coupling: 0,
        multiplicity: '',
        shift: 1.94,
      },
    ],
    h2o: [
      {
        proton: 'H2O',
        coupling: 0,
        multiplicity: 's',
        shift: 2.13,
      },
    ],
    acetic_acid: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.96,
      },
    ],
    acetone: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.08,
      },
    ],
    acetonitrile: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.96,
      },
    ],
    benzene: [
      {
        proton: 'CH',
        coupling: 0,
        multiplicity: 's',
        shift: 7.37,
      },
    ],
    'tert-butyl_alcohol': [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.16,
      },
      {
        proton: 'OHc',
        coupling: 0,
        multiplicity: 's',
        shift: 2.18,
      },
    ],
    'tert-butyl_methyl_ether': [
      {
        proton: 'CCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.14,
      },
      {
        proton: 'OCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.13,
      },
    ],
    bhtb: [
      {
        proton: 'ArH',
        coupling: 0,
        multiplicity: 's',
        shift: 6.97,
      },
      {
        proton: 'OHc',
        coupling: 0,
        multiplicity: 's',
        shift: 5.2,
      },
      {
        proton: 'ArCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.22,
      },
      {
        proton: 'ArC(CH3)3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.39,
      },
    ],
    chloroform: [
      {
        proton: 'CH',
        coupling: 0,
        multiplicity: 's',
        shift: 7.58,
      },
    ],
    cyclohexane: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 1.44,
      },
    ],
    '1,2-dichloroethane': [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 3.81,
      },
    ],
    dichloromethane: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 5.44,
      },
    ],
    diethyl_ether: [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 1.12,
      },
      {
        proton: 'CH2',
        coupling: 7,
        multiplicity: 'q',
        shift: 3.42,
      },
    ],
    diglyme: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 3.53,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 3.45,
      },
      {
        proton: 'OCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.29,
      },
    ],
    '1,2-dimethoxyethane': [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.28,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 3.45,
      },
    ],
    dimethylacetamide: [
      {
        proton: 'CH3CO',
        coupling: 0,
        multiplicity: 's',
        shift: 1.97,
      },
      {
        proton: 'NCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.96,
      },
      {
        proton: 'NCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.83,
      },
    ],
    dimethylformamide: [
      {
        proton: 'CH',
        coupling: 0,
        multiplicity: 's',
        shift: 7.92,
      },
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.89,
      },
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.77,
      },
    ],
    dimethyl_sulfoxide: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.5,
      },
    ],
    dioxane: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 3.6,
      },
    ],
    ethanol: [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 1.12,
      },
      {
        proton: 'CH2',
        coupling: 7,
        multiplicity: 'q',
        shift: 3.54,
      },
      {
        proton: 'OH',
        coupling: 5,
        multiplicity: 's,t',
        shift: 2.47,
      },
    ],
    ethyl_acetate: [
      {
        proton: 'CH3CO',
        coupling: 0,
        multiplicity: 's',
        shift: 1.97,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 'q',
        shift: 4.06,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 1.2,
      },
    ],
    ethyl_methyl_ketone: [
      {
        proton: 'CH3CO',
        coupling: 0,
        multiplicity: 's',
        shift: 2.06,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 'q',
        shift: 2.43,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 0.96,
      },
    ],
    ethylene_glycol: [
      {
        proton: 'CH',
        coupling: 0,
        multiplicity: 's',
        shift: 3.51,
      },
    ],
    'grease^f': [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 'm',
        shift: 0.86,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'br_s',
        shift: 1.27,
      },
    ],
    'n-hexane': [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 't',
        shift: 0.89,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 1.28,
      },
    ],
    hmpag: [
      {
        proton: 'CH3',
        coupling: 9.5,
        multiplicity: 'd',
        shift: 2.57,
      },
    ],
    methanol: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.28,
      },
      {
        proton: 'OH',
        coupling: 0,
        multiplicity: 's',
        shift: 2.16,
      },
    ],
    nitromethane: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 4.31,
      },
    ],
    'n-pentane': [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 0.87,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 1.29,
      },
    ],
    '2-propanol': [
      {
        proton: 'CH3',
        coupling: 6,
        multiplicity: 'd',
        shift: 1.09,
      },
      {
        proton: 'CH',
        coupling: 6,
        multiplicity: 'sep',
        shift: 3.87,
      },
    ],
    pyridine: [
      {
        proton: 'CH(2)',
        coupling: 0,
        multiplicity: 'm',
        shift: 8.57,
      },
      {
        proton: 'CH(3)',
        coupling: 0,
        multiplicity: 'm',
        shift: 7.33,
      },
      {
        proton: 'CH(4)',
        coupling: 0,
        multiplicity: 'm',
        shift: 7.73,
      },
    ],
    silicone_greasei: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 0.08,
      },
    ],
    tetrahydrofuran: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 1.8,
      },
      {
        proton: 'CH2O',
        coupling: 0,
        multiplicity: 'm',
        shift: 3.64,
      },
    ],
    toluene: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.33,
      },
      {
        proton: 'CH(o/p)',
        coupling: 0,
        multiplicity: 'm',
        shift: 7.2,
      },
      {
        proton: 'CH(m)',
        coupling: 0,
        multiplicity: 'm',
        shift: 7.2,
      },
    ],
    triethylamine: [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 0.96,
      },
      {
        proton: 'CH2',
        coupling: 7,
        multiplicity: 'q',
        shift: 2.45,
      },
    ],
  },
  cd3od: {
    tms: [
      {
        proton: 'X',
        coupling: 0,
        multiplicity: '',
        shift: 0,
      },
    ],
    solvent: [
      {
        proton: 'X',
        coupling: 0,
        multiplicity: '',
        shift: 3.31,
      },
    ],
    h2o: [
      {
        proton: 'H2O',
        coupling: 0,
        multiplicity: 's',
        shift: 4.87,
      },
    ],
    acetic_acid: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.99,
      },
    ],
    acetone: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.15,
      },
    ],
    acetonitrile: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.03,
      },
    ],
    benzene: [
      {
        proton: 'CH',
        coupling: 0,
        multiplicity: 's',
        shift: 7.33,
      },
    ],
    'tert-butyl_alcohol': [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.4,
      },
    ],
    'tert-butyl_methyl_ether': [
      {
        proton: 'CCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.15,
      },
      {
        proton: 'OCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.2,
      },
    ],
    bhtb: [
      {
        proton: 'ArH',
        coupling: 0,
        multiplicity: 's',
        shift: 6.92,
      },
      {
        proton: 'ArCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.21,
      },
      {
        proton: 'ArC(CH3)3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.4,
      },
    ],
    chloroform: [
      {
        proton: 'CH',
        coupling: 0,
        multiplicity: 's',
        shift: 7.9,
      },
    ],
    cyclohexane: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 1.45,
      },
    ],
    '1,2-dichloroethane': [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 3.78,
      },
    ],
    dichloromethane: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 5.49,
      },
    ],
    diethyl_ether: [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 1.18,
      },
      {
        proton: 'CH2',
        coupling: 7,
        multiplicity: 'q',
        shift: 3.49,
      },
    ],
    diglyme: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 3.61,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 3.58,
      },
      {
        proton: 'OCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.35,
      },
    ],
    '1,2-dimethoxyethane': [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.35,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 3.52,
      },
    ],
    dimethylacetamide: [
      {
        proton: 'CH3CO',
        coupling: 0,
        multiplicity: 's',
        shift: 2.07,
      },
      {
        proton: 'NCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.31,
      },
      {
        proton: 'NCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.92,
      },
    ],
    dimethylformamide: [
      {
        proton: 'CH',
        coupling: 0,
        multiplicity: 's',
        shift: 7.97,
      },
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.99,
      },
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.86,
      },
    ],
    dimethyl_sulfoxide: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.65,
      },
    ],
    dioxane: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 3.66,
      },
    ],
    ethanol: [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 1.19,
      },
      {
        proton: 'CH2',
        coupling: 7,
        multiplicity: 'q',
        shift: 3.6,
      },
    ],
    ethyl_acetate: [
      {
        proton: 'CH3CO',
        coupling: 0,
        multiplicity: 's',
        shift: 2.01,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 'q',
        shift: 4.09,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 1.24,
      },
    ],
    ethyl_methyl_ketone: [
      {
        proton: 'CH3CO',
        coupling: 0,
        multiplicity: 's',
        shift: 2.12,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 'q',
        shift: 2.5,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 1.01,
      },
    ],
    ethylene_glycol: [
      {
        proton: 'CH',
        coupling: 0,
        multiplicity: 's',
        shift: 3.59,
      },
    ],
    'grease^f': [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 'm',
        shift: 0.88,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'br_s',
        shift: 1.29,
      },
    ],
    'n-hexane': [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 't',
        shift: 0.9,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 1.29,
      },
    ],
    hmpag: [
      {
        proton: 'CH3',
        coupling: 9.5,
        multiplicity: 'd',
        shift: 2.64,
      },
    ],
    methanol: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.34,
      },
    ],
    nitromethane: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 4.34,
      },
    ],
    'n-pentane': [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 0.89,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 1.29,
      },
    ],
    '2-propanol': [
      {
        proton: 'CH3',
        coupling: 6,
        multiplicity: 'd',
        shift: 1.5,
      },
      {
        proton: 'CH',
        coupling: 6,
        multiplicity: 'sep',
        shift: 3.92,
      },
    ],
    pyridine: [
      {
        proton: 'CH(2)',
        coupling: 0,
        multiplicity: 'm',
        shift: 8.53,
      },
      {
        proton: 'CH(3)',
        coupling: 0,
        multiplicity: 'm',
        shift: 7.44,
      },
      {
        proton: 'CH(4)',
        coupling: 0,
        multiplicity: 'm',
        shift: 7.85,
      },
    ],
    silicone_greasei: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 0.1,
      },
    ],
    tetrahydrofuran: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 1.87,
      },
      {
        proton: 'CH2O',
        coupling: 0,
        multiplicity: 'm',
        shift: 3.71,
      },
    ],
    toluene: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.32,
      },
      {
        proton: 'CH(o/p)',
        coupling: 0,
        multiplicity: 'm',
        shift: 7.16,
      },
      {
        proton: 'CH(m)',
        coupling: 0,
        multiplicity: 'm',
        shift: 7.16,
      },
    ],
    triethylamine: [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 1.05,
      },
      {
        proton: 'CH2',
        coupling: 7,
        multiplicity: 'q',
        shift: 2.58,
      },
    ],
  },
  d2o: {
    tms: [
      {
        proton: 'X',
        coupling: 0,
        multiplicity: '',
        shift: 0,
      },
    ],
    solvent: [
      {
        proton: 'X',
        coupling: 0,
        multiplicity: '',
        shift: 4.79,
      },
    ],
    h2o: [],
    acetic_acid: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.08,
      },
    ],
    acetone: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.22,
      },
    ],
    acetonitrile: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.06,
      },
    ],
    benzene: [],
    'tert-butyl_alcohol': [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.24,
      },
    ],
    'tert-butyl_methyl_ether': [
      {
        proton: 'CCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 1.21,
      },
      {
        proton: 'OCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.22,
      },
    ],
    bhtb: [],
    chloroform: [],
    cyclohexane: [],
    '1,2-dichloroethane': [],
    dichloromethane: [],
    diethyl_ether: [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 1.17,
      },
      {
        proton: 'CH2',
        coupling: 7,
        multiplicity: 'q',
        shift: 3.56,
      },
    ],
    diglyme: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 3.67,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 3.61,
      },
      {
        proton: 'OCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.37,
      },
    ],
    '1,2-dimethoxyethane': [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.37,
      },
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 3.6,
      },
    ],
    dimethylacetamide: [
      {
        proton: 'CH3CO',
        coupling: 0,
        multiplicity: 's',
        shift: 2.08,
      },
      {
        proton: 'NCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.06,
      },
      {
        proton: 'NCH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.9,
      },
    ],
    dimethylformamide: [
      {
        proton: 'CH',
        coupling: 0,
        multiplicity: 's',
        shift: 7.92,
      },
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.01,
      },
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.85,
      },
    ],
    dimethyl_sulfoxide: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 2.71,
      },
    ],
    dioxane: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 's',
        shift: 3.75,
      },
    ],
    ethanol: [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 1.17,
      },
      {
        proton: 'CH2',
        coupling: 7,
        multiplicity: 'q',
        shift: 3.65,
      },
    ],
    ethyl_acetate: [
      {
        proton: 'CH3CO',
        coupling: 0,
        multiplicity: 's',
        shift: 2.07,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 'q',
        shift: 4.14,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 1.24,
      },
    ],
    ethyl_methyl_ketone: [
      {
        proton: 'CH3CO',
        coupling: 0,
        multiplicity: 's',
        shift: 2.19,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 'q',
        shift: 3.18,
      },
      {
        proton: 'CH2CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 1.26,
      },
    ],
    ethylene_glycol: [
      {
        proton: 'CH',
        coupling: 0,
        multiplicity: 's',
        shift: 3.65,
      },
    ],
    'grease^f': [],
    'n-hexane': [],
    hmpag: [
      {
        proton: 'CH3',
        coupling: 9.5,
        multiplicity: 'd',
        shift: 2.61,
      },
    ],
    methanol: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 3.34,
      },
    ],
    nitromethane: [
      {
        proton: 'CH3',
        coupling: 0,
        multiplicity: 's',
        shift: 4.4,
      },
    ],
    'n-pentane': [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 0.9,
      },
    ],
    '2-propanol': [
      {
        proton: 'CH3',
        coupling: 6,
        multiplicity: 'd',
        shift: 1.17,
      },
      {
        proton: 'CH',
        coupling: 6,
        multiplicity: 'sep',
        shift: 4.02,
      },
    ],
    pyridine: [
      {
        proton: 'CH(2)',
        coupling: 0,
        multiplicity: 'm',
        shift: 8.52,
      },
      {
        proton: 'CH(3)',
        coupling: 0,
        multiplicity: 'm',
        shift: 7.45,
      },
      {
        proton: 'CH(4)',
        coupling: 0,
        multiplicity: 'm',
        shift: 7.87,
      },
    ],
    silicone_greasei: [],
    tetrahydrofuran: [
      {
        proton: 'CH2',
        coupling: 0,
        multiplicity: 'm',
        shift: 1.88,
      },
      {
        proton: 'CH2O',
        coupling: 0,
        multiplicity: 'm',
        shift: 3.74,
      },
    ],
    toluene: [],
    triethylamine: [
      {
        proton: 'CH3',
        coupling: 7,
        multiplicity: 't',
        shift: 0.99,
      },
      {
        proton: 'CH2',
        coupling: 7,
        multiplicity: 'q',
        shift: 2.57,
      },
    ],
  },
};
