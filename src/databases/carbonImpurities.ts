import type { DatabaseNMREntry } from './DatabaseNMREntry';

export const carbonImpurities: DatabaseNMREntry[] = [
  {
    names: ['acetic acid'],
    smiles: 'CC(=O)O',
    ranges: [
      {
        signals: [
          {
            delta: 171.69,
            assignment: 'CO',
          },
        ],
        from: 171.69,
        to: 171.69,
      },
      {
        signals: [
          {
            delta: 20.13,
            assignment: 'CH₃',
          },
        ],
        from: 20.13,
        to: 20.13,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['acetone'],
    smiles: 'CC(=O)C',
    ranges: [
      {
        signals: [
          {
            delta: 204.19,
            assignment: 'CO',
          },
        ],
        from: 204.19,
        to: 204.19,
      },
      {
        signals: [
          {
            delta: 30.17,
            assignment: 'CH₃',
          },
        ],
        from: 30.17,
        to: 30.17,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['acetonitrile'],
    smiles: 'CC#N',
    ranges: [
      {
        signals: [
          {
            delta: 116.79,
            assignment: 'CN',
          },
        ],
        from: 116.79,
        to: 116.79,
      },
      {
        signals: [
          {
            delta: 0.45,
            assignment: 'CH₃',
          },
        ],
        from: 0.45,
        to: 0.45,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['benzene'],
    smiles: 'c1ccccc1',
    ranges: [
      {
        signals: [
          {
            delta: 128.84,
            assignment: 'CH',
          },
        ],
        from: 128.84,
        to: 128.84,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['tert -butyl alcohol'],
    smiles: 'CC(C)(C)O',
    ranges: [
      {
        signals: [
          {
            delta: 67.5,
            assignment: '(CH₃)₃C',
          },
        ],
        from: 67.5,
        to: 67.5,
      },
      {
        signals: [
          {
            delta: 30.57,
            assignment: '(CH₃)₃C',
          },
        ],
        from: 30.57,
        to: 30.57,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['carbon dioxide'],
    smiles: 'O=C=O',
    ranges: [
      {
        signals: [
          {
            delta: 125.69,
            assignment: 'CO₂',
          },
        ],
        from: 125.69,
        to: 125.69,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['carbon disulfide'],
    smiles: 'S=C=S',
    ranges: [
      {
        signals: [
          {
            delta: 193.37,
            assignment: 'CS₂',
          },
        ],
        from: 193.37,
        to: 193.37,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['carbon tetrachloride'],
    smiles: 'ClC(Cl)(Cl)Cl',
    ranges: [
      {
        signals: [
          {
            delta: 96.89,
            assignment: 'CCl₄',
          },
        ],
        from: 96.89,
        to: 96.89,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['chloroform'],
    smiles: 'ClC(Cl)Cl',
    ranges: [
      {
        signals: [
          {
            delta: 79.24,
            assignment: 'CH',
          },
        ],
        from: 79.24,
        to: 79.24,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['18-crown-6'],
    smiles: 'C1COCCOCCOCCOCCOCCO1',
    ranges: [
      {
        signals: [
          {
            delta: 71.34,
            assignment: 'CH₂',
          },
        ],
        from: 71.34,
        to: 71.34,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['cyclohexane'],
    smiles: 'C1CCCCC1',
    ranges: [
      {
        signals: [
          {
            delta: 27.58,
            assignment: 'CH₂',
          },
        ],
        from: 27.58,
        to: 27.58,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['1,2-dichloroethane'],
    smiles: 'ClCCCl',
    ranges: [
      {
        signals: [
          {
            delta: 44.64,
            assignment: 'CH₂',
          },
        ],
        from: 44.64,
        to: 44.64,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['dichloromethane'],
    smiles: 'ClCCl',
    ranges: [
      {
        signals: [
          {
            delta: 54.67,
            assignment: 'CH₂',
          },
        ],
        from: 54.67,
        to: 54.67,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['diethyl ether'],
    smiles: 'CCOCC',
    ranges: [
      {
        signals: [
          {
            delta: 15.49,
            assignment: 'CH₃',
          },
        ],
        from: 15.49,
        to: 15.49,
      },
      {
        signals: [
          {
            delta: 66.14,
            assignment: 'CH₂',
          },
        ],
        from: 66.14,
        to: 66.14,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['diglyme'],
    smiles: 'COCCOCCOC',
    ranges: [
      {
        signals: [
          {
            delta: 58.72,
            assignment: 'CH₃',
          },
        ],
        from: 58.72,
        to: 58.72,
      },
      {
        signals: [
          {
            delta: 71.17,
            assignment: 'CH₂',
          },
        ],
        from: 71.17,
        to: 71.17,
      },
      {
        signals: [
          {
            delta: 72.72,
            assignment: 'CH₂',
          },
        ],
        from: 72.72,
        to: 72.72,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['dimethylformamide'],
    smiles: 'C(=O)N(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 161.96,
            assignment: 'CH',
          },
        ],
        from: 161.96,
        to: 161.96,
      },
      {
        signals: [
          {
            delta: 35.65,
            assignment: 'CH₃',
          },
        ],
        from: 35.65,
        to: 35.65,
      },
      {
        signals: [
          {
            delta: 30.7,
            assignment: 'CH₃',
          },
        ],
        from: 30.7,
        to: 30.7,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['1,4-dioxane'],
    smiles: 'C1COCCOC1',
    ranges: [
      {
        signals: [
          {
            delta: 67.65,
            assignment: 'CH₂',
          },
        ],
        from: 67.65,
        to: 67.65,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['DME', 'diethyl ether'],
    smiles: 'CCOCC',
    ranges: [
      {
        signals: [
          {
            delta: 58.72,
            assignment: 'CH₃',
          },
        ],
        from: 58.72,
        to: 58.72,
      },
      {
        signals: [
          {
            delta: 72.58,
            assignment: 'CH₂',
          },
        ],
        from: 72.58,
        to: 72.58,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['ethane'],
    smiles: 'CC',
    ranges: [
      {
        signals: [
          {
            delta: 6.79,
            assignment: 'CH₃',
          },
        ],
        from: 6.79,
        to: 6.79,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['ethanol'],
    smiles: 'CCO',
    ranges: [
      {
        signals: [
          {
            delta: 18.9,
            assignment: 'CH₃',
          },
        ],
        from: 18.9,
        to: 18.9,
      },
      {
        signals: [
          {
            delta: 57.6,
            assignment: 'CH₂',
          },
        ],
        from: 57.6,
        to: 57.6,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['ethyl acetate'],
    smiles: 'CC(=O)CC',
    ranges: [
      {
        signals: [
          {
            delta: 20.45,
            assignment: 'CH₃CO',
          },
        ],
        from: 20.45,
        to: 20.45,
      },
      {
        signals: [
          {
            delta: 170.32,
            assignment: 'CO',
          },
        ],
        from: 170.32,
        to: 170.32,
      },
      {
        signals: [
          {
            delta: 60.3,
            assignment: 'CH₂',
          },
        ],
        from: 60.3,
        to: 60.3,
      },
      {
        signals: [
          {
            delta: 14.37,
            assignment: 'CH₃',
          },
        ],
        from: 14.37,
        to: 14.37,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['ethylene'],
    smiles: 'C=C',
    ranges: [
      {
        signals: [
          {
            delta: 123.09,
            assignment: 'CH₂',
          },
        ],
        from: 123.09,
        to: 123.09,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['ethylene glycol'],
    smiles: 'OCCO',
    ranges: [
      {
        signals: [
          {
            delta: 64.35,
            assignment: 'CH₂',
          },
        ],
        from: 64.35,
        to: 64.35,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['H grease'],
    smiles: '',
    ranges: [
      {
        signals: [
          {
            delta: 30.45,
            assignment: 'CH₂',
          },
        ],
        from: 30.45,
        to: 30.45,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['hexamethylbenzene'],
    smiles: 'CC1=C(C(=C(C(=C1C)C)C)C)C',
    ranges: [
      {
        signals: [
          {
            delta: 131.88,
            assignment: 'C',
          },
        ],
        from: 131.88,
        to: 131.88,
      },
      {
        signals: [
          {
            delta: 16.71,
            assignment: 'CH₃',
          },
        ],
        from: 16.71,
        to: 16.71,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['n-hexane'],
    smiles: 'CCCCCC',
    ranges: [
      {
        signals: [
          {
            delta: 14.22,
            assignment: 'CH₃',
          },
        ],
        from: 14.22,
        to: 14.22,
      },
      {
        signals: [
          {
            delta: 23.33,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 23.33,
        to: 23.33,
      },
      {
        signals: [
          {
            delta: 32.34,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 32.34,
        to: 32.34,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['HMDSO'],
    smiles: 'C[Si](C)(C)O[Si](C)(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 1.83,
            assignment: 'CH₃',
          },
        ],
        from: 1.83,
        to: 1.83,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['HMPA'],
    smiles: 'CN(C)P(=O)(N(C)C)N(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 36.89,
            assignment: 'CH₃',
          },
        ],
        from: 36.89,
        to: 36.89,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['imidazole'],
    smiles: 'C1=CN=CN1',
    ranges: [
      {
        signals: [
          {
            delta: 135.72,
            assignment: 'CH(2)',
          },
        ],
        from: 135.72,
        to: 135.72,
      },
      {
        signals: [
          {
            delta: 122.2,
            assignment: 'CH(4,5)',
          },
        ],
        from: 122.2,
        to: 122.2,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['methane'],
    smiles: 'C',
    ranges: [
      {
        signals: [
          {
            delta: -4.9,
            assignment: 'CH₄',
          },
        ],
        from: -4.9,
        to: -4.9,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['methanol'],
    smiles: 'CO',
    ranges: [
      {
        signals: [
          {
            delta: 49.64,
            assignment: 'CH₃',
          },
        ],
        from: 49.64,
        to: 49.64,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['nitromethane'],
    smiles: 'C[N+](=O)[O-]',
    ranges: [
      {
        signals: [
          {
            delta: 62.49,
            assignment: 'CH₃',
          },
        ],
        from: 62.49,
        to: 62.49,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['n-pentane'],
    smiles: 'CCCCC',
    ranges: [
      {
        signals: [
          {
            delta: 14.18,
            assignment: 'CH₃',
          },
        ],
        from: 14.18,
        to: 14.18,
      },
      {
        signals: [
          {
            delta: 23,
            assignment: 'CH₂(2,4)',
          },
        ],
        from: 23,
        to: 23,
      },
      {
        signals: [
          {
            delta: 34.87,
            assignment: 'CH₂(3)',
          },
        ],
        from: 34.87,
        to: 34.87,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['propane'],
    smiles: 'CCC',
    ranges: [
      {
        signals: [
          {
            delta: 16.6,
            assignment: 'CH₃',
          },
        ],
        from: 16.6,
        to: 16.6,
      },
      {
        signals: [
          {
            delta: 16.82,
            assignment: 'CH₂',
          },
        ],
        from: 16.82,
        to: 16.82,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['2-propanol'],
    smiles: 'CC(O)C',
    ranges: [
      {
        signals: [
          {
            delta: 25.7,
            assignment: 'CH₃',
          },
        ],
        from: 25.7,
        to: 25.7,
      },
      {
        signals: [
          {
            delta: 66.14,
            assignment: 'CH',
          },
        ],
        from: 66.14,
        to: 66.14,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['propylene'],
    smiles: 'CC=C',
    ranges: [
      {
        signals: [
          {
            delta: 19.27,
            assignment: 'CH₃',
          },
        ],
        from: 19.27,
        to: 19.27,
      },
      {
        signals: [
          {
            delta: 115.74,
            assignment: 'CH₂',
          },
        ],
        from: 115.74,
        to: 115.74,
      },
      {
        signals: [
          {
            delta: 134.02,
            assignment: 'CH',
          },
        ],
        from: 134.02,
        to: 134.02,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['pyridine'],
    smiles: 'C1=CC=NC=C1',
    ranges: [
      {
        signals: [
          {
            delta: 150.57,
            assignment: 'CH(2,6)',
          },
        ],
        from: 150.57,
        to: 150.57,
      },
      {
        signals: [
          {
            delta: 124.08,
            assignment: 'CH(3,5)',
          },
        ],
        from: 124.08,
        to: 124.08,
      },
      {
        signals: [
          {
            delta: 135.99,
            assignment: 'CH(4)',
          },
        ],
        from: 135.99,
        to: 135.99,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['pyrrole'],
    smiles: 'C1=CNC=C1',
    ranges: [
      {
        signals: [
          {
            delta: 118.03,
            assignment: 'CH(2,5)',
          },
        ],
        from: 118.03,
        to: 118.03,
      },
      {
        signals: [
          {
            delta: 107.74,
            assignment: 'CH(3,4)',
          },
        ],
        from: 107.74,
        to: 107.74,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['pyrrolidine'],
    smiles: 'C1CCNC1',
    ranges: [
      {
        signals: [
          {
            delta: 45.82,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 45.82,
        to: 45.82,
      },
      {
        signals: [
          {
            delta: 26.17,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 26.17,
        to: 26.17,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['silicone grease'],
    smiles: '',
    ranges: [
      {
        signals: [
          {
            delta: 1.2,
            assignment: 'CH₃',
          },
        ],
        from: 1.2,
        to: 1.2,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['tetrahydrofuran'],
    smiles: 'C1COCC1',
    ranges: [
      {
        signals: [
          {
            delta: 68.03,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 68.03,
        to: 68.03,
      },
      {
        signals: [
          {
            delta: 26.19,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 26.19,
        to: 26.19,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['toluene'],
    smiles: 'Cc1ccccc1',
    ranges: [
      {
        signals: [
          {
            delta: 21.29,
            assignment: 'CH₃',
          },
        ],
        from: 21.29,
        to: 21.29,
      },
      {
        signals: [
          {
            delta: 138.24,
            assignment: 'C(1)',
          },
        ],
        from: 138.24,
        to: 138.24,
      },
      {
        signals: [
          {
            delta: 129.47,
            assignment: 'CH(2,6)',
          },
        ],
        from: 129.47,
        to: 129.47,
      },
      {
        signals: [
          {
            delta: 128.71,
            assignment: 'CH(3,5)',
          },
        ],
        from: 128.71,
        to: 128.71,
      },
      {
        signals: [
          {
            delta: 125.84,
            assignment: 'CH(4)',
          },
        ],
        from: 125.84,
        to: 125.84,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['triethylamine'],
    smiles: 'CCN(CC)CC',
    ranges: [
      {
        signals: [
          {
            delta: 12.51,
            assignment: 'CH₃',
          },
        ],
        from: 12.51,
        to: 12.51,
      },
      {
        signals: [
          {
            delta: 47.18,
            assignment: 'CH₂',
          },
        ],
        from: 47.18,
        to: 47.18,
      },
    ],
    nucleus: '13C',
    solvent: 'THF-d₈',
  },
  {
    names: ['acetic acid'],
    smiles: 'CC(=O)O',
    ranges: [
      {
        signals: [
          {
            delta: 175.85,
            assignment: 'CO',
          },
        ],
        from: 175.85,
        to: 175.85,
      },
      {
        signals: [
          {
            delta: 20.91,
            assignment: 'CH₃',
          },
        ],
        from: 20.91,
        to: 20.91,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['acetone'],
    smiles: 'CC(=O)C',
    ranges: [
      {
        signals: [
          {
            delta: 206.78,
            assignment: 'CO',
          },
        ],
        from: 206.78,
        to: 206.78,
      },
      {
        signals: [
          {
            delta: 31,
            assignment: 'CH₃',
          },
        ],
        from: 31,
        to: 31,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['acetonitrile'],
    smiles: 'CC#N',
    ranges: [
      {
        signals: [
          {
            delta: 116.92,
            assignment: 'CN',
          },
        ],
        from: 116.92,
        to: 116.92,
      },
      {
        signals: [
          {
            delta: 2.03,
            assignment: 'CH₃',
          },
        ],
        from: 2.03,
        to: 2.03,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['benzene'],
    smiles: 'c1ccccc1',
    ranges: [
      {
        signals: [
          {
            delta: 128.68,
            assignment: 'CH',
          },
        ],
        from: 128.68,
        to: 128.68,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['tert -butyl alcohol'],
    smiles: 'CC(C)(C)O',
    ranges: [
      {
        signals: [
          {
            delta: 69.11,
            assignment: '(CH₃)₃C',
          },
        ],
        from: 69.11,
        to: 69.11,
      },
      {
        signals: [
          {
            delta: 31.46,
            assignment: '(CH₃)₃C',
          },
        ],
        from: 31.46,
        to: 31.46,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['carbon dioxide'],
    smiles: 'O=C=O',
    ranges: [
      {
        signals: [
          {
            delta: 125.26,
            assignment: 'CO₂',
          },
        ],
        from: 125.26,
        to: 125.26,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['carbon disulfide'],
    smiles: 'S=C=S',
    ranges: [
      {
        signals: [
          {
            delta: 192.95,
            assignment: 'CS₂',
          },
        ],
        from: 192.95,
        to: 192.95,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['carbon tetrachloride'],
    smiles: 'ClC(Cl)(Cl)Cl',
    ranges: [
      {
        signals: [
          {
            delta: 96.52,
            assignment: 'CCl₄',
          },
        ],
        from: 96.52,
        to: 96.52,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['chloroform'],
    smiles: 'ClC(Cl)Cl',
    ranges: [
      {
        signals: [
          {
            delta: 77.99,
            assignment: 'CH',
          },
        ],
        from: 77.99,
        to: 77.99,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['18-crown-6'],
    smiles: 'C1COCCOCCOCCOCCOCCO1',
    ranges: [
      {
        signals: [
          {
            delta: 70.47,
            assignment: 'CH₂',
          },
        ],
        from: 70.47,
        to: 70.47,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['cyclohexane'],
    smiles: 'C1CCCCC1',
    ranges: [
      {
        signals: [
          {
            delta: 27.38,
            assignment: 'CH₂',
          },
        ],
        from: 27.38,
        to: 27.38,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['1,2-dichloroethane'],
    smiles: 'ClCCCl',
    ranges: [
      {
        signals: [
          {
            delta: 44.35,
            assignment: 'CH₂',
          },
        ],
        from: 44.35,
        to: 44.35,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['dichloromethane'],
    smiles: 'ClCCl',
    ranges: [
      {
        signals: [
          {
            delta: 54.24,
            assignment: 'CH₂',
          },
        ],
        from: 54.24,
        to: 54.24,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['diethyl ether'],
    smiles: 'CCOCC',
    ranges: [
      {
        signals: [
          {
            delta: 15.44,
            assignment: 'CH₃',
          },
        ],
        from: 15.44,
        to: 15.44,
      },
      {
        signals: [
          {
            delta: 66.11,
            assignment: 'CH₂',
          },
        ],
        from: 66.11,
        to: 66.11,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['diglyme'],
    smiles: 'COCCOCCOC',
    ranges: [
      {
        signals: [
          {
            delta: 58.95,
            assignment: 'CH₃',
          },
        ],
        from: 58.95,
        to: 58.95,
      },
      {
        signals: [
          {
            delta: 70.7,
            assignment: 'CH₂',
          },
        ],
        from: 70.7,
        to: 70.7,
      },
      {
        signals: [
          {
            delta: 72.25,
            assignment: 'CH₂',
          },
        ],
        from: 72.25,
        to: 72.25,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['dimethylformamide'],
    smiles: 'C(=O)N(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 162.57,
            assignment: 'CH',
          },
        ],
        from: 162.57,
        to: 162.57,
      },
      {
        signals: [
          {
            delta: 36.56,
            assignment: 'CH₃',
          },
        ],
        from: 36.56,
        to: 36.56,
      },
      {
        signals: [
          {
            delta: 31.39,
            assignment: 'CH₃',
          },
        ],
        from: 31.39,
        to: 31.39,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['1,4-dioxane'],
    smiles: 'C1COCCOC1',
    ranges: [
      {
        signals: [
          {
            delta: 67.47,
            assignment: 'CH₂',
          },
        ],
        from: 67.47,
        to: 67.47,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['DME', 'diethyl ether'],
    smiles: 'CCOCC',
    ranges: [
      {
        signals: [
          {
            delta: 59.02,
            assignment: 'CH₃',
          },
        ],
        from: 59.02,
        to: 59.02,
      },
      {
        signals: [
          {
            delta: 72.24,
            assignment: 'CH₂',
          },
        ],
        from: 72.24,
        to: 72.24,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['ethane'],
    smiles: 'CC',
    ranges: [
      {
        signals: [
          {
            delta: 6.91,
            assignment: 'CH₃',
          },
        ],
        from: 6.91,
        to: 6.91,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['ethanol'],
    smiles: 'CCO',
    ranges: [
      {
        signals: [
          {
            delta: 18.69,
            assignment: 'CH₃',
          },
        ],
        from: 18.69,
        to: 18.69,
      },
      {
        signals: [
          {
            delta: 58.57,
            assignment: 'CH₂',
          },
        ],
        from: 58.57,
        to: 58.57,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['ethyl acetate'],
    smiles: 'CC(=O)CC',
    ranges: [
      {
        signals: [
          {
            delta: 21.15,
            assignment: 'CH₃CO',
          },
        ],
        from: 21.15,
        to: 21.15,
      },
      {
        signals: [
          {
            delta: 171.24,
            assignment: 'CO',
          },
        ],
        from: 171.24,
        to: 171.24,
      },
      {
        signals: [
          {
            delta: 60.63,
            assignment: 'CH₂',
          },
        ],
        from: 60.63,
        to: 60.63,
      },
      {
        signals: [
          {
            delta: 14.37,
            assignment: 'CH₃',
          },
        ],
        from: 14.37,
        to: 14.37,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['ethylene'],
    smiles: 'C=C',
    ranges: [
      {
        signals: [
          {
            delta: 123.2,
            assignment: 'CH₂',
          },
        ],
        from: 123.2,
        to: 123.2,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['ethylene glycol'],
    smiles: 'OCCO',
    ranges: [
      {
        signals: [
          {
            delta: 64.08,
            assignment: 'CH₂',
          },
        ],
        from: 64.08,
        to: 64.08,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['H grease'],
    smiles: '',
    ranges: [
      {
        signals: [
          {
            delta: 30.14,
            assignment: 'CH₂',
          },
        ],
        from: 30.14,
        to: 30.14,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['hexamethylbenzene'],
    smiles: 'CC1=C(C(=C(C(=C1C)C)C)C)C',
    ranges: [
      {
        signals: [
          {
            delta: 132.09,
            assignment: 'C',
          },
        ],
        from: 132.09,
        to: 132.09,
      },
      {
        signals: [
          {
            delta: 16.93,
            assignment: 'CH₃',
          },
        ],
        from: 16.93,
        to: 16.93,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['n-hexane'],
    smiles: 'CCCCCC',
    ranges: [
      {
        signals: [
          {
            delta: 14.28,
            assignment: 'CH₃',
          },
        ],
        from: 14.28,
        to: 14.28,
      },
      {
        signals: [
          {
            delta: 23.07,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 23.07,
        to: 23.07,
      },
      {
        signals: [
          {
            delta: 32.01,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 32.01,
        to: 32.01,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['HMDSO'],
    smiles: 'C[Si](C)(C)O[Si](C)(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 1.96,
            assignment: 'CH₃',
          },
        ],
        from: 1.96,
        to: 1.96,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['HMPA'],
    smiles: 'CN(C)P(=O)(N(C)C)N(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 36.99,
            assignment: 'CH₃',
          },
        ],
        from: 36.99,
        to: 36.99,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['imidazole'],
    smiles: 'C1=CN=CN1',
    ranges: [
      {
        signals: [
          {
            delta: 135.76,
            assignment: 'CH(2)',
          },
        ],
        from: 135.76,
        to: 135.76,
      },
      {
        signals: [
          {
            delta: 122.16,
            assignment: 'CH(4,5)',
          },
        ],
        from: 122.16,
        to: 122.16,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['methane'],
    smiles: 'C',
    ranges: [
      {
        signals: [
          {
            delta: -4.33,
            assignment: 'CH₄',
          },
        ],
        from: -4.33,
        to: -4.33,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['methanol'],
    smiles: 'CO',
    ranges: [
      {
        signals: [
          {
            delta: 50.45,
            assignment: 'CH₃',
          },
        ],
        from: 50.45,
        to: 50.45,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['nitromethane'],
    smiles: 'C[N+](=O)[O-]',
    ranges: [
      {
        signals: [
          {
            delta: 63.03,
            assignment: 'CH₃',
          },
        ],
        from: 63.03,
        to: 63.03,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['n-pentane'],
    smiles: 'CCCCC',
    ranges: [
      {
        signals: [
          {
            delta: 14.24,
            assignment: 'CH₃',
          },
        ],
        from: 14.24,
        to: 14.24,
      },
      {
        signals: [
          {
            delta: 22.77,
            assignment: 'CH₂(2,4)',
          },
        ],
        from: 22.77,
        to: 22.77,
      },
      {
        signals: [
          {
            delta: 34.57,
            assignment: 'CH₂(3)',
          },
        ],
        from: 34.57,
        to: 34.57,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['propane'],
    smiles: 'CCC',
    ranges: [
      {
        signals: [
          {
            delta: 16.63,
            assignment: 'CH₃',
          },
        ],
        from: 16.63,
        to: 16.63,
      },
      {
        signals: [
          {
            delta: 16.63,
            assignment: 'CH₂',
          },
        ],
        from: 16.63,
        to: 16.63,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['2-propanol'],
    smiles: 'CC(O)C',
    ranges: [
      {
        signals: [
          {
            delta: 25.43,
            assignment: 'CH₃',
          },
        ],
        from: 25.43,
        to: 25.43,
      },
      {
        signals: [
          {
            delta: 64.67,
            assignment: 'CH',
          },
        ],
        from: 64.67,
        to: 64.67,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['propylene'],
    smiles: 'CC=C',
    ranges: [
      {
        signals: [
          {
            delta: 19.47,
            assignment: 'CH₃',
          },
        ],
        from: 19.47,
        to: 19.47,
      },
      {
        signals: [
          {
            delta: 115.7,
            assignment: 'CH₂',
          },
        ],
        from: 115.7,
        to: 115.7,
      },
      {
        signals: [
          {
            delta: 134.21,
            assignment: 'CH',
          },
        ],
        from: 134.21,
        to: 134.21,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['pyridine'],
    smiles: 'C1=CC=NC=C1',
    ranges: [
      {
        signals: [
          {
            delta: 150.27,
            assignment: 'CH(2,6)',
          },
        ],
        from: 150.27,
        to: 150.27,
      },
      {
        signals: [
          {
            delta: 124.06,
            assignment: 'CH(3,5)',
          },
        ],
        from: 124.06,
        to: 124.06,
      },
      {
        signals: [
          {
            delta: 136.16,
            assignment: 'CH(4)',
          },
        ],
        from: 136.16,
        to: 136.16,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['pyrrole'],
    smiles: 'C1=CNC=C1',
    ranges: [
      {
        signals: [
          {
            delta: 117.93,
            assignment: 'CH(2,5)',
          },
        ],
        from: 117.93,
        to: 117.93,
      },
      {
        signals: [
          {
            delta: 108.02,
            assignment: 'CH(3,4)',
          },
        ],
        from: 108.02,
        to: 108.02,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['pyrrolidine'],
    smiles: 'C1CCNC1',
    ranges: [
      {
        signals: [
          {
            delta: 47.02,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 47.02,
        to: 47.02,
      },
      {
        signals: [
          {
            delta: 25.83,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 25.83,
        to: 25.83,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['silicone grease'],
    smiles: '',
    ranges: [
      {
        signals: [
          {
            delta: 1.22,
            assignment: 'CH₃',
          },
        ],
        from: 1.22,
        to: 1.22,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['tetrahydrofuran'],
    smiles: 'C1COCC1',
    ranges: [
      {
        signals: [
          {
            delta: 68.16,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 68.16,
        to: 68.16,
      },
      {
        signals: [
          {
            delta: 25.98,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 25.98,
        to: 25.98,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['toluene'],
    smiles: 'Cc1ccccc1',
    ranges: [
      {
        signals: [
          {
            delta: 21.53,
            assignment: 'CH₃',
          },
        ],
        from: 21.53,
        to: 21.53,
      },
      {
        signals: [
          {
            delta: 138.36,
            assignment: 'C(1)',
          },
        ],
        from: 138.36,
        to: 138.36,
      },
      {
        signals: [
          {
            delta: 129.35,
            assignment: 'CH(2,6)',
          },
        ],
        from: 129.35,
        to: 129.35,
      },
      {
        signals: [
          {
            delta: 128.54,
            assignment: 'CH(3,5)',
          },
        ],
        from: 128.54,
        to: 128.54,
      },
      {
        signals: [
          {
            delta: 125.62,
            assignment: 'CH(4)',
          },
        ],
        from: 125.62,
        to: 125.62,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['triethylamine'],
    smiles: 'CCN(CC)CC',
    ranges: [
      {
        signals: [
          {
            delta: 12.12,
            assignment: 'CH₃',
          },
        ],
        from: 12.12,
        to: 12.12,
      },
      {
        signals: [
          {
            delta: 46.75,
            assignment: 'CH₂',
          },
        ],
        from: 46.75,
        to: 46.75,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['acetic acid'],
    smiles: 'CC(=O)O',
    ranges: [
      {
        signals: [
          {
            delta: 175.99,
            assignment: 'CO',
          },
        ],
        from: 175.99,
        to: 175.99,
      },
      {
        signals: [
          {
            delta: 20.81,
            assignment: 'CH₃',
          },
        ],
        from: 20.81,
        to: 20.81,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['acetone'],
    smiles: 'CC(=O)C',
    ranges: [
      {
        signals: [
          {
            delta: 207.07,
            assignment: 'CO',
          },
        ],
        from: 207.07,
        to: 207.07,
      },
      {
        signals: [
          {
            delta: 30.92,
            assignment: 'CH₃',
          },
        ],
        from: 30.92,
        to: 30.92,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['acetonitrile'],
    smiles: 'CC#N',
    ranges: [
      {
        signals: [
          {
            delta: 116.43,
            assignment: 'CN',
          },
        ],
        from: 116.43,
        to: 116.43,
      },
      {
        signals: [
          {
            delta: 1.89,
            assignment: 'CH₃',
          },
        ],
        from: 1.89,
        to: 1.89,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['benzene'],
    smiles: 'c1ccccc1',
    ranges: [
      {
        signals: [
          {
            delta: 128.37,
            assignment: 'CH',
          },
        ],
        from: 128.37,
        to: 128.37,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['tert -butyl alcohol'],
    smiles: 'CC(C)(C)O',
    ranges: [
      {
        signals: [
          {
            delta: 69.15,
            assignment: '(CH₃)₃C',
          },
        ],
        from: 69.15,
        to: 69.15,
      },
      {
        signals: [
          {
            delta: 31.25,
            assignment: '(CH₃)₃C',
          },
        ],
        from: 31.25,
        to: 31.25,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['carbon dioxide'],
    smiles: 'O=C=O',
    ranges: [
      {
        signals: [
          {
            delta: 124.99,
            assignment: 'CO₂',
          },
        ],
        from: 124.99,
        to: 124.99,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['carbon disulfide'],
    smiles: 'S=C=S',
    ranges: [
      {
        signals: [
          {
            delta: 192.83,
            assignment: 'CS₂',
          },
        ],
        from: 192.83,
        to: 192.83,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['carbon tetrachloride'],
    smiles: 'ClC(Cl)(Cl)Cl',
    ranges: [
      {
        signals: [
          {
            delta: 96.34,
            assignment: 'CCl₄',
          },
        ],
        from: 96.34,
        to: 96.34,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['chloroform'],
    smiles: 'ClC(Cl)Cl',
    ranges: [
      {
        signals: [
          {
            delta: 77.36,
            assignment: 'CH',
          },
        ],
        from: 77.36,
        to: 77.36,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['18-crown-6'],
    smiles: 'C1COCCOCCOCCOCCOCCO1',
    ranges: [
      {
        signals: [
          {
            delta: 70.55,
            assignment: 'CH₂',
          },
        ],
        from: 70.55,
        to: 70.55,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['cyclohexane'],
    smiles: 'C1CCCCC1',
    ranges: [
      {
        signals: [
          {
            delta: 26.94,
            assignment: 'CH₂',
          },
        ],
        from: 26.94,
        to: 26.94,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['1,2-dichloroethane'],
    smiles: 'ClCCCl',
    ranges: [
      {
        signals: [
          {
            delta: 43.5,
            assignment: 'CH₂',
          },
        ],
        from: 43.5,
        to: 43.5,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['dichloromethane'],
    smiles: 'ClCCl',
    ranges: [
      {
        signals: [
          {
            delta: 53.52,
            assignment: 'CH₂',
          },
        ],
        from: 53.52,
        to: 53.52,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['diethyl ether'],
    smiles: 'CCOCC',
    ranges: [
      {
        signals: [
          {
            delta: 15.2,
            assignment: 'CH₃',
          },
        ],
        from: 15.2,
        to: 15.2,
      },
      {
        signals: [
          {
            delta: 65.91,
            assignment: 'CH₂',
          },
        ],
        from: 65.91,
        to: 65.91,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['diglyme'],
    smiles: 'COCCOCCOC',
    ranges: [
      {
        signals: [
          {
            delta: 59.01,
            assignment: 'CH₃',
          },
        ],
        from: 59.01,
        to: 59.01,
      },
      {
        signals: [
          {
            delta: 70.51,
            assignment: 'CH₂',
          },
        ],
        from: 70.51,
        to: 70.51,
      },
      {
        signals: [
          {
            delta: 71.9,
            assignment: 'CH₂',
          },
        ],
        from: 71.9,
        to: 71.9,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['dimethylformamide'],
    smiles: 'C(=O)N(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 162.62,
            assignment: 'CH',
          },
        ],
        from: 162.62,
        to: 162.62,
      },
      {
        signals: [
          {
            delta: 36.5,
            assignment: 'CH₃',
          },
        ],
        from: 36.5,
        to: 36.5,
      },
      {
        signals: [
          {
            delta: 31.45,
            assignment: 'CH₃',
          },
        ],
        from: 31.45,
        to: 31.45,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['1,4-dioxane'],
    smiles: 'C1COCCOC1',
    ranges: [
      {
        signals: [
          {
            delta: 67.14,
            assignment: 'CH₂',
          },
        ],
        from: 67.14,
        to: 67.14,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['DME', 'diethyl ether'],
    smiles: 'CCOCC',
    ranges: [
      {
        signals: [
          {
            delta: 59.08,
            assignment: 'CH₃',
          },
        ],
        from: 59.08,
        to: 59.08,
      },
      {
        signals: [
          {
            delta: 71.84,
            assignment: 'CH₂',
          },
        ],
        from: 71.84,
        to: 71.84,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['ethane'],
    smiles: 'CC',
    ranges: [
      {
        signals: [
          {
            delta: 6.89,
            assignment: 'CH₃',
          },
        ],
        from: 6.89,
        to: 6.89,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['ethanol'],
    smiles: 'CCO',
    ranges: [
      {
        signals: [
          {
            delta: 18.41,
            assignment: 'CH₃',
          },
        ],
        from: 18.41,
        to: 18.41,
      },
      {
        signals: [
          {
            delta: 58.28,
            assignment: 'CH₂',
          },
        ],
        from: 58.28,
        to: 58.28,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['ethyl acetate'],
    smiles: 'CC(=O)CC',
    ranges: [
      {
        signals: [
          {
            delta: 21.04,
            assignment: 'CH₃CO',
          },
        ],
        from: 21.04,
        to: 21.04,
      },
      {
        signals: [
          {
            delta: 171.36,
            assignment: 'CO',
          },
        ],
        from: 171.36,
        to: 171.36,
      },
      {
        signals: [
          {
            delta: 60.49,
            assignment: 'CH₂',
          },
        ],
        from: 60.49,
        to: 60.49,
      },
      {
        signals: [
          {
            delta: 14.19,
            assignment: 'CH₃',
          },
        ],
        from: 14.19,
        to: 14.19,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['ethylene'],
    smiles: 'C=C',
    ranges: [
      {
        signals: [
          {
            delta: 123.13,
            assignment: 'CH₂',
          },
        ],
        from: 123.13,
        to: 123.13,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['ethylene glycol'],
    smiles: 'OCCO',
    ranges: [
      {
        signals: [
          {
            delta: 63.79,
            assignment: 'CH₂',
          },
        ],
        from: 63.79,
        to: 63.79,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['H grease'],
    smiles: '',
    ranges: [
      {
        signals: [
          {
            delta: 29.71,
            assignment: 'CH₂',
          },
        ],
        from: 29.71,
        to: 29.71,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['hexamethylbenzene'],
    smiles: 'CC1=C(C(=C(C(=C1C)C)C)C)C',
    ranges: [
      {
        signals: [
          {
            delta: 132.21,
            assignment: 'C',
          },
        ],
        from: 132.21,
        to: 132.21,
      },
      {
        signals: [
          {
            delta: 16.98,
            assignment: 'CH₃',
          },
        ],
        from: 16.98,
        to: 16.98,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['n-hexane'],
    smiles: 'CCCCCC',
    ranges: [
      {
        signals: [
          {
            delta: 14.14,
            assignment: 'CH₃',
          },
        ],
        from: 14.14,
        to: 14.14,
      },
      {
        signals: [
          {
            delta: 22.7,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 22.7,
        to: 22.7,
      },
      {
        signals: [
          {
            delta: 31.64,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 31.64,
        to: 31.64,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['HMDSO'],
    smiles: 'C[Si](C)(C)O[Si](C)(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 1.97,
            assignment: 'CH₃',
          },
        ],
        from: 1.97,
        to: 1.97,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['HMPA'],
    smiles: 'CN(C)P(=O)(N(C)C)N(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 36.87,
            assignment: 'CH₃',
          },
        ],
        from: 36.87,
        to: 36.87,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['imidazole'],
    smiles: 'C1=CN=CN1',
    ranges: [
      {
        signals: [
          {
            delta: 135.38,
            assignment: 'CH(2)',
          },
        ],
        from: 135.38,
        to: 135.38,
      },
      {
        signals: [
          {
            delta: 122,
            assignment: 'CH(4,5)',
          },
        ],
        from: 122,
        to: 122,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['methane'],
    smiles: 'C',
    ranges: [
      {
        signals: [
          {
            delta: -4.63,
            assignment: 'CH₄',
          },
        ],
        from: -4.63,
        to: -4.63,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['methanol'],
    smiles: 'CO',
    ranges: [
      {
        signals: [
          {
            delta: 50.41,
            assignment: 'CH₃',
          },
        ],
        from: 50.41,
        to: 50.41,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['nitromethane'],
    smiles: 'C[N+](=O)[O-]',
    ranges: [
      {
        signals: [
          {
            delta: 62.5,
            assignment: 'CH₃',
          },
        ],
        from: 62.5,
        to: 62.5,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['n-pentane'],
    smiles: 'CCCCC',
    ranges: [
      {
        signals: [
          {
            delta: 14.08,
            assignment: 'CH₃',
          },
        ],
        from: 14.08,
        to: 14.08,
      },
      {
        signals: [
          {
            delta: 22.38,
            assignment: 'CH₂(2,4)',
          },
        ],
        from: 22.38,
        to: 22.38,
      },
      {
        signals: [
          {
            delta: 34.16,
            assignment: 'CH₂(3)',
          },
        ],
        from: 34.16,
        to: 34.16,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['propane'],
    smiles: 'CCC',
    ranges: [
      {
        signals: [
          {
            delta: 16.63,
            assignment: 'CH₃',
          },
        ],
        from: 16.63,
        to: 16.63,
      },
      {
        signals: [
          {
            delta: 16.37,
            assignment: 'CH₂',
          },
        ],
        from: 16.37,
        to: 16.37,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['2-propanol'],
    smiles: 'CC(O)C',
    ranges: [
      {
        signals: [
          {
            delta: 25.14,
            assignment: 'CH₃',
          },
        ],
        from: 25.14,
        to: 25.14,
      },
      {
        signals: [
          {
            delta: 64.5,
            assignment: 'CH',
          },
        ],
        from: 64.5,
        to: 64.5,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['propylene'],
    smiles: 'CC=C',
    ranges: [
      {
        signals: [
          {
            delta: 19.5,
            assignment: 'CH₃',
          },
        ],
        from: 19.5,
        to: 19.5,
      },
      {
        signals: [
          {
            delta: 115.74,
            assignment: 'CH₂',
          },
        ],
        from: 115.74,
        to: 115.74,
      },
      {
        signals: [
          {
            delta: 133.91,
            assignment: 'CH',
          },
        ],
        from: 133.91,
        to: 133.91,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['pyridine'],
    smiles: 'C1=CC=NC=C1',
    ranges: [
      {
        signals: [
          {
            delta: 149.9,
            assignment: 'CH(2,6)',
          },
        ],
        from: 149.9,
        to: 149.9,
      },
      {
        signals: [
          {
            delta: 123.75,
            assignment: 'CH(3,5)',
          },
        ],
        from: 123.75,
        to: 123.75,
      },
      {
        signals: [
          {
            delta: 135.96,
            assignment: 'CH(4)',
          },
        ],
        from: 135.96,
        to: 135.96,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['pyrrole'],
    smiles: 'C1=CNC=C1',
    ranges: [
      {
        signals: [
          {
            delta: 117.77,
            assignment: 'CH(2,5)',
          },
        ],
        from: 117.77,
        to: 117.77,
      },
      {
        signals: [
          {
            delta: 107.98,
            assignment: 'CH(3,4)',
          },
        ],
        from: 107.98,
        to: 107.98,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['pyrrolidine'],
    smiles: 'C1CCNC1',
    ranges: [
      {
        signals: [
          {
            delta: 46.93,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 46.93,
        to: 46.93,
      },
      {
        signals: [
          {
            delta: 25.56,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 25.56,
        to: 25.56,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['silicone grease'],
    smiles: '',
    ranges: [
      {
        signals: [
          {
            delta: 1.19,
            assignment: 'CH₃',
          },
        ],
        from: 1.19,
        to: 1.19,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['tetrahydrofuran'],
    smiles: 'C1COCC1',
    ranges: [
      {
        signals: [
          {
            delta: 67.97,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 67.97,
        to: 67.97,
      },
      {
        signals: [
          {
            delta: 25.62,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 25.62,
        to: 25.62,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['toluene'],
    smiles: 'Cc1ccccc1',
    ranges: [
      {
        signals: [
          {
            delta: 21.46,
            assignment: 'CH₃',
          },
        ],
        from: 21.46,
        to: 21.46,
      },
      {
        signals: [
          {
            delta: 137.89,
            assignment: 'C(1)',
          },
        ],
        from: 137.89,
        to: 137.89,
      },
      {
        signals: [
          {
            delta: 129.07,
            assignment: 'CH(2,6)',
          },
        ],
        from: 129.07,
        to: 129.07,
      },
      {
        signals: [
          {
            delta: 128.26,
            assignment: 'CH(3,5)',
          },
        ],
        from: 128.26,
        to: 128.26,
      },
      {
        signals: [
          {
            delta: 125.33,
            assignment: 'CH(4)',
          },
        ],
        from: 125.33,
        to: 125.33,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['triethylamine'],
    smiles: 'CCN(CC)CC',
    ranges: [
      {
        signals: [
          {
            delta: 11.61,
            assignment: 'CH₃',
          },
        ],
        from: 11.61,
        to: 11.61,
      },
      {
        signals: [
          {
            delta: 46.25,
            assignment: 'CH₂',
          },
        ],
        from: 46.25,
        to: 46.25,
      },
    ],
    nucleus: '13C',
    solvent: 'CDCl₃',
  },
  {
    names: ['acetic acid'],
    smiles: 'CC(=O)O',
    ranges: [
      {
        signals: [
          {
            delta: 175.3,
            assignment: 'CO',
          },
        ],
        from: 175.3,
        to: 175.3,
      },
      {
        signals: [
          {
            delta: 20.27,
            assignment: 'CH₃',
          },
        ],
        from: 20.27,
        to: 20.27,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['acetone'],
    smiles: 'CC(=O)C',
    ranges: [
      {
        signals: [
          {
            delta: 204,
            assignment: 'CO',
          },
        ],
        from: 204,
        to: 204,
      },
      {
        signals: [
          {
            delta: 30.03,
            assignment: 'CH₃',
          },
        ],
        from: 30.03,
        to: 30.03,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['acetonitrile'],
    smiles: 'CC#N',
    ranges: [
      {
        signals: [
          {
            delta: 115.76,
            assignment: 'CN',
          },
        ],
        from: 115.76,
        to: 115.76,
      },
      {
        signals: [
          {
            delta: 0.03,
            assignment: 'CH₃',
          },
        ],
        from: 0.03,
        to: 0.03,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['benzene'],
    smiles: 'c1ccccc1',
    ranges: [
      {
        signals: [
          {
            delta: 128.57,
            assignment: 'CH',
          },
        ],
        from: 128.57,
        to: 128.57,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['tert -butyl alcohol'],
    smiles: 'CC(C)(C)O',
    ranges: [
      {
        signals: [
          {
            delta: 68.12,
            assignment: '(CH₃)₃C',
          },
        ],
        from: 68.12,
        to: 68.12,
      },
      {
        signals: [
          {
            delta: 30.49,
            assignment: '(CH₃)₃C',
          },
        ],
        from: 30.49,
        to: 30.49,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['carbon dioxide'],
    smiles: 'O=C=O',
    ranges: [
      {
        signals: [
          {
            delta: 124.86,
            assignment: 'CO₂',
          },
        ],
        from: 124.86,
        to: 124.86,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['carbon disulfide'],
    smiles: 'S=C=S',
    ranges: [
      {
        signals: [
          {
            delta: 192.71,
            assignment: 'CS₂',
          },
        ],
        from: 192.71,
        to: 192.71,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['carbon tetrachloride'],
    smiles: 'ClC(Cl)(Cl)Cl',
    ranges: [
      {
        signals: [
          {
            delta: 96.57,
            assignment: 'CCl₄',
          },
        ],
        from: 96.57,
        to: 96.57,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['chloroform'],
    smiles: 'ClC(Cl)Cl',
    ranges: [
      {
        signals: [
          {
            delta: 77.89,
            assignment: 'CH',
          },
        ],
        from: 77.89,
        to: 77.89,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['18-crown-6'],
    smiles: 'C1COCCOCCOCCOCCOCCO1',
    ranges: [
      {
        signals: [
          {
            delta: 70.86,
            assignment: 'CH₂',
          },
        ],
        from: 70.86,
        to: 70.86,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['cyclohexane'],
    smiles: 'C1CCCCC1',
    ranges: [
      {
        signals: [
          {
            delta: 27.31,
            assignment: 'CH₂',
          },
        ],
        from: 27.31,
        to: 27.31,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['1,2-dichloroethane'],
    smiles: 'ClCCCl',
    ranges: [
      {
        signals: [
          {
            delta: 43.4,
            assignment: 'CH₂',
          },
        ],
        from: 43.4,
        to: 43.4,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['dichloromethane'],
    smiles: 'ClCCl',
    ranges: [
      {
        signals: [
          {
            delta: 53.47,
            assignment: 'CH₂',
          },
        ],
        from: 53.47,
        to: 53.47,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['diethyl ether'],
    smiles: 'CCOCC',
    ranges: [
      {
        signals: [
          {
            delta: 15.47,
            assignment: 'CH₃',
          },
        ],
        from: 15.47,
        to: 15.47,
      },
      {
        signals: [
          {
            delta: 65.94,
            assignment: 'CH₂',
          },
        ],
        from: 65.94,
        to: 65.94,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['diglyme'],
    smiles: 'COCCOCCOC',
    ranges: [
      {
        signals: [
          {
            delta: 58.62,
            assignment: 'CH₃',
          },
        ],
        from: 58.62,
        to: 58.62,
      },
      {
        signals: [
          {
            delta: 70.92,
            assignment: 'CH₂',
          },
        ],
        from: 70.92,
        to: 70.92,
      },
      {
        signals: [
          {
            delta: 72.39,
            assignment: 'CH₂',
          },
        ],
        from: 72.39,
        to: 72.39,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['dimethylformamide'],
    smiles: 'C(=O)N(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 161.93,
            assignment: 'CH',
          },
        ],
        from: 161.93,
        to: 161.93,
      },
      {
        signals: [
          {
            delta: 35.22,
            assignment: 'CH₃',
          },
        ],
        from: 35.22,
        to: 35.22,
      },
      {
        signals: [
          {
            delta: 30.64,
            assignment: 'CH₃',
          },
        ],
        from: 30.64,
        to: 30.64,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['1,4-dioxane'],
    smiles: 'C1COCCOC1',
    ranges: [
      {
        signals: [
          {
            delta: 67.17,
            assignment: 'CH₂',
          },
        ],
        from: 67.17,
        to: 67.17,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['DME', 'diethyl ether'],
    smiles: 'CCOCC',
    ranges: [
      {
        signals: [
          {
            delta: 58.63,
            assignment: 'CH₃',
          },
        ],
        from: 58.63,
        to: 58.63,
      },
      {
        signals: [
          {
            delta: 72.25,
            assignment: 'CH₂',
          },
        ],
        from: 72.25,
        to: 72.25,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['ethane'],
    smiles: 'CC',
    ranges: [
      {
        signals: [
          {
            delta: 6.94,
            assignment: 'CH₃',
          },
        ],
        from: 6.94,
        to: 6.94,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['ethanol'],
    smiles: 'CCO',
    ranges: [
      {
        signals: [
          {
            delta: 18.78,
            assignment: 'CH₃',
          },
        ],
        from: 18.78,
        to: 18.78,
      },
      {
        signals: [
          {
            delta: 57.81,
            assignment: 'CH₂',
          },
        ],
        from: 57.81,
        to: 57.81,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['ethyl acetate'],
    smiles: 'CC(=O)CC',
    ranges: [
      {
        signals: [
          {
            delta: 20.46,
            assignment: 'CH₃CO',
          },
        ],
        from: 20.46,
        to: 20.46,
      },
      {
        signals: [
          {
            delta: 170.02,
            assignment: 'CO',
          },
        ],
        from: 170.02,
        to: 170.02,
      },
      {
        signals: [
          {
            delta: 60.08,
            assignment: 'CH₂',
          },
        ],
        from: 60.08,
        to: 60.08,
      },
      {
        signals: [
          {
            delta: 14.23,
            assignment: 'CH₃',
          },
        ],
        from: 14.23,
        to: 14.23,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['ethylene'],
    smiles: 'C=C',
    ranges: [
      {
        signals: [
          {
            delta: 122.92,
            assignment: 'CH₂',
          },
        ],
        from: 122.92,
        to: 122.92,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['ethylene glycol'],
    smiles: 'OCCO',
    ranges: [
      {
        signals: [
          {
            delta: 64.29,
            assignment: 'CH₂',
          },
        ],
        from: 64.29,
        to: 64.29,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['H grease'],
    smiles: '',
    ranges: [
      {
        signals: [
          {
            delta: 30.31,
            assignment: 'CH₂',
          },
        ],
        from: 30.31,
        to: 30.31,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['hexamethylbenzene'],
    smiles: 'CC1=C(C(=C(C(=C1C)C)C)C)C',
    ranges: [
      {
        signals: [
          {
            delta: 131.72,
            assignment: 'C',
          },
        ],
        from: 131.72,
        to: 131.72,
      },
      {
        signals: [
          {
            delta: 16.84,
            assignment: 'CH₃',
          },
        ],
        from: 16.84,
        to: 16.84,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['n-hexane'],
    smiles: 'CCCCCC',
    ranges: [
      {
        signals: [
          {
            delta: 14.34,
            assignment: 'CH₃',
          },
        ],
        from: 14.34,
        to: 14.34,
      },
      {
        signals: [
          {
            delta: 23.12,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 23.12,
        to: 23.12,
      },
      {
        signals: [
          {
            delta: 32.06,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 32.06,
        to: 32.06,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['HMDSO'],
    smiles: 'C[Si](C)(C)O[Si](C)(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 1.99,
            assignment: 'CH₃',
          },
        ],
        from: 1.99,
        to: 1.99,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['HMPA'],
    smiles: 'CN(C)P(=O)(N(C)C)N(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 36.8,
            assignment: 'CH₃',
          },
        ],
        from: 36.8,
        to: 36.8,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['imidazole'],
    smiles: 'C1=CN=CN1',
    ranges: [
      {
        signals: [
          {
            delta: 135.57,
            assignment: 'CH(2)',
          },
        ],
        from: 135.57,
        to: 135.57,
      },
      {
        signals: [
          {
            delta: 122.13,
            assignment: 'CH(4,5)',
          },
        ],
        from: 122.13,
        to: 122.13,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['methane'],
    smiles: 'C',
    ranges: [
      {
        signals: [
          {
            delta: -4.34,
            assignment: 'CH₄',
          },
        ],
        from: -4.34,
        to: -4.34,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['methanol'],
    smiles: 'CO',
    ranges: [
      {
        signals: [
          {
            delta: 49.9,
            assignment: 'CH₃',
          },
        ],
        from: 49.9,
        to: 49.9,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['nitromethane'],
    smiles: 'C[N+](=O)[O-]',
    ranges: [
      {
        signals: [
          {
            delta: 61.14,
            assignment: 'CH₃',
          },
        ],
        from: 61.14,
        to: 61.14,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['n-pentane'],
    smiles: 'CCCCC',
    ranges: [
      {
        signals: [
          {
            delta: 14.27,
            assignment: 'CH₃',
          },
        ],
        from: 14.27,
        to: 14.27,
      },
      {
        signals: [
          {
            delta: 22.79,
            assignment: 'CH₂(2,4)',
          },
        ],
        from: 22.79,
        to: 22.79,
      },
      {
        signals: [
          {
            delta: 34.54,
            assignment: 'CH₂(3)',
          },
        ],
        from: 34.54,
        to: 34.54,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['propane'],
    smiles: 'CCC',
    ranges: [
      {
        signals: [
          {
            delta: 16.65,
            assignment: 'CH₃',
          },
        ],
        from: 16.65,
        to: 16.65,
      },
      {
        signals: [
          {
            delta: 16.63,
            assignment: 'CH₂',
          },
        ],
        from: 16.63,
        to: 16.63,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['2-propanol'],
    smiles: 'CC(O)C',
    ranges: [
      {
        signals: [
          {
            delta: 25.24,
            assignment: 'CH₃',
          },
        ],
        from: 25.24,
        to: 25.24,
      },
      {
        signals: [
          {
            delta: 64.12,
            assignment: 'CH',
          },
        ],
        from: 64.12,
        to: 64.12,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['propylene'],
    smiles: 'CC=C',
    ranges: [
      {
        signals: [
          {
            delta: 19.32,
            assignment: 'CH₃',
          },
        ],
        from: 19.32,
        to: 19.32,
      },
      {
        signals: [
          {
            delta: 115.89,
            assignment: 'CH₂',
          },
        ],
        from: 115.89,
        to: 115.89,
      },
      {
        signals: [
          {
            delta: 133.61,
            assignment: 'CH',
          },
        ],
        from: 133.61,
        to: 133.61,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['pyridine'],
    smiles: 'C1=CC=NC=C1',
    ranges: [
      {
        signals: [
          {
            delta: 150.25,
            assignment: 'CH(2,6)',
          },
        ],
        from: 150.25,
        to: 150.25,
      },
      {
        signals: [
          {
            delta: 123.46,
            assignment: 'CH(3,5)',
          },
        ],
        from: 123.46,
        to: 123.46,
      },
      {
        signals: [
          {
            delta: 135.17,
            assignment: 'CH(4)',
          },
        ],
        from: 135.17,
        to: 135.17,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['pyrrole'],
    smiles: 'C1=CNC=C1',
    ranges: [
      {
        signals: [
          {
            delta: 117.61,
            assignment: 'CH(2,5)',
          },
        ],
        from: 117.61,
        to: 117.61,
      },
      {
        signals: [
          {
            delta: 108.15,
            assignment: 'CH(3,4)',
          },
        ],
        from: 108.15,
        to: 108.15,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['pyrrolidine'],
    smiles: 'C1CCNC1',
    ranges: [
      {
        signals: [
          {
            delta: 47.12,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 47.12,
        to: 47.12,
      },
      {
        signals: [
          {
            delta: 25.75,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 25.75,
        to: 25.75,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['silicone grease'],
    smiles: '',
    ranges: [
      {
        signals: [
          {
            delta: 1.37,
            assignment: 'CH₃',
          },
        ],
        from: 1.37,
        to: 1.37,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['tetrahydrofuran'],
    smiles: 'C1COCC1',
    ranges: [
      {
        signals: [
          {
            delta: 67.75,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 67.75,
        to: 67.75,
      },
      {
        signals: [
          {
            delta: 25.79,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 25.79,
        to: 25.79,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['toluene'],
    smiles: 'Cc1ccccc1',
    ranges: [
      {
        signals: [
          {
            delta: 21.37,
            assignment: 'CH₃',
          },
        ],
        from: 21.37,
        to: 21.37,
      },
      {
        signals: [
          {
            delta: 137.84,
            assignment: 'C(1)',
          },
        ],
        from: 137.84,
        to: 137.84,
      },
      {
        signals: [
          {
            delta: 129.33,
            assignment: 'CH(2,6)',
          },
        ],
        from: 129.33,
        to: 129.33,
      },
      {
        signals: [
          {
            delta: 128.51,
            assignment: 'CH(3,5)',
          },
        ],
        from: 128.51,
        to: 128.51,
      },
      {
        signals: [
          {
            delta: 125.66,
            assignment: 'CH(4)',
          },
        ],
        from: 125.66,
        to: 125.66,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['triethylamine'],
    smiles: 'CCN(CC)CC',
    ranges: [
      {
        signals: [
          {
            delta: 12.39,
            assignment: 'CH₃',
          },
        ],
        from: 12.39,
        to: 12.39,
      },
      {
        signals: [
          {
            delta: 46.82,
            assignment: 'CH₂',
          },
        ],
        from: 46.82,
        to: 46.82,
      },
    ],
    nucleus: '13C',
    solvent: 'toluene- d₈',
  },
  {
    names: ['acetic acid'],
    smiles: 'CC(=O)O',
    ranges: [
      {
        signals: [
          {
            delta: 175.82,
            assignment: 'CO',
          },
        ],
        from: 175.82,
        to: 175.82,
      },
      {
        signals: [
          {
            delta: 20.37,
            assignment: 'CH₃',
          },
        ],
        from: 20.37,
        to: 20.37,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['acetone'],
    smiles: 'CC(=O)C',
    ranges: [
      {
        signals: [
          {
            delta: 204.43,
            assignment: 'CO',
          },
        ],
        from: 204.43,
        to: 204.43,
      },
      {
        signals: [
          {
            delta: 30.14,
            assignment: 'CH₃',
          },
        ],
        from: 30.14,
        to: 30.14,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['acetonitrile'],
    smiles: 'CC#N',
    ranges: [
      {
        signals: [
          {
            delta: 116.02,
            assignment: 'CN',
          },
        ],
        from: 116.02,
        to: 116.02,
      },
      {
        signals: [
          {
            delta: 0.2,
            assignment: 'CH₃',
          },
        ],
        from: 0.2,
        to: 0.2,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['benzene'],
    smiles: 'c1ccccc1',
    ranges: [
      {
        signals: [
          {
            delta: 128.62,
            assignment: 'CH',
          },
        ],
        from: 128.62,
        to: 128.62,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['tert -butyl alcohol'],
    smiles: 'CC(C)(C)O',
    ranges: [
      {
        signals: [
          {
            delta: 68.19,
            assignment: '(CH₃)₃C',
          },
        ],
        from: 68.19,
        to: 68.19,
      },
      {
        signals: [
          {
            delta: 30.47,
            assignment: '(CH₃)₃C',
          },
        ],
        from: 30.47,
        to: 30.47,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['carbon dioxide'],
    smiles: 'O=C=O',
    ranges: [
      {
        signals: [
          {
            delta: 124.76,
            assignment: 'CO₂',
          },
        ],
        from: 124.76,
        to: 124.76,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['carbon disulfide'],
    smiles: 'S=C=S',
    ranges: [
      {
        signals: [
          {
            delta: 192.69,
            assignment: 'CS₂',
          },
        ],
        from: 192.69,
        to: 192.69,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['carbon tetrachloride'],
    smiles: 'ClC(Cl)(Cl)Cl',
    ranges: [
      {
        signals: [
          {
            delta: 96.44,
            assignment: 'CCl₄',
          },
        ],
        from: 96.44,
        to: 96.44,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['chloroform'],
    smiles: 'ClC(Cl)Cl',
    ranges: [
      {
        signals: [
          {
            delta: 77.79,
            assignment: 'CH',
          },
        ],
        from: 77.79,
        to: 77.79,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['18-crown-6'],
    smiles: 'C1COCCOCCOCCOCCOCCO1',
    ranges: [
      {
        signals: [
          {
            delta: 70.59,
            assignment: 'CH₂',
          },
        ],
        from: 70.59,
        to: 70.59,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['cyclohexane'],
    smiles: 'C1CCCCC1',
    ranges: [
      {
        signals: [
          {
            delta: 27.23,
            assignment: 'CH₂',
          },
        ],
        from: 27.23,
        to: 27.23,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['1,2-dichloroethane'],
    smiles: 'ClCCCl',
    ranges: [
      {
        signals: [
          {
            delta: 43.59,
            assignment: 'CH₂',
          },
        ],
        from: 43.59,
        to: 43.59,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['dichloromethane'],
    smiles: 'ClCCl',
    ranges: [
      {
        signals: [
          {
            delta: 53.46,
            assignment: 'CH₂',
          },
        ],
        from: 53.46,
        to: 53.46,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['diethyl ether'],
    smiles: 'CCOCC',
    ranges: [
      {
        signals: [
          {
            delta: 15.46,
            assignment: 'CH₃',
          },
        ],
        from: 15.46,
        to: 15.46,
      },
      {
        signals: [
          {
            delta: 65.94,
            assignment: 'CH₂',
          },
        ],
        from: 65.94,
        to: 65.94,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['diglyme'],
    smiles: 'COCCOCCOC',
    ranges: [
      {
        signals: [
          {
            delta: 58.66,
            assignment: 'CH₃',
          },
        ],
        from: 58.66,
        to: 58.66,
      },
      {
        signals: [
          {
            delta: 70.87,
            assignment: 'CH₂',
          },
        ],
        from: 70.87,
        to: 70.87,
      },
      {
        signals: [
          {
            delta: 72.35,
            assignment: 'CH₂',
          },
        ],
        from: 72.35,
        to: 72.35,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['dimethylformamide'],
    smiles: 'C(=O)N(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 162.13,
            assignment: 'CH',
          },
        ],
        from: 162.13,
        to: 162.13,
      },
      {
        signals: [
          {
            delta: 35.25,
            assignment: 'CH₃',
          },
        ],
        from: 35.25,
        to: 35.25,
      },
      {
        signals: [
          {
            delta: 30.72,
            assignment: 'CH₃',
          },
        ],
        from: 30.72,
        to: 30.72,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['1,4-dioxane'],
    smiles: 'C1COCCOC1',
    ranges: [
      {
        signals: [
          {
            delta: 67.16,
            assignment: 'CH₂',
          },
        ],
        from: 67.16,
        to: 67.16,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['DME', 'diethyl ether'],
    smiles: 'CCOCC',
    ranges: [
      {
        signals: [
          {
            delta: 58.68,
            assignment: 'CH₃',
          },
        ],
        from: 58.68,
        to: 58.68,
      },
      {
        signals: [
          {
            delta: 72.21,
            assignment: 'CH₂',
          },
        ],
        from: 72.21,
        to: 72.21,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['ethane'],
    smiles: 'CC',
    ranges: [
      {
        signals: [
          {
            delta: 6.96,
            assignment: 'CH₃',
          },
        ],
        from: 6.96,
        to: 6.96,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['ethanol'],
    smiles: 'CCO',
    ranges: [
      {
        signals: [
          {
            delta: 18.72,
            assignment: 'CH₃',
          },
        ],
        from: 18.72,
        to: 18.72,
      },
      {
        signals: [
          {
            delta: 57.86,
            assignment: 'CH₂',
          },
        ],
        from: 57.86,
        to: 57.86,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['ethyl acetate'],
    smiles: 'CC(=O)CC',
    ranges: [
      {
        signals: [
          {
            delta: 20.56,
            assignment: 'CH₃CO',
          },
        ],
        from: 20.56,
        to: 20.56,
      },
      {
        signals: [
          {
            delta: 170.44,
            assignment: 'CO',
          },
        ],
        from: 170.44,
        to: 170.44,
      },
      {
        signals: [
          {
            delta: 60.21,
            assignment: 'CH₂',
          },
        ],
        from: 60.21,
        to: 60.21,
      },
      {
        signals: [
          {
            delta: 14.19,
            assignment: 'CH₃',
          },
        ],
        from: 14.19,
        to: 14.19,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['ethylene'],
    smiles: 'C=C',
    ranges: [
      {
        signals: [
          {
            delta: 122.96,
            assignment: 'CH₂',
          },
        ],
        from: 122.96,
        to: 122.96,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['ethylene glycol'],
    smiles: 'OCCO',
    ranges: [
      {
        signals: [
          {
            delta: 64.34,
            assignment: 'CH₂',
          },
        ],
        from: 64.34,
        to: 64.34,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['H grease'],
    smiles: '',
    ranges: [
      {
        signals: [
          {
            delta: 30.22,
            assignment: 'CH₂',
          },
        ],
        from: 30.22,
        to: 30.22,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['hexamethylbenzene'],
    smiles: 'CC1=C(C(=C(C(=C1C)C)C)C)C',
    ranges: [
      {
        signals: [
          {
            delta: 131.79,
            assignment: 'C',
          },
        ],
        from: 131.79,
        to: 131.79,
      },
      {
        signals: [
          {
            delta: 16.95,
            assignment: 'CH₃',
          },
        ],
        from: 16.95,
        to: 16.95,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['n-hexane'],
    smiles: 'CCCCCC',
    ranges: [
      {
        signals: [
          {
            delta: 14.32,
            assignment: 'CH₃',
          },
        ],
        from: 14.32,
        to: 14.32,
      },
      {
        signals: [
          {
            delta: 23.04,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 23.04,
        to: 23.04,
      },
      {
        signals: [
          {
            delta: 31.96,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 31.96,
        to: 31.96,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['HMDSO'],
    smiles: 'C[Si](C)(C)O[Si](C)(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 2.05,
            assignment: 'CH₃',
          },
        ],
        from: 2.05,
        to: 2.05,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['HMPA'],
    smiles: 'CN(C)P(=O)(N(C)C)N(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 36.88,
            assignment: 'CH₃',
          },
        ],
        from: 36.88,
        to: 36.88,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['imidazole'],
    smiles: 'C1=CN=CN1',
    ranges: [
      {
        signals: [
          {
            delta: 135.76,
            assignment: 'CH(2)',
          },
        ],
        from: 135.76,
        to: 135.76,
      },
      {
        signals: [
          {
            delta: 122.16,
            assignment: 'CH(4,5)',
          },
        ],
        from: 122.16,
        to: 122.16,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['methane'],
    smiles: 'C',
    ranges: [
      {
        signals: [
          {
            delta: -4.29,
            assignment: 'CH₄',
          },
        ],
        from: -4.29,
        to: -4.29,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['methanol'],
    smiles: 'CO',
    ranges: [
      {
        signals: [
          {
            delta: 49.97,
            assignment: 'CH₃',
          },
        ],
        from: 49.97,
        to: 49.97,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['nitromethane'],
    smiles: 'C[N+](=O)[O-]',
    ranges: [
      {
        signals: [
          {
            delta: 61.16,
            assignment: 'CH₃',
          },
        ],
        from: 61.16,
        to: 61.16,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['n-pentane'],
    smiles: 'CCCCC',
    ranges: [
      {
        signals: [
          {
            delta: 14.25,
            assignment: 'CH₃',
          },
        ],
        from: 14.25,
        to: 14.25,
      },
      {
        signals: [
          {
            delta: 22.72,
            assignment: 'CH₂(2,4)',
          },
        ],
        from: 22.72,
        to: 22.72,
      },
      {
        signals: [
          {
            delta: 34.45,
            assignment: 'CH₂(3)',
          },
        ],
        from: 34.45,
        to: 34.45,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['propane'],
    smiles: 'CCC',
    ranges: [
      {
        signals: [
          {
            delta: 16.66,
            assignment: 'CH₃',
          },
        ],
        from: 16.66,
        to: 16.66,
      },
      {
        signals: [
          {
            delta: 16.6,
            assignment: 'CH₂',
          },
        ],
        from: 16.6,
        to: 16.6,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['2-propanol'],
    smiles: 'CC(O)C',
    ranges: [
      {
        signals: [
          {
            delta: 25.18,
            assignment: 'CH₃',
          },
        ],
        from: 25.18,
        to: 25.18,
      },
      {
        signals: [
          {
            delta: 64.23,
            assignment: 'CH',
          },
        ],
        from: 64.23,
        to: 64.23,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['propylene'],
    smiles: 'CC=C',
    ranges: [
      {
        signals: [
          {
            delta: 19.38,
            assignment: 'CH₃',
          },
        ],
        from: 19.38,
        to: 19.38,
      },
      {
        signals: [
          {
            delta: 115.92,
            assignment: 'CH₂',
          },
        ],
        from: 115.92,
        to: 115.92,
      },
      {
        signals: [
          {
            delta: 133.69,
            assignment: 'CH',
          },
        ],
        from: 133.69,
        to: 133.69,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['pyridine'],
    smiles: 'C1=CC=NC=C1',
    ranges: [
      {
        signals: [
          {
            delta: 150.27,
            assignment: 'CH(2,6)',
          },
        ],
        from: 150.27,
        to: 150.27,
      },
      {
        signals: [
          {
            delta: 123.58,
            assignment: 'CH(3,5)',
          },
        ],
        from: 123.58,
        to: 123.58,
      },
      {
        signals: [
          {
            delta: 135.28,
            assignment: 'CH(4)',
          },
        ],
        from: 135.28,
        to: 135.28,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['pyrrole'],
    smiles: 'C1=CNC=C1',
    ranges: [
      {
        signals: [
          {
            delta: 117.78,
            assignment: 'CH(2,5)',
          },
        ],
        from: 117.78,
        to: 117.78,
      },
      {
        signals: [
          {
            delta: 108.21,
            assignment: 'CH(3,4)',
          },
        ],
        from: 108.21,
        to: 108.21,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['pyrrolidine'],
    smiles: 'C1CCNC1',
    ranges: [
      {
        signals: [
          {
            delta: 46.86,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 46.86,
        to: 46.86,
      },
      {
        signals: [
          {
            delta: 25.65,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 25.65,
        to: 25.65,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['silicone grease'],
    smiles: '',
    ranges: [
      {
        signals: [
          {
            delta: 1.38,
            assignment: 'CH₃',
          },
        ],
        from: 1.38,
        to: 1.38,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['tetrahydrofuran'],
    smiles: 'C1COCC1',
    ranges: [
      {
        signals: [
          {
            delta: 67.8,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 67.8,
        to: 67.8,
      },
      {
        signals: [
          {
            delta: 25.72,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 25.72,
        to: 25.72,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['toluene'],
    smiles: 'Cc1ccccc1',
    ranges: [
      {
        signals: [
          {
            delta: 21.1,
            assignment: 'CH₃',
          },
        ],
        from: 21.1,
        to: 21.1,
      },
      {
        signals: [
          {
            delta: 137.91,
            assignment: 'C(1)',
          },
        ],
        from: 137.91,
        to: 137.91,
      },
      {
        signals: [
          {
            delta: 129.33,
            assignment: 'CH(2,6)',
          },
        ],
        from: 129.33,
        to: 129.33,
      },
      {
        signals: [
          {
            delta: 128.56,
            assignment: 'CH(3,5)',
          },
        ],
        from: 128.56,
        to: 128.56,
      },
      {
        signals: [
          {
            delta: 125.68,
            assignment: 'CH(4)',
          },
        ],
        from: 125.68,
        to: 125.68,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['triethylamine'],
    smiles: 'CCN(CC)CC',
    ranges: [
      {
        signals: [
          {
            delta: 12.35,
            assignment: 'CH₃',
          },
        ],
        from: 12.35,
        to: 12.35,
      },
      {
        signals: [
          {
            delta: 46.77,
            assignment: 'CH₂',
          },
        ],
        from: 46.77,
        to: 46.77,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₆',
  },
  {
    names: ['acetic acid'],
    smiles: 'CC(=O)O',
    ranges: [
      {
        signals: [
          {
            delta: 175.67,
            assignment: 'CO',
          },
        ],
        from: 175.67,
        to: 175.67,
      },
      {
        signals: [
          {
            delta: 20.4,
            assignment: 'CH₃',
          },
        ],
        from: 20.4,
        to: 20.4,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['acetone'],
    smiles: 'CC(=O)C',
    ranges: [
      {
        signals: [
          {
            delta: 204.83,
            assignment: 'CO',
          },
        ],
        from: 204.83,
        to: 204.83,
      },
      {
        signals: [
          {
            delta: 30.12,
            assignment: 'CH₃',
          },
        ],
        from: 30.12,
        to: 30.12,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['acetonitrile'],
    smiles: 'CC#N',
    ranges: [
      {
        signals: [
          {
            delta: 115.93,
            assignment: 'CN',
          },
        ],
        from: 115.93,
        to: 115.93,
      },
      {
        signals: [
          {
            delta: 0.63,
            assignment: 'CH₃',
          },
        ],
        from: 0.63,
        to: 0.63,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['benzene'],
    smiles: 'c1ccccc1',
    ranges: [
      {
        signals: [
          {
            delta: 128.38,
            assignment: 'CH',
          },
        ],
        from: 128.38,
        to: 128.38,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['tert -butyl alcohol'],
    smiles: 'CC(C)(C)O',
    ranges: [
      {
        signals: [
          {
            delta: 68.19,
            assignment: '(CH₃)₃C',
          },
        ],
        from: 68.19,
        to: 68.19,
      },
      {
        signals: [
          {
            delta: 31.13,
            assignment: '(CH₃)₃C',
          },
        ],
        from: 31.13,
        to: 31.13,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['carbon dioxide'],
    smiles: 'O=C=O',
    ranges: [
      {
        signals: [
          {
            delta: 126.08,
            assignment: 'CO₂',
          },
        ],
        from: 126.08,
        to: 126.08,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['carbon disulfide'],
    smiles: 'S=C=S',
    ranges: [
      {
        signals: [
          {
            delta: 192.49,
            assignment: 'CS₂',
          },
        ],
        from: 192.49,
        to: 192.49,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['carbon tetrachloride'],
    smiles: 'ClC(Cl)(Cl)Cl',
    ranges: [
      {
        signals: [
          {
            delta: 96.38,
            assignment: 'CCl₄',
          },
        ],
        from: 96.38,
        to: 96.38,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['chloroform'],
    smiles: 'ClC(Cl)Cl',
    ranges: [
      {
        signals: [
          {
            delta: 77.67,
            assignment: 'CH',
          },
        ],
        from: 77.67,
        to: 77.67,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['18-crown-6'],
    smiles: 'C1COCCOCCOCCOCCOCCO1',
    ranges: [
      {
        signals: [
          {
            delta: 70.55,
            assignment: 'CH₂',
          },
        ],
        from: 70.55,
        to: 70.55,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['cyclohexane'],
    smiles: 'C1CCCCC1',
    ranges: [
      {
        signals: [
          {
            delta: 26.99,
            assignment: 'CH₂',
          },
        ],
        from: 26.99,
        to: 26.99,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['1,2-dichloroethane'],
    smiles: 'ClCCCl',
    ranges: [
      {
        signals: [
          {
            delta: 43.6,
            assignment: 'CH₂',
          },
        ],
        from: 43.6,
        to: 43.6,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['dichloromethane'],
    smiles: 'ClCCl',
    ranges: [
      {
        signals: [
          {
            delta: 53.54,
            assignment: 'CH₂',
          },
        ],
        from: 53.54,
        to: 53.54,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['diethyl ether'],
    smiles: 'CCOCC',
    ranges: [
      {
        signals: [
          {
            delta: 15.35,
            assignment: 'CH₃',
          },
        ],
        from: 15.35,
        to: 15.35,
      },
      {
        signals: [
          {
            delta: 65.79,
            assignment: 'CH₂',
          },
        ],
        from: 65.79,
        to: 65.79,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['diglyme'],
    smiles: 'COCCOCCOC',
    ranges: [
      {
        signals: [
          {
            delta: 58.42,
            assignment: 'CH₃',
          },
        ],
        from: 58.42,
        to: 58.42,
      },
      {
        signals: [
          {
            delta: 70.56,
            assignment: 'CH₂',
          },
        ],
        from: 70.56,
        to: 70.56,
      },
      {
        signals: [
          {
            delta: 72.07,
            assignment: 'CH₂',
          },
        ],
        from: 72.07,
        to: 72.07,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['dimethylformamide'],
    smiles: 'C(=O)N(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 162.01,
            assignment: 'CH',
          },
        ],
        from: 162.01,
        to: 162.01,
      },
      {
        signals: [
          {
            delta: 35.45,
            assignment: 'CH₃',
          },
        ],
        from: 35.45,
        to: 35.45,
      },
      {
        signals: [
          {
            delta: 30.71,
            assignment: 'CH₃',
          },
        ],
        from: 30.71,
        to: 30.71,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['1,4-dioxane'],
    smiles: 'C1COCCOC1',
    ranges: [
      {
        signals: [
          {
            delta: 66.95,
            assignment: 'CH₂',
          },
        ],
        from: 66.95,
        to: 66.95,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['DME', 'diethyl ether'],
    smiles: 'CCOCC',
    ranges: [
      {
        signals: [
          {
            delta: 58.31,
            assignment: 'CH₃',
          },
        ],
        from: 58.31,
        to: 58.31,
      },
      {
        signals: [
          {
            delta: 71.81,
            assignment: 'CH₂',
          },
        ],
        from: 71.81,
        to: 71.81,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['ethane'],
    smiles: 'CC',
    ranges: [
      {
        signals: [
          {
            delta: 6.91,
            assignment: 'CH₃',
          },
        ],
        from: 6.91,
        to: 6.91,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['ethanol'],
    smiles: 'CCO',
    ranges: [
      {
        signals: [
          {
            delta: 18.55,
            assignment: 'CH₃',
          },
        ],
        from: 18.55,
        to: 18.55,
      },
      {
        signals: [
          {
            delta: 57.63,
            assignment: 'CH₂',
          },
        ],
        from: 57.63,
        to: 57.63,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['ethyl acetate'],
    smiles: 'CC(=O)CC',
    ranges: [
      {
        signals: [
          {
            delta: 20.5,
            assignment: 'CH₃CO',
          },
        ],
        from: 20.5,
        to: 20.5,
      },
      {
        signals: [
          {
            delta: 170.2,
            assignment: 'CO',
          },
        ],
        from: 170.2,
        to: 170.2,
      },
      {
        signals: [
          {
            delta: 60.06,
            assignment: 'CH₂',
          },
        ],
        from: 60.06,
        to: 60.06,
      },
      {
        signals: [
          {
            delta: 14.07,
            assignment: 'CH₃',
          },
        ],
        from: 14.07,
        to: 14.07,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['ethylene'],
    smiles: 'C=C',
    ranges: [
      {
        signals: [
          {
            delta: 122.95,
            assignment: 'CH₂',
          },
        ],
        from: 122.95,
        to: 122.95,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['ethylene glycol'],
    smiles: 'OCCO',
    ranges: [
      {
        signals: [
          {
            delta: 64.03,
            assignment: 'CH₂',
          },
        ],
        from: 64.03,
        to: 64.03,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['H grease'],
    smiles: '',
    ranges: [
      {
        signals: [
          {
            delta: 30.11,
            assignment: 'CH₂',
          },
        ],
        from: 30.11,
        to: 30.11,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['hexamethylbenzene'],
    smiles: 'CC1=C(C(=C(C(=C1C)C)C)C)C',
    ranges: [
      {
        signals: [
          {
            delta: 131.54,
            assignment: 'C',
          },
        ],
        from: 131.54,
        to: 131.54,
      },
      {
        signals: [
          {
            delta: 16.68,
            assignment: 'CH₃',
          },
        ],
        from: 16.68,
        to: 16.68,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['n-hexane'],
    smiles: 'CCCCCC',
    ranges: [
      {
        signals: [
          {
            delta: 14.18,
            assignment: 'CH₃',
          },
        ],
        from: 14.18,
        to: 14.18,
      },
      {
        signals: [
          {
            delta: 22.86,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 22.86,
        to: 22.86,
      },
      {
        signals: [
          {
            delta: 31.77,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 31.77,
        to: 31.77,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['HMDSO'],
    smiles: 'C[Si](C)(C)O[Si](C)(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 1.92,
            assignment: 'CH₃',
          },
        ],
        from: 1.92,
        to: 1.92,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['HMPA'],
    smiles: 'CN(C)P(=O)(N(C)C)N(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 36.64,
            assignment: 'CH₃',
          },
        ],
        from: 36.64,
        to: 36.64,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['imidazole'],
    smiles: 'C1=CN=CN1',
    ranges: [
      {
        signals: [
          {
            delta: 135.5,
            assignment: 'CH(2)',
          },
        ],
        from: 135.5,
        to: 135.5,
      },
      {
        signals: [
          {
            delta: 121.96,
            assignment: 'CH(4,5)',
          },
        ],
        from: 121.96,
        to: 121.96,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['methane'],
    smiles: 'C',
    ranges: [
      {
        signals: [
          {
            delta: -4.33,
            assignment: 'CH₄',
          },
        ],
        from: -4.33,
        to: -4.33,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['methanol'],
    smiles: 'CO',
    ranges: [
      {
        signals: [
          {
            delta: 49.66,
            assignment: 'CH₃',
          },
        ],
        from: 49.66,
        to: 49.66,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['nitromethane'],
    smiles: 'C[N+](=O)[O-]',
    ranges: [
      {
        signals: [
          {
            delta: 61.68,
            assignment: 'CH₃',
          },
        ],
        from: 61.68,
        to: 61.68,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['n-pentane'],
    smiles: 'CCCCC',
    ranges: [
      {
        signals: [
          {
            delta: 14.1,
            assignment: 'CH₃',
          },
        ],
        from: 14.1,
        to: 14.1,
      },
      {
        signals: [
          {
            delta: 22.54,
            assignment: 'CH₂(2,4)',
          },
        ],
        from: 22.54,
        to: 22.54,
      },
      {
        signals: [
          {
            delta: 34.26,
            assignment: 'CH₂(3)',
          },
        ],
        from: 34.26,
        to: 34.26,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['propane'],
    smiles: 'CCC',
    ranges: [
      {
        signals: [
          {
            delta: 16.56,
            assignment: 'CH₃',
          },
        ],
        from: 16.56,
        to: 16.56,
      },
      {
        signals: [
          {
            delta: 16.48,
            assignment: 'CH₂',
          },
        ],
        from: 16.48,
        to: 16.48,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['2-propanol'],
    smiles: 'CC(O)C',
    ranges: [
      {
        signals: [
          {
            delta: 25.14,
            assignment: 'CH₃',
          },
        ],
        from: 25.14,
        to: 25.14,
      },
      {
        signals: [
          {
            delta: 64.18,
            assignment: 'CH',
          },
        ],
        from: 64.18,
        to: 64.18,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['propylene'],
    smiles: 'CC=C',
    ranges: [
      {
        signals: [
          {
            delta: 19.32,
            assignment: 'CH₃',
          },
        ],
        from: 19.32,
        to: 19.32,
      },
      {
        signals: [
          {
            delta: 115.86,
            assignment: 'CH₂',
          },
        ],
        from: 115.86,
        to: 115.86,
      },
      {
        signals: [
          {
            delta: 133.57,
            assignment: 'CH',
          },
        ],
        from: 133.57,
        to: 133.57,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['pyridine'],
    smiles: 'C1=CC=NC=C1',
    ranges: [
      {
        signals: [
          {
            delta: 149.93,
            assignment: 'CH(2,6)',
          },
        ],
        from: 149.93,
        to: 149.93,
      },
      {
        signals: [
          {
            delta: 123.49,
            assignment: 'CH(3,5)',
          },
        ],
        from: 123.49,
        to: 123.49,
      },
      {
        signals: [
          {
            delta: 135.32,
            assignment: 'CH(4)',
          },
        ],
        from: 135.32,
        to: 135.32,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['pyrrole'],
    smiles: 'C1=CNC=C1',
    ranges: [
      {
        signals: [
          {
            delta: 117.65,
            assignment: 'CH(2,5)',
          },
        ],
        from: 117.65,
        to: 117.65,
      },
      {
        signals: [
          {
            delta: 108.03,
            assignment: 'CH(3,4)',
          },
        ],
        from: 108.03,
        to: 108.03,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['pyrrolidine'],
    smiles: 'C1CCNC1',
    ranges: [
      {
        signals: [
          {
            delta: 46.75,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 46.75,
        to: 46.75,
      },
      {
        signals: [
          {
            delta: 25.59,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 25.59,
        to: 25.59,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['silicone grease'],
    smiles: '',
    ranges: [
      {
        signals: [
          {
            delta: 1.09,
            assignment: 'CH₃',
          },
        ],
        from: 1.09,
        to: 1.09,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['tetrahydrofuran'],
    smiles: 'C1COCC1',
    ranges: [
      {
        signals: [
          {
            delta: 67.64,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 67.64,
        to: 67.64,
      },
      {
        signals: [
          {
            delta: 25.68,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 25.68,
        to: 25.68,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['toluene'],
    smiles: 'Cc1ccccc1',
    ranges: [
      {
        signals: [
          {
            delta: 21.23,
            assignment: 'CH₃',
          },
        ],
        from: 21.23,
        to: 21.23,
      },
      {
        signals: [
          {
            delta: 137.65,
            assignment: 'C(1)',
          },
        ],
        from: 137.65,
        to: 137.65,
      },
      {
        signals: [
          {
            delta: 129.12,
            assignment: 'CH(2,6)',
          },
        ],
        from: 129.12,
        to: 129.12,
      },
      {
        signals: [
          {
            delta: 128.31,
            assignment: 'CH(3,5)',
          },
        ],
        from: 128.31,
        to: 128.31,
      },
      {
        signals: [
          {
            delta: 125.43,
            assignment: 'CH(4)',
          },
        ],
        from: 125.43,
        to: 125.43,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['triethylamine'],
    smiles: 'CCN(CC)CC',
    ranges: [
      {
        signals: [
          {
            delta: 11.87,
            assignment: 'CH₃',
          },
        ],
        from: 11.87,
        to: 11.87,
      },
      {
        signals: [
          {
            delta: 46.36,
            assignment: 'CH₂',
          },
        ],
        from: 46.36,
        to: 46.36,
      },
    ],
    nucleus: '13C',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['acetic acid'],
    smiles: 'CC(=O)O',
    ranges: [
      {
        signals: [
          {
            delta: 172.31,
            assignment: 'CO',
          },
        ],
        from: 172.31,
        to: 172.31,
      },
      {
        signals: [
          {
            delta: 20.51,
            assignment: 'CH₃',
          },
        ],
        from: 20.51,
        to: 20.51,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['acetone'],
    smiles: 'CC(=O)C',
    ranges: [
      {
        signals: [
          {
            delta: 205.87,
            assignment: 'CO',
          },
        ],
        from: 205.87,
        to: 205.87,
      },
      {
        signals: [
          {
            delta: 30.6,
            assignment: 'CH₃',
          },
        ],
        from: 30.6,
        to: 30.6,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['acetonitrile'],
    smiles: 'CC#N',
    ranges: [
      {
        signals: [
          {
            delta: 117.6,
            assignment: 'CN',
          },
        ],
        from: 117.6,
        to: 117.6,
      },
      {
        signals: [
          {
            delta: 1.12,
            assignment: 'CH₃',
          },
        ],
        from: 1.12,
        to: 1.12,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['benzene'],
    smiles: 'c1ccccc1',
    ranges: [
      {
        signals: [
          {
            delta: 129.15,
            assignment: 'CH',
          },
        ],
        from: 129.15,
        to: 129.15,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['tert -butyl alcohol'],
    smiles: 'CC(C)(C)O',
    ranges: [
      {
        signals: [
          {
            delta: 68.13,
            assignment: '(CH₃)₃C',
          },
        ],
        from: 68.13,
        to: 68.13,
      },
      {
        signals: [
          {
            delta: 30.72,
            assignment: '(CH₃)₃C',
          },
        ],
        from: 30.72,
        to: 30.72,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['carbon dioxide'],
    smiles: 'O=C=O',
    ranges: [
      {
        signals: [
          {
            delta: 125.81,
            assignment: 'CO₂',
          },
        ],
        from: 125.81,
        to: 125.81,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['carbon disulfide'],
    smiles: 'S=C=S',
    ranges: [
      {
        signals: [
          {
            delta: 193.58,
            assignment: 'CS₂',
          },
        ],
        from: 193.58,
        to: 193.58,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['carbon tetrachloride'],
    smiles: 'ClC(Cl)(Cl)Cl',
    ranges: [
      {
        signals: [
          {
            delta: 96.65,
            assignment: 'CCl₄',
          },
        ],
        from: 96.65,
        to: 96.65,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['chloroform'],
    smiles: 'ClC(Cl)Cl',
    ranges: [
      {
        signals: [
          {
            delta: 79.19,
            assignment: 'CH',
          },
        ],
        from: 79.19,
        to: 79.19,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['18-crown-6'],
    smiles: 'C1COCCOCCOCCOCCOCCO1',
    ranges: [
      {
        signals: [
          {
            delta: 71.25,
            assignment: 'CH₂',
          },
        ],
        from: 71.25,
        to: 71.25,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['cyclohexane'],
    smiles: 'C1CCCCC1',
    ranges: [
      {
        signals: [
          {
            delta: 27.51,
            assignment: 'CH₂',
          },
        ],
        from: 27.51,
        to: 27.51,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['1,2-dichloroethane'],
    smiles: 'ClCCCl',
    ranges: [
      {
        signals: [
          {
            delta: 45.25,
            assignment: 'CH₂',
          },
        ],
        from: 45.25,
        to: 45.25,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['dichloromethane'],
    smiles: 'ClCCl',
    ranges: [
      {
        signals: [
          {
            delta: 54.95,
            assignment: 'CH₂',
          },
        ],
        from: 54.95,
        to: 54.95,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['diethyl ether'],
    smiles: 'CCOCC',
    ranges: [
      {
        signals: [
          {
            delta: 15.78,
            assignment: 'CH₃',
          },
        ],
        from: 15.78,
        to: 15.78,
      },
      {
        signals: [
          {
            delta: 66.12,
            assignment: 'CH₂',
          },
        ],
        from: 66.12,
        to: 66.12,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['diglyme'],
    smiles: 'COCCOCCOC',
    ranges: [
      {
        signals: [
          {
            delta: 58.77,
            assignment: 'CH₃',
          },
        ],
        from: 58.77,
        to: 58.77,
      },
      {
        signals: [
          {
            delta: 71.03,
            assignment: 'CH₂',
          },
        ],
        from: 71.03,
        to: 71.03,
      },
      {
        signals: [
          {
            delta: 72.63,
            assignment: 'CH₂',
          },
        ],
        from: 72.63,
        to: 72.63,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['dimethylformamide'],
    smiles: 'C(=O)N(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 162.79,
            assignment: 'CH',
          },
        ],
        from: 162.79,
        to: 162.79,
      },
      {
        signals: [
          {
            delta: 36.15,
            assignment: 'CH₃',
          },
        ],
        from: 36.15,
        to: 36.15,
      },
      {
        signals: [
          {
            delta: 31.03,
            assignment: 'CH₃',
          },
        ],
        from: 31.03,
        to: 31.03,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['1,4-dioxane'],
    smiles: 'C1COCCOC1',
    ranges: [
      {
        signals: [
          {
            delta: 67.6,
            assignment: 'CH₂',
          },
        ],
        from: 67.6,
        to: 67.6,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['DME', 'diethyl ether'],
    smiles: 'CCOCC',
    ranges: [
      {
        signals: [
          {
            delta: 58.45,
            assignment: 'CH₃',
          },
        ],
        from: 58.45,
        to: 58.45,
      },
      {
        signals: [
          {
            delta: 72.47,
            assignment: 'CH₂',
          },
        ],
        from: 72.47,
        to: 72.47,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['ethane'],
    smiles: 'CC',
    ranges: [
      {
        signals: [
          {
            delta: 6.88,
            assignment: 'CH₃',
          },
        ],
        from: 6.88,
        to: 6.88,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['ethanol'],
    smiles: 'CCO',
    ranges: [
      {
        signals: [
          {
            delta: 18.89,
            assignment: 'CH₃',
          },
        ],
        from: 18.89,
        to: 18.89,
      },
      {
        signals: [
          {
            delta: 57.72,
            assignment: 'CH₂',
          },
        ],
        from: 57.72,
        to: 57.72,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['ethyl acetate'],
    smiles: 'CC(=O)CC',
    ranges: [
      {
        signals: [
          {
            delta: 20.83,
            assignment: 'CH₃CO',
          },
        ],
        from: 20.83,
        to: 20.83,
      },
      {
        signals: [
          {
            delta: 170.96,
            assignment: 'CO',
          },
        ],
        from: 170.96,
        to: 170.96,
      },
      {
        signals: [
          {
            delta: 60.56,
            assignment: 'CH₂',
          },
        ],
        from: 60.56,
        to: 60.56,
      },
      {
        signals: [
          {
            delta: 14.5,
            assignment: 'CH₃',
          },
        ],
        from: 14.5,
        to: 14.5,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['ethylene'],
    smiles: 'C=C',
    ranges: [
      {
        signals: [
          {
            delta: 123.47,
            assignment: 'CH₂',
          },
        ],
        from: 123.47,
        to: 123.47,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['ethylene glycol'],
    smiles: 'OCCO',
    ranges: [
      {
        signals: [
          {
            delta: 64.26,
            assignment: 'CH₂',
          },
        ],
        from: 64.26,
        to: 64.26,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['H grease'],
    smiles: '',
    ranges: [],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['hexamethylbenzene'],
    smiles: 'CC1=C(C(=C(C(=C1C)C)C)C)C',
    ranges: [
      {
        signals: [
          {
            delta: 132.22,
            assignment: 'C',
          },
        ],
        from: 132.22,
        to: 132.22,
      },
      {
        signals: [
          {
            delta: 16.86,
            assignment: 'CH₃',
          },
        ],
        from: 16.86,
        to: 16.86,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['n-hexane'],
    smiles: 'CCCCCC',
    ranges: [
      {
        signals: [
          {
            delta: 14.34,
            assignment: 'CH₃',
          },
        ],
        from: 14.34,
        to: 14.34,
      },
      {
        signals: [
          {
            delta: 23.28,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 23.28,
        to: 23.28,
      },
      {
        signals: [
          {
            delta: 32.3,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 32.3,
        to: 32.3,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['HMDSO'],
    smiles: 'C[Si](C)(C)O[Si](C)(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 2.01,
            assignment: 'CH₃',
          },
        ],
        from: 2.01,
        to: 2.01,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['HMPA'],
    smiles: 'CN(C)P(=O)(N(C)C)N(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 37.04,
            assignment: 'CH₃',
          },
        ],
        from: 37.04,
        to: 37.04,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['imidazole'],
    smiles: 'C1=CN=CN1',
    ranges: [
      {
        signals: [
          {
            delta: 135.89,
            assignment: 'CH(2)',
          },
        ],
        from: 135.89,
        to: 135.89,
      },
      {
        signals: [
          {
            delta: 122.31,
            assignment: 'CH(4,5)',
          },
        ],
        from: 122.31,
        to: 122.31,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['methane'],
    smiles: 'C',
    ranges: [
      {
        signals: [
          {
            delta: -5.33,
            assignment: 'CH₄',
          },
        ],
        from: -5.33,
        to: -5.33,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['methanol'],
    smiles: 'CO',
    ranges: [
      {
        signals: [
          {
            delta: 49.77,
            assignment: 'CH₃',
          },
        ],
        from: 49.77,
        to: 49.77,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['nitromethane'],
    smiles: 'C[N+](=O)[O-]',
    ranges: [
      {
        signals: [
          {
            delta: 63.21,
            assignment: 'CH₃',
          },
        ],
        from: 63.21,
        to: 63.21,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['n-pentane'],
    smiles: 'CCCCC',
    ranges: [
      {
        signals: [
          {
            delta: 14.29,
            assignment: 'CH₃',
          },
        ],
        from: 14.29,
        to: 14.29,
      },
      {
        signals: [
          {
            delta: 22.98,
            assignment: 'CH₂(2,4)',
          },
        ],
        from: 22.98,
        to: 22.98,
      },
      {
        signals: [
          {
            delta: 34.83,
            assignment: 'CH₂(3)',
          },
        ],
        from: 34.83,
        to: 34.83,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['propane'],
    smiles: 'CCC',
    ranges: [
      {
        signals: [
          {
            delta: 16.68,
            assignment: 'CH₃',
          },
        ],
        from: 16.68,
        to: 16.68,
      },
      {
        signals: [
          {
            delta: 16.78,
            assignment: 'CH₂',
          },
        ],
        from: 16.78,
        to: 16.78,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['2-propanol'],
    smiles: 'CC(O)C',
    ranges: [
      {
        signals: [
          {
            delta: 25.67,
            assignment: 'CH₃',
          },
        ],
        from: 25.67,
        to: 25.67,
      },
      {
        signals: [
          {
            delta: 63.85,
            assignment: 'CH',
          },
        ],
        from: 63.85,
        to: 63.85,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['propylene'],
    smiles: 'CC=C',
    ranges: [
      {
        signals: [
          {
            delta: 19.42,
            assignment: 'CH₃',
          },
        ],
        from: 19.42,
        to: 19.42,
      },
      {
        signals: [
          {
            delta: 116.03,
            assignment: 'CH₂',
          },
        ],
        from: 116.03,
        to: 116.03,
      },
      {
        signals: [
          {
            delta: 134.34,
            assignment: 'CH',
          },
        ],
        from: 134.34,
        to: 134.34,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['pyridine'],
    smiles: 'C1=CC=NC=C1',
    ranges: [
      {
        signals: [
          {
            delta: 150.67,
            assignment: 'CH(2,6)',
          },
        ],
        from: 150.67,
        to: 150.67,
      },
      {
        signals: [
          {
            delta: 124.57,
            assignment: 'CH(3,5)',
          },
        ],
        from: 124.57,
        to: 124.57,
      },
      {
        signals: [
          {
            delta: 136.56,
            assignment: 'CH(4)',
          },
        ],
        from: 136.56,
        to: 136.56,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['pyrrole'],
    smiles: 'C1=CNC=C1',
    ranges: [
      {
        signals: [
          {
            delta: 117.98,
            assignment: 'CH(2,5)',
          },
        ],
        from: 117.98,
        to: 117.98,
      },
      {
        signals: [
          {
            delta: 108.04,
            assignment: 'CH(3,4)',
          },
        ],
        from: 108.04,
        to: 108.04,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['pyrrolidine'],
    smiles: 'C1CCNC1',
    ranges: [],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['silicone grease'],
    smiles: '',
    ranges: [
      {
        signals: [
          {
            delta: 1.4,
            assignment: 'CH₃',
          },
        ],
        from: 1.4,
        to: 1.4,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['tetrahydrofuran'],
    smiles: 'C1COCC1',
    ranges: [
      {
        signals: [
          {
            delta: 68.07,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 68.07,
        to: 68.07,
      },
      {
        signals: [
          {
            delta: 26.15,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 26.15,
        to: 26.15,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['toluene'],
    smiles: 'Cc1ccccc1',
    ranges: [
      {
        signals: [
          {
            delta: 21.46,
            assignment: 'CH₃',
          },
        ],
        from: 21.46,
        to: 21.46,
      },
      {
        signals: [
          {
            delta: 138.48,
            assignment: 'C(1)',
          },
        ],
        from: 138.48,
        to: 138.48,
      },
      {
        signals: [
          {
            delta: 129.76,
            assignment: 'CH(2,6)',
          },
        ],
        from: 129.76,
        to: 129.76,
      },
      {
        signals: [
          {
            delta: 129.03,
            assignment: 'CH(3,5)',
          },
        ],
        from: 129.03,
        to: 129.03,
      },
      {
        signals: [
          {
            delta: 126.12,
            assignment: 'CH(4)',
          },
        ],
        from: 126.12,
        to: 126.12,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['triethylamine'],
    smiles: 'CCN(CC)CC',
    ranges: [
      {
        signals: [
          {
            delta: 12.49,
            assignment: 'CH₃',
          },
        ],
        from: 12.49,
        to: 12.49,
      },
      {
        signals: [
          {
            delta: 47.07,
            assignment: 'CH₂',
          },
        ],
        from: 47.07,
        to: 47.07,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['acetic acid'],
    smiles: 'CC(=O)O',
    ranges: [
      {
        signals: [
          {
            delta: 171.93,
            assignment: 'CO',
          },
        ],
        from: 171.93,
        to: 171.93,
      },
      {
        signals: [
          {
            delta: 20.95,
            assignment: 'CH₃',
          },
        ],
        from: 20.95,
        to: 20.95,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['acetone'],
    smiles: 'CC(=O)C',
    ranges: [
      {
        signals: [
          {
            delta: 206.31,
            assignment: 'CO',
          },
        ],
        from: 206.31,
        to: 206.31,
      },
      {
        signals: [
          {
            delta: 30.56,
            assignment: 'CH₃',
          },
        ],
        from: 30.56,
        to: 30.56,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['acetonitrile'],
    smiles: 'CC#N',
    ranges: [
      {
        signals: [
          {
            delta: 117.91,
            assignment: 'CN',
          },
        ],
        from: 117.91,
        to: 117.91,
      },
      {
        signals: [
          {
            delta: 1.03,
            assignment: 'CH₃',
          },
        ],
        from: 1.03,
        to: 1.03,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['benzene'],
    smiles: 'c1ccccc1',
    ranges: [
      {
        signals: [
          {
            delta: 128.3,
            assignment: 'CH',
          },
        ],
        from: 128.3,
        to: 128.3,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['tert -butyl alcohol'],
    smiles: 'CC(C)(C)O',
    ranges: [
      {
        signals: [
          {
            delta: 66.88,
            assignment: '(CH₃)₃C',
          },
        ],
        from: 66.88,
        to: 66.88,
      },
      {
        signals: [
          {
            delta: 30.38,
            assignment: '(CH₃)₃C',
          },
        ],
        from: 30.38,
        to: 30.38,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['carbon dioxide'],
    smiles: 'O=C=O',
    ranges: [
      {
        signals: [
          {
            delta: 124.21,
            assignment: 'CO₂',
          },
        ],
        from: 124.21,
        to: 124.21,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['carbon disulfide'],
    smiles: 'S=C=S',
    ranges: [
      {
        signals: [
          {
            delta: 192.63,
            assignment: 'CS₂',
          },
        ],
        from: 192.63,
        to: 192.63,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['carbon tetrachloride'],
    smiles: 'ClC(Cl)(Cl)Cl',
    ranges: [
      {
        signals: [
          {
            delta: 95.44,
            assignment: 'CCl₄',
          },
        ],
        from: 95.44,
        to: 95.44,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['chloroform'],
    smiles: 'ClC(Cl)Cl',
    ranges: [
      {
        signals: [
          {
            delta: 79.16,
            assignment: 'CH',
          },
        ],
        from: 79.16,
        to: 79.16,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['18-crown-6'],
    smiles: 'C1COCCOCCOCCOCCOCCO1',
    ranges: [
      {
        signals: [
          {
            delta: 69.85,
            assignment: 'CH₂',
          },
        ],
        from: 69.85,
        to: 69.85,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['cyclohexane'],
    smiles: 'C1CCCCC1',
    ranges: [
      {
        signals: [
          {
            delta: 26.33,
            assignment: 'CH₂',
          },
        ],
        from: 26.33,
        to: 26.33,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['1,2-dichloroethane'],
    smiles: 'ClCCCl',
    ranges: [
      {
        signals: [
          {
            delta: 45.02,
            assignment: 'CH₂',
          },
        ],
        from: 45.02,
        to: 45.02,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['dichloromethane'],
    smiles: 'ClCCl',
    ranges: [
      {
        signals: [
          {
            delta: 54.84,
            assignment: 'CH₂',
          },
        ],
        from: 54.84,
        to: 54.84,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['diethyl ether'],
    smiles: 'CCOCC',
    ranges: [
      {
        signals: [
          {
            delta: 15.12,
            assignment: 'CH₃',
          },
        ],
        from: 15.12,
        to: 15.12,
      },
      {
        signals: [
          {
            delta: 62.05,
            assignment: 'CH₂',
          },
        ],
        from: 62.05,
        to: 62.05,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['diglyme'],
    smiles: 'COCCOCCOC',
    ranges: [
      {
        signals: [
          {
            delta: 57.98,
            assignment: 'CH₃',
          },
        ],
        from: 57.98,
        to: 57.98,
      },
      {
        signals: [
          {
            delta: 69.54,
            assignment: 'CH₂',
          },
        ],
        from: 69.54,
        to: 69.54,
      },
      {
        signals: [
          {
            delta: 71.25,
            assignment: 'CH₂',
          },
        ],
        from: 71.25,
        to: 71.25,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['dimethylformamide'],
    smiles: 'C(=O)N(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 162.29,
            assignment: 'CH',
          },
        ],
        from: 162.29,
        to: 162.29,
      },
      {
        signals: [
          {
            delta: 35.73,
            assignment: 'CH₃',
          },
        ],
        from: 35.73,
        to: 35.73,
      },
      {
        signals: [
          {
            delta: 30.73,
            assignment: 'CH₃',
          },
        ],
        from: 30.73,
        to: 30.73,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['1,4-dioxane'],
    smiles: 'C1COCCOC1',
    ranges: [
      {
        signals: [
          {
            delta: 66.36,
            assignment: 'CH₂',
          },
        ],
        from: 66.36,
        to: 66.36,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['DME', 'diethyl ether'],
    smiles: 'CCOCC',
    ranges: [
      {
        signals: [
          {
            delta: 58.03,
            assignment: 'CH₃',
          },
        ],
        from: 58.03,
        to: 58.03,
      },
      {
        signals: [
          {
            delta: 71.17,
            assignment: 'CH₂',
          },
        ],
        from: 71.17,
        to: 71.17,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['ethane'],
    smiles: 'CC',
    ranges: [
      {
        signals: [
          {
            delta: 6.61,
            assignment: 'CH₃',
          },
        ],
        from: 6.61,
        to: 6.61,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['ethanol'],
    smiles: 'CCO',
    ranges: [
      {
        signals: [
          {
            delta: 18.51,
            assignment: 'CH₃',
          },
        ],
        from: 18.51,
        to: 18.51,
      },
      {
        signals: [
          {
            delta: 56.07,
            assignment: 'CH₂',
          },
        ],
        from: 56.07,
        to: 56.07,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['ethyl acetate'],
    smiles: 'CC(=O)CC',
    ranges: [
      {
        signals: [
          {
            delta: 20.68,
            assignment: 'CH₃CO',
          },
        ],
        from: 20.68,
        to: 20.68,
      },
      {
        signals: [
          {
            delta: 170.31,
            assignment: 'CO',
          },
        ],
        from: 170.31,
        to: 170.31,
      },
      {
        signals: [
          {
            delta: 59.74,
            assignment: 'CH₂',
          },
        ],
        from: 59.74,
        to: 59.74,
      },
      {
        signals: [
          {
            delta: 14.4,
            assignment: 'CH₃',
          },
        ],
        from: 14.4,
        to: 14.4,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['ethylene'],
    smiles: 'C=C',
    ranges: [
      {
        signals: [
          {
            delta: 123.52,
            assignment: 'CH₂',
          },
        ],
        from: 123.52,
        to: 123.52,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['ethylene glycol'],
    smiles: 'OCCO',
    ranges: [
      {
        signals: [
          {
            delta: 62.76,
            assignment: 'CH₂',
          },
        ],
        from: 62.76,
        to: 62.76,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['H grease'],
    smiles: '',
    ranges: [],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['hexamethylbenzene'],
    smiles: 'CC1=C(C(=C(C(=C1C)C)C)C)C',
    ranges: [
      {
        signals: [
          {
            delta: 131.1,
            assignment: 'C',
          },
        ],
        from: 131.1,
        to: 131.1,
      },
      {
        signals: [
          {
            delta: 16.6,
            assignment: 'CH₃',
          },
        ],
        from: 16.6,
        to: 16.6,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['n-hexane'],
    smiles: 'CCCCCC',
    ranges: [
      {
        signals: [
          {
            delta: 13.88,
            assignment: 'CH₃',
          },
        ],
        from: 13.88,
        to: 13.88,
      },
      {
        signals: [
          {
            delta: 22.05,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 22.05,
        to: 22.05,
      },
      {
        signals: [
          {
            delta: 30.95,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 30.95,
        to: 30.95,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['HMDSO'],
    smiles: 'C[Si](C)(C)O[Si](C)(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 1.96,
            assignment: 'CH₃',
          },
        ],
        from: 1.96,
        to: 1.96,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['HMPA'],
    smiles: 'CN(C)P(=O)(N(C)C)N(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 36.42,
            assignment: 'CH₃',
          },
        ],
        from: 36.42,
        to: 36.42,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['imidazole'],
    smiles: 'C1=CN=CN1',
    ranges: [
      {
        signals: [
          {
            delta: 135.15,
            assignment: 'CH(2)',
          },
        ],
        from: 135.15,
        to: 135.15,
      },
      {
        signals: [
          {
            delta: 121.55,
            assignment: 'CH(4,5)',
          },
        ],
        from: 121.55,
        to: 121.55,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['methane'],
    smiles: 'C',
    ranges: [
      {
        signals: [
          {
            delta: -4.01,
            assignment: 'CH₄',
          },
        ],
        from: -4.01,
        to: -4.01,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['methanol'],
    smiles: 'CO',
    ranges: [
      {
        signals: [
          {
            delta: 48.59,
            assignment: 'CH₃',
          },
        ],
        from: 48.59,
        to: 48.59,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['nitromethane'],
    smiles: 'C[N+](=O)[O-]',
    ranges: [
      {
        signals: [
          {
            delta: 63.28,
            assignment: 'CH₃',
          },
        ],
        from: 63.28,
        to: 63.28,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['n-pentane'],
    smiles: 'CCCCC',
    ranges: [
      {
        signals: [
          {
            delta: 13.28,
            assignment: 'CH₃',
          },
        ],
        from: 13.28,
        to: 13.28,
      },
      {
        signals: [
          {
            delta: 21.7,
            assignment: 'CH₂(2,4)',
          },
        ],
        from: 21.7,
        to: 21.7,
      },
      {
        signals: [
          {
            delta: 33.48,
            assignment: 'CH₂(3)',
          },
        ],
        from: 33.48,
        to: 33.48,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['propane'],
    smiles: 'CCC',
    ranges: [
      {
        signals: [
          {
            delta: 16.34,
            assignment: 'CH₃',
          },
        ],
        from: 16.34,
        to: 16.34,
      },
      {
        signals: [
          {
            delta: 15.67,
            assignment: 'CH₂',
          },
        ],
        from: 15.67,
        to: 15.67,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['2-propanol'],
    smiles: 'CC(O)C',
    ranges: [
      {
        signals: [
          {
            delta: 25.43,
            assignment: 'CH₃',
          },
        ],
        from: 25.43,
        to: 25.43,
      },
      {
        signals: [
          {
            delta: 64.92,
            assignment: 'CH',
          },
        ],
        from: 64.92,
        to: 64.92,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['propylene'],
    smiles: 'CC=C',
    ranges: [
      {
        signals: [
          {
            delta: 19.2,
            assignment: 'CH₃',
          },
        ],
        from: 19.2,
        to: 19.2,
      },
      {
        signals: [
          {
            delta: 116.07,
            assignment: 'CH₂',
          },
        ],
        from: 116.07,
        to: 116.07,
      },
      {
        signals: [
          {
            delta: 133.55,
            assignment: 'CH',
          },
        ],
        from: 133.55,
        to: 133.55,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['pyridine'],
    smiles: 'C1=CC=NC=C1',
    ranges: [
      {
        signals: [
          {
            delta: 149.58,
            assignment: 'CH(2,6)',
          },
        ],
        from: 149.58,
        to: 149.58,
      },
      {
        signals: [
          {
            delta: 123.84,
            assignment: 'CH(3,5)',
          },
        ],
        from: 123.84,
        to: 123.84,
      },
      {
        signals: [
          {
            delta: 136.05,
            assignment: 'CH(4)',
          },
        ],
        from: 136.05,
        to: 136.05,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['pyrrole'],
    smiles: 'C1=CNC=C1',
    ranges: [
      {
        signals: [
          {
            delta: 117.32,
            assignment: 'CH(2,5)',
          },
        ],
        from: 117.32,
        to: 117.32,
      },
      {
        signals: [
          {
            delta: 107.07,
            assignment: 'CH(3,4)',
          },
        ],
        from: 107.07,
        to: 107.07,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['pyrrolidine'],
    smiles: 'C1CCNC1',
    ranges: [
      {
        signals: [
          {
            delta: 46.51,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 46.51,
        to: 46.51,
      },
      {
        signals: [
          {
            delta: 25.26,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 25.26,
        to: 25.26,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['silicone grease'],
    smiles: '',
    ranges: [],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['tetrahydrofuran'],
    smiles: 'C1COCC1',
    ranges: [
      {
        signals: [
          {
            delta: 67.03,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 67.03,
        to: 67.03,
      },
      {
        signals: [
          {
            delta: 25.14,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 25.14,
        to: 25.14,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['toluene'],
    smiles: 'Cc1ccccc1',
    ranges: [
      {
        signals: [
          {
            delta: 20.99,
            assignment: 'CH₃',
          },
        ],
        from: 20.99,
        to: 20.99,
      },
      {
        signals: [
          {
            delta: 137.35,
            assignment: 'C(1)',
          },
        ],
        from: 137.35,
        to: 137.35,
      },
      {
        signals: [
          {
            delta: 128.88,
            assignment: 'CH(2,6)',
          },
        ],
        from: 128.88,
        to: 128.88,
      },
      {
        signals: [
          {
            delta: 128.18,
            assignment: 'CH(3,5)',
          },
        ],
        from: 128.18,
        to: 128.18,
      },
      {
        signals: [
          {
            delta: 125.29,
            assignment: 'CH(4)',
          },
        ],
        from: 125.29,
        to: 125.29,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['triethylamine'],
    smiles: 'CCN(CC)CC',
    ranges: [
      {
        signals: [
          {
            delta: 11.74,
            assignment: 'CH₃',
          },
        ],
        from: 11.74,
        to: 11.74,
      },
      {
        signals: [
          {
            delta: 45.74,
            assignment: 'CH₂',
          },
        ],
        from: 45.74,
        to: 45.74,
      },
    ],
    nucleus: '13C',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['acetic acid'],
    smiles: 'CC(=O)O',
    ranges: [
      {
        signals: [
          {
            delta: 173.21,
            assignment: 'CO',
          },
        ],
        from: 173.21,
        to: 173.21,
      },
      {
        signals: [
          {
            delta: 20.73,
            assignment: 'CH₃',
          },
        ],
        from: 20.73,
        to: 20.73,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['acetone'],
    smiles: 'CC(=O)C',
    ranges: [
      {
        signals: [
          {
            delta: 207.43,
            assignment: 'CO',
          },
        ],
        from: 207.43,
        to: 207.43,
      },
      {
        signals: [
          {
            delta: 30.91,
            assignment: 'CH₃',
          },
        ],
        from: 30.91,
        to: 30.91,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['acetonitrile'],
    smiles: 'CC#N',
    ranges: [
      {
        signals: [
          {
            delta: 118.26,
            assignment: 'CN',
          },
        ],
        from: 118.26,
        to: 118.26,
      },
      {
        signals: [
          {
            delta: 1.79,
            assignment: 'CH₃',
          },
        ],
        from: 1.79,
        to: 1.79,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['benzene'],
    smiles: 'c1ccccc1',
    ranges: [
      {
        signals: [
          {
            delta: 129.32,
            assignment: 'CH',
          },
        ],
        from: 129.32,
        to: 129.32,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['tert -butyl alcohol'],
    smiles: 'CC(C)(C)O',
    ranges: [
      {
        signals: [
          {
            delta: 68.74,
            assignment: '(CH₃)₃C',
          },
        ],
        from: 68.74,
        to: 68.74,
      },
      {
        signals: [
          {
            delta: 30.68,
            assignment: '(CH₃)₃C',
          },
        ],
        from: 30.68,
        to: 30.68,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['carbon dioxide'],
    smiles: 'O=C=O',
    ranges: [
      {
        signals: [
          {
            delta: 125.89,
            assignment: 'CO₂',
          },
        ],
        from: 125.89,
        to: 125.89,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['carbon disulfide'],
    smiles: 'S=C=S',
    ranges: [
      {
        signals: [
          {
            delta: 193.6,
            assignment: 'CS₂',
          },
        ],
        from: 193.6,
        to: 193.6,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['carbon tetrachloride'],
    smiles: 'ClC(Cl)(Cl)Cl',
    ranges: [
      {
        signals: [
          {
            delta: 96.68,
            assignment: 'CCl₄',
          },
        ],
        from: 96.68,
        to: 96.68,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['chloroform'],
    smiles: 'ClC(Cl)Cl',
    ranges: [
      {
        signals: [
          {
            delta: 79.17,
            assignment: 'CH',
          },
        ],
        from: 79.17,
        to: 79.17,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['18-crown-6'],
    smiles: 'C1COCCOCCOCCOCCOCCO1',
    ranges: [
      {
        signals: [
          {
            delta: 71.22,
            assignment: 'CH₂',
          },
        ],
        from: 71.22,
        to: 71.22,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['cyclohexane'],
    smiles: 'C1CCCCC1',
    ranges: [
      {
        signals: [
          {
            delta: 27.63,
            assignment: 'CH₂',
          },
        ],
        from: 27.63,
        to: 27.63,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['1,2-dichloroethane'],
    smiles: 'ClCCCl',
    ranges: [
      {
        signals: [
          {
            delta: 45.54,
            assignment: 'CH₂',
          },
        ],
        from: 45.54,
        to: 45.54,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['dichloromethane'],
    smiles: 'ClCCl',
    ranges: [
      {
        signals: [
          {
            delta: 55.32,
            assignment: 'CH₂',
          },
        ],
        from: 55.32,
        to: 55.32,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['diethyl ether'],
    smiles: 'CCOCC',
    ranges: [
      {
        signals: [
          {
            delta: 15.63,
            assignment: 'CH₃',
          },
        ],
        from: 15.63,
        to: 15.63,
      },
      {
        signals: [
          {
            delta: 66.32,
            assignment: 'CH₂',
          },
        ],
        from: 66.32,
        to: 66.32,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['diglyme'],
    smiles: 'COCCOCCOC',
    ranges: [
      {
        signals: [
          {
            delta: 58.9,
            assignment: 'CH₃',
          },
        ],
        from: 58.9,
        to: 58.9,
      },
      {
        signals: [
          {
            delta: 70.99,
            assignment: 'CH₂',
          },
        ],
        from: 70.99,
        to: 70.99,
      },
      {
        signals: [
          {
            delta: 72.63,
            assignment: 'CH₂',
          },
        ],
        from: 72.63,
        to: 72.63,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['dimethylformamide'],
    smiles: 'C(=O)N(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 163.31,
            assignment: 'CH',
          },
        ],
        from: 163.31,
        to: 163.31,
      },
      {
        signals: [
          {
            delta: 36.57,
            assignment: 'CH₃',
          },
        ],
        from: 36.57,
        to: 36.57,
      },
      {
        signals: [
          {
            delta: 31.32,
            assignment: 'CH₃',
          },
        ],
        from: 31.32,
        to: 31.32,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['1,4-dioxane'],
    smiles: 'C1COCCOC1',
    ranges: [
      {
        signals: [
          {
            delta: 67.72,
            assignment: 'CH₂',
          },
        ],
        from: 67.72,
        to: 67.72,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['DME', 'diethyl ether'],
    smiles: 'CCOCC',
    ranges: [
      {
        signals: [
          {
            delta: 58.89,
            assignment: 'CH₃',
          },
        ],
        from: 58.89,
        to: 58.89,
      },
      {
        signals: [
          {
            delta: 72.47,
            assignment: 'CH₂',
          },
        ],
        from: 72.47,
        to: 72.47,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['ethane'],
    smiles: 'CC',
    ranges: [
      {
        signals: [
          {
            delta: 6.99,
            assignment: 'CH₃',
          },
        ],
        from: 6.99,
        to: 6.99,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['ethanol'],
    smiles: 'CCO',
    ranges: [
      {
        signals: [
          {
            delta: 18.8,
            assignment: 'CH₃',
          },
        ],
        from: 18.8,
        to: 18.8,
      },
      {
        signals: [
          {
            delta: 57.96,
            assignment: 'CH₂',
          },
        ],
        from: 57.96,
        to: 57.96,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['ethyl acetate'],
    smiles: 'CC(=O)CC',
    ranges: [
      {
        signals: [
          {
            delta: 21.16,
            assignment: 'CH₃CO',
          },
        ],
        from: 21.16,
        to: 21.16,
      },
      {
        signals: [
          {
            delta: 171.68,
            assignment: 'CO',
          },
        ],
        from: 171.68,
        to: 171.68,
      },
      {
        signals: [
          {
            delta: 60.98,
            assignment: 'CH₂',
          },
        ],
        from: 60.98,
        to: 60.98,
      },
      {
        signals: [
          {
            delta: 14.54,
            assignment: 'CH₃',
          },
        ],
        from: 14.54,
        to: 14.54,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['ethylene'],
    smiles: 'C=C',
    ranges: [
      {
        signals: [
          {
            delta: 123.69,
            assignment: 'CH₂',
          },
        ],
        from: 123.69,
        to: 123.69,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['ethylene glycol'],
    smiles: 'OCCO',
    ranges: [
      {
        signals: [
          {
            delta: 64.22,
            assignment: 'CH₂',
          },
        ],
        from: 64.22,
        to: 64.22,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['H grease'],
    smiles: '',
    ranges: [],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['hexamethylbenzene'],
    smiles: 'CC1=C(C(=C(C(=C1C)C)C)C)C',
    ranges: [
      {
        signals: [
          {
            delta: 132.61,
            assignment: 'C',
          },
        ],
        from: 132.61,
        to: 132.61,
      },
      {
        signals: [
          {
            delta: 16.94,
            assignment: 'CH₃',
          },
        ],
        from: 16.94,
        to: 16.94,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['n-hexane'],
    smiles: 'CCCCCC',
    ranges: [
      {
        signals: [
          {
            delta: 14.43,
            assignment: 'CH₃',
          },
        ],
        from: 14.43,
        to: 14.43,
      },
      {
        signals: [
          {
            delta: 23.4,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 23.4,
        to: 23.4,
      },
      {
        signals: [
          {
            delta: 32.36,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 32.36,
        to: 32.36,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['HMDSO'],
    smiles: 'C[Si](C)(C)O[Si](C)(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 2.07,
            assignment: 'CH₃',
          },
        ],
        from: 2.07,
        to: 2.07,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['HMPA'],
    smiles: 'CN(C)P(=O)(N(C)C)N(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 37.1,
            assignment: 'CH₃',
          },
        ],
        from: 37.1,
        to: 37.1,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['imidazole'],
    smiles: 'C1=CN=CN1',
    ranges: [
      {
        signals: [
          {
            delta: 136.33,
            assignment: 'CH(2)',
          },
        ],
        from: 136.33,
        to: 136.33,
      },
      {
        signals: [
          {
            delta: 122.78,
            assignment: 'CH(4,5)',
          },
        ],
        from: 122.78,
        to: 122.78,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['methane'],
    smiles: 'C',
    ranges: [
      {
        signals: [
          {
            delta: -4.61,
            assignment: 'CH₄',
          },
        ],
        from: -4.61,
        to: -4.61,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['methanol'],
    smiles: 'CO',
    ranges: [
      {
        signals: [
          {
            delta: 49.9,
            assignment: 'CH₃',
          },
        ],
        from: 49.9,
        to: 49.9,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['nitromethane'],
    smiles: 'C[N+](=O)[O-]',
    ranges: [
      {
        signals: [
          {
            delta: 63.66,
            assignment: 'CH₃',
          },
        ],
        from: 63.66,
        to: 63.66,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['n-pentane'],
    smiles: 'CCCCC',
    ranges: [
      {
        signals: [
          {
            delta: 14.37,
            assignment: 'CH₃',
          },
        ],
        from: 14.37,
        to: 14.37,
      },
      {
        signals: [
          {
            delta: 23.08,
            assignment: 'CH₂(2,4)',
          },
        ],
        from: 23.08,
        to: 23.08,
      },
      {
        signals: [
          {
            delta: 34.89,
            assignment: 'CH₂(3)',
          },
        ],
        from: 34.89,
        to: 34.89,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['propane'],
    smiles: 'CCC',
    ranges: [
      {
        signals: [
          {
            delta: 16.73,
            assignment: 'CH₃',
          },
        ],
        from: 16.73,
        to: 16.73,
      },
      {
        signals: [
          {
            delta: 16.91,
            assignment: 'CH₂',
          },
        ],
        from: 16.91,
        to: 16.91,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['2-propanol'],
    smiles: 'CC(O)C',
    ranges: [
      {
        signals: [
          {
            delta: 25.55,
            assignment: 'CH₃',
          },
        ],
        from: 25.55,
        to: 25.55,
      },
      {
        signals: [
          {
            delta: 64.3,
            assignment: 'CH',
          },
        ],
        from: 64.3,
        to: 64.3,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['propylene'],
    smiles: 'CC=C',
    ranges: [
      {
        signals: [
          {
            delta: 19.48,
            assignment: 'CH₃',
          },
        ],
        from: 19.48,
        to: 19.48,
      },
      {
        signals: [
          {
            delta: 116.12,
            assignment: 'CH₂',
          },
        ],
        from: 116.12,
        to: 116.12,
      },
      {
        signals: [
          {
            delta: 134.78,
            assignment: 'CH',
          },
        ],
        from: 134.78,
        to: 134.78,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['pyridine'],
    smiles: 'C1=CC=NC=C1',
    ranges: [
      {
        signals: [
          {
            delta: 150.76,
            assignment: 'CH(2,6)',
          },
        ],
        from: 150.76,
        to: 150.76,
      },
      {
        signals: [
          {
            delta: 127.76,
            assignment: 'CH(3,5)',
          },
        ],
        from: 127.76,
        to: 127.76,
      },
      {
        signals: [
          {
            delta: 136.89,
            assignment: 'CH(4)',
          },
        ],
        from: 136.89,
        to: 136.89,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['pyrrole'],
    smiles: 'C1=CNC=C1',
    ranges: [
      {
        signals: [
          {
            delta: 118.47,
            assignment: 'CH(2,5)',
          },
        ],
        from: 118.47,
        to: 118.47,
      },
      {
        signals: [
          {
            delta: 108.31,
            assignment: 'CH(3,4)',
          },
        ],
        from: 108.31,
        to: 108.31,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['pyrrolidine'],
    smiles: 'C1CCNC1',
    ranges: [
      {
        signals: [
          {
            delta: 47.57,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 47.57,
        to: 47.57,
      },
      {
        signals: [
          {
            delta: 26.34,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 26.34,
        to: 26.34,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['silicone grease'],
    smiles: '',
    ranges: [],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['tetrahydrofuran'],
    smiles: 'C1COCC1',
    ranges: [
      {
        signals: [
          {
            delta: 68.33,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 68.33,
        to: 68.33,
      },
      {
        signals: [
          {
            delta: 26.27,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 26.27,
        to: 26.27,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['toluene'],
    smiles: 'Cc1ccccc1',
    ranges: [
      {
        signals: [
          {
            delta: 21.5,
            assignment: 'CH₃',
          },
        ],
        from: 21.5,
        to: 21.5,
      },
      {
        signals: [
          {
            delta: 138.9,
            assignment: 'C(1)',
          },
        ],
        from: 138.9,
        to: 138.9,
      },
      {
        signals: [
          {
            delta: 129.94,
            assignment: 'CH(2,6)',
          },
        ],
        from: 129.94,
        to: 129.94,
      },
      {
        signals: [
          {
            delta: 129.23,
            assignment: 'CH(3,5)',
          },
        ],
        from: 129.23,
        to: 129.23,
      },
      {
        signals: [
          {
            delta: 126.28,
            assignment: 'CH(4)',
          },
        ],
        from: 126.28,
        to: 126.28,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['triethylamine'],
    smiles: 'CCN(CC)CC',
    ranges: [
      {
        signals: [
          {
            delta: 12.38,
            assignment: 'CH₃',
          },
        ],
        from: 12.38,
        to: 12.38,
      },
      {
        signals: [
          {
            delta: 47.1,
            assignment: 'CH₂',
          },
        ],
        from: 47.1,
        to: 47.1,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃CN',
  },
  {
    names: ['acetic acid'],
    smiles: 'CC(=O)O',
    ranges: [
      {
        signals: [
          {
            delta: 177.96,
            assignment: 'CO',
          },
        ],
        from: 177.96,
        to: 177.96,
      },
      {
        signals: [
          {
            delta: 20.91,
            assignment: 'CH₃',
          },
        ],
        from: 20.91,
        to: 20.91,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['acetone'],
    smiles: 'CC(=O)C',
    ranges: [
      {
        signals: [
          {
            delta: 32.35,
            assignment: 'CO',
          },
        ],
        from: 32.35,
        to: 32.35,
      },
      {
        signals: [
          {
            delta: 214.98,
            assignment: 'CH₃',
          },
        ],
        from: 214.98,
        to: 214.98,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['acetonitrile'],
    smiles: 'CC#N',
    ranges: [
      {
        signals: [
          {
            delta: 118.95,
            assignment: 'CN',
          },
        ],
        from: 118.95,
        to: 118.95,
      },
      {
        signals: [
          {
            delta: 1,
            assignment: 'CH₃',
          },
        ],
        from: 1,
        to: 1,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['benzene'],
    smiles: 'c1ccccc1',
    ranges: [
      {
        signals: [
          {
            delta: 129.84,
            assignment: 'CH',
          },
        ],
        from: 129.84,
        to: 129.84,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['tert -butyl alcohol'],
    smiles: 'CC(C)(C)O',
    ranges: [
      {
        signals: [
          {
            delta: 72.35,
            assignment: '(CH₃)₃C',
          },
        ],
        from: 72.35,
        to: 72.35,
      },
      {
        signals: [
          {
            delta: 31.07,
            assignment: '(CH₃)₃C',
          },
        ],
        from: 31.07,
        to: 31.07,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['carbon dioxide'],
    smiles: 'O=C=O',
    ranges: [
      {
        signals: [
          {
            delta: 126.92,
            assignment: 'CO₂',
          },
        ],
        from: 126.92,
        to: 126.92,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['carbon disulfide'],
    smiles: 'S=C=S',
    ranges: [
      {
        signals: [
          {
            delta: 196.26,
            assignment: 'CS₂',
          },
        ],
        from: 196.26,
        to: 196.26,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['carbon tetrachloride'],
    smiles: 'ClC(Cl)(Cl)Cl',
    ranges: [
      {
        signals: [
          {
            delta: 97.74,
            assignment: 'CCl₄',
          },
        ],
        from: 97.74,
        to: 97.74,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['chloroform'],
    smiles: 'ClC(Cl)Cl',
    ranges: [
      {
        signals: [
          {
            delta: 78.83,
            assignment: 'CH',
          },
        ],
        from: 78.83,
        to: 78.83,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['18-crown-6'],
    smiles: 'C1COCCOCCOCCOCCOCCO1',
    ranges: [
      {
        signals: [
          {
            delta: 70.8,
            assignment: 'CH₂',
          },
        ],
        from: 70.8,
        to: 70.8,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['cyclohexane'],
    smiles: 'C1CCCCC1',
    ranges: [
      {
        signals: [
          {
            delta: 28.34,
            assignment: 'CH₂',
          },
        ],
        from: 28.34,
        to: 28.34,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['1,2-dichloroethane'],
    smiles: 'ClCCCl',
    ranges: [
      {
        signals: [
          {
            delta: 45.28,
            assignment: 'CH₂',
          },
        ],
        from: 45.28,
        to: 45.28,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['dichloromethane'],
    smiles: 'ClCCl',
    ranges: [
      {
        signals: [
          {
            delta: 54.46,
            assignment: 'CH₂',
          },
        ],
        from: 54.46,
        to: 54.46,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['diethyl ether'],
    smiles: 'CCOCC',
    ranges: [
      {
        signals: [
          {
            delta: 15.33,
            assignment: 'CH₃',
          },
        ],
        from: 15.33,
        to: 15.33,
      },
      {
        signals: [
          {
            delta: 67.55,
            assignment: 'CH₂',
          },
        ],
        from: 67.55,
        to: 67.55,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['diglyme'],
    smiles: 'COCCOCCOC',
    ranges: [
      {
        signals: [
          {
            delta: 59.4,
            assignment: 'CH₃',
          },
        ],
        from: 59.4,
        to: 59.4,
      },
      {
        signals: [
          {
            delta: 73.05,
            assignment: 'CH₂',
          },
        ],
        from: 73.05,
        to: 73.05,
      },
      {
        signals: [
          {
            delta: 71.33,
            assignment: 'CH₂',
          },
        ],
        from: 71.33,
        to: 71.33,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['dimethylformamide'],
    smiles: 'C(=O)N(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 166.01,
            assignment: 'CH',
          },
        ],
        from: 166.01,
        to: 166.01,
      },
      {
        signals: [
          {
            delta: 37.76,
            assignment: 'CH₃',
          },
        ],
        from: 37.76,
        to: 37.76,
      },
      {
        signals: [
          {
            delta: 30.96,
            assignment: 'CH₃',
          },
        ],
        from: 30.96,
        to: 30.96,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['1,4-dioxane'],
    smiles: 'C1COCCOC1',
    ranges: [
      {
        signals: [
          {
            delta: 68.52,
            assignment: 'CH₂',
          },
        ],
        from: 68.52,
        to: 68.52,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['DME', 'diethyl ether'],
    smiles: 'CCOCC',
    ranges: [
      {
        signals: [
          {
            delta: 59.52,
            assignment: 'CH₃',
          },
        ],
        from: 59.52,
        to: 59.52,
      },
      {
        signals: [
          {
            delta: 72.87,
            assignment: 'CH₂',
          },
        ],
        from: 72.87,
        to: 72.87,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['ethane'],
    smiles: 'CC',
    ranges: [
      {
        signals: [
          {
            delta: 7.01,
            assignment: 'CH₃',
          },
        ],
        from: 7.01,
        to: 7.01,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['ethanol'],
    smiles: 'CCO',
    ranges: [
      {
        signals: [
          {
            delta: 18.11,
            assignment: 'CH₃',
          },
        ],
        from: 18.11,
        to: 18.11,
      },
      {
        signals: [
          {
            delta: 59.68,
            assignment: 'CH₂',
          },
        ],
        from: 59.68,
        to: 59.68,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['ethyl acetate'],
    smiles: 'CC(=O)CC',
    ranges: [
      {
        signals: [
          {
            delta: 21.18,
            assignment: 'CH₃CO',
          },
        ],
        from: 21.18,
        to: 21.18,
      },
      {
        signals: [
          {
            delta: 175.55,
            assignment: 'CO',
          },
        ],
        from: 175.55,
        to: 175.55,
      },
      {
        signals: [
          {
            delta: 62.7,
            assignment: 'CH₂',
          },
        ],
        from: 62.7,
        to: 62.7,
      },
      {
        signals: [
          {
            delta: 14.36,
            assignment: 'CH₃',
          },
        ],
        from: 14.36,
        to: 14.36,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['ethylene'],
    smiles: 'C=C',
    ranges: [
      {
        signals: [
          {
            delta: 124.08,
            assignment: 'CH₂',
          },
        ],
        from: 124.08,
        to: 124.08,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['ethylene glycol'],
    smiles: 'OCCO',
    ranges: [
      {
        signals: [
          {
            delta: 64.87,
            assignment: 'CH₂',
          },
        ],
        from: 64.87,
        to: 64.87,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['H grease'],
    smiles: '',
    ranges: [],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['hexamethylbenzene'],
    smiles: 'CC1=C(C(=C(C(=C1C)C)C)C)C',
    ranges: [
      {
        signals: [
          {
            delta: 134.04,
            assignment: 'C',
          },
        ],
        from: 134.04,
        to: 134.04,
      },
      {
        signals: [
          {
            delta: 17.04,
            assignment: 'CH₃',
          },
        ],
        from: 17.04,
        to: 17.04,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['n-hexane'],
    smiles: 'CCCCCC',
    ranges: [
      {
        signals: [
          {
            delta: 14.63,
            assignment: 'CH₃',
          },
        ],
        from: 14.63,
        to: 14.63,
      },
      {
        signals: [
          {
            delta: 24.06,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 24.06,
        to: 24.06,
      },
      {
        signals: [
          {
            delta: 33.17,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 33.17,
        to: 33.17,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['HMDSO'],
    smiles: 'C[Si](C)(C)O[Si](C)(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 2.09,
            assignment: 'CH₃',
          },
        ],
        from: 2.09,
        to: 2.09,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['HMPA'],
    smiles: 'CN(C)P(=O)(N(C)C)N(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 37.21,
            assignment: 'CH₃',
          },
        ],
        from: 37.21,
        to: 37.21,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['imidazole'],
    smiles: 'C1=CN=CN1',
    ranges: [
      {
        signals: [
          {
            delta: 136.58,
            assignment: 'CH(2)',
          },
        ],
        from: 136.58,
        to: 136.58,
      },
      {
        signals: [
          {
            delta: 122.93,
            assignment: 'CH(4,5)',
          },
        ],
        from: 122.93,
        to: 122.93,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['methane'],
    smiles: 'C',
    ranges: [
      {
        signals: [
          {
            delta: -5.88,
            assignment: 'CH₄',
          },
        ],
        from: -5.88,
        to: -5.88,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['methanol'],
    smiles: 'CO',
    ranges: [
      {
        signals: [
          {
            delta: 50.67,
            assignment: 'CH₃',
          },
        ],
        from: 50.67,
        to: 50.67,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['nitromethane'],
    smiles: 'C[N+](=O)[O-]',
    ranges: [
      {
        signals: [
          {
            delta: 63.17,
            assignment: 'CH₃',
          },
        ],
        from: 63.17,
        to: 63.17,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['n-pentane'],
    smiles: 'CCCCC',
    ranges: [
      {
        signals: [
          {
            delta: 14.54,
            assignment: 'CH₃',
          },
        ],
        from: 14.54,
        to: 14.54,
      },
      {
        signals: [
          {
            delta: 23.75,
            assignment: 'CH₂(2,4)',
          },
        ],
        from: 23.75,
        to: 23.75,
      },
      {
        signals: [
          {
            delta: 35.76,
            assignment: 'CH₂(3)',
          },
        ],
        from: 35.76,
        to: 35.76,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['propane'],
    smiles: 'CCC',
    ranges: [
      {
        signals: [
          {
            delta: 16.93,
            assignment: 'CH₃',
          },
        ],
        from: 16.93,
        to: 16.93,
      },
      {
        signals: [
          {
            delta: 17.46,
            assignment: 'CH₂',
          },
        ],
        from: 17.46,
        to: 17.46,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['2-propanol'],
    smiles: 'CC(O)C',
    ranges: [
      {
        signals: [
          {
            delta: 25.21,
            assignment: 'CH₃',
          },
        ],
        from: 25.21,
        to: 25.21,
      },
      {
        signals: [
          {
            delta: 66.69,
            assignment: 'CH',
          },
        ],
        from: 66.69,
        to: 66.69,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['propylene'],
    smiles: 'CC=C',
    ranges: [
      {
        signals: [
          {
            delta: 19.63,
            assignment: 'CH₃',
          },
        ],
        from: 19.63,
        to: 19.63,
      },
      {
        signals: [
          {
            delta: 116.38,
            assignment: 'CH₂',
          },
        ],
        from: 116.38,
        to: 116.38,
      },
      {
        signals: [
          {
            delta: 136,
            assignment: 'CH',
          },
        ],
        from: 136,
        to: 136,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['pyridine'],
    smiles: 'C1=CC=NC=C1',
    ranges: [
      {
        signals: [
          {
            delta: 149.76,
            assignment: 'CH(2,6)',
          },
        ],
        from: 149.76,
        to: 149.76,
      },
      {
        signals: [
          {
            delta: 126.27,
            assignment: 'CH(3,5)',
          },
        ],
        from: 126.27,
        to: 126.27,
      },
      {
        signals: [
          {
            delta: 139.62,
            assignment: 'CH(4)',
          },
        ],
        from: 139.62,
        to: 139.62,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['pyrrole'],
    smiles: 'C1=CNC=C1',
    ranges: [
      {
        signals: [
          {
            delta: 119.61,
            assignment: 'CH(2,5)',
          },
        ],
        from: 119.61,
        to: 119.61,
      },
      {
        signals: [
          {
            delta: 108.85,
            assignment: 'CH(3,4)',
          },
        ],
        from: 108.85,
        to: 108.85,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['pyrrolidine'],
    smiles: 'C1CCNC1',
    ranges: [
      {
        signals: [
          {
            delta: 47.43,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 47.43,
        to: 47.43,
      },
      {
        signals: [
          {
            delta: 25.73,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 25.73,
        to: 25.73,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['silicone grease'],
    smiles: '',
    ranges: [
      {
        signals: [
          {
            delta: 2.87,
            assignment: 'CH₃',
          },
        ],
        from: 2.87,
        to: 2.87,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['tetrahydrofuran'],
    smiles: 'C1COCC1',
    ranges: [
      {
        signals: [
          {
            delta: 69.53,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 69.53,
        to: 69.53,
      },
      {
        signals: [
          {
            delta: 26.69,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 26.69,
        to: 26.69,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['toluene'],
    smiles: 'Cc1ccccc1',
    ranges: [
      {
        signals: [
          {
            delta: 21.62,
            assignment: 'CH₃',
          },
        ],
        from: 21.62,
        to: 21.62,
      },
      {
        signals: [
          {
            delta: 139.92,
            assignment: 'C(1)',
          },
        ],
        from: 139.92,
        to: 139.92,
      },
      {
        signals: [
          {
            delta: 130.58,
            assignment: 'CH(2,6)',
          },
        ],
        from: 130.58,
        to: 130.58,
      },
      {
        signals: [
          {
            delta: 129.79,
            assignment: 'CH(3,5)',
          },
        ],
        from: 129.79,
        to: 129.79,
      },
      {
        signals: [
          {
            delta: 126.82,
            assignment: 'CH(4)',
          },
        ],
        from: 126.82,
        to: 126.82,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['triethylamine'],
    smiles: 'CCN(CC)CC',
    ranges: [
      {
        signals: [
          {
            delta: 9.51,
            assignment: 'CH₃',
          },
        ],
        from: 9.51,
        to: 9.51,
      },
      {
        signals: [
          {
            delta: 48.45,
            assignment: 'CH₂',
          },
        ],
        from: 48.45,
        to: 48.45,
      },
    ],
    nucleus: '13C',
    solvent: 'TFE-d₃',
  },
  {
    names: ['acetic acid'],
    smiles: 'CC(=O)O',
    ranges: [
      {
        signals: [
          {
            delta: 175.11,
            assignment: 'CO',
          },
        ],
        from: 175.11,
        to: 175.11,
      },
      {
        signals: [
          {
            delta: 20.56,
            assignment: 'CH₃',
          },
        ],
        from: 20.56,
        to: 20.56,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['acetone'],
    smiles: 'CC(=O)C',
    ranges: [
      {
        signals: [
          {
            delta: 209.67,
            assignment: 'CO',
          },
        ],
        from: 209.67,
        to: 209.67,
      },
      {
        signals: [
          {
            delta: 30.67,
            assignment: 'CH₃',
          },
        ],
        from: 30.67,
        to: 30.67,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['acetonitrile'],
    smiles: 'CC#N',
    ranges: [
      {
        signals: [
          {
            delta: 118.06,
            assignment: 'CN',
          },
        ],
        from: 118.06,
        to: 118.06,
      },
      {
        signals: [
          {
            delta: 0.85,
            assignment: 'CH₃',
          },
        ],
        from: 0.85,
        to: 0.85,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['benzene'],
    smiles: 'c1ccccc1',
    ranges: [
      {
        signals: [
          {
            delta: 129.34,
            assignment: 'CH',
          },
        ],
        from: 129.34,
        to: 129.34,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['tert -butyl alcohol'],
    smiles: 'CC(C)(C)O',
    ranges: [
      {
        signals: [
          {
            delta: 69.4,
            assignment: '(CH₃)₃C',
          },
        ],
        from: 69.4,
        to: 69.4,
      },
      {
        signals: [
          {
            delta: 30.91,
            assignment: '(CH₃)₃C',
          },
        ],
        from: 30.91,
        to: 30.91,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['carbon dioxide'],
    smiles: 'O=C=O',
    ranges: [
      {
        signals: [
          {
            delta: 126.31,
            assignment: 'CO₂',
          },
        ],
        from: 126.31,
        to: 126.31,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['carbon disulfide'],
    smiles: 'S=C=S',
    ranges: [
      {
        signals: [
          {
            delta: 193.82,
            assignment: 'CS₂',
          },
        ],
        from: 193.82,
        to: 193.82,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['carbon tetrachloride'],
    smiles: 'ClC(Cl)(Cl)Cl',
    ranges: [
      {
        signals: [
          {
            delta: 97.21,
            assignment: 'CCl₄',
          },
        ],
        from: 97.21,
        to: 97.21,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['chloroform'],
    smiles: 'ClC(Cl)Cl',
    ranges: [
      {
        signals: [
          {
            delta: 79.44,
            assignment: 'CH',
          },
        ],
        from: 79.44,
        to: 79.44,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['18-crown-6'],
    smiles: 'C1COCCOCCOCCOCCOCCO1',
    ranges: [
      {
        signals: [
          {
            delta: 71.47,
            assignment: 'CH₂',
          },
        ],
        from: 71.47,
        to: 71.47,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['cyclohexane'],
    smiles: 'C1CCCCC1',
    ranges: [
      {
        signals: [
          {
            delta: 27.96,
            assignment: 'CH₂',
          },
        ],
        from: 27.96,
        to: 27.96,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['1,2-dichloroethane'],
    smiles: 'ClCCCl',
    ranges: [
      {
        signals: [
          {
            delta: 45.11,
            assignment: 'CH₂',
          },
        ],
        from: 45.11,
        to: 45.11,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['dichloromethane'],
    smiles: 'ClCCl',
    ranges: [
      {
        signals: [
          {
            delta: 54.78,
            assignment: 'CH₂',
          },
        ],
        from: 54.78,
        to: 54.78,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['diethyl ether'],
    smiles: 'CCOCC',
    ranges: [
      {
        signals: [
          {
            delta: 15.46,
            assignment: 'CH₃',
          },
        ],
        from: 15.46,
        to: 15.46,
      },
      {
        signals: [
          {
            delta: 66.88,
            assignment: 'CH₂',
          },
        ],
        from: 66.88,
        to: 66.88,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['diglyme'],
    smiles: 'COCCOCCOC',
    ranges: [
      {
        signals: [
          {
            delta: 59.06,
            assignment: 'CH₃',
          },
        ],
        from: 59.06,
        to: 59.06,
      },
      {
        signals: [
          {
            delta: 71.33,
            assignment: 'CH₂',
          },
        ],
        from: 71.33,
        to: 71.33,
      },
      {
        signals: [
          {
            delta: 72.92,
            assignment: 'CH₂',
          },
        ],
        from: 72.92,
        to: 72.92,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['dimethylformamide'],
    smiles: 'C(=O)N(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 164.73,
            assignment: 'CH',
          },
        ],
        from: 164.73,
        to: 164.73,
      },
      {
        signals: [
          {
            delta: 36.89,
            assignment: 'CH₃',
          },
        ],
        from: 36.89,
        to: 36.89,
      },
      {
        signals: [
          {
            delta: 31.61,
            assignment: 'CH₃',
          },
        ],
        from: 31.61,
        to: 31.61,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['1,4-dioxane'],
    smiles: 'C1COCCOC1',
    ranges: [
      {
        signals: [
          {
            delta: 68.11,
            assignment: 'CH₂',
          },
        ],
        from: 68.11,
        to: 68.11,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['DME', 'diethyl ether'],
    smiles: 'CCOCC',
    ranges: [
      {
        signals: [
          {
            delta: 59.06,
            assignment: 'CH₃',
          },
        ],
        from: 59.06,
        to: 59.06,
      },
      {
        signals: [
          {
            delta: 72.72,
            assignment: 'CH₂',
          },
        ],
        from: 72.72,
        to: 72.72,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['ethane'],
    smiles: 'CC',
    ranges: [
      {
        signals: [
          {
            delta: 6.98,
            assignment: 'CH₃',
          },
        ],
        from: 6.98,
        to: 6.98,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['ethanol'],
    smiles: 'CCO',
    ranges: [
      {
        signals: [
          {
            delta: 18.4,
            assignment: 'CH₃',
          },
        ],
        from: 18.4,
        to: 18.4,
      },
      {
        signals: [
          {
            delta: 58.26,
            assignment: 'CH₂',
          },
        ],
        from: 58.26,
        to: 58.26,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['ethyl acetate'],
    smiles: 'CC(=O)CC',
    ranges: [
      {
        signals: [
          {
            delta: 20.88,
            assignment: 'CH₃CO',
          },
        ],
        from: 20.88,
        to: 20.88,
      },
      {
        signals: [
          {
            delta: 172.89,
            assignment: 'CO',
          },
        ],
        from: 172.89,
        to: 172.89,
      },
      {
        signals: [
          {
            delta: 61.5,
            assignment: 'CH₂',
          },
        ],
        from: 61.5,
        to: 61.5,
      },
      {
        signals: [
          {
            delta: 14.49,
            assignment: 'CH₃',
          },
        ],
        from: 14.49,
        to: 14.49,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['ethylene'],
    smiles: 'C=C',
    ranges: [
      {
        signals: [
          {
            delta: 123.46,
            assignment: 'CH₂',
          },
        ],
        from: 123.46,
        to: 123.46,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['ethylene glycol'],
    smiles: 'OCCO',
    ranges: [
      {
        signals: [
          {
            delta: 64.3,
            assignment: 'CH₂',
          },
        ],
        from: 64.3,
        to: 64.3,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['H grease'],
    smiles: '',
    ranges: [],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['hexamethylbenzene'],
    smiles: 'CC1=C(C(=C(C(=C1C)C)C)C)C',
    ranges: [
      {
        signals: [
          {
            delta: 132.53,
            assignment: 'C',
          },
        ],
        from: 132.53,
        to: 132.53,
      },
      {
        signals: [
          {
            delta: 16.9,
            assignment: 'CH₃',
          },
        ],
        from: 16.9,
        to: 16.9,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['n-hexane'],
    smiles: 'CCCCCC',
    ranges: [
      {
        signals: [
          {
            delta: 14.45,
            assignment: 'CH₃',
          },
        ],
        from: 14.45,
        to: 14.45,
      },
      {
        signals: [
          {
            delta: 23.68,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 23.68,
        to: 23.68,
      },
      {
        signals: [
          {
            delta: 32.73,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 32.73,
        to: 32.73,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['HMDSO'],
    smiles: 'C[Si](C)(C)O[Si](C)(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 1.99,
            assignment: 'CH₃',
          },
        ],
        from: 1.99,
        to: 1.99,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['HMPA'],
    smiles: 'CN(C)P(=O)(N(C)C)N(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 37,
            assignment: 'CH₃',
          },
        ],
        from: 37,
        to: 37,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['imidazole'],
    smiles: 'C1=CN=CN1',
    ranges: [
      {
        signals: [
          {
            delta: 136.31,
            assignment: 'CH(2)',
          },
        ],
        from: 136.31,
        to: 136.31,
      },
      {
        signals: [
          {
            delta: 122.6,
            assignment: 'CH(4,5)',
          },
        ],
        from: 122.6,
        to: 122.6,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['methane'],
    smiles: 'C',
    ranges: [
      {
        signals: [
          {
            delta: -4.9,
            assignment: 'CH₄',
          },
        ],
        from: -4.9,
        to: -4.9,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['methanol'],
    smiles: 'CO',
    ranges: [
      {
        signals: [
          {
            delta: 49.86,
            assignment: 'CH₃',
          },
        ],
        from: 49.86,
        to: 49.86,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['nitromethane'],
    smiles: 'C[N+](=O)[O-]',
    ranges: [
      {
        signals: [
          {
            delta: 63.08,
            assignment: 'CH₃',
          },
        ],
        from: 63.08,
        to: 63.08,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['n-pentane'],
    smiles: 'CCCCC',
    ranges: [
      {
        signals: [
          {
            delta: 14.39,
            assignment: 'CH₃',
          },
        ],
        from: 14.39,
        to: 14.39,
      },
      {
        signals: [
          {
            delta: 23.38,
            assignment: 'CH₂(2,4)',
          },
        ],
        from: 23.38,
        to: 23.38,
      },
      {
        signals: [
          {
            delta: 35.3,
            assignment: 'CH₂(3)',
          },
        ],
        from: 35.3,
        to: 35.3,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['propane'],
    smiles: 'CCC',
    ranges: [
      {
        signals: [
          {
            delta: 16.8,
            assignment: 'CH₃',
          },
        ],
        from: 16.8,
        to: 16.8,
      },
      {
        signals: [
          {
            delta: 17.19,
            assignment: 'CH₂',
          },
        ],
        from: 17.19,
        to: 17.19,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['2-propanol'],
    smiles: 'CC(O)C',
    ranges: [
      {
        signals: [
          {
            delta: 25.27,
            assignment: 'CH₃',
          },
        ],
        from: 25.27,
        to: 25.27,
      },
      {
        signals: [
          {
            delta: 64.71,
            assignment: 'CH',
          },
        ],
        from: 64.71,
        to: 64.71,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['propylene'],
    smiles: 'CC=C',
    ranges: [
      {
        signals: [
          {
            delta: 19.5,
            assignment: 'CH₃',
          },
        ],
        from: 19.5,
        to: 19.5,
      },
      {
        signals: [
          {
            delta: 116.04,
            assignment: 'CH₂',
          },
        ],
        from: 116.04,
        to: 116.04,
      },
      {
        signals: [
          {
            delta: 134.61,
            assignment: 'CH',
          },
        ],
        from: 134.61,
        to: 134.61,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['pyridine'],
    smiles: 'C1=CC=NC=C1',
    ranges: [
      {
        signals: [
          {
            delta: 150.07,
            assignment: 'CH(2,6)',
          },
        ],
        from: 150.07,
        to: 150.07,
      },
      {
        signals: [
          {
            delta: 125.53,
            assignment: 'CH(3,5)',
          },
        ],
        from: 125.53,
        to: 125.53,
      },
      {
        signals: [
          {
            delta: 138.35,
            assignment: 'CH(4)',
          },
        ],
        from: 138.35,
        to: 138.35,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['pyrrole'],
    smiles: 'C1=CNC=C1',
    ranges: [
      {
        signals: [
          {
            delta: 118.28,
            assignment: 'CH(2,5)',
          },
        ],
        from: 118.28,
        to: 118.28,
      },
      {
        signals: [
          {
            delta: 108.11,
            assignment: 'CH(3,4)',
          },
        ],
        from: 108.11,
        to: 108.11,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['pyrrolidine'],
    smiles: 'C1CCNC1',
    ranges: [
      {
        signals: [
          {
            delta: 47.23,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 47.23,
        to: 47.23,
      },
      {
        signals: [
          {
            delta: 26.29,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 26.29,
        to: 26.29,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['silicone grease'],
    smiles: '',
    ranges: [
      {
        signals: [
          {
            delta: 2.1,
            assignment: 'CH₃',
          },
        ],
        from: 2.1,
        to: 2.1,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['tetrahydrofuran'],
    smiles: 'C1COCC1',
    ranges: [
      {
        signals: [
          {
            delta: 68.83,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 68.83,
        to: 68.83,
      },
      {
        signals: [
          {
            delta: 26.48,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 26.48,
        to: 26.48,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['toluene'],
    smiles: 'Cc1ccccc1',
    ranges: [
      {
        signals: [
          {
            delta: 21.5,
            assignment: 'CH₃',
          },
        ],
        from: 21.5,
        to: 21.5,
      },
      {
        signals: [
          {
            delta: 138.85,
            assignment: 'C(1)',
          },
        ],
        from: 138.85,
        to: 138.85,
      },
      {
        signals: [
          {
            delta: 129.91,
            assignment: 'CH(2,6)',
          },
        ],
        from: 129.91,
        to: 129.91,
      },
      {
        signals: [
          {
            delta: 129.2,
            assignment: 'CH(3,5)',
          },
        ],
        from: 129.2,
        to: 129.2,
      },
      {
        signals: [
          {
            delta: 126.29,
            assignment: 'CH(4)',
          },
        ],
        from: 126.29,
        to: 126.29,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['triethylamine'],
    smiles: 'CCN(CC)CC',
    ranges: [
      {
        signals: [
          {
            delta: 11.09,
            assignment: 'CH₃',
          },
        ],
        from: 11.09,
        to: 11.09,
      },
      {
        signals: [
          {
            delta: 46.96,
            assignment: 'CH₂',
          },
        ],
        from: 46.96,
        to: 46.96,
      },
    ],
    nucleus: '13C',
    solvent: 'CD₃OD',
  },
  {
    names: ['acetic acid'],
    smiles: 'CC(=O)O',
    ranges: [
      {
        signals: [
          {
            delta: 177.21,
            assignment: 'CO',
          },
        ],
        from: 177.21,
        to: 177.21,
      },
      {
        signals: [
          {
            delta: 21.03,
            assignment: 'CH₃',
          },
        ],
        from: 21.03,
        to: 21.03,
      },
    ],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['acetone'],
    smiles: 'CC(=O)C',
    ranges: [
      {
        signals: [
          {
            delta: 215.94,
            assignment: 'CO',
          },
        ],
        from: 215.94,
        to: 215.94,
      },
      {
        signals: [
          {
            delta: 30.89,
            assignment: 'CH₃',
          },
        ],
        from: 30.89,
        to: 30.89,
      },
    ],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['acetonitrile'],
    smiles: 'CC#N',
    ranges: [
      {
        signals: [
          {
            delta: 119.68,
            assignment: 'CN',
          },
        ],
        from: 119.68,
        to: 119.68,
      },
      {
        signals: [
          {
            delta: 1.47,
            assignment: 'CH₃',
          },
        ],
        from: 1.47,
        to: 1.47,
      },
    ],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['benzene'],
    smiles: 'c1ccccc1',
    ranges: [],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['tert -butyl alcohol'],
    smiles: 'CC(C)(C)O',
    ranges: [
      {
        signals: [
          {
            delta: 70.36,
            assignment: '(CH₃)₃C',
          },
        ],
        from: 70.36,
        to: 70.36,
      },
      {
        signals: [
          {
            delta: 30.29,
            assignment: '(CH₃)₃C',
          },
        ],
        from: 30.29,
        to: 30.29,
      },
    ],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['carbon dioxide'],
    smiles: 'O=C=O',
    ranges: [],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['carbon disulfide'],
    smiles: 'S=C=S',
    ranges: [
      {
        signals: [
          {
            delta: 197.25,
            assignment: 'CS₂',
          },
        ],
        from: 197.25,
        to: 197.25,
      },
    ],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['carbon tetrachloride'],
    smiles: 'ClC(Cl)(Cl)Cl',
    ranges: [
      {
        signals: [
          {
            delta: 96.73,
            assignment: 'CCl₄',
          },
        ],
        from: 96.73,
        to: 96.73,
      },
    ],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['chloroform'],
    smiles: 'ClC(Cl)Cl',
    ranges: [],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['18-crown-6'],
    smiles: 'C1COCCOCCOCCOCCOCCO1',
    ranges: [
      {
        signals: [
          {
            delta: 70.14,
            assignment: 'CH₂',
          },
        ],
        from: 70.14,
        to: 70.14,
      },
    ],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['cyclohexane'],
    smiles: 'C1CCCCC1',
    ranges: [],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['1,2-dichloroethane'],
    smiles: 'ClCCCl',
    ranges: [],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['dichloromethane'],
    smiles: 'ClCCl',
    ranges: [],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['diethyl ether'],
    smiles: 'CCOCC',
    ranges: [
      {
        signals: [
          {
            delta: 14.77,
            assignment: 'CH₃',
          },
        ],
        from: 14.77,
        to: 14.77,
      },
      {
        signals: [
          {
            delta: 66.42,
            assignment: 'CH₂',
          },
        ],
        from: 66.42,
        to: 66.42,
      },
    ],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['diglyme'],
    smiles: 'COCCOCCOC',
    ranges: [
      {
        signals: [
          {
            delta: 58.67,
            assignment: 'CH₃',
          },
        ],
        from: 58.67,
        to: 58.67,
      },
      {
        signals: [
          {
            delta: 70.05,
            assignment: 'CH₂',
          },
        ],
        from: 70.05,
        to: 70.05,
      },
      {
        signals: [
          {
            delta: 71.63,
            assignment: 'CH₂',
          },
        ],
        from: 71.63,
        to: 71.63,
      },
    ],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['dimethylformamide'],
    smiles: 'C(=O)N(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 165.53,
            assignment: 'CH',
          },
        ],
        from: 165.53,
        to: 165.53,
      },
      {
        signals: [
          {
            delta: 37.54,
            assignment: 'CH₃',
          },
        ],
        from: 37.54,
        to: 37.54,
      },
      {
        signals: [
          {
            delta: 32.03,
            assignment: 'CH₃',
          },
        ],
        from: 32.03,
        to: 32.03,
      },
    ],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['1,4-dioxane'],
    smiles: 'C1COCCOC1',
    ranges: [
      {
        signals: [
          {
            delta: 67.19,
            assignment: 'CH₂',
          },
        ],
        from: 67.19,
        to: 67.19,
      },
    ],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['DME', 'diethyl ether'],
    smiles: 'CCOCC',
    ranges: [
      {
        signals: [
          {
            delta: 58.67,
            assignment: 'CH₃',
          },
        ],
        from: 58.67,
        to: 58.67,
      },
      {
        signals: [
          {
            delta: 71.49,
            assignment: 'CH₂',
          },
        ],
        from: 71.49,
        to: 71.49,
      },
    ],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['ethane'],
    smiles: 'CC',
    ranges: [],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['ethanol'],
    smiles: 'CCO',
    ranges: [
      {
        signals: [
          {
            delta: 17.47,
            assignment: 'CH₃',
          },
        ],
        from: 17.47,
        to: 17.47,
      },
      {
        signals: [
          {
            delta: 58.05,
            assignment: 'CH₂',
          },
        ],
        from: 58.05,
        to: 58.05,
      },
    ],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['ethyl acetate'],
    smiles: 'CC(=O)CC',
    ranges: [
      {
        signals: [
          {
            delta: 21.15,
            assignment: 'CH₃CO',
          },
        ],
        from: 21.15,
        to: 21.15,
      },
      {
        signals: [
          {
            delta: 175.26,
            assignment: 'CO',
          },
        ],
        from: 175.26,
        to: 175.26,
      },
      {
        signals: [
          {
            delta: 62.32,
            assignment: 'CH₂',
          },
        ],
        from: 62.32,
        to: 62.32,
      },
      {
        signals: [
          {
            delta: 13.92,
            assignment: 'CH₃',
          },
        ],
        from: 13.92,
        to: 13.92,
      },
    ],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['ethylene'],
    smiles: 'C=C',
    ranges: [],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['ethylene glycol'],
    smiles: 'OCCO',
    ranges: [
      {
        signals: [
          {
            delta: 63.17,
            assignment: 'CH₂',
          },
        ],
        from: 63.17,
        to: 63.17,
      },
    ],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['H grease'],
    smiles: '',
    ranges: [],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['hexamethylbenzene'],
    smiles: 'CC1=C(C(=C(C(=C1C)C)C)C)C',
    ranges: [],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['n-hexane'],
    smiles: 'CCCCCC',
    ranges: [],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['HMDSO'],
    smiles: 'C[Si](C)(C)O[Si](C)(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 2.31,
            assignment: 'CH₃',
          },
        ],
        from: 2.31,
        to: 2.31,
      },
    ],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['HMPA'],
    smiles: 'CN(C)P(=O)(N(C)C)N(C)C',
    ranges: [
      {
        signals: [
          {
            delta: 36.46,
            assignment: 'CH₃',
          },
        ],
        from: 36.46,
        to: 36.46,
      },
    ],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['imidazole'],
    smiles: 'C1=CN=CN1',
    ranges: [
      {
        signals: [
          {
            delta: 136.65,
            assignment: 'CH(2)',
          },
        ],
        from: 136.65,
        to: 136.65,
      },
      {
        signals: [
          {
            delta: 122.43,
            assignment: 'CH(4,5)',
          },
        ],
        from: 122.43,
        to: 122.43,
      },
    ],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['methane'],
    smiles: 'C',
    ranges: [],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['methanol'],
    smiles: 'CO',
    ranges: [
      {
        signals: [
          {
            delta: 49.5,
            assignment: 'CH₃',
          },
        ],
        from: 49.5,
        to: 49.5,
      },
    ],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['nitromethane'],
    smiles: 'C[N+](=O)[O-]',
    ranges: [
      {
        signals: [
          {
            delta: 63.22,
            assignment: 'CH₃',
          },
        ],
        from: 63.22,
        to: 63.22,
      },
    ],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['n-pentane'],
    smiles: 'CCCCC',
    ranges: [],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['propane'],
    smiles: 'CCC',
    ranges: [],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['2-propanol'],
    smiles: 'CC(O)C',
    ranges: [
      {
        signals: [
          {
            delta: 24.38,
            assignment: 'CH₃',
          },
        ],
        from: 24.38,
        to: 24.38,
      },
      {
        signals: [
          {
            delta: 64.88,
            assignment: 'CH',
          },
        ],
        from: 64.88,
        to: 64.88,
      },
    ],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['propylene'],
    smiles: 'CC=C',
    ranges: [],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['pyridine'],
    smiles: 'C1=CC=NC=C1',
    ranges: [
      {
        signals: [
          {
            delta: 149.18,
            assignment: 'CH(2,6)',
          },
        ],
        from: 149.18,
        to: 149.18,
      },
      {
        signals: [
          {
            delta: 125.12,
            assignment: 'CH(3,5)',
          },
        ],
        from: 125.12,
        to: 125.12,
      },
      {
        signals: [
          {
            delta: 138.27,
            assignment: 'CH(4)',
          },
        ],
        from: 138.27,
        to: 138.27,
      },
    ],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['pyrrole'],
    smiles: 'C1=CNC=C1',
    ranges: [
      {
        signals: [
          {
            delta: 119.06,
            assignment: 'CH(2,5)',
          },
        ],
        from: 119.06,
        to: 119.06,
      },
      {
        signals: [
          {
            delta: 107.83,
            assignment: 'CH(3,4)',
          },
        ],
        from: 107.83,
        to: 107.83,
      },
    ],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['pyrrolidine'],
    smiles: 'C1CCNC1',
    ranges: [
      {
        signals: [
          {
            delta: 46.83,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 46.83,
        to: 46.83,
      },
      {
        signals: [
          {
            delta: 25.86,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 25.86,
        to: 25.86,
      },
    ],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['silicone grease'],
    smiles: '',
    ranges: [],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['tetrahydrofuran'],
    smiles: 'C1COCC1',
    ranges: [
      {
        signals: [
          {
            delta: 68.68,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 68.68,
        to: 68.68,
      },
      {
        signals: [
          {
            delta: 25.67,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 25.67,
        to: 25.67,
      },
    ],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['toluene'],
    smiles: 'Cc1ccccc1',
    ranges: [],
    nucleus: '13C',
    solvent: 'D₂O',
  },
  {
    names: ['triethylamine'],
    smiles: 'CCN(CC)CC',
    ranges: [
      {
        signals: [
          {
            delta: 9.07,
            assignment: 'CH₃',
          },
        ],
        from: 9.07,
        to: 9.07,
      },
      {
        signals: [
          {
            delta: 47.19,
            assignment: 'CH₂',
          },
        ],
        from: 47.19,
        to: 47.19,
      },
    ],
    nucleus: '13C',
    solvent: 'D₂O',
  },
];
