import { DatabaseNMREntry } from './DatabaseNMREntry';

export const protonImpurities: DatabaseNMREntry[] = [
  {
    names: ['water'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.46,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 2.46,
        to: 2.46,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['acetic acid'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.89,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.89,
        to: 1.89,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['acetone'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.05,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.05,
        to: 2.05,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['acetonitrile'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.95,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.95,
        to: 1.95,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['benzene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.31,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.31,
        to: 7.31,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['tert -butyl alcohol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.15,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.15,
        to: 1.15,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.16,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 3.16,
        to: 3.16,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['chloroform'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.89,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.89,
        to: 7.89,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['18-crown-6'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.57,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.57,
        to: 3.57,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['cyclohexane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.44,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 1.44,
        to: 1.44,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['1,2-dichloroethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.77,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.77,
        to: 3.77,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['dichloromethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 5.51,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 5.51,
        to: 5.51,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['diethyl ether'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.12,
            assignment: 'CH₃',
          },
        ],
        from: 1.12,
        to: 1.12,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.38,
            assignment: 'CH₂',
          },
        ],
        from: 3.38,
        to: 3.38,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['diglyme'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.43,
            assignment: 'CH₂',
          },
        ],
        from: 3.43,
        to: 3.43,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.53,
            assignment: 'CH₂',
          },
        ],
        from: 3.53,
        to: 3.53,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.28,
            multiplicity: 's',
            assignment: 'OCH₃',
          },
        ],
        from: 3.28,
        to: 3.28,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['dimethylformamide'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.91,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.91,
        to: 7.91,
      },
      {
        signals: [
          {
            js: [],
            delta: 2.88,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.88,
        to: 2.88,
      },
      {
        signals: [
          {
            js: [],
            delta: 2.76,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.76,
        to: 2.76,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['1,4-dioxane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.56,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.56,
        to: 3.56,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['DME'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.28,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.28,
        to: 3.28,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.43,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.43,
        to: 3.43,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['ethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.85,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.85,
        to: 0.85,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['ethanol'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.1,
            assignment: 'CH₃',
          },
        ],
        from: 1.1,
        to: 1.1,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.51,
            assignment: 'CH₂',
          },
        ],
        from: 3.51,
        to: 3.51,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.3,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 3.3,
        to: 3.3,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['ethyl acetate'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.94,
            multiplicity: 's',
            assignment: 'CH₃CO',
          },
        ],
        from: 1.94,
        to: 1.94,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 4.04,
            assignment: 'CH₂CH₃',
          },
        ],
        from: 4.04,
        to: 4.04,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.19,
            assignment: 'CH₂CH₃',
          },
        ],
        from: 1.19,
        to: 1.19,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['ethylene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 5.36,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 5.36,
        to: 5.36,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['ethylene glycol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.48,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.48,
        to: 3.48,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['H greaseᶠ'],
    ranges: [
      {
        signals: [],
        from: 0.85,
        to: 0.91,
        multiplicity: 'm',
      },
      {
        signals: [
          {
            js: [],
            delta: 1.29,
            multiplicity: 'br s',
            assignment: 'CH₂',
          },
        ],
        from: 1.29,
        to: 1.29,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['hexamethylbenzene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.18,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.18,
        to: 2.18,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['n-hexane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.89,
            assignment: 'CH₃',
          },
        ],
        from: 0.89,
        to: 0.89,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.29,
            assignment: 'CH₂',
          },
        ],
        from: 1.29,
        to: 1.29,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['HMDSO'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.07,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.07,
        to: 0.07,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['HMPA'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 9.5,
                multiplicity: 'd',
              },
            ],
            delta: 2.58,
            assignment: 'CH₃',
          },
        ],
        from: 2.58,
        to: 2.58,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['hydrogen'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 4.55,
            multiplicity: 's',
            assignment: 'H₂',
          },
        ],
        from: 4.55,
        to: 4.55,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['imidazole'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.48,
            multiplicity: 's',
            assignment: 'CH(2)',
          },
        ],
        from: 7.48,
        to: 7.48,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.94,
            multiplicity: 's',
            assignment: 'CH(4,5)',
          },
        ],
        from: 6.94,
        to: 6.94,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['methane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.19,
            multiplicity: 's',
            assignment: 'CH₄',
          },
        ],
        from: 0.19,
        to: 0.19,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['methanol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.27,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.27,
        to: 3.27,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.02,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 3.02,
        to: 3.02,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['nitromethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 4.31,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 4.31,
        to: 4.31,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['n-pentane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.89,
            assignment: 'CH₃',
          },
        ],
        from: 0.89,
        to: 0.89,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.31,
            assignment: 'CH₂',
          },
        ],
        from: 1.31,
        to: 1.31,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['propane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7.3,
                multiplicity: 't',
              },
            ],
            delta: 0.9,
            assignment: 'CH₃',
          },
        ],
        from: 0.9,
        to: 0.9,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7.3,
                multiplicity: 'sept',
              },
            ],
            delta: 1.33,
            assignment: 'CH₂',
          },
        ],
        from: 1.33,
        to: 1.33,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['2-propanol'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 6,
                multiplicity: 'd',
              },
            ],
            delta: 1.08,
            assignment: 'CH₃',
          },
        ],
        from: 1.08,
        to: 1.08,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 6,
                multiplicity: 'sept',
              },
            ],
            delta: 3.82,
            assignment: 'CH',
          },
        ],
        from: 3.82,
        to: 3.82,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['propylene'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 6.4,
                multiplicity: 'd',
              },
              {
                coupling: 1.5,
                multiplicity: 't',
              },
            ],
            delta: 1.69,
            assignment: 'CH₃',
          },
        ],
        from: 1.69,
        to: 1.69,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 10,
                multiplicity: 'd',
              },
            ],
            delta: 4.89,
            assignment: 'CH₂(1)',
          },
        ],
        from: 4.89,
        to: 4.89,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 17,
                multiplicity: 'd',
              },
            ],
            delta: 4.99,
            assignment: 'CH₂(2)',
          },
        ],
        from: 4.99,
        to: 4.99,
      },
      {
        signals: [
          {
            js: [],
            delta: 5.79,
            assignment: 'CH',
          },
        ],
        from: 5.79,
        to: 5.79,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['pyridine'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 8.54,
            assignment: 'CH(2,6)',
          },
        ],
        from: 8.54,
        to: 8.54,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.25,
            assignment: 'CH(3,5)',
          },
        ],
        from: 7.25,
        to: 7.25,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.65,
            assignment: 'CH(4)',
          },
        ],
        from: 7.65,
        to: 7.65,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['pyrrole'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 9.96,
            assignment: 'NH',
          },
        ],
        from: 9.96,
        to: 9.96,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.66,
            assignment: 'CH(2,5)',
          },
        ],
        from: 6.66,
        to: 6.66,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.02,
            assignment: 'CH(3,4)',
          },
        ],
        from: 6.02,
        to: 6.02,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['pyrrolidineʰ'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.75,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 2.75,
        to: 2.75,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.59,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 1.59,
        to: 1.59,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['silicone grease'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.11,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.11,
        to: 0.11,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['tetrahydrofuran'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.62,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 3.62,
        to: 3.62,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.79,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 1.79,
        to: 1.79,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['toluene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.31,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.31,
        to: 2.31,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.1,
            assignment: 'CH(2,4,6)',
          },
        ],
        from: 7.1,
        to: 7.1,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.19,
            assignment: 'CH(3,5)',
          },
        ],
        from: 7.19,
        to: 7.19,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['triethylamine'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.97,
            assignment: 'CH₃',
          },
        ],
        from: 0.97,
        to: 0.97,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 2.46,
            assignment: 'CH₂',
          },
        ],
        from: 2.46,
        to: 2.46,
      },
    ],
    nucleus: '1H',
    solvent: 'THF-d₈',
  },
  {
    names: ['water'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.52,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 1.52,
        to: 1.52,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['acetic acid'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.06,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.06,
        to: 2.06,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['acetone'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.12,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.12,
        to: 2.12,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['acetonitrile'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.97,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.97,
        to: 1.97,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['benzene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.35,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.35,
        to: 7.35,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['tert -butyl alcohol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.24,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.24,
        to: 1.24,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['chloroform'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.32,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.32,
        to: 7.32,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['18-crown-6'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.59,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.59,
        to: 3.59,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['cyclohexane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.44,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 1.44,
        to: 1.44,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['1,2-dichloroethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.76,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.76,
        to: 3.76,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['dichloromethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 5.33,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 5.33,
        to: 5.33,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['diethyl ether'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.15,
            assignment: 'CH₃',
          },
        ],
        from: 1.15,
        to: 1.15,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.43,
            assignment: 'CH₂',
          },
        ],
        from: 3.43,
        to: 3.43,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['diglyme'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.57,
            assignment: 'CH₂',
          },
        ],
        from: 3.57,
        to: 3.57,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.5,
            assignment: 'CH₂',
          },
        ],
        from: 3.5,
        to: 3.5,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.33,
            multiplicity: 's',
            assignment: 'OCH₃',
          },
        ],
        from: 3.33,
        to: 3.33,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['dimethylformamide'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.96,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.96,
        to: 7.96,
      },
      {
        signals: [
          {
            js: [],
            delta: 2.91,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.91,
        to: 2.91,
      },
      {
        signals: [
          {
            js: [],
            delta: 2.82,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.82,
        to: 2.82,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['1,4-dioxane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.65,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.65,
        to: 3.65,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['DME'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.34,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.34,
        to: 3.34,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.49,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.49,
        to: 3.49,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['ethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.85,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.85,
        to: 0.85,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['ethanol'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.19,
            assignment: 'CH₃',
          },
        ],
        from: 1.19,
        to: 1.19,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.66,
            assignment: 'CH₂',
          },
        ],
        from: 3.66,
        to: 3.66,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.33,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 1.33,
        to: 1.33,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['ethyl acetate'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2,
            multiplicity: 's',
            assignment: 'CH₃CO',
          },
        ],
        from: 2,
        to: 2,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 4.08,
            assignment: 'CH₂CH₃',
          },
        ],
        from: 4.08,
        to: 4.08,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.23,
            assignment: 'CH₂CH₃',
          },
        ],
        from: 1.23,
        to: 1.23,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['ethylene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 5.4,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 5.4,
        to: 5.4,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['ethylene glycol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.66,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.66,
        to: 3.66,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['H greaseᶠ'],
    ranges: [
      {
        signals: [],
        from: 0.84,
        to: 0.9,
        multiplicity: 'm',
      },
      {
        signals: [
          {
            js: [],
            delta: 1.27,
            multiplicity: 'br s',
            assignment: 'CH₂',
          },
        ],
        from: 1.27,
        to: 1.27,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['hexamethylbenzene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.2,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.2,
        to: 2.2,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['n-hexane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.89,
            assignment: 'CH₃',
          },
        ],
        from: 0.89,
        to: 0.89,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.27,
            assignment: 'CH₂',
          },
        ],
        from: 1.27,
        to: 1.27,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['HMDSO'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.07,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.07,
        to: 0.07,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['HMPA'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 9.5,
                multiplicity: 'd',
              },
            ],
            delta: 2.6,
            assignment: 'CH₃',
          },
        ],
        from: 2.6,
        to: 2.6,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['hydrogen'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 4.59,
            multiplicity: 's',
            assignment: 'H₂',
          },
        ],
        from: 4.59,
        to: 4.59,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['imidazole'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.63,
            multiplicity: 's',
            assignment: 'CH(2)',
          },
        ],
        from: 7.63,
        to: 7.63,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.07,
            multiplicity: 's',
            assignment: 'CH(4,5)',
          },
        ],
        from: 7.07,
        to: 7.07,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['methane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.21,
            multiplicity: 's',
            assignment: 'CH₄',
          },
        ],
        from: 0.21,
        to: 0.21,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['methanol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.42,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.42,
        to: 3.42,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.09,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 1.09,
        to: 1.09,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['nitromethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 4.31,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 4.31,
        to: 4.31,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['n-pentane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.89,
            assignment: 'CH₃',
          },
        ],
        from: 0.89,
        to: 0.89,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.3,
            assignment: 'CH₂',
          },
        ],
        from: 1.3,
        to: 1.3,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['propane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7.3,
                multiplicity: 't',
              },
            ],
            delta: 0.9,
            assignment: 'CH₃',
          },
        ],
        from: 0.9,
        to: 0.9,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7.3,
                multiplicity: 'sept',
              },
            ],
            delta: 1.32,
            assignment: 'CH₂',
          },
        ],
        from: 1.32,
        to: 1.32,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['2-propanol'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 6,
                multiplicity: 'd',
              },
            ],
            delta: 1.17,
            assignment: 'CH₃',
          },
        ],
        from: 1.17,
        to: 1.17,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 6,
                multiplicity: 'sept',
              },
            ],
            delta: 3.97,
            assignment: 'CH',
          },
        ],
        from: 3.97,
        to: 3.97,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['propylene'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 6.4,
                multiplicity: 'd',
              },
              {
                coupling: 1.5,
                multiplicity: 't',
              },
            ],
            delta: 1.71,
            assignment: 'CH₃',
          },
        ],
        from: 1.71,
        to: 1.71,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 10,
                multiplicity: 'd',
              },
            ],
            delta: 4.93,
            assignment: 'CH₂(1)',
          },
        ],
        from: 4.93,
        to: 4.93,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 17,
                multiplicity: 'd',
              },
            ],
            delta: 5.03,
            assignment: 'CH₂(2)',
          },
        ],
        from: 5.03,
        to: 5.03,
      },
      {
        signals: [
          {
            js: [],
            delta: 5.84,
            assignment: 'CH',
          },
        ],
        from: 5.84,
        to: 5.84,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['pyridine'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 8.59,
            assignment: 'CH(2,6)',
          },
        ],
        from: 8.59,
        to: 8.59,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.28,
            assignment: 'CH(3,5)',
          },
        ],
        from: 7.28,
        to: 7.28,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.68,
            assignment: 'CH(4)',
          },
        ],
        from: 7.68,
        to: 7.68,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['pyrrole'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 8.69,
            assignment: 'NH',
          },
        ],
        from: 8.69,
        to: 8.69,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.79,
            assignment: 'CH(2,5)',
          },
        ],
        from: 6.79,
        to: 6.79,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.19,
            assignment: 'CH(3,4)',
          },
        ],
        from: 6.19,
        to: 6.19,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['pyrrolidineʰ'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.82,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 2.82,
        to: 2.82,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.67,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 1.67,
        to: 1.67,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['silicone grease'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.09,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.09,
        to: 0.09,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['tetrahydrofuran'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.69,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 3.69,
        to: 3.69,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.82,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 1.82,
        to: 1.82,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['toluene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.34,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.34,
        to: 2.34,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.15,
            assignment: 'CH(2,4,6)',
          },
        ],
        from: 7.15,
        to: 7.15,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.24,
            assignment: 'CH(3,5)',
          },
        ],
        from: 7.24,
        to: 7.24,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['triethylamine'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.99,
            assignment: 'CH₃',
          },
        ],
        from: 0.99,
        to: 0.99,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 2.48,
            assignment: 'CH₂',
          },
        ],
        from: 2.48,
        to: 2.48,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₂Cl₂',
  },
  {
    names: ['water'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.56,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 1.56,
        to: 1.56,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['acetic acid'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.1,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.1,
        to: 2.1,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['acetone'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.17,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.17,
        to: 2.17,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['acetonitrile'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.1,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.1,
        to: 2.1,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['benzene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.36,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.36,
        to: 7.36,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['tert -butyl alcohol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.28,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.28,
        to: 1.28,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['chloroform'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.26,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.26,
        to: 7.26,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['18-crown-6'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.67,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.67,
        to: 3.67,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['cyclohexane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.43,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 1.43,
        to: 1.43,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['1,2-dichloroethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.73,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.73,
        to: 3.73,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['dichloromethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 5.3,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 5.3,
        to: 5.3,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['diethyl ether'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.21,
            assignment: 'CH₃',
          },
        ],
        from: 1.21,
        to: 1.21,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.48,
            assignment: 'CH₂',
          },
        ],
        from: 3.48,
        to: 3.48,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['diglyme'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.65,
            assignment: 'CH₂',
          },
        ],
        from: 3.65,
        to: 3.65,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.57,
            assignment: 'CH₂',
          },
        ],
        from: 3.57,
        to: 3.57,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.39,
            multiplicity: 's',
            assignment: 'OCH₃',
          },
        ],
        from: 3.39,
        to: 3.39,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['dimethylformamide'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 8.02,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 8.02,
        to: 8.02,
      },
      {
        signals: [
          {
            js: [],
            delta: 2.96,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.96,
        to: 2.96,
      },
      {
        signals: [
          {
            js: [],
            delta: 2.88,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.88,
        to: 2.88,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['1,4-dioxane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.71,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.71,
        to: 3.71,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['DME'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.4,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.4,
        to: 3.4,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.55,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.55,
        to: 3.55,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['ethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.87,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.87,
        to: 0.87,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['ethanol'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.25,
            assignment: 'CH₃',
          },
        ],
        from: 1.25,
        to: 1.25,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.72,
            assignment: 'CH₂',
          },
        ],
        from: 3.72,
        to: 3.72,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.32,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 1.32,
        to: 1.32,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['ethyl acetate'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.05,
            multiplicity: 's',
            assignment: 'CH₃CO',
          },
        ],
        from: 2.05,
        to: 2.05,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 4.12,
            assignment: 'CH₂CH₃',
          },
        ],
        from: 4.12,
        to: 4.12,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.26,
            assignment: 'CH₂CH₃',
          },
        ],
        from: 1.26,
        to: 1.26,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['ethylene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 5.4,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 5.4,
        to: 5.4,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['ethylene glycol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.76,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.76,
        to: 3.76,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['H greaseᶠ'],
    ranges: [
      {
        signals: [],
        from: 0.84,
        to: 0.87,
        multiplicity: 'm',
      },
      {
        signals: [
          {
            js: [],
            delta: 1.25,
            multiplicity: 'br s',
            assignment: 'CH₂',
          },
        ],
        from: 1.25,
        to: 1.25,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['hexamethylbenzene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.24,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.24,
        to: 2.24,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['n-hexane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.88,
            assignment: 'CH₃',
          },
        ],
        from: 0.88,
        to: 0.88,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.26,
            assignment: 'CH₂',
          },
        ],
        from: 1.26,
        to: 1.26,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['HMDSO'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.07,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.07,
        to: 0.07,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['HMPA'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 9.5,
                multiplicity: 'd',
              },
            ],
            delta: 2.65,
            assignment: 'CH₃',
          },
        ],
        from: 2.65,
        to: 2.65,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['hydrogen'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 4.62,
            multiplicity: 's',
            assignment: 'H₂',
          },
        ],
        from: 4.62,
        to: 4.62,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['imidazole'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.67,
            multiplicity: 's',
            assignment: 'CH(2)',
          },
        ],
        from: 7.67,
        to: 7.67,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.1,
            multiplicity: 's',
            assignment: 'CH(4,5)',
          },
        ],
        from: 7.1,
        to: 7.1,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['methane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.22,
            multiplicity: 's',
            assignment: 'CH₄',
          },
        ],
        from: 0.22,
        to: 0.22,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['methanol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.49,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.49,
        to: 3.49,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.09,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 1.09,
        to: 1.09,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['nitromethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 4.33,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 4.33,
        to: 4.33,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['n-pentane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.88,
            assignment: 'CH₃',
          },
        ],
        from: 0.88,
        to: 0.88,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.27,
            assignment: 'CH₂',
          },
        ],
        from: 1.27,
        to: 1.27,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['propane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7.3,
                multiplicity: 't',
              },
            ],
            delta: 0.9,
            assignment: 'CH₃',
          },
        ],
        from: 0.9,
        to: 0.9,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7.3,
                multiplicity: 'sept',
              },
            ],
            delta: 1.32,
            assignment: 'CH₂',
          },
        ],
        from: 1.32,
        to: 1.32,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['2-propanol'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 6,
                multiplicity: 'd',
              },
            ],
            delta: 1.22,
            assignment: 'CH₃',
          },
        ],
        from: 1.22,
        to: 1.22,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 6,
                multiplicity: 'sept',
              },
            ],
            delta: 4.04,
            assignment: 'CH',
          },
        ],
        from: 4.04,
        to: 4.04,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['propylene'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 6.4,
                multiplicity: 'd',
              },
              {
                coupling: 1.5,
                multiplicity: 't',
              },
            ],
            delta: 1.73,
            assignment: 'CH₃',
          },
        ],
        from: 1.73,
        to: 1.73,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 10,
                multiplicity: 'd',
              },
            ],
            delta: 4.94,
            assignment: 'CH₂(1)',
          },
        ],
        from: 4.94,
        to: 4.94,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 17,
                multiplicity: 'd',
              },
            ],
            delta: 5.03,
            assignment: 'CH₂(2)',
          },
        ],
        from: 5.03,
        to: 5.03,
      },
      {
        signals: [
          {
            js: [],
            delta: 5.83,
            assignment: 'CH',
          },
        ],
        from: 5.83,
        to: 5.83,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['pyridine'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 8.62,
            assignment: 'CH(2,6)',
          },
        ],
        from: 8.62,
        to: 8.62,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.29,
            assignment: 'CH(3,5)',
          },
        ],
        from: 7.29,
        to: 7.29,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.68,
            assignment: 'CH(4)',
          },
        ],
        from: 7.68,
        to: 7.68,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['pyrrole'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 8.4,
            assignment: 'NH',
          },
        ],
        from: 8.4,
        to: 8.4,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.83,
            assignment: 'CH(2,5)',
          },
        ],
        from: 6.83,
        to: 6.83,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.26,
            assignment: 'CH(3,4)',
          },
        ],
        from: 6.26,
        to: 6.26,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['pyrrolidineʰ'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.87,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 2.87,
        to: 2.87,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.68,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 1.68,
        to: 1.68,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['silicone grease'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.07,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.07,
        to: 0.07,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['tetrahydrofuran'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.76,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 3.76,
        to: 3.76,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.85,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 1.85,
        to: 1.85,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['toluene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.36,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.36,
        to: 2.36,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.17,
            assignment: 'CH(2,4,6)',
          },
        ],
        from: 7.17,
        to: 7.17,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.25,
            assignment: 'CH(3,5)',
          },
        ],
        from: 7.25,
        to: 7.25,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['triethylamine'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.03,
            assignment: 'CH₃',
          },
        ],
        from: 1.03,
        to: 1.03,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 2.53,
            assignment: 'CH₂',
          },
        ],
        from: 2.53,
        to: 2.53,
      },
    ],
    nucleus: '1H',
    solvent: 'CDCl₃',
  },
  {
    names: ['water'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.43,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 0.43,
        to: 0.43,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['acetic acid'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.57,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.57,
        to: 1.57,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['acetone'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.57,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.57,
        to: 1.57,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['acetonitrile'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.69,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.69,
        to: 0.69,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['benzene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.12,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.12,
        to: 7.12,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['tert -butyl alcohol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.03,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.03,
        to: 1.03,
      },
      {
        signals: [
          {
            js: [],
            delta: 0.58,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 0.58,
        to: 0.58,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['chloroform'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 6.1,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 6.1,
        to: 6.1,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['18-crown-6'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.36,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.36,
        to: 3.36,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['cyclohexane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.4,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 1.4,
        to: 1.4,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['1,2-dichloroethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.91,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 2.91,
        to: 2.91,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['dichloromethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 4.32,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 4.32,
        to: 4.32,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['diethyl ether'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.1,
            assignment: 'CH₃',
          },
        ],
        from: 1.1,
        to: 1.1,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.25,
            assignment: 'CH₂',
          },
        ],
        from: 3.25,
        to: 3.25,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['diglyme'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.43,
            assignment: 'CH₂',
          },
        ],
        from: 3.43,
        to: 3.43,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.31,
            assignment: 'CH₂',
          },
        ],
        from: 3.31,
        to: 3.31,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.12,
            multiplicity: 's',
            assignment: 'OCH₃',
          },
        ],
        from: 3.12,
        to: 3.12,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['dimethylformamide'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.57,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.57,
        to: 7.57,
      },
      {
        signals: [
          {
            js: [],
            delta: 2.37,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.37,
        to: 2.37,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.96,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.96,
        to: 1.96,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['1,4-dioxane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.33,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.33,
        to: 3.33,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['DME'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.12,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.12,
        to: 3.12,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.31,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.31,
        to: 3.31,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['ethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.81,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.81,
        to: 0.81,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['ethanol'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.97,
            assignment: 'CH₃',
          },
        ],
        from: 0.97,
        to: 0.97,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.36,
            assignment: 'CH₂',
          },
        ],
        from: 3.36,
        to: 3.36,
      },
      {
        signals: [
          {
            js: [],
            delta: 0.83,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 0.83,
        to: 0.83,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['ethyl acetate'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.69,
            multiplicity: 's',
            assignment: 'CH₃CO',
          },
        ],
        from: 1.69,
        to: 1.69,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.87,
            assignment: 'CH₂CH₃',
          },
        ],
        from: 3.87,
        to: 3.87,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.94,
            assignment: 'CH₂CH₃',
          },
        ],
        from: 0.94,
        to: 0.94,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['ethylene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 5.25,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 5.25,
        to: 5.25,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['ethylene glycol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.36,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.36,
        to: 3.36,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['H greaseᶠ'],
    ranges: [
      {
        signals: [],
        from: 0.89,
        to: 0.96,
        multiplicity: 'm',
      },
      {
        signals: [
          {
            js: [],
            delta: 1.33,
            multiplicity: 'br s',
            assignment: 'CH₂',
          },
        ],
        from: 1.33,
        to: 1.33,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['hexamethylbenzene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.1,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.1,
        to: 2.1,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['n-hexane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.88,
            assignment: 'CH₃',
          },
        ],
        from: 0.88,
        to: 0.88,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.22,
            assignment: 'CH₂',
          },
        ],
        from: 1.22,
        to: 1.22,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['HMDSO'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.1,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.1,
        to: 0.1,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['HMPA'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 9.5,
                multiplicity: 'd',
              },
            ],
            delta: 2.42,
            assignment: 'CH₃',
          },
        ],
        from: 2.42,
        to: 2.42,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['hydrogen'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 4.5,
            multiplicity: 's',
            assignment: 'H₂',
          },
        ],
        from: 4.5,
        to: 4.5,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['imidazole'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.3,
            multiplicity: 's',
            assignment: 'CH(2)',
          },
        ],
        from: 7.3,
        to: 7.3,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.86,
            multiplicity: 's',
            assignment: 'CH(4,5)',
          },
        ],
        from: 6.86,
        to: 6.86,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['methane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.17,
            multiplicity: 's',
            assignment: 'CH₄',
          },
        ],
        from: 0.17,
        to: 0.17,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['methanol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.03,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.03,
        to: 3.03,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['nitromethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.01,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.01,
        to: 3.01,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['n-pentane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.87,
            assignment: 'CH₃',
          },
        ],
        from: 0.87,
        to: 0.87,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.25,
            assignment: 'CH₂',
          },
        ],
        from: 1.25,
        to: 1.25,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['propane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7.3,
                multiplicity: 't',
              },
            ],
            delta: 0.89,
            assignment: 'CH₃',
          },
        ],
        from: 0.89,
        to: 0.89,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7.3,
                multiplicity: 'sept',
              },
            ],
            delta: 1.32,
            assignment: 'CH₂',
          },
        ],
        from: 1.32,
        to: 1.32,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['2-propanol'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 6,
                multiplicity: 'd',
              },
            ],
            delta: 0.95,
            assignment: 'CH₃',
          },
        ],
        from: 0.95,
        to: 0.95,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 6,
                multiplicity: 'sept',
              },
            ],
            delta: 3.65,
            assignment: 'CH',
          },
        ],
        from: 3.65,
        to: 3.65,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['propylene'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 6.4,
                multiplicity: 'd',
              },
              {
                coupling: 1.5,
                multiplicity: 't',
              },
            ],
            delta: 1.55,
            assignment: 'CH₃',
          },
        ],
        from: 1.55,
        to: 1.55,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 10,
                multiplicity: 'd',
              },
            ],
            delta: 4.92,
            assignment: 'CH₂(1)',
          },
        ],
        from: 4.92,
        to: 4.92,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 17,
                multiplicity: 'd',
              },
            ],
            delta: 4.98,
            assignment: 'CH₂(2)',
          },
        ],
        from: 4.98,
        to: 4.98,
      },
      {
        signals: [
          {
            js: [],
            delta: 5.7,
            assignment: 'CH',
          },
        ],
        from: 5.7,
        to: 5.7,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['pyridine'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 8.47,
            assignment: 'CH(2,6)',
          },
        ],
        from: 8.47,
        to: 8.47,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.67,
            assignment: 'CH(3,5)',
          },
        ],
        from: 6.67,
        to: 6.67,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.99,
            assignment: 'CH(4)',
          },
        ],
        from: 6.99,
        to: 6.99,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['pyrrole'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.71,
            assignment: 'NH',
          },
        ],
        from: 7.71,
        to: 7.71,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.43,
            assignment: 'CH(2,5)',
          },
        ],
        from: 6.43,
        to: 6.43,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.27,
            assignment: 'CH(3,4)',
          },
        ],
        from: 6.27,
        to: 6.27,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['pyrrolidineʰ'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.54,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 2.54,
        to: 2.54,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.36,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 1.36,
        to: 1.36,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['silicone grease'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.26,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.26,
        to: 0.26,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['tetrahydrofuran'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.54,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 3.54,
        to: 3.54,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.43,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 1.43,
        to: 1.43,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['toluene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.11,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.11,
        to: 2.11,
      },
      {
        signals: [],
        from: 6.96,
        to: 7.01,
        multiplicity: 'm',
      },
      {
        signals: [
          {
            js: [],
            delta: 7.09,
            assignment: 'CH(3,5)',
          },
        ],
        from: 7.09,
        to: 7.09,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['triethylamine'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.95,
            assignment: 'CH₃',
          },
        ],
        from: 0.95,
        to: 0.95,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 2.39,
            assignment: 'CH₂',
          },
        ],
        from: 2.39,
        to: 2.39,
      },
    ],
    nucleus: '1H',
    solvent: 'toluene-d₈',
  },
  {
    names: ['water'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.4,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 0.4,
        to: 0.4,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['acetic acid'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.52,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.52,
        to: 1.52,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['acetone'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.55,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.55,
        to: 1.55,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['acetonitrile'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.58,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.58,
        to: 0.58,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['benzene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.15,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.15,
        to: 7.15,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['tert -butyl alcohol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.05,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.05,
        to: 1.05,
      },
      {
        signals: [
          {
            js: [],
            delta: 0.63,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 0.63,
        to: 0.63,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['chloroform'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 6.15,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 6.15,
        to: 6.15,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['18-crown-6'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.39,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.39,
        to: 3.39,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['cyclohexane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.4,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 1.4,
        to: 1.4,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['1,2-dichloroethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.9,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 2.9,
        to: 2.9,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['dichloromethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 4.27,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 4.27,
        to: 4.27,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['diethyl ether'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.11,
            assignment: 'CH₃',
          },
        ],
        from: 1.11,
        to: 1.11,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.26,
            assignment: 'CH₂',
          },
        ],
        from: 3.26,
        to: 3.26,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['diglyme'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.46,
            assignment: 'CH₂',
          },
        ],
        from: 3.46,
        to: 3.46,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.34,
            assignment: 'CH₂',
          },
        ],
        from: 3.34,
        to: 3.34,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.11,
            multiplicity: 's',
            assignment: 'OCH₃',
          },
        ],
        from: 3.11,
        to: 3.11,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['dimethylformamide'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.63,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.63,
        to: 7.63,
      },
      {
        signals: [
          {
            js: [],
            delta: 2.36,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.36,
        to: 2.36,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.86,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.86,
        to: 1.86,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['1,4-dioxane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.35,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.35,
        to: 3.35,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['DME'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.12,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.12,
        to: 3.12,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.33,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.33,
        to: 3.33,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['ethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.8,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.8,
        to: 0.8,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['ethanol'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.96,
            assignment: 'CH₃',
          },
        ],
        from: 0.96,
        to: 0.96,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.34,
            assignment: 'CH₂',
          },
        ],
        from: 3.34,
        to: 3.34,
      },
      {
        signals: [
          {
            js: [],
            delta: 0.5,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 0.5,
        to: 0.5,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['ethyl acetate'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.65,
            multiplicity: 's',
            assignment: 'CH₃CO',
          },
        ],
        from: 1.65,
        to: 1.65,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.89,
            assignment: 'CH₂CH₃',
          },
        ],
        from: 3.89,
        to: 3.89,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.92,
            assignment: 'CH₂CH₃',
          },
        ],
        from: 0.92,
        to: 0.92,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['ethylene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 5.25,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 5.25,
        to: 5.25,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['ethylene glycol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.41,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.41,
        to: 3.41,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['H greaseᶠ'],
    ranges: [
      {
        signals: [],
        from: 0.9,
        to: 0.98,
        multiplicity: 'm',
      },
      {
        signals: [
          {
            js: [],
            delta: 1.32,
            multiplicity: 'br s',
            assignment: 'CH₂',
          },
        ],
        from: 1.32,
        to: 1.32,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['hexamethylbenzene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.13,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.13,
        to: 2.13,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['n-hexane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.89,
            assignment: 'CH₃',
          },
        ],
        from: 0.89,
        to: 0.89,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.24,
            assignment: 'CH₂',
          },
        ],
        from: 1.24,
        to: 1.24,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['HMDSO'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.12,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.12,
        to: 0.12,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['HMPA'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 9.5,
                multiplicity: 'd',
              },
            ],
            delta: 2.4,
            assignment: 'CH₃',
          },
        ],
        from: 2.4,
        to: 2.4,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['hydrogen'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 4.47,
            multiplicity: 's',
            assignment: 'H₂',
          },
        ],
        from: 4.47,
        to: 4.47,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['imidazole'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.33,
            multiplicity: 's',
            assignment: 'CH(2)',
          },
        ],
        from: 7.33,
        to: 7.33,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.9,
            multiplicity: 's',
            assignment: 'CH(4,5)',
          },
        ],
        from: 6.9,
        to: 6.9,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['methane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.16,
            multiplicity: 's',
            assignment: 'CH₄',
          },
        ],
        from: 0.16,
        to: 0.16,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['methanol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.07,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.07,
        to: 3.07,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['nitromethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.94,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.94,
        to: 2.94,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['n-pentane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.87,
            assignment: 'CH₃',
          },
        ],
        from: 0.87,
        to: 0.87,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.23,
            assignment: 'CH₂',
          },
        ],
        from: 1.23,
        to: 1.23,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['propane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7.3,
                multiplicity: 't',
              },
            ],
            delta: 0.86,
            assignment: 'CH₃',
          },
        ],
        from: 0.86,
        to: 0.86,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7.3,
                multiplicity: 'sept',
              },
            ],
            delta: 1.26,
            assignment: 'CH₂',
          },
        ],
        from: 1.26,
        to: 1.26,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['2-propanol'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 6,
                multiplicity: 'd',
              },
            ],
            delta: 0.95,
            assignment: 'CH₃',
          },
        ],
        from: 0.95,
        to: 0.95,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 6,
                multiplicity: 'sept',
              },
            ],
            delta: 3.67,
            assignment: 'CH',
          },
        ],
        from: 3.67,
        to: 3.67,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['propylene'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 6.4,
                multiplicity: 'd',
              },
              {
                coupling: 1.5,
                multiplicity: 't',
              },
            ],
            delta: 1.55,
            assignment: 'CH₃',
          },
        ],
        from: 1.55,
        to: 1.55,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 10,
                multiplicity: 'd',
              },
            ],
            delta: 4.95,
            assignment: 'CH₂(1)',
          },
        ],
        from: 4.95,
        to: 4.95,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 17,
                multiplicity: 'd',
              },
            ],
            delta: 5.01,
            assignment: 'CH₂(2)',
          },
        ],
        from: 5.01,
        to: 5.01,
      },
      {
        signals: [
          {
            js: [],
            delta: 5.72,
            assignment: 'CH',
          },
        ],
        from: 5.72,
        to: 5.72,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['pyridine'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 8.53,
            assignment: 'CH(2,6)',
          },
        ],
        from: 8.53,
        to: 8.53,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.66,
            assignment: 'CH(3,5)',
          },
        ],
        from: 6.66,
        to: 6.66,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.98,
            assignment: 'CH(4)',
          },
        ],
        from: 6.98,
        to: 6.98,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['pyrrole'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.8,
            assignment: 'NH',
          },
        ],
        from: 7.8,
        to: 7.8,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.48,
            assignment: 'CH(2,5)',
          },
        ],
        from: 6.48,
        to: 6.48,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.37,
            assignment: 'CH(3,4)',
          },
        ],
        from: 6.37,
        to: 6.37,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['pyrrolidineʰ'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.54,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 2.54,
        to: 2.54,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.33,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 1.33,
        to: 1.33,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['silicone grease'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.29,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.29,
        to: 0.29,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['tetrahydrofuran'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.57,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 3.57,
        to: 3.57,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.4,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 1.4,
        to: 1.4,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['toluene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.11,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.11,
        to: 2.11,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.02,
            assignment: 'CH(2,4,6)',
          },
        ],
        from: 7.02,
        to: 7.02,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.13,
            assignment: 'CH(3,5)',
          },
        ],
        from: 7.13,
        to: 7.13,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['triethylamine'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.96,
            assignment: 'CH₃',
          },
        ],
        from: 0.96,
        to: 0.96,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 2.4,
            assignment: 'CH₂',
          },
        ],
        from: 2.4,
        to: 2.4,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₆',
  },
  {
    names: ['water'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.03,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 1.03,
        to: 1.03,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['acetic acid'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.76,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.76,
        to: 1.76,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['acetone'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.77,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.77,
        to: 1.77,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['acetonitrile'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.21,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.21,
        to: 1.21,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['benzene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.2,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.2,
        to: 7.2,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['tert -butyl alcohol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.12,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.12,
        to: 1.12,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.3,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 1.3,
        to: 1.3,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['chloroform'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 6.74,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 6.74,
        to: 6.74,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['18-crown-6'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.41,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.41,
        to: 3.41,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['cyclohexane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.37,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 1.37,
        to: 1.37,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['1,2-dichloroethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.26,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.26,
        to: 3.26,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['dichloromethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 4.77,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 4.77,
        to: 4.77,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['diethyl ether'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.1,
            assignment: 'CH₃',
          },
        ],
        from: 1.1,
        to: 1.1,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.31,
            assignment: 'CH₂',
          },
        ],
        from: 3.31,
        to: 3.31,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['diglyme'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.49,
            assignment: 'CH₂',
          },
        ],
        from: 3.49,
        to: 3.49,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.37,
            assignment: 'CH₂',
          },
        ],
        from: 3.37,
        to: 3.37,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.16,
            multiplicity: 's',
            assignment: 'OCH₃',
          },
        ],
        from: 3.16,
        to: 3.16,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['dimethylformamide'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.73,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.73,
        to: 7.73,
      },
      {
        signals: [
          {
            js: [],
            delta: 2.51,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.51,
        to: 2.51,
      },
      {
        signals: [
          {
            js: [],
            delta: 2.3,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.3,
        to: 2.3,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['1,4-dioxane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.45,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.45,
        to: 3.45,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['DME'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.17,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.17,
        to: 3.17,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.37,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.37,
        to: 3.37,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['ethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.79,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.79,
        to: 0.79,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['ethanol'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.06,
            assignment: 'CH₃',
          },
        ],
        from: 1.06,
        to: 1.06,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.51,
            assignment: 'CH₂',
          },
        ],
        from: 3.51,
        to: 3.51,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.39,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 1.39,
        to: 1.39,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['ethyl acetate'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.78,
            multiplicity: 's',
            assignment: 'CH₃CO',
          },
        ],
        from: 1.78,
        to: 1.78,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.96,
            assignment: 'CH₂CH₃',
          },
        ],
        from: 3.96,
        to: 3.96,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.04,
            assignment: 'CH₂CH₃',
          },
        ],
        from: 1.04,
        to: 1.04,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['ethylene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 5.29,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 5.29,
        to: 5.29,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['ethylene glycol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.58,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.58,
        to: 3.58,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['H greaseᶠ'],
    ranges: [
      {
        signals: [],
        from: 0.86,
        to: 0.92,
        multiplicity: 'm',
      },
      {
        signals: [
          {
            js: [],
            delta: 1.3,
            multiplicity: 'br s',
            assignment: 'CH₂',
          },
        ],
        from: 1.3,
        to: 1.3,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['hexamethylbenzene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.1,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.1,
        to: 2.1,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['n-hexane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.85,
            assignment: 'CH₃',
          },
        ],
        from: 0.85,
        to: 0.85,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.19,
            assignment: 'CH₂',
          },
        ],
        from: 1.19,
        to: 1.19,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['HMDSO'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.1,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.1,
        to: 0.1,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['HMPA'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 9.5,
                multiplicity: 'd',
              },
            ],
            delta: 2.47,
            assignment: 'CH₃',
          },
        ],
        from: 2.47,
        to: 2.47,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['hydrogen'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 4.49,
            multiplicity: 's',
            assignment: 'H₂',
          },
        ],
        from: 4.49,
        to: 4.49,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['imidazole'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.53,
            multiplicity: 's',
            assignment: 'CH(2)',
          },
        ],
        from: 7.53,
        to: 7.53,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.01,
            multiplicity: 's',
            assignment: 'CH(4,5)',
          },
        ],
        from: 7.01,
        to: 7.01,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['methane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.15,
            multiplicity: 's',
            assignment: 'CH₄',
          },
        ],
        from: 0.15,
        to: 0.15,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['methanol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.25,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.25,
        to: 3.25,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.3,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 1.3,
        to: 1.3,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['nitromethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.59,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.59,
        to: 3.59,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['n-pentane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.84,
            assignment: 'CH₃',
          },
        ],
        from: 0.84,
        to: 0.84,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.23,
            assignment: 'CH₂',
          },
        ],
        from: 1.23,
        to: 1.23,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['propane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7.3,
                multiplicity: 't',
              },
            ],
            delta: 0.84,
            assignment: 'CH₃',
          },
        ],
        from: 0.84,
        to: 0.84,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7.3,
                multiplicity: 'sept',
              },
            ],
            delta: 1.26,
            assignment: 'CH₂',
          },
        ],
        from: 1.26,
        to: 1.26,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['2-propanol'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 6,
                multiplicity: 'd',
              },
            ],
            delta: 1.04,
            assignment: 'CH₃',
          },
        ],
        from: 1.04,
        to: 1.04,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 6,
                multiplicity: 'sept',
              },
            ],
            delta: 3.82,
            assignment: 'CH',
          },
        ],
        from: 3.82,
        to: 3.82,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['propylene'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 6.4,
                multiplicity: 'd',
              },
              {
                coupling: 1.5,
                multiplicity: 't',
              },
            ],
            delta: 1.58,
            assignment: 'CH₃',
          },
        ],
        from: 1.58,
        to: 1.58,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 10,
                multiplicity: 'd',
              },
            ],
            delta: 4.91,
            assignment: 'CH₂(1)',
          },
        ],
        from: 4.91,
        to: 4.91,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 17,
                multiplicity: 'd',
              },
            ],
            delta: 4.98,
            assignment: 'CH₂(2)',
          },
        ],
        from: 4.98,
        to: 4.98,
      },
      {
        signals: [
          {
            js: [],
            delta: 5.72,
            assignment: 'CH',
          },
        ],
        from: 5.72,
        to: 5.72,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['pyridine'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 8.51,
            assignment: 'CH(2,6)',
          },
        ],
        from: 8.51,
        to: 8.51,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.9,
            assignment: 'CH(3,5)',
          },
        ],
        from: 6.9,
        to: 6.9,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.25,
            assignment: 'CH(4)',
          },
        ],
        from: 7.25,
        to: 7.25,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['pyrrole'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 8.61,
            assignment: 'NH',
          },
        ],
        from: 8.61,
        to: 8.61,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.62,
            assignment: 'CH(2,5)',
          },
        ],
        from: 6.62,
        to: 6.62,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.27,
            assignment: 'CH(3,4)',
          },
        ],
        from: 6.27,
        to: 6.27,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['pyrrolidineʰ'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.64,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 2.64,
        to: 2.64,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.43,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 1.43,
        to: 1.43,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['silicone grease'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.14,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.14,
        to: 0.14,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['tetrahydrofuran'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.59,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 3.59,
        to: 3.59,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.55,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 1.55,
        to: 1.55,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['toluene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.16,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.16,
        to: 2.16,
      },
      {
        signals: [],
        from: 7.01,
        to: 7.08,
        multiplicity: 'm',
      },
      {
        signals: [],
        from: 7.1,
        to: 7.17,
        multiplicity: 'm',
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['triethylamine'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.93,
            assignment: 'CH₃',
          },
        ],
        from: 0.93,
        to: 0.93,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 2.39,
            assignment: 'CH₂',
          },
        ],
        from: 2.39,
        to: 2.39,
      },
    ],
    nucleus: '1H',
    solvent: 'C₆D₅Cl',
  },
  {
    names: ['water'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: null,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: null,
        to: null,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['acetic acid'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.96,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.96,
        to: 1.96,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['acetone'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.09,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.09,
        to: 2.09,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['acetonitrile'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.05,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.05,
        to: 2.05,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['benzene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.36,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.36,
        to: 7.36,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['tert -butyl alcohol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.18,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.18,
        to: 1.18,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['chloroform'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 8.02,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 8.02,
        to: 8.02,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['18-crown-6'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.59,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.59,
        to: 3.59,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['cyclohexane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.43,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 1.43,
        to: 1.43,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['1,2-dichloroethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.87,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.87,
        to: 3.87,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['dichloromethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 5.63,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 5.63,
        to: 5.63,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['diethyl ether'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.11,
            assignment: 'CH₃',
          },
        ],
        from: 1.11,
        to: 1.11,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.41,
            assignment: 'CH₂',
          },
        ],
        from: 3.41,
        to: 3.41,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['diglyme'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.56,
            assignment: 'CH₂',
          },
        ],
        from: 3.56,
        to: 3.56,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.47,
            assignment: 'CH₂',
          },
        ],
        from: 3.47,
        to: 3.47,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.28,
            multiplicity: 's',
            assignment: 'OCH₃',
          },
        ],
        from: 3.28,
        to: 3.28,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['dimethylformamide'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.96,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.96,
        to: 7.96,
      },
      {
        signals: [
          {
            js: [],
            delta: 2.94,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.94,
        to: 2.94,
      },
      {
        signals: [
          {
            js: [],
            delta: 2.78,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.78,
        to: 2.78,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['1,4-dioxane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.59,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.59,
        to: 3.59,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['DME'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.28,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.28,
        to: 3.28,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.46,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.46,
        to: 3.46,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['ethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.83,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.83,
        to: 0.83,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['ethanol'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.12,
            assignment: 'CH₃',
          },
        ],
        from: 1.12,
        to: 1.12,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.57,
            assignment: 'CH₂',
          },
        ],
        from: 3.57,
        to: 3.57,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.39,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 3.39,
        to: 3.39,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['ethyl acetate'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.97,
            multiplicity: 's',
            assignment: 'CH₃CO',
          },
        ],
        from: 1.97,
        to: 1.97,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 4.05,
            assignment: 'CH₂CH₃',
          },
        ],
        from: 4.05,
        to: 4.05,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.2,
            assignment: 'CH₂CH₃',
          },
        ],
        from: 1.2,
        to: 1.2,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['ethylene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 5.38,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 5.38,
        to: 5.38,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['ethylene glycol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.28,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.28,
        to: 3.28,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['H greaseᶠ'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.9,
            assignment: 'CH₃',
          },
        ],
        from: 0.9,
        to: 0.9,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.29,
            multiplicity: 'br s',
            assignment: 'CH₂',
          },
        ],
        from: 1.29,
        to: 1.29,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['hexamethylbenzene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.17,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.17,
        to: 2.17,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['n-hexane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.88,
            assignment: 'CH₃',
          },
        ],
        from: 0.88,
        to: 0.88,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.28,
            assignment: 'CH₂',
          },
        ],
        from: 1.28,
        to: 1.28,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['HMDSO'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.07,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.07,
        to: 0.07,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['HMPA'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 9.5,
                multiplicity: 'd',
              },
            ],
            delta: 2.59,
            assignment: 'CH₃',
          },
        ],
        from: 2.59,
        to: 2.59,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['hydrogen'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 4.54,
            multiplicity: 's',
            assignment: 'H₂',
          },
        ],
        from: 4.54,
        to: 4.54,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['imidazole'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.62,
            multiplicity: 's',
            assignment: 'CH(2)',
          },
        ],
        from: 7.62,
        to: 7.62,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.04,
            multiplicity: 's',
            assignment: 'CH(4,5)',
          },
        ],
        from: 7.04,
        to: 7.04,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['methane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.17,
            multiplicity: 's',
            assignment: 'CH₄',
          },
        ],
        from: 0.17,
        to: 0.17,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['methanol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.31,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.31,
        to: 3.31,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.12,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 3.12,
        to: 3.12,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['nitromethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 4.43,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 4.43,
        to: 4.43,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['n-pentane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.88,
            assignment: 'CH₃',
          },
        ],
        from: 0.88,
        to: 0.88,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.27,
            assignment: 'CH₂',
          },
        ],
        from: 1.27,
        to: 1.27,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['propane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7.3,
                multiplicity: 't',
              },
            ],
            delta: 0.88,
            assignment: 'CH₃',
          },
        ],
        from: 0.88,
        to: 0.88,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7.3,
                multiplicity: 'sept',
              },
            ],
            delta: 1.31,
            assignment: 'CH₂',
          },
        ],
        from: 1.31,
        to: 1.31,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['2-propanol'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 6,
                multiplicity: 'd',
              },
            ],
            delta: 1.1,
            assignment: 'CH₃',
          },
        ],
        from: 1.1,
        to: 1.1,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 6,
                multiplicity: 'sept',
              },
            ],
            delta: 3.9,
            assignment: 'CH',
          },
        ],
        from: 3.9,
        to: 3.9,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['propylene'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 6.4,
                multiplicity: 'd',
              },
              {
                coupling: 1.5,
                multiplicity: 't',
              },
            ],
            delta: 1.68,
            assignment: 'CH₃',
          },
        ],
        from: 1.68,
        to: 1.68,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 10,
                multiplicity: 'd',
              },
            ],
            delta: 4.9,
            assignment: 'CH₂(1)',
          },
        ],
        from: 4.9,
        to: 4.9,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 17,
                multiplicity: 'd',
              },
            ],
            delta: 5,
            assignment: 'CH₂(2)',
          },
        ],
        from: 5,
        to: 5,
      },
      {
        signals: [
          {
            js: [],
            delta: 5.81,
            assignment: 'CH',
          },
        ],
        from: 5.81,
        to: 5.81,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['pyridine'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 8.58,
            assignment: 'CH(2,6)',
          },
        ],
        from: 8.58,
        to: 8.58,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.35,
            assignment: 'CH(3,5)',
          },
        ],
        from: 7.35,
        to: 7.35,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.76,
            assignment: 'CH(4)',
          },
        ],
        from: 7.76,
        to: 7.76,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['pyrrole'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 10.02,
            assignment: 'NH',
          },
        ],
        from: 10.02,
        to: 10.02,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.77,
            assignment: 'CH(2,5)',
          },
        ],
        from: 6.77,
        to: 6.77,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.07,
            assignment: 'CH(3,4)',
          },
        ],
        from: 6.07,
        to: 6.07,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['pyrrolidineʰ'],
    ranges: [],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['silicone grease'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.13,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.13,
        to: 0.13,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['tetrahydrofuran'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.63,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 3.63,
        to: 3.63,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.79,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 1.79,
        to: 1.79,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['toluene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.32,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.32,
        to: 2.32,
      },
      {
        signals: [],
        from: 7.1,
        to: 7.2,
        multiplicity: 'm',
      },
      {
        signals: [],
        from: 7.1,
        to: 7.2,
        multiplicity: 'm',
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['triethylamine'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.96,
            assignment: 'CH₃',
          },
        ],
        from: 0.96,
        to: 0.96,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 2.45,
            assignment: 'CH₂',
          },
        ],
        from: 2.45,
        to: 2.45,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂CO',
  },
  {
    names: ['water'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: null,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: null,
        to: null,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['acetic acid'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.91,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.91,
        to: 1.91,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['acetone'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.09,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.09,
        to: 2.09,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['acetonitrile'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.07,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.07,
        to: 2.07,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['benzene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.37,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.37,
        to: 7.37,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['tert -butyl alcohol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.11,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.11,
        to: 1.11,
      },
      {
        signals: [
          {
            js: [],
            delta: 4.19,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 4.19,
        to: 4.19,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['chloroform'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 8.32,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 8.32,
        to: 8.32,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['18-crown-6'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.51,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.51,
        to: 3.51,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['cyclohexane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.4,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 1.4,
        to: 1.4,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['1,2-dichloroethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.9,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.9,
        to: 3.9,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['dichloromethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 5.76,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 5.76,
        to: 5.76,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['diethyl ether'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.09,
            assignment: 'CH₃',
          },
        ],
        from: 1.09,
        to: 1.09,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.38,
            assignment: 'CH₂',
          },
        ],
        from: 3.38,
        to: 3.38,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['diglyme'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.51,
            assignment: 'CH₂',
          },
        ],
        from: 3.51,
        to: 3.51,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.38,
            assignment: 'CH₂',
          },
        ],
        from: 3.38,
        to: 3.38,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.24,
            multiplicity: 's',
            assignment: 'OCH₃',
          },
        ],
        from: 3.24,
        to: 3.24,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['dimethylformamide'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.95,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.95,
        to: 7.95,
      },
      {
        signals: [
          {
            js: [],
            delta: 2.89,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.89,
        to: 2.89,
      },
      {
        signals: [
          {
            js: [],
            delta: 2.73,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.73,
        to: 2.73,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['1,4-dioxane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.57,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.57,
        to: 3.57,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['DME'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.24,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.24,
        to: 3.24,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.43,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.43,
        to: 3.43,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['ethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.82,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.82,
        to: 0.82,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['ethanol'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.06,
            assignment: 'CH₃',
          },
        ],
        from: 1.06,
        to: 1.06,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.44,
            assignment: 'CH₂',
          },
        ],
        from: 3.44,
        to: 3.44,
      },
      {
        signals: [
          {
            js: [],
            delta: 4.63,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 4.63,
        to: 4.63,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['ethyl acetate'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.99,
            multiplicity: 's',
            assignment: 'CH₃CO',
          },
        ],
        from: 1.99,
        to: 1.99,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 4.03,
            assignment: 'CH₂CH₃',
          },
        ],
        from: 4.03,
        to: 4.03,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.17,
            assignment: 'CH₂CH₃',
          },
        ],
        from: 1.17,
        to: 1.17,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['ethylene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 5.41,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 5.41,
        to: 5.41,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['ethylene glycol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.34,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.34,
        to: 3.34,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['H greaseᶠ'],
    ranges: [
      {
        signals: [],
        from: 0.82,
        to: 0.88,
        multiplicity: 'm',
      },
      {
        signals: [
          {
            js: [],
            delta: 1.24,
            multiplicity: 'br s',
            assignment: 'CH₂',
          },
        ],
        from: 1.24,
        to: 1.24,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['hexamethylbenzene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.14,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.14,
        to: 2.14,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['n-hexane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.86,
            assignment: 'CH₃',
          },
        ],
        from: 0.86,
        to: 0.86,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.25,
            assignment: 'CH₂',
          },
        ],
        from: 1.25,
        to: 1.25,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['HMDSO'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.06,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.06,
        to: 0.06,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['HMPA'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 9.5,
                multiplicity: 'd',
              },
            ],
            delta: 2.53,
            assignment: 'CH₃',
          },
        ],
        from: 2.53,
        to: 2.53,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['hydrogen'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 4.61,
            multiplicity: 's',
            assignment: 'H₂',
          },
        ],
        from: 4.61,
        to: 4.61,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['imidazole'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.63,
            multiplicity: 's',
            assignment: 'CH(2)',
          },
        ],
        from: 7.63,
        to: 7.63,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.01,
            multiplicity: 's',
            assignment: 'CH(4,5)',
          },
        ],
        from: 7.01,
        to: 7.01,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['methane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.2,
            multiplicity: 's',
            assignment: 'CH₄',
          },
        ],
        from: 0.2,
        to: 0.2,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['methanol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.16,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.16,
        to: 3.16,
      },
      {
        signals: [
          {
            js: [],
            delta: 4.01,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 4.01,
        to: 4.01,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['nitromethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 4.42,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 4.42,
        to: 4.42,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['n-pentane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.86,
            assignment: 'CH₃',
          },
        ],
        from: 0.86,
        to: 0.86,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.27,
            assignment: 'CH₂',
          },
        ],
        from: 1.27,
        to: 1.27,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['propane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7.3,
                multiplicity: 't',
              },
            ],
            delta: 0.87,
            assignment: 'CH₃',
          },
        ],
        from: 0.87,
        to: 0.87,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7.3,
                multiplicity: 'sept',
              },
            ],
            delta: 1.29,
            assignment: 'CH₂',
          },
        ],
        from: 1.29,
        to: 1.29,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['2-propanol'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 6,
                multiplicity: 'd',
              },
            ],
            delta: 1.04,
            assignment: 'CH₃',
          },
        ],
        from: 1.04,
        to: 1.04,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 6,
                multiplicity: 'sept',
              },
            ],
            delta: 3.78,
            assignment: 'CH',
          },
        ],
        from: 3.78,
        to: 3.78,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['propylene'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 6.4,
                multiplicity: 'd',
              },
              {
                coupling: 1.5,
                multiplicity: 't',
              },
            ],
            delta: 1.68,
            assignment: 'CH₃',
          },
        ],
        from: 1.68,
        to: 1.68,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 10,
                multiplicity: 'd',
              },
            ],
            delta: 4.94,
            assignment: 'CH₂(1)',
          },
        ],
        from: 4.94,
        to: 4.94,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 17,
                multiplicity: 'd',
              },
            ],
            delta: 5.03,
            assignment: 'CH₂(2)',
          },
        ],
        from: 5.03,
        to: 5.03,
      },
      {
        signals: [
          {
            js: [],
            delta: 5.8,
            assignment: 'CH',
          },
        ],
        from: 5.8,
        to: 5.8,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['pyridine'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 8.58,
            assignment: 'CH(2,6)',
          },
        ],
        from: 8.58,
        to: 8.58,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.39,
            assignment: 'CH(3,5)',
          },
        ],
        from: 7.39,
        to: 7.39,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.79,
            assignment: 'CH(4)',
          },
        ],
        from: 7.79,
        to: 7.79,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['pyrrole'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 10.75,
            assignment: 'NH',
          },
        ],
        from: 10.75,
        to: 10.75,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.73,
            assignment: 'CH(2,5)',
          },
        ],
        from: 6.73,
        to: 6.73,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.01,
            assignment: 'CH(3,4)',
          },
        ],
        from: 6.01,
        to: 6.01,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['pyrrolidineʰ'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.67,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 2.67,
        to: 2.67,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.55,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 1.55,
        to: 1.55,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['silicone grease'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: -0.06,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: -0.06,
        to: -0.06,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['tetrahydrofuran'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.6,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 3.6,
        to: 3.6,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.76,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 1.76,
        to: 1.76,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['toluene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.3,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.3,
        to: 2.3,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.18,
            assignment: 'CH(2,4,6)',
          },
        ],
        from: 7.18,
        to: 7.18,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.25,
            assignment: 'CH(3,5)',
          },
        ],
        from: 7.25,
        to: 7.25,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['triethylamine'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.93,
            assignment: 'CH₃',
          },
        ],
        from: 0.93,
        to: 0.93,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 2.43,
            assignment: 'CH₂',
          },
        ],
        from: 2.43,
        to: 2.43,
      },
    ],
    nucleus: '1H',
    solvent: '(CD₃)₂SO',
  },
  {
    names: ['water'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.13,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 2.13,
        to: 2.13,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['acetic acid'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.96,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.96,
        to: 1.96,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['acetone'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.08,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.08,
        to: 2.08,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['acetonitrile'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.96,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.96,
        to: 1.96,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['benzene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.37,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.37,
        to: 7.37,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['tert -butyl alcohol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.16,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.16,
        to: 1.16,
      },
      {
        signals: [
          {
            js: [],
            delta: 2.18,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 2.18,
        to: 2.18,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['chloroform'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.58,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.58,
        to: 7.58,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['18-crown-6'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.51,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.51,
        to: 3.51,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['cyclohexane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.44,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 1.44,
        to: 1.44,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['1,2-dichloroethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.81,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.81,
        to: 3.81,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['dichloromethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 5.44,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 5.44,
        to: 5.44,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['diethyl ether'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.12,
            assignment: 'CH₃',
          },
        ],
        from: 1.12,
        to: 1.12,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.42,
            assignment: 'CH₂',
          },
        ],
        from: 3.42,
        to: 3.42,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['diglyme'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.53,
            assignment: 'CH₂',
          },
        ],
        from: 3.53,
        to: 3.53,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.45,
            assignment: 'CH₂',
          },
        ],
        from: 3.45,
        to: 3.45,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.29,
            multiplicity: 's',
            assignment: 'OCH₃',
          },
        ],
        from: 3.29,
        to: 3.29,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['dimethylformamide'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.92,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.92,
        to: 7.92,
      },
      {
        signals: [
          {
            js: [],
            delta: 2.89,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.89,
        to: 2.89,
      },
      {
        signals: [
          {
            js: [],
            delta: 2.77,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.77,
        to: 2.77,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['1,4-dioxane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.6,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.6,
        to: 3.6,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['DME'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.28,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.28,
        to: 3.28,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.45,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.45,
        to: 3.45,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['ethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.85,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.85,
        to: 0.85,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['ethanol'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.12,
            assignment: 'CH₃',
          },
        ],
        from: 1.12,
        to: 1.12,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.54,
            assignment: 'CH₂',
          },
        ],
        from: 3.54,
        to: 3.54,
      },
      {
        signals: [
          {
            js: [],
            delta: 2.47,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 2.47,
        to: 2.47,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['ethyl acetate'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.97,
            multiplicity: 's',
            assignment: 'CH₃CO',
          },
        ],
        from: 1.97,
        to: 1.97,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 4.06,
            assignment: 'CH₂CH₃',
          },
        ],
        from: 4.06,
        to: 4.06,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.2,
            assignment: 'CH₂CH₃',
          },
        ],
        from: 1.2,
        to: 1.2,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['ethylene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 5.41,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 5.41,
        to: 5.41,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['ethylene glycol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.51,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.51,
        to: 3.51,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['H greaseᶠ'],
    ranges: [],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['hexamethylbenzene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.19,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.19,
        to: 2.19,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['n-hexane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.89,
            assignment: 'CH₃',
          },
        ],
        from: 0.89,
        to: 0.89,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.28,
            assignment: 'CH₂',
          },
        ],
        from: 1.28,
        to: 1.28,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['HMDSO'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.07,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.07,
        to: 0.07,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['HMPA'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 9.5,
                multiplicity: 'd',
              },
            ],
            delta: 2.57,
            assignment: 'CH₃',
          },
        ],
        from: 2.57,
        to: 2.57,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['hydrogen'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 4.57,
            multiplicity: 's',
            assignment: 'H₂',
          },
        ],
        from: 4.57,
        to: 4.57,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['imidazole'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.57,
            multiplicity: 's',
            assignment: 'CH(2)',
          },
        ],
        from: 7.57,
        to: 7.57,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.01,
            multiplicity: 's',
            assignment: 'CH(4,5)',
          },
        ],
        from: 7.01,
        to: 7.01,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['methane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.2,
            multiplicity: 's',
            assignment: 'CH₄',
          },
        ],
        from: 0.2,
        to: 0.2,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['methanol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.28,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.28,
        to: 3.28,
      },
      {
        signals: [
          {
            js: [],
            delta: 2.16,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 2.16,
        to: 2.16,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['nitromethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 4.31,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 4.31,
        to: 4.31,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['n-pentane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.89,
            assignment: 'CH₃',
          },
        ],
        from: 0.89,
        to: 0.89,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.29,
            assignment: 'CH₂',
          },
        ],
        from: 1.29,
        to: 1.29,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['propane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7.3,
                multiplicity: 't',
              },
            ],
            delta: 0.9,
            assignment: 'CH₃',
          },
        ],
        from: 0.9,
        to: 0.9,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7.3,
                multiplicity: 'sept',
              },
            ],
            delta: 1.33,
            assignment: 'CH₂',
          },
        ],
        from: 1.33,
        to: 1.33,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['2-propanol'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 6,
                multiplicity: 'd',
              },
            ],
            delta: 1.09,
            assignment: 'CH₃',
          },
        ],
        from: 1.09,
        to: 1.09,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 6,
                multiplicity: 'sept',
              },
            ],
            delta: 3.87,
            assignment: 'CH',
          },
        ],
        from: 3.87,
        to: 3.87,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['propylene'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 6.4,
                multiplicity: 'd',
              },
              {
                coupling: 1.5,
                multiplicity: 't',
              },
            ],
            delta: 1.7,
            assignment: 'CH₃',
          },
        ],
        from: 1.7,
        to: 1.7,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 10,
                multiplicity: 'd',
              },
            ],
            delta: 4.93,
            assignment: 'CH₂(1)',
          },
        ],
        from: 4.93,
        to: 4.93,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 17,
                multiplicity: 'd',
              },
            ],
            delta: 5.04,
            assignment: 'CH₂(2)',
          },
        ],
        from: 5.04,
        to: 5.04,
      },
      {
        signals: [
          {
            js: [],
            delta: 5.85,
            assignment: 'CH',
          },
        ],
        from: 5.85,
        to: 5.85,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['pyridine'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 8.57,
            assignment: 'CH(2,6)',
          },
        ],
        from: 8.57,
        to: 8.57,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.33,
            assignment: 'CH(3,5)',
          },
        ],
        from: 7.33,
        to: 7.33,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.73,
            assignment: 'CH(4)',
          },
        ],
        from: 7.73,
        to: 7.73,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['pyrrole'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 9.27,
            assignment: 'NH',
          },
        ],
        from: 9.27,
        to: 9.27,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.75,
            assignment: 'CH(2,5)',
          },
        ],
        from: 6.75,
        to: 6.75,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.1,
            assignment: 'CH(3,4)',
          },
        ],
        from: 6.1,
        to: 6.1,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['pyrrolidineʰ'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.75,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 2.75,
        to: 2.75,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.61,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 1.61,
        to: 1.61,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['silicone grease'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.08,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.08,
        to: 0.08,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['tetrahydrofuran'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.64,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 3.64,
        to: 3.64,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.8,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 1.8,
        to: 1.8,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['toluene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.33,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.33,
        to: 2.33,
      },
      {
        signals: [],
        from: 7.1,
        to: 7.3,
        multiplicity: 'm',
      },
      {
        signals: [],
        from: 7.1,
        to: 7.3,
        multiplicity: 'm',
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['triethylamine'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.96,
            assignment: 'CH₃',
          },
        ],
        from: 0.96,
        to: 0.96,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 2.45,
            assignment: 'CH₂',
          },
        ],
        from: 2.45,
        to: 2.45,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃CN',
  },
  {
    names: ['water'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.66,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 3.66,
        to: 3.66,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['acetic acid'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.06,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.06,
        to: 2.06,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['acetone'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.19,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.19,
        to: 2.19,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['acetonitrile'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.95,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.95,
        to: 1.95,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['benzene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.36,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.36,
        to: 7.36,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['tert -butyl alcohol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.28,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.28,
        to: 1.28,
      },
      {
        signals: [
          {
            js: [],
            delta: 2.2,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 2.2,
        to: 2.2,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['chloroform'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.33,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.33,
        to: 7.33,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['18-crown-6'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.64,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.64,
        to: 3.64,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['cyclohexane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.47,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 1.47,
        to: 1.47,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['1,2-dichloroethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.71,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.71,
        to: 3.71,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['dichloromethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 5.24,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 5.24,
        to: 5.24,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['diethyl ether'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.2,
            assignment: 'CH₃',
          },
        ],
        from: 1.2,
        to: 1.2,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.58,
            assignment: 'CH₂',
          },
        ],
        from: 3.58,
        to: 3.58,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['diglyme'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.67,
            assignment: 'CH₂',
          },
        ],
        from: 3.67,
        to: 3.67,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.62,
            assignment: 'CH₂',
          },
        ],
        from: 3.62,
        to: 3.62,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.41,
            multiplicity: 's',
            assignment: 'OCH₃',
          },
        ],
        from: 3.41,
        to: 3.41,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['dimethylformamide'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.86,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.86,
        to: 7.86,
      },
      {
        signals: [
          {
            js: [],
            delta: 2.98,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.98,
        to: 2.98,
      },
      {
        signals: [
          {
            js: [],
            delta: 2.88,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.88,
        to: 2.88,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['1,4-dioxane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.76,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.76,
        to: 3.76,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['DME'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.4,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.4,
        to: 3.4,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.61,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.61,
        to: 3.61,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['ethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.85,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.85,
        to: 0.85,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['ethanol'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.22,
            assignment: 'CH₃',
          },
        ],
        from: 1.22,
        to: 1.22,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.71,
            assignment: 'CH₂',
          },
        ],
        from: 3.71,
        to: 3.71,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['ethyl acetate'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.03,
            multiplicity: 's',
            assignment: 'CH₃CO',
          },
        ],
        from: 2.03,
        to: 2.03,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 4.14,
            assignment: 'CH₂CH₃',
          },
        ],
        from: 4.14,
        to: 4.14,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.26,
            assignment: 'CH₂CH₃',
          },
        ],
        from: 1.26,
        to: 1.26,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['ethylene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 5.4,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 5.4,
        to: 5.4,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['ethylene glycol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.72,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.72,
        to: 3.72,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['H greaseᶠ'],
    ranges: [
      {
        signals: [],
        from: 0.88,
        to: 0.94,
        multiplicity: 'm',
      },
      {
        signals: [
          {
            js: [],
            delta: 1.33,
            multiplicity: 'br s',
            assignment: 'CH₂',
          },
        ],
        from: 1.33,
        to: 1.33,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['hexamethylbenzene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.24,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.24,
        to: 2.24,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['n-hexane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.91,
            assignment: 'CH₃',
          },
        ],
        from: 0.91,
        to: 0.91,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.31,
            assignment: 'CH₂',
          },
        ],
        from: 1.31,
        to: 1.31,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['HMDSO'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.08,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.08,
        to: 0.08,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['HMPA'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 9.5,
                multiplicity: 'd',
              },
            ],
            delta: 2.63,
            assignment: 'CH₃',
          },
        ],
        from: 2.63,
        to: 2.63,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['hydrogen'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 4.53,
            multiplicity: 's',
            assignment: 'H₂',
          },
        ],
        from: 4.53,
        to: 4.53,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['imidazole'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.61,
            multiplicity: 's',
            assignment: 'CH(2)',
          },
        ],
        from: 7.61,
        to: 7.61,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.03,
            multiplicity: 's',
            assignment: 'CH(4,5)',
          },
        ],
        from: 7.03,
        to: 7.03,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['methane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.18,
            multiplicity: 's',
            assignment: 'CH₄',
          },
        ],
        from: 0.18,
        to: 0.18,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['methanol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.44,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.44,
        to: 3.44,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['nitromethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 4.28,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 4.28,
        to: 4.28,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['n-pentane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.9,
            assignment: 'CH₃',
          },
        ],
        from: 0.9,
        to: 0.9,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.33,
            assignment: 'CH₂',
          },
        ],
        from: 1.33,
        to: 1.33,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['propane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7.3,
                multiplicity: 't',
              },
            ],
            delta: 0.9,
            assignment: 'CH₃',
          },
        ],
        from: 0.9,
        to: 0.9,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7.3,
                multiplicity: 'sept',
              },
            ],
            delta: 1.33,
            assignment: 'CH₂',
          },
        ],
        from: 1.33,
        to: 1.33,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['2-propanol'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 6,
                multiplicity: 'd',
              },
            ],
            delta: 1.2,
            assignment: 'CH₃',
          },
        ],
        from: 1.2,
        to: 1.2,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 6,
                multiplicity: 'sept',
              },
            ],
            delta: 4.05,
            assignment: 'CH',
          },
        ],
        from: 4.05,
        to: 4.05,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['propylene'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 6.4,
                multiplicity: 'd',
              },
              {
                coupling: 1.5,
                multiplicity: 't',
              },
            ],
            delta: 1.7,
            assignment: 'CH₃',
          },
        ],
        from: 1.7,
        to: 1.7,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 10,
                multiplicity: 'd',
              },
            ],
            delta: 4.93,
            assignment: 'CH₂(1)',
          },
        ],
        from: 4.93,
        to: 4.93,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 17,
                multiplicity: 'd',
              },
            ],
            delta: 5.03,
            assignment: 'CH₂(2)',
          },
        ],
        from: 5.03,
        to: 5.03,
      },
      {
        signals: [
          {
            js: [],
            delta: 5.87,
            assignment: 'CH',
          },
        ],
        from: 5.87,
        to: 5.87,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['pyridine'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 8.45,
            assignment: 'CH(2,6)',
          },
        ],
        from: 8.45,
        to: 8.45,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.4,
            assignment: 'CH(3,5)',
          },
        ],
        from: 7.4,
        to: 7.4,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.82,
            assignment: 'CH(4)',
          },
        ],
        from: 7.82,
        to: 7.82,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['pyrrole'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 6.84,
            assignment: 'CH(2,5)',
          },
        ],
        from: 6.84,
        to: 6.84,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.24,
            assignment: 'CH(3,4)',
          },
        ],
        from: 6.24,
        to: 6.24,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['pyrrolidineʰ'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.11,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 3.11,
        to: 3.11,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.93,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 1.93,
        to: 1.93,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['silicone grease'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.16,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.16,
        to: 0.16,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['tetrahydrofuran'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.78,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 3.78,
        to: 3.78,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.91,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 1.91,
        to: 1.91,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['toluene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.33,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.33,
        to: 2.33,
      },
      {
        signals: [],
        from: 7.1,
        to: 7.3,
        multiplicity: 'm',
      },
      {
        signals: [],
        from: 7.1,
        to: 7.3,
        multiplicity: 'm',
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['triethylamine'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.31,
            assignment: 'CH₃',
          },
        ],
        from: 1.31,
        to: 1.31,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.12,
            assignment: 'CH₂',
          },
        ],
        from: 3.12,
        to: 3.12,
      },
    ],
    nucleus: '1H',
    solvent: 'TFE-d₃',
  },
  {
    names: ['water'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 4.87,
            multiplicity: 's',
            assignment: 'OH',
          },
        ],
        from: 4.87,
        to: 4.87,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['acetic acid'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.99,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.99,
        to: 1.99,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['acetone'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.15,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.15,
        to: 2.15,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['acetonitrile'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.03,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.03,
        to: 2.03,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['benzene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.33,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.33,
        to: 7.33,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['tert -butyl alcohol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.4,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.4,
        to: 1.4,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['chloroform'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.9,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.9,
        to: 7.9,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['18-crown-6'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.64,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.64,
        to: 3.64,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['cyclohexane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.45,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 1.45,
        to: 1.45,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['1,2-dichloroethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.78,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.78,
        to: 3.78,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['dichloromethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 5.49,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 5.49,
        to: 5.49,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['diethyl ether'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.18,
            assignment: 'CH₃',
          },
        ],
        from: 1.18,
        to: 1.18,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.49,
            assignment: 'CH₂',
          },
        ],
        from: 3.49,
        to: 3.49,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['diglyme'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.61,
            assignment: 'CH₂',
          },
        ],
        from: 3.61,
        to: 3.61,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.58,
            assignment: 'CH₂',
          },
        ],
        from: 3.58,
        to: 3.58,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.35,
            multiplicity: 's',
            assignment: 'OCH₃',
          },
        ],
        from: 3.35,
        to: 3.35,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['dimethylformamide'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.97,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.97,
        to: 7.97,
      },
      {
        signals: [
          {
            js: [],
            delta: 2.99,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.99,
        to: 2.99,
      },
      {
        signals: [
          {
            js: [],
            delta: 2.86,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.86,
        to: 2.86,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['1,4-dioxane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.66,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.66,
        to: 3.66,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['DME'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.35,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.35,
        to: 3.35,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.52,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.52,
        to: 3.52,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['ethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.85,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.85,
        to: 0.85,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['ethanol'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.19,
            assignment: 'CH₃',
          },
        ],
        from: 1.19,
        to: 1.19,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.6,
            assignment: 'CH₂',
          },
        ],
        from: 3.6,
        to: 3.6,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['ethyl acetate'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.01,
            multiplicity: 's',
            assignment: 'CH₃CO',
          },
        ],
        from: 2.01,
        to: 2.01,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 4.09,
            assignment: 'CH₂CH₃',
          },
        ],
        from: 4.09,
        to: 4.09,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.24,
            assignment: 'CH₂CH₃',
          },
        ],
        from: 1.24,
        to: 1.24,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['ethylene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 5.39,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 5.39,
        to: 5.39,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['ethylene glycol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.59,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.59,
        to: 3.59,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['H greaseᶠ'],
    ranges: [
      {
        signals: [],
        from: 0.86,
        to: 0.93,
        multiplicity: 'm',
      },
      {
        signals: [
          {
            js: [],
            delta: 1.29,
            multiplicity: 'br s',
            assignment: 'CH₂',
          },
        ],
        from: 1.29,
        to: 1.29,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['hexamethylbenzene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.19,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.19,
        to: 2.19,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['n-hexane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.9,
            assignment: 'CH₃',
          },
        ],
        from: 0.9,
        to: 0.9,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.29,
            assignment: 'CH₂',
          },
        ],
        from: 1.29,
        to: 1.29,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['HMDSO'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.07,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.07,
        to: 0.07,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['HMPA'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 9.5,
                multiplicity: 'd',
              },
            ],
            delta: 2.64,
            assignment: 'CH₃',
          },
        ],
        from: 2.64,
        to: 2.64,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['hydrogen'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 4.56,
            multiplicity: 's',
            assignment: 'H₂',
          },
        ],
        from: 4.56,
        to: 4.56,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['imidazole'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.67,
            multiplicity: 's',
            assignment: 'CH(2)',
          },
        ],
        from: 7.67,
        to: 7.67,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.05,
            multiplicity: 's',
            assignment: 'CH(4,5)',
          },
        ],
        from: 7.05,
        to: 7.05,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['methane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.2,
            multiplicity: 's',
            assignment: 'CH₄',
          },
        ],
        from: 0.2,
        to: 0.2,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['methanol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.34,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.34,
        to: 3.34,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['nitromethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 4.34,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 4.34,
        to: 4.34,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['n-pentane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.9,
            assignment: 'CH₃',
          },
        ],
        from: 0.9,
        to: 0.9,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.29,
            assignment: 'CH₂',
          },
        ],
        from: 1.29,
        to: 1.29,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['propane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7.3,
                multiplicity: 't',
              },
            ],
            delta: 0.91,
            assignment: 'CH₃',
          },
        ],
        from: 0.91,
        to: 0.91,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7.3,
                multiplicity: 'sept',
              },
            ],
            delta: 1.34,
            assignment: 'CH₂',
          },
        ],
        from: 1.34,
        to: 1.34,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['2-propanol'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 6,
                multiplicity: 'd',
              },
            ],
            delta: 1.5,
            assignment: 'CH₃',
          },
        ],
        from: 1.5,
        to: 1.5,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 6,
                multiplicity: 'sept',
              },
            ],
            delta: 3.92,
            assignment: 'CH',
          },
        ],
        from: 3.92,
        to: 3.92,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['propylene'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 6.4,
                multiplicity: 'd',
              },
              {
                coupling: 1.5,
                multiplicity: 't',
              },
            ],
            delta: 1.7,
            assignment: 'CH₃',
          },
        ],
        from: 1.7,
        to: 1.7,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 10,
                multiplicity: 'd',
              },
            ],
            delta: 4.91,
            assignment: 'CH₂(1)',
          },
        ],
        from: 4.91,
        to: 4.91,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 17,
                multiplicity: 'd',
              },
            ],
            delta: 5.01,
            assignment: 'CH₂(2)',
          },
        ],
        from: 5.01,
        to: 5.01,
      },
      {
        signals: [
          {
            js: [],
            delta: 5.82,
            assignment: 'CH',
          },
        ],
        from: 5.82,
        to: 5.82,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['pyridine'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 8.53,
            assignment: 'CH(2,6)',
          },
        ],
        from: 8.53,
        to: 8.53,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.44,
            assignment: 'CH(3,5)',
          },
        ],
        from: 7.44,
        to: 7.44,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.85,
            assignment: 'CH(4)',
          },
        ],
        from: 7.85,
        to: 7.85,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['pyrrole'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 6.72,
            assignment: 'CH(2,5)',
          },
        ],
        from: 6.72,
        to: 6.72,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.08,
            assignment: 'CH(3,4)',
          },
        ],
        from: 6.08,
        to: 6.08,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['pyrrolidineʰ'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.8,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 2.8,
        to: 2.8,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.72,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 1.72,
        to: 1.72,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['silicone grease'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.1,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.1,
        to: 0.1,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['tetrahydrofuran'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.71,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 3.71,
        to: 3.71,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.87,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 1.87,
        to: 1.87,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['toluene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.32,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.32,
        to: 2.32,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.16,
            assignment: 'CH(2,4,6)',
          },
        ],
        from: 7.16,
        to: 7.16,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.16,
            assignment: 'CH(3,5)',
          },
        ],
        from: 7.16,
        to: 7.16,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['triethylamine'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.05,
            assignment: 'CH₃',
          },
        ],
        from: 1.05,
        to: 1.05,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 2.58,
            assignment: 'CH₂',
          },
        ],
        from: 2.58,
        to: 2.58,
      },
    ],
    nucleus: '1H',
    solvent: 'CD₃OD',
  },
  {
    names: ['water'],
    ranges: [],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['acetic acid'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.08,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.08,
        to: 2.08,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['acetone'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.22,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.22,
        to: 2.22,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['acetonitrile'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.06,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.06,
        to: 2.06,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['benzene'],
    ranges: [],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['tert -butyl alcohol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 1.24,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 1.24,
        to: 1.24,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['chloroform'],
    ranges: [],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['18-crown-6'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.8,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.8,
        to: 3.8,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['cyclohexane'],
    ranges: [],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['1,2-dichloroethane'],
    ranges: [],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['dichloromethane'],
    ranges: [],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['diethyl ether'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.17,
            assignment: 'CH₃',
          },
        ],
        from: 1.17,
        to: 1.17,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.56,
            assignment: 'CH₂',
          },
        ],
        from: 3.56,
        to: 3.56,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['diglyme'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.67,
            assignment: 'CH₂',
          },
        ],
        from: 3.67,
        to: 3.67,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.61,
            assignment: 'CH₂',
          },
        ],
        from: 3.61,
        to: 3.61,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.37,
            multiplicity: 's',
            assignment: 'OCH₃',
          },
        ],
        from: 3.37,
        to: 3.37,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['dimethylformamide'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.92,
            multiplicity: 's',
            assignment: 'CH',
          },
        ],
        from: 7.92,
        to: 7.92,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.01,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.01,
        to: 3.01,
      },
      {
        signals: [
          {
            js: [],
            delta: 2.85,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 2.85,
        to: 2.85,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['1,4-dioxane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.75,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.75,
        to: 3.75,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['DME'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.37,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.37,
        to: 3.37,
      },
      {
        signals: [
          {
            js: [],
            delta: 3.6,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.6,
        to: 3.6,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['ethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.82,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.82,
        to: 0.82,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['ethanol'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.17,
            assignment: 'CH₃',
          },
        ],
        from: 1.17,
        to: 1.17,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 3.65,
            assignment: 'CH₂',
          },
        ],
        from: 3.65,
        to: 3.65,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['ethyl acetate'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 2.07,
            multiplicity: 's',
            assignment: 'CH₃CO',
          },
        ],
        from: 2.07,
        to: 2.07,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 4.14,
            assignment: 'CH₂CH₃',
          },
        ],
        from: 4.14,
        to: 4.14,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 1.24,
            assignment: 'CH₂CH₃',
          },
        ],
        from: 1.24,
        to: 1.24,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['ethylene'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 5.44,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 5.44,
        to: 5.44,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['ethylene glycol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.65,
            multiplicity: 's',
            assignment: 'CH₂',
          },
        ],
        from: 3.65,
        to: 3.65,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['H greaseᶠ'],
    ranges: [],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['hexamethylbenzene'],
    ranges: [],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['n-hexane'],
    ranges: [],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['HMDSO'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.28,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 0.28,
        to: 0.28,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['HMPA'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 9.5,
                multiplicity: 'd',
              },
            ],
            delta: 2.61,
            assignment: 'CH₃',
          },
        ],
        from: 2.61,
        to: 2.61,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['hydrogen'],
    ranges: [],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['imidazole'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 7.78,
            multiplicity: 's',
            assignment: 'CH(2)',
          },
        ],
        from: 7.78,
        to: 7.78,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.14,
            multiplicity: 's',
            assignment: 'CH(4,5)',
          },
        ],
        from: 7.14,
        to: 7.14,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['methane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 0.18,
            multiplicity: 's',
            assignment: 'CH₄',
          },
        ],
        from: 0.18,
        to: 0.18,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['methanol'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.34,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 3.34,
        to: 3.34,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['nitromethane'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 4.4,
            multiplicity: 's',
            assignment: 'CH₃',
          },
        ],
        from: 4.4,
        to: 4.4,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['n-pentane'],
    ranges: [],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['propane'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7.3,
                multiplicity: 't',
              },
            ],
            delta: 0.88,
            assignment: 'CH₃',
          },
        ],
        from: 0.88,
        to: 0.88,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7.3,
                multiplicity: 'sept',
              },
            ],
            delta: 1.3,
            assignment: 'CH₂',
          },
        ],
        from: 1.3,
        to: 1.3,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['2-propanol'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 6,
                multiplicity: 'd',
              },
            ],
            delta: 1.17,
            assignment: 'CH₃',
          },
        ],
        from: 1.17,
        to: 1.17,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 6,
                multiplicity: 'sept',
              },
            ],
            delta: 4.02,
            assignment: 'CH',
          },
        ],
        from: 4.02,
        to: 4.02,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['propylene'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 6.4,
                multiplicity: 'd',
              },
              {
                coupling: 1.5,
                multiplicity: 't',
              },
            ],
            delta: 1.7,
            assignment: 'CH₃',
          },
        ],
        from: 1.7,
        to: 1.7,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 10,
                multiplicity: 'd',
              },
            ],
            delta: 4.95,
            assignment: 'CH₂(1)',
          },
        ],
        from: 4.95,
        to: 4.95,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 17,
                multiplicity: 'd',
              },
            ],
            delta: 5.06,
            assignment: 'CH₂(2)',
          },
        ],
        from: 5.06,
        to: 5.06,
      },
      {
        signals: [
          {
            js: [],
            delta: 5.9,
            assignment: 'CH',
          },
        ],
        from: 5.9,
        to: 5.9,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['pyridine'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 8.52,
            assignment: 'CH(2,6)',
          },
        ],
        from: 8.52,
        to: 8.52,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.45,
            assignment: 'CH(3,5)',
          },
        ],
        from: 7.45,
        to: 7.45,
      },
      {
        signals: [
          {
            js: [],
            delta: 7.87,
            assignment: 'CH(4)',
          },
        ],
        from: 7.87,
        to: 7.87,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['pyrrole'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 6.93,
            assignment: 'CH(2,5)',
          },
        ],
        from: 6.93,
        to: 6.93,
      },
      {
        signals: [
          {
            js: [],
            delta: 6.26,
            assignment: 'CH(3,4)',
          },
        ],
        from: 6.26,
        to: 6.26,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['pyrrolidineʰ'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.07,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 3.07,
        to: 3.07,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.87,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 1.87,
        to: 1.87,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['silicone grease'],
    ranges: [],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['tetrahydrofuran'],
    ranges: [
      {
        signals: [
          {
            js: [],
            delta: 3.74,
            assignment: 'CH₂(2,5)',
          },
        ],
        from: 3.74,
        to: 3.74,
      },
      {
        signals: [
          {
            js: [],
            delta: 1.88,
            assignment: 'CH₂(3,4)',
          },
        ],
        from: 1.88,
        to: 1.88,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['toluene'],
    ranges: [],
    nucleus: '1H',
    solvent: 'D₂O',
  },
  {
    names: ['triethylamine'],
    ranges: [
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 't',
              },
            ],
            delta: 0.99,
            assignment: 'CH₃',
          },
        ],
        from: 0.99,
        to: 0.99,
      },
      {
        signals: [
          {
            js: [
              {
                coupling: 7,
                multiplicity: 'q',
              },
            ],
            delta: 2.57,
            assignment: 'CH₂',
          },
        ],
        from: 2.57,
        to: 2.57,
      },
    ],
    nucleus: '1H',
    solvent: 'D₂O',
  },
];
