export const protonImpurities = [
    {
        names: ['water'],
        smiles: 'O',
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
                integration: 2,
                from: 2.45625,
                to: 2.46375,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['acetic acid'],
        smiles: 'CC(=O)O',
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
                integration: 3,
                from: 1.88625,
                to: 1.8937499999999998,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['acetone'],
        smiles: 'CC(=O)C',
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
                integration: 6,
                from: 2.0462499999999997,
                to: 2.05375,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['acetonitrile'],
        smiles: 'CC#N',
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
                integration: 3,
                from: 1.94625,
                to: 1.9537499999999999,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['benzene'],
        smiles: 'c1ccccc1',
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
                integration: 6,
                from: 7.3062499999999995,
                to: 7.31375,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['tert -butyl alcohol'],
        smiles: 'CC(C)(C)O',
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
                integration: 9,
                from: 1.14625,
                to: 1.1537499999999998,
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
                integration: 1,
                from: 3.15625,
                to: 3.1637500000000003,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['chloroform'],
        smiles: 'ClC(Cl)Cl',
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
                integration: 1,
                from: 7.8862499999999995,
                to: 7.89375,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['18-crown-6'],
        smiles: 'C1COCCOCCOCCOCCOCCO1',
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
                integration: 24,
                from: 3.5662499999999997,
                to: 3.57375,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['cyclohexane'],
        smiles: 'C1CCCCC1',
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
                integration: 12,
                from: 1.43625,
                to: 1.4437499999999999,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['1,2-dichloroethane'],
        smiles: 'ClCCCl',
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
                integration: 4,
                from: 3.76625,
                to: 3.77375,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['dichloromethane'],
        smiles: 'ClCCl',
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
                integration: 2,
                from: 5.50625,
                to: 5.51375,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['diethyl ether'],
        smiles: 'CCOCC',
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
                integration: 6,
                from: 1.0987500000000001,
                to: 1.14125,
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
                integration: 4,
                from: 3.35,
                to: 3.4099999999999997,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['diglyme'],
        smiles: 'COCCOCCOC',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.43,
                        assignment: 'CH₂',
                    },
                ],
                integration: 4,
                from: 3.42625,
                to: 3.4337500000000003,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 3.53,
                        assignment: 'CH₂',
                    },
                ],
                integration: 4,
                from: 3.5262499999999997,
                to: 3.53375,
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
                integration: 6,
                from: 3.2762499999999997,
                to: 3.28375,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['dimethylformamide'],
        smiles: 'C(=O)N(C)C',
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
                integration: 1,
                from: 7.90625,
                to: 7.91375,
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
                integration: 3,
                from: 2.8762499999999998,
                to: 2.88375,
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
                integration: 3,
                from: 2.7562499999999996,
                to: 2.76375,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['1,4-dioxane'],
        smiles: 'C1COCCOC1',
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
                integration: 8,
                from: 3.55625,
                to: 3.56375,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['DME', 'diethyl ether'],
        smiles: 'CCOCC',
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
                integration: 6,
                from: 3.2762499999999997,
                to: 3.28375,
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
                integration: 4,
                from: 3.42625,
                to: 3.4337500000000003,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['ethane'],
        smiles: 'CC',
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
                integration: 6,
                from: 0.84625,
                to: 0.85375,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['ethanol'],
        smiles: 'CCO',
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
                integration: 3,
                from: 1.07875,
                to: 1.12125,
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
                integration: 2,
                from: 3.48,
                to: 3.5399999999999996,
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
                integration: 1,
                from: 3.2962499999999997,
                to: 3.30375,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['ethyl acetate'],
        smiles: 'CC(=O)CC',
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
                integration: 3,
                from: 1.93625,
                to: 1.9437499999999999,
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
                integration: 2,
                from: 4.01,
                to: 4.07,
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
                integration: 3,
                from: 1.16875,
                to: 1.21125,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['ethylene'],
        smiles: 'C=C',
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
                integration: 4,
                from: 5.35625,
                to: 5.3637500000000005,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['ethylene glycol'],
        smiles: 'OCCO',
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
                integration: 4,
                from: 3.47625,
                to: 3.48375,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['H greaseᶠ'],
        smiles: '',
        ranges: [
            {
                signals: [],
                integration: 6,
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
                integration: 10,
                from: 1.2862500000000001,
                to: 1.29375,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['hexamethylbenzene'],
        smiles: 'CC1=C(C(=C(C(=C1C)C)C)C)C',
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
                integration: 18,
                from: 2.17625,
                to: 2.1837500000000003,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['n-hexane'],
        smiles: 'CCCCCC',
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
                integration: 6,
                from: 0.86875,
                to: 0.91125,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.29,
                        assignment: 'CH₂',
                    },
                ],
                integration: 8,
                from: 1.2862500000000001,
                to: 1.29375,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['HMDSO'],
        smiles: 'C[Si](C)(C)O[Si](C)(C)C',
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
                integration: 18,
                from: 0.06625,
                to: 0.07375000000000001,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['HMPA'],
        smiles: 'CN(C)P(=O)(N(C)C)N(C)C',
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
                integration: 18,
                from: 2.564375,
                to: 2.595625,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['hydrogen'],
        smiles: '',
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
                integration: 2,
                from: 4.54625,
                to: 4.55375,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['imidazole'],
        smiles: 'C1=CN=CN1',
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
                integration: 1,
                from: 7.47625,
                to: 7.483750000000001,
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
                integration: 2,
                from: 6.93625,
                to: 6.9437500000000005,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['methane'],
        smiles: 'C',
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
                integration: 4,
                from: 0.18625,
                to: 0.19375,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['methanol'],
        smiles: 'CO',
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
                integration: 3,
                from: 3.26625,
                to: 3.27375,
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
                integration: 1,
                from: 3.01625,
                to: 3.02375,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['nitromethane'],
        smiles: 'C[N+](=O)[O-]',
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
                integration: 3,
                from: 4.3062499999999995,
                to: 4.31375,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['n-pentane'],
        smiles: 'CCCCC',
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
                integration: 6,
                from: 0.86875,
                to: 0.91125,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.31,
                        assignment: 'CH₂',
                    },
                ],
                integration: 6,
                from: 1.3062500000000001,
                to: 1.31375,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['propane'],
        smiles: 'CCC',
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
                integration: 6,
                from: 0.878,
                to: 0.922,
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
                integration: 2,
                from: 1.2715,
                to: 1.3885,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['2-propanol'],
        smiles: 'CC(O)C',
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
                integration: 6,
                from: 1.06875,
                to: 1.09125,
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
                integration: 1,
                from: 3.7712499999999998,
                to: 3.86875,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['propylene'],
        smiles: 'CC=C',
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
                integration: 3,
                from: 1.6744999999999999,
                to: 1.7055,
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
                integration: 1,
                from: 4.873749999999999,
                to: 4.90625,
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
                integration: 1,
                from: 4.965,
                to: 5.015000000000001,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 5.79,
                        assignment: 'CH',
                    },
                ],
                integration: 1,
                from: 5.78625,
                to: 5.79375,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['pyridine'],
        smiles: 'C1=CC=NC=C1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 8.54,
                        assignment: 'CH(2,6)',
                    },
                ],
                integration: 2,
                from: 8.536249999999999,
                to: 8.54375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.25,
                        assignment: 'CH(3,5)',
                    },
                ],
                integration: 2,
                from: 7.24625,
                to: 7.25375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.65,
                        assignment: 'CH(4)',
                    },
                ],
                integration: 1,
                from: 7.64625,
                to: 7.6537500000000005,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['pyrrole'],
        smiles: 'C1=CNC=C1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 9.96,
                        assignment: 'NH',
                    },
                ],
                integration: 1,
                from: 9.95625,
                to: 9.963750000000001,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 6.66,
                        assignment: 'CH(2,5)',
                    },
                ],
                integration: 2,
                from: 6.65625,
                to: 6.66375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 6.02,
                        assignment: 'CH(3,4)',
                    },
                ],
                integration: 2,
                from: 6.016249999999999,
                to: 6.02375,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['pyrrolidine'],
        smiles: 'C1CCNC1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 2.75,
                        assignment: 'CH₂(2,5)',
                    },
                ],
                integration: 4,
                from: 2.74625,
                to: 2.75375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.59,
                        assignment: 'CH₂(3,4)',
                    },
                ],
                integration: 4,
                from: 1.5862500000000002,
                to: 1.59375,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['silicone grease'],
        smiles: '',
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
                integration: 6,
                from: 0.10625,
                to: 0.11375,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['tetrahydrofuran'],
        smiles: 'C1COCC1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.62,
                        assignment: 'CH₂(2,5)',
                    },
                ],
                integration: 4,
                from: 3.61625,
                to: 3.6237500000000002,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.79,
                        assignment: 'CH₂(3,4)',
                    },
                ],
                integration: 4,
                from: 1.7862500000000001,
                to: 1.79375,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['toluene'],
        smiles: 'Cc1ccccc1',
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
                integration: 3,
                from: 2.30625,
                to: 2.31375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.1,
                        assignment: 'CH(2,4,6)',
                    },
                ],
                integration: 3,
                from: 7.0962499999999995,
                to: 7.10375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.19,
                        assignment: 'CH(3,5)',
                    },
                ],
                integration: 2,
                from: 7.18625,
                to: 7.1937500000000005,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['triethylamine'],
        smiles: 'CCN(CC)CC',
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
                integration: 6,
                from: 0.94875,
                to: 0.99125,
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
                integration: 4,
                from: 2.43,
                to: 2.4899999999999998,
            },
        ],
        nucleus: '1H',
        solvent: 'THF-d₈',
    },
    {
        names: ['water'],
        smiles: 'O',
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
                integration: 2,
                from: 1.51625,
                to: 1.52375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['acetic acid'],
        smiles: 'CC(=O)O',
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
                integration: 3,
                from: 2.05625,
                to: 2.06375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['acetone'],
        smiles: 'CC(=O)C',
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
                integration: 6,
                from: 2.11625,
                to: 2.1237500000000002,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['acetonitrile'],
        smiles: 'CC#N',
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
                integration: 3,
                from: 1.96625,
                to: 1.97375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['benzene'],
        smiles: 'c1ccccc1',
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
                integration: 6,
                from: 7.3462499999999995,
                to: 7.35375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['tert -butyl alcohol'],
        smiles: 'CC(C)(C)O',
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
                integration: 9,
                from: 1.23625,
                to: 1.24375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['chloroform'],
        smiles: 'ClC(Cl)Cl',
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
                integration: 1,
                from: 7.31625,
                to: 7.32375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['18-crown-6'],
        smiles: 'C1COCCOCCOCCOCCOCCO1',
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
                integration: 24,
                from: 3.5862499999999997,
                to: 3.59375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['cyclohexane'],
        smiles: 'C1CCCCC1',
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
                integration: 12,
                from: 1.43625,
                to: 1.4437499999999999,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['1,2-dichloroethane'],
        smiles: 'ClCCCl',
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
                integration: 4,
                from: 3.7562499999999996,
                to: 3.76375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['dichloromethane'],
        smiles: 'ClCCl',
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
                integration: 2,
                from: 5.32625,
                to: 5.33375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['diethyl ether'],
        smiles: 'CCOCC',
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
                integration: 6,
                from: 1.12875,
                to: 1.17125,
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
                integration: 4,
                from: 3.4000000000000004,
                to: 3.46,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['diglyme'],
        smiles: 'COCCOCCOC',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.57,
                        assignment: 'CH₂',
                    },
                ],
                integration: 4,
                from: 3.5662499999999997,
                to: 3.57375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 3.5,
                        assignment: 'CH₂',
                    },
                ],
                integration: 4,
                from: 3.49625,
                to: 3.50375,
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
                integration: 6,
                from: 3.32625,
                to: 3.33375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['dimethylformamide'],
        smiles: 'C(=O)N(C)C',
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
                integration: 1,
                from: 7.95625,
                to: 7.96375,
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
                integration: 3,
                from: 2.90625,
                to: 2.9137500000000003,
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
                integration: 3,
                from: 2.8162499999999997,
                to: 2.82375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['1,4-dioxane'],
        smiles: 'C1COCCOC1',
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
                integration: 8,
                from: 3.6462499999999998,
                to: 3.65375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['DME', 'diethyl ether'],
        smiles: 'CCOCC',
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
                integration: 6,
                from: 3.3362499999999997,
                to: 3.34375,
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
                integration: 4,
                from: 3.48625,
                to: 3.4937500000000004,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['ethane'],
        smiles: 'CC',
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
                integration: 6,
                from: 0.84625,
                to: 0.85375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['ethanol'],
        smiles: 'CCO',
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
                integration: 3,
                from: 1.16875,
                to: 1.21125,
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
                integration: 2,
                from: 3.6300000000000003,
                to: 3.69,
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
                integration: 1,
                from: 1.3262500000000002,
                to: 1.33375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['ethyl acetate'],
        smiles: 'CC(=O)CC',
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
                integration: 3,
                from: 1.99625,
                to: 2.00375,
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
                integration: 2,
                from: 4.05,
                to: 4.11,
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
                integration: 3,
                from: 1.20875,
                to: 1.25125,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['ethylene'],
        smiles: 'C=C',
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
                integration: 4,
                from: 5.39625,
                to: 5.4037500000000005,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['ethylene glycol'],
        smiles: 'OCCO',
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
                integration: 4,
                from: 3.65625,
                to: 3.6637500000000003,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['H greaseᶠ'],
        smiles: '',
        ranges: [
            {
                signals: [],
                integration: 6,
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
                integration: 10,
                from: 1.26625,
                to: 1.27375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['hexamethylbenzene'],
        smiles: 'CC1=C(C(=C(C(=C1C)C)C)C)C',
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
                integration: 18,
                from: 2.19625,
                to: 2.2037500000000003,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['n-hexane'],
        smiles: 'CCCCCC',
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
                integration: 6,
                from: 0.86875,
                to: 0.91125,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.27,
                        assignment: 'CH₂',
                    },
                ],
                integration: 8,
                from: 1.26625,
                to: 1.27375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['HMDSO'],
        smiles: 'C[Si](C)(C)O[Si](C)(C)C',
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
                integration: 18,
                from: 0.06625,
                to: 0.07375000000000001,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['HMPA'],
        smiles: 'CN(C)P(=O)(N(C)C)N(C)C',
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
                integration: 18,
                from: 2.584375,
                to: 2.615625,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['hydrogen'],
        smiles: '',
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
                integration: 2,
                from: 4.58625,
                to: 4.59375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['imidazole'],
        smiles: 'C1=CN=CN1',
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
                integration: 1,
                from: 7.62625,
                to: 7.63375,
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
                integration: 2,
                from: 7.06625,
                to: 7.07375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['methane'],
        smiles: 'C',
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
                integration: 4,
                from: 0.20625,
                to: 0.21375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['methanol'],
        smiles: 'CO',
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
                integration: 3,
                from: 3.41625,
                to: 3.42375,
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
                integration: 1,
                from: 1.0862500000000002,
                to: 1.09375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['nitromethane'],
        smiles: 'C[N+](=O)[O-]',
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
                integration: 3,
                from: 4.3062499999999995,
                to: 4.31375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['n-pentane'],
        smiles: 'CCCCC',
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
                integration: 6,
                from: 0.86875,
                to: 0.91125,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.3,
                        assignment: 'CH₂',
                    },
                ],
                integration: 6,
                from: 1.2962500000000001,
                to: 1.30375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['propane'],
        smiles: 'CCC',
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
                integration: 6,
                from: 0.878,
                to: 0.922,
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
                integration: 2,
                from: 1.2615,
                to: 1.3785,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['2-propanol'],
        smiles: 'CC(O)C',
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
                integration: 6,
                from: 1.15875,
                to: 1.18125,
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
                integration: 1,
                from: 3.92125,
                to: 4.01875,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['propylene'],
        smiles: 'CC=C',
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
                integration: 3,
                from: 1.6945,
                to: 1.7255,
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
                integration: 1,
                from: 4.913749999999999,
                to: 4.94625,
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
                integration: 1,
                from: 5.005,
                to: 5.055000000000001,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 5.84,
                        assignment: 'CH',
                    },
                ],
                integration: 1,
                from: 5.83625,
                to: 5.84375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['pyridine'],
        smiles: 'C1=CC=NC=C1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 8.59,
                        assignment: 'CH(2,6)',
                    },
                ],
                integration: 2,
                from: 8.58625,
                to: 8.59375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.28,
                        assignment: 'CH(3,5)',
                    },
                ],
                integration: 2,
                from: 7.27625,
                to: 7.28375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.68,
                        assignment: 'CH(4)',
                    },
                ],
                integration: 1,
                from: 7.67625,
                to: 7.68375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['pyrrole'],
        smiles: 'C1=CNC=C1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 8.69,
                        assignment: 'NH',
                    },
                ],
                integration: 1,
                from: 8.68625,
                to: 8.69375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 6.79,
                        assignment: 'CH(2,5)',
                    },
                ],
                integration: 2,
                from: 6.78625,
                to: 6.79375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 6.19,
                        assignment: 'CH(3,4)',
                    },
                ],
                integration: 2,
                from: 6.18625,
                to: 6.1937500000000005,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['pyrrolidine'],
        smiles: 'C1CCNC1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 2.82,
                        assignment: 'CH₂(2,5)',
                    },
                ],
                integration: 4,
                from: 2.8162499999999997,
                to: 2.82375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.67,
                        assignment: 'CH₂(3,4)',
                    },
                ],
                integration: 4,
                from: 1.66625,
                to: 1.6737499999999998,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['silicone grease'],
        smiles: '',
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
                integration: 6,
                from: 0.08625,
                to: 0.09375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['tetrahydrofuran'],
        smiles: 'C1COCC1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.69,
                        assignment: 'CH₂(2,5)',
                    },
                ],
                integration: 4,
                from: 3.68625,
                to: 3.69375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.82,
                        assignment: 'CH₂(3,4)',
                    },
                ],
                integration: 4,
                from: 1.8162500000000001,
                to: 1.82375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['toluene'],
        smiles: 'Cc1ccccc1',
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
                integration: 3,
                from: 2.3362499999999997,
                to: 2.34375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.15,
                        assignment: 'CH(2,4,6)',
                    },
                ],
                integration: 3,
                from: 7.14625,
                to: 7.1537500000000005,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.24,
                        assignment: 'CH(3,5)',
                    },
                ],
                integration: 2,
                from: 7.23625,
                to: 7.24375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['triethylamine'],
        smiles: 'CCN(CC)CC',
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
                integration: 6,
                from: 0.96875,
                to: 1.01125,
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
                integration: 4,
                from: 2.45,
                to: 2.51,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₂Cl₂',
    },
    {
        names: ['water'],
        smiles: 'O',
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
                integration: 2,
                from: 1.5562500000000001,
                to: 1.56375,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['acetic acid'],
        smiles: 'CC(=O)O',
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
                integration: 3,
                from: 2.09625,
                to: 2.1037500000000002,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['acetone'],
        smiles: 'CC(=O)C',
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
                integration: 6,
                from: 2.16625,
                to: 2.17375,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['acetonitrile'],
        smiles: 'CC#N',
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
                integration: 3,
                from: 2.09625,
                to: 2.1037500000000002,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['benzene'],
        smiles: 'c1ccccc1',
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
                integration: 6,
                from: 7.35625,
                to: 7.3637500000000005,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['tert -butyl alcohol'],
        smiles: 'CC(C)(C)O',
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
                integration: 9,
                from: 1.27625,
                to: 1.28375,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['chloroform'],
        smiles: 'ClC(Cl)Cl',
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
                integration: 1,
                from: 7.25625,
                to: 7.26375,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['18-crown-6'],
        smiles: 'C1COCCOCCOCCOCCOCCO1',
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
                integration: 24,
                from: 3.66625,
                to: 3.67375,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['cyclohexane'],
        smiles: 'C1CCCCC1',
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
                integration: 12,
                from: 1.42625,
                to: 1.4337499999999999,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['1,2-dichloroethane'],
        smiles: 'ClCCCl',
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
                integration: 4,
                from: 3.72625,
                to: 3.73375,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['dichloromethane'],
        smiles: 'ClCCl',
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
                integration: 2,
                from: 5.29625,
                to: 5.30375,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['diethyl ether'],
        smiles: 'CCOCC',
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
                integration: 6,
                from: 1.18875,
                to: 1.23125,
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
                integration: 4,
                from: 3.45,
                to: 3.51,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['diglyme'],
        smiles: 'COCCOCCOC',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.65,
                        assignment: 'CH₂',
                    },
                ],
                integration: 4,
                from: 3.6462499999999998,
                to: 3.65375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 3.57,
                        assignment: 'CH₂',
                    },
                ],
                integration: 4,
                from: 3.5662499999999997,
                to: 3.57375,
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
                integration: 6,
                from: 3.38625,
                to: 3.3937500000000003,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['dimethylformamide'],
        smiles: 'C(=O)N(C)C',
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
                integration: 1,
                from: 8.01625,
                to: 8.02375,
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
                integration: 3,
                from: 2.95625,
                to: 2.96375,
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
                integration: 3,
                from: 2.8762499999999998,
                to: 2.88375,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['1,4-dioxane'],
        smiles: 'C1COCCOC1',
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
                integration: 8,
                from: 3.70625,
                to: 3.71375,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['DME', 'diethyl ether'],
        smiles: 'CCOCC',
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
                integration: 6,
                from: 3.3962499999999998,
                to: 3.40375,
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
                integration: 4,
                from: 3.5462499999999997,
                to: 3.55375,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['ethane'],
        smiles: 'CC',
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
                integration: 6,
                from: 0.86625,
                to: 0.87375,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['ethanol'],
        smiles: 'CCO',
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
                integration: 3,
                from: 1.22875,
                to: 1.27125,
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
                integration: 2,
                from: 3.6900000000000004,
                to: 3.75,
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
                integration: 1,
                from: 1.3162500000000001,
                to: 1.32375,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['ethyl acetate'],
        smiles: 'CC(=O)CC',
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
                integration: 3,
                from: 2.0462499999999997,
                to: 2.05375,
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
                integration: 2,
                from: 4.09,
                to: 4.15,
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
                integration: 3,
                from: 1.23875,
                to: 1.28125,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['ethylene'],
        smiles: 'C=C',
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
                integration: 4,
                from: 5.39625,
                to: 5.4037500000000005,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['ethylene glycol'],
        smiles: 'OCCO',
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
                integration: 4,
                from: 3.7562499999999996,
                to: 3.76375,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['H greaseᶠ'],
        smiles: '',
        ranges: [
            {
                signals: [],
                integration: 6,
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
                integration: 10,
                from: 1.24625,
                to: 1.25375,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['hexamethylbenzene'],
        smiles: 'CC1=C(C(=C(C(=C1C)C)C)C)C',
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
                integration: 18,
                from: 2.23625,
                to: 2.2437500000000004,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['n-hexane'],
        smiles: 'CCCCCC',
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
                integration: 6,
                from: 0.85875,
                to: 0.90125,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.26,
                        assignment: 'CH₂',
                    },
                ],
                integration: 8,
                from: 1.25625,
                to: 1.26375,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['HMDSO'],
        smiles: 'C[Si](C)(C)O[Si](C)(C)C',
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
                integration: 18,
                from: 0.06625,
                to: 0.07375000000000001,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['HMPA'],
        smiles: 'CN(C)P(=O)(N(C)C)N(C)C',
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
                integration: 18,
                from: 2.634375,
                to: 2.665625,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['hydrogen'],
        smiles: '',
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
                integration: 2,
                from: 4.61625,
                to: 4.62375,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['imidazole'],
        smiles: 'C1=CN=CN1',
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
                integration: 1,
                from: 7.66625,
                to: 7.67375,
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
                integration: 2,
                from: 7.0962499999999995,
                to: 7.10375,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['methane'],
        smiles: 'C',
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
                integration: 4,
                from: 0.21625,
                to: 0.22375,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['methanol'],
        smiles: 'CO',
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
                integration: 3,
                from: 3.48625,
                to: 3.4937500000000004,
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
                integration: 1,
                from: 1.0862500000000002,
                to: 1.09375,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['nitromethane'],
        smiles: 'C[N+](=O)[O-]',
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
                integration: 3,
                from: 4.32625,
                to: 4.33375,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['n-pentane'],
        smiles: 'CCCCC',
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
                integration: 6,
                from: 0.85875,
                to: 0.90125,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.27,
                        assignment: 'CH₂',
                    },
                ],
                integration: 6,
                from: 1.26625,
                to: 1.27375,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['propane'],
        smiles: 'CCC',
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
                integration: 6,
                from: 0.878,
                to: 0.922,
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
                integration: 2,
                from: 1.2615,
                to: 1.3785,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['2-propanol'],
        smiles: 'CC(O)C',
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
                integration: 6,
                from: 1.20875,
                to: 1.23125,
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
                integration: 1,
                from: 3.99125,
                to: 4.08875,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['propylene'],
        smiles: 'CC=C',
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
                integration: 3,
                from: 1.7145,
                to: 1.7455,
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
                integration: 1,
                from: 4.92375,
                to: 4.956250000000001,
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
                integration: 1,
                from: 5.005,
                to: 5.055000000000001,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 5.83,
                        assignment: 'CH',
                    },
                ],
                integration: 1,
                from: 5.82625,
                to: 5.83375,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['pyridine'],
        smiles: 'C1=CC=NC=C1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 8.62,
                        assignment: 'CH(2,6)',
                    },
                ],
                integration: 2,
                from: 8.616249999999999,
                to: 8.62375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.29,
                        assignment: 'CH(3,5)',
                    },
                ],
                integration: 2,
                from: 7.28625,
                to: 7.29375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.68,
                        assignment: 'CH(4)',
                    },
                ],
                integration: 1,
                from: 7.67625,
                to: 7.68375,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['pyrrole'],
        smiles: 'C1=CNC=C1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 8.4,
                        assignment: 'NH',
                    },
                ],
                integration: 1,
                from: 8.39625,
                to: 8.40375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 6.83,
                        assignment: 'CH(2,5)',
                    },
                ],
                integration: 2,
                from: 6.82625,
                to: 6.83375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 6.26,
                        assignment: 'CH(3,4)',
                    },
                ],
                integration: 2,
                from: 6.25625,
                to: 6.26375,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['pyrrolidine'],
        smiles: 'C1CCNC1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 2.87,
                        assignment: 'CH₂(2,5)',
                    },
                ],
                integration: 4,
                from: 2.86625,
                to: 2.8737500000000002,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.68,
                        assignment: 'CH₂(3,4)',
                    },
                ],
                integration: 4,
                from: 1.67625,
                to: 1.6837499999999999,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['silicone grease'],
        smiles: '',
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
                integration: 6,
                from: 0.06625,
                to: 0.07375000000000001,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['tetrahydrofuran'],
        smiles: 'C1COCC1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.76,
                        assignment: 'CH₂(2,5)',
                    },
                ],
                integration: 4,
                from: 3.7562499999999996,
                to: 3.76375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.85,
                        assignment: 'CH₂(3,4)',
                    },
                ],
                integration: 4,
                from: 1.8462500000000002,
                to: 1.85375,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['toluene'],
        smiles: 'Cc1ccccc1',
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
                integration: 3,
                from: 2.3562499999999997,
                to: 2.36375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.17,
                        assignment: 'CH(2,4,6)',
                    },
                ],
                integration: 3,
                from: 7.16625,
                to: 7.17375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.25,
                        assignment: 'CH(3,5)',
                    },
                ],
                integration: 2,
                from: 7.24625,
                to: 7.25375,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['triethylamine'],
        smiles: 'CCN(CC)CC',
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
                integration: 6,
                from: 1.00875,
                to: 1.05125,
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
                integration: 4,
                from: 2.5,
                to: 2.5599999999999996,
            },
        ],
        nucleus: '1H',
        solvent: 'CDCl₃',
    },
    {
        names: ['water'],
        smiles: 'O',
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
                integration: 2,
                from: 0.42625,
                to: 0.43374999999999997,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['acetic acid'],
        smiles: 'CC(=O)O',
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
                integration: 3,
                from: 1.5662500000000001,
                to: 1.57375,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['acetone'],
        smiles: 'CC(=O)C',
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
                integration: 6,
                from: 1.5662500000000001,
                to: 1.57375,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['acetonitrile'],
        smiles: 'CC#N',
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
                integration: 3,
                from: 0.6862499999999999,
                to: 0.69375,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['benzene'],
        smiles: 'c1ccccc1',
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
                integration: 6,
                from: 7.11625,
                to: 7.12375,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['tert -butyl alcohol'],
        smiles: 'CC(C)(C)O',
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
                integration: 9,
                from: 1.02625,
                to: 1.03375,
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
                integration: 1,
                from: 0.5762499999999999,
                to: 0.58375,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['chloroform'],
        smiles: 'ClC(Cl)Cl',
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
                integration: 1,
                from: 6.0962499999999995,
                to: 6.10375,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['18-crown-6'],
        smiles: 'C1COCCOCCOCCOCCOCCO1',
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
                integration: 24,
                from: 3.3562499999999997,
                to: 3.36375,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['cyclohexane'],
        smiles: 'C1CCCCC1',
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
                integration: 12,
                from: 1.39625,
                to: 1.4037499999999998,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['1,2-dichloroethane'],
        smiles: 'ClCCCl',
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
                integration: 4,
                from: 2.90625,
                to: 2.9137500000000003,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['dichloromethane'],
        smiles: 'ClCCl',
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
                integration: 2,
                from: 4.31625,
                to: 4.32375,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['diethyl ether'],
        smiles: 'CCOCC',
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
                integration: 6,
                from: 1.07875,
                to: 1.12125,
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
                integration: 4,
                from: 3.22,
                to: 3.28,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['diglyme'],
        smiles: 'COCCOCCOC',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.43,
                        assignment: 'CH₂',
                    },
                ],
                integration: 4,
                from: 3.42625,
                to: 3.4337500000000003,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 3.31,
                        assignment: 'CH₂',
                    },
                ],
                integration: 4,
                from: 3.30625,
                to: 3.31375,
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
                integration: 6,
                from: 3.11625,
                to: 3.1237500000000002,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['dimethylformamide'],
        smiles: 'C(=O)N(C)C',
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
                integration: 1,
                from: 7.56625,
                to: 7.57375,
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
                integration: 3,
                from: 2.36625,
                to: 2.3737500000000002,
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
                integration: 3,
                from: 1.95625,
                to: 1.9637499999999999,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['1,4-dioxane'],
        smiles: 'C1COCCOC1',
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
                integration: 8,
                from: 3.32625,
                to: 3.33375,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['DME', 'diethyl ether'],
        smiles: 'CCOCC',
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
                integration: 6,
                from: 3.11625,
                to: 3.1237500000000002,
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
                integration: 4,
                from: 3.30625,
                to: 3.31375,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['ethane'],
        smiles: 'CC',
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
                integration: 6,
                from: 0.80625,
                to: 0.8137500000000001,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['ethanol'],
        smiles: 'CCO',
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
                integration: 3,
                from: 0.94875,
                to: 0.99125,
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
                integration: 2,
                from: 3.33,
                to: 3.3899999999999997,
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
                integration: 1,
                from: 0.8262499999999999,
                to: 0.83375,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['ethyl acetate'],
        smiles: 'CC(=O)CC',
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
                integration: 3,
                from: 1.68625,
                to: 1.6937499999999999,
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
                integration: 2,
                from: 3.8400000000000003,
                to: 3.9,
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
                integration: 3,
                from: 0.91875,
                to: 0.9612499999999999,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['ethylene'],
        smiles: 'C=C',
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
                integration: 4,
                from: 5.24625,
                to: 5.25375,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['ethylene glycol'],
        smiles: 'OCCO',
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
                integration: 4,
                from: 3.3562499999999997,
                to: 3.36375,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['H greaseᶠ'],
        smiles: '',
        ranges: [
            {
                signals: [],
                integration: 6,
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
                integration: 10,
                from: 1.3262500000000002,
                to: 1.33375,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['hexamethylbenzene'],
        smiles: 'CC1=C(C(=C(C(=C1C)C)C)C)C',
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
                integration: 18,
                from: 2.09625,
                to: 2.1037500000000002,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['n-hexane'],
        smiles: 'CCCCCC',
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
                integration: 6,
                from: 0.85875,
                to: 0.90125,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.22,
                        assignment: 'CH₂',
                    },
                ],
                integration: 8,
                from: 1.21625,
                to: 1.22375,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['HMDSO'],
        smiles: 'C[Si](C)(C)O[Si](C)(C)C',
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
                integration: 18,
                from: 0.09625,
                to: 0.10375000000000001,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['HMPA'],
        smiles: 'CN(C)P(=O)(N(C)C)N(C)C',
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
                integration: 18,
                from: 2.404375,
                to: 2.435625,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['hydrogen'],
        smiles: '',
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
                integration: 2,
                from: 4.49625,
                to: 4.50375,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['imidazole'],
        smiles: 'C1=CN=CN1',
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
                integration: 1,
                from: 7.29625,
                to: 7.30375,
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
                integration: 2,
                from: 6.85625,
                to: 6.8637500000000005,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['methane'],
        smiles: 'C',
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
                integration: 4,
                from: 0.16625,
                to: 0.17375000000000002,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['methanol'],
        smiles: 'CO',
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
                integration: 3,
                from: 3.0262499999999997,
                to: 3.03375,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['nitromethane'],
        smiles: 'C[N+](=O)[O-]',
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
                integration: 3,
                from: 3.0062499999999996,
                to: 3.01375,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['n-pentane'],
        smiles: 'CCCCC',
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
                integration: 6,
                from: 0.84875,
                to: 0.89125,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.25,
                        assignment: 'CH₂',
                    },
                ],
                integration: 6,
                from: 1.24625,
                to: 1.25375,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['propane'],
        smiles: 'CCC',
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
                integration: 6,
                from: 0.868,
                to: 0.912,
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
                integration: 2,
                from: 1.2615,
                to: 1.3785,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['2-propanol'],
        smiles: 'CC(O)C',
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
                integration: 6,
                from: 0.93875,
                to: 0.9612499999999999,
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
                integration: 1,
                from: 3.60125,
                to: 3.69875,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['propylene'],
        smiles: 'CC=C',
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
                integration: 3,
                from: 1.5345,
                to: 1.5655000000000001,
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
                integration: 1,
                from: 4.90375,
                to: 4.93625,
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
                integration: 1,
                from: 4.955,
                to: 5.005000000000001,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 5.7,
                        assignment: 'CH',
                    },
                ],
                integration: 1,
                from: 5.69625,
                to: 5.70375,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['pyridine'],
        smiles: 'C1=CC=NC=C1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 8.47,
                        assignment: 'CH(2,6)',
                    },
                ],
                integration: 2,
                from: 8.46625,
                to: 8.47375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 6.67,
                        assignment: 'CH(3,5)',
                    },
                ],
                integration: 2,
                from: 6.66625,
                to: 6.67375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 6.99,
                        assignment: 'CH(4)',
                    },
                ],
                integration: 1,
                from: 6.98625,
                to: 6.99375,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['pyrrole'],
        smiles: 'C1=CNC=C1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 7.71,
                        assignment: 'NH',
                    },
                ],
                integration: 1,
                from: 7.70625,
                to: 7.71375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 6.43,
                        assignment: 'CH(2,5)',
                    },
                ],
                integration: 2,
                from: 6.42625,
                to: 6.43375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 6.27,
                        assignment: 'CH(3,4)',
                    },
                ],
                integration: 2,
                from: 6.266249999999999,
                to: 6.27375,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['pyrrolidine'],
        smiles: 'C1CCNC1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 2.54,
                        assignment: 'CH₂(2,5)',
                    },
                ],
                integration: 4,
                from: 2.53625,
                to: 2.54375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.36,
                        assignment: 'CH₂(3,4)',
                    },
                ],
                integration: 4,
                from: 1.3562500000000002,
                to: 1.36375,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['silicone grease'],
        smiles: '',
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
                integration: 6,
                from: 0.25625000000000003,
                to: 0.26375,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['tetrahydrofuran'],
        smiles: 'C1COCC1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.54,
                        assignment: 'CH₂(2,5)',
                    },
                ],
                integration: 4,
                from: 3.53625,
                to: 3.54375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.43,
                        assignment: 'CH₂(3,4)',
                    },
                ],
                integration: 4,
                from: 1.42625,
                to: 1.4337499999999999,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['toluene'],
        smiles: 'Cc1ccccc1',
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
                integration: 3,
                from: 2.1062499999999997,
                to: 2.11375,
            },
            {
                signals: [],
                integration: 3,
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
                integration: 2,
                from: 7.08625,
                to: 7.09375,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['triethylamine'],
        smiles: 'CCN(CC)CC',
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
                integration: 6,
                from: 0.92875,
                to: 0.97125,
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
                integration: 4,
                from: 2.3600000000000003,
                to: 2.42,
            },
        ],
        nucleus: '1H',
        solvent: 'toluene-d₈',
    },
    {
        names: ['water'],
        smiles: 'O',
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
                integration: 2,
                from: 0.39625000000000005,
                to: 0.40375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['acetic acid'],
        smiles: 'CC(=O)O',
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
                integration: 3,
                from: 1.51625,
                to: 1.52375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['acetone'],
        smiles: 'CC(=O)C',
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
                integration: 6,
                from: 1.5462500000000001,
                to: 1.55375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['acetonitrile'],
        smiles: 'CC#N',
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
                integration: 3,
                from: 0.5762499999999999,
                to: 0.58375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['benzene'],
        smiles: 'c1ccccc1',
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
                integration: 6,
                from: 7.14625,
                to: 7.1537500000000005,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['tert -butyl alcohol'],
        smiles: 'CC(C)(C)O',
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
                integration: 9,
                from: 1.0462500000000001,
                to: 1.05375,
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
                integration: 1,
                from: 0.62625,
                to: 0.63375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['chloroform'],
        smiles: 'ClC(Cl)Cl',
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
                integration: 1,
                from: 6.14625,
                to: 6.1537500000000005,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['18-crown-6'],
        smiles: 'C1COCCOCCOCCOCCOCCO1',
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
                integration: 24,
                from: 3.38625,
                to: 3.3937500000000003,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['cyclohexane'],
        smiles: 'C1CCCCC1',
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
                integration: 12,
                from: 1.39625,
                to: 1.4037499999999998,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['1,2-dichloroethane'],
        smiles: 'ClCCCl',
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
                integration: 4,
                from: 2.8962499999999998,
                to: 2.90375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['dichloromethane'],
        smiles: 'ClCCl',
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
                integration: 2,
                from: 4.266249999999999,
                to: 4.27375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['diethyl ether'],
        smiles: 'CCOCC',
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
                integration: 6,
                from: 1.08875,
                to: 1.13125,
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
                integration: 4,
                from: 3.23,
                to: 3.2899999999999996,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['diglyme'],
        smiles: 'COCCOCCOC',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.46,
                        assignment: 'CH₂',
                    },
                ],
                integration: 4,
                from: 3.45625,
                to: 3.46375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 3.34,
                        assignment: 'CH₂',
                    },
                ],
                integration: 4,
                from: 3.3362499999999997,
                to: 3.34375,
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
                integration: 6,
                from: 3.1062499999999997,
                to: 3.11375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['dimethylformamide'],
        smiles: 'C(=O)N(C)C',
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
                integration: 1,
                from: 7.62625,
                to: 7.63375,
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
                integration: 3,
                from: 2.3562499999999997,
                to: 2.36375,
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
                integration: 3,
                from: 1.8562500000000002,
                to: 1.86375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['1,4-dioxane'],
        smiles: 'C1COCCOC1',
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
                integration: 8,
                from: 3.34625,
                to: 3.3537500000000002,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['DME', 'diethyl ether'],
        smiles: 'CCOCC',
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
                integration: 6,
                from: 3.11625,
                to: 3.1237500000000002,
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
                integration: 4,
                from: 3.32625,
                to: 3.33375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['ethane'],
        smiles: 'CC',
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
                integration: 6,
                from: 0.79625,
                to: 0.8037500000000001,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['ethanol'],
        smiles: 'CCO',
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
                integration: 3,
                from: 0.93875,
                to: 0.98125,
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
                integration: 2,
                from: 3.31,
                to: 3.3699999999999997,
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
                integration: 1,
                from: 0.49625,
                to: 0.50375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['ethyl acetate'],
        smiles: 'CC(=O)CC',
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
                integration: 3,
                from: 1.64625,
                to: 1.6537499999999998,
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
                integration: 2,
                from: 3.8600000000000003,
                to: 3.92,
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
                integration: 3,
                from: 0.89875,
                to: 0.94125,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['ethylene'],
        smiles: 'C=C',
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
                integration: 4,
                from: 5.24625,
                to: 5.25375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['ethylene glycol'],
        smiles: 'OCCO',
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
                integration: 4,
                from: 3.40625,
                to: 3.4137500000000003,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['H greaseᶠ'],
        smiles: '',
        ranges: [
            {
                signals: [],
                integration: 6,
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
                integration: 10,
                from: 1.3162500000000001,
                to: 1.32375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['hexamethylbenzene'],
        smiles: 'CC1=C(C(=C(C(=C1C)C)C)C)C',
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
                integration: 18,
                from: 2.1262499999999998,
                to: 2.13375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['n-hexane'],
        smiles: 'CCCCCC',
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
                integration: 6,
                from: 0.86875,
                to: 0.91125,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.24,
                        assignment: 'CH₂',
                    },
                ],
                integration: 8,
                from: 1.23625,
                to: 1.24375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['HMDSO'],
        smiles: 'C[Si](C)(C)O[Si](C)(C)C',
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
                integration: 18,
                from: 0.11624999999999999,
                to: 0.12375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['HMPA'],
        smiles: 'CN(C)P(=O)(N(C)C)N(C)C',
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
                integration: 18,
                from: 2.384375,
                to: 2.415625,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['hydrogen'],
        smiles: '',
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
                integration: 2,
                from: 4.46625,
                to: 4.47375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['imidazole'],
        smiles: 'C1=CN=CN1',
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
                integration: 1,
                from: 7.32625,
                to: 7.33375,
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
                integration: 2,
                from: 6.89625,
                to: 6.9037500000000005,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['methane'],
        smiles: 'C',
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
                integration: 4,
                from: 0.15625,
                to: 0.16375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['methanol'],
        smiles: 'CO',
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
                integration: 3,
                from: 3.0662499999999997,
                to: 3.07375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['nitromethane'],
        smiles: 'C[N+](=O)[O-]',
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
                integration: 3,
                from: 2.93625,
                to: 2.94375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['n-pentane'],
        smiles: 'CCCCC',
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
                integration: 6,
                from: 0.84875,
                to: 0.89125,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.23,
                        assignment: 'CH₂',
                    },
                ],
                integration: 6,
                from: 1.22625,
                to: 1.23375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['propane'],
        smiles: 'CCC',
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
                integration: 6,
                from: 0.838,
                to: 0.882,
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
                integration: 2,
                from: 1.2015,
                to: 1.3185,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['2-propanol'],
        smiles: 'CC(O)C',
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
                integration: 6,
                from: 0.93875,
                to: 0.9612499999999999,
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
                integration: 1,
                from: 3.62125,
                to: 3.71875,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['propylene'],
        smiles: 'CC=C',
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
                integration: 3,
                from: 1.5345,
                to: 1.5655000000000001,
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
                integration: 1,
                from: 4.93375,
                to: 4.9662500000000005,
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
                integration: 1,
                from: 4.984999999999999,
                to: 5.035,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 5.72,
                        assignment: 'CH',
                    },
                ],
                integration: 1,
                from: 5.71625,
                to: 5.72375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['pyridine'],
        smiles: 'C1=CC=NC=C1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 8.53,
                        assignment: 'CH(2,6)',
                    },
                ],
                integration: 2,
                from: 8.52625,
                to: 8.53375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 6.66,
                        assignment: 'CH(3,5)',
                    },
                ],
                integration: 2,
                from: 6.65625,
                to: 6.66375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 6.98,
                        assignment: 'CH(4)',
                    },
                ],
                integration: 1,
                from: 6.97625,
                to: 6.983750000000001,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['pyrrole'],
        smiles: 'C1=CNC=C1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 7.8,
                        assignment: 'NH',
                    },
                ],
                integration: 1,
                from: 7.79625,
                to: 7.80375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 6.48,
                        assignment: 'CH(2,5)',
                    },
                ],
                integration: 2,
                from: 6.47625,
                to: 6.483750000000001,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 6.37,
                        assignment: 'CH(3,4)',
                    },
                ],
                integration: 2,
                from: 6.36625,
                to: 6.37375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['pyrrolidine'],
        smiles: 'C1CCNC1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 2.54,
                        assignment: 'CH₂(2,5)',
                    },
                ],
                integration: 4,
                from: 2.53625,
                to: 2.54375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.33,
                        assignment: 'CH₂(3,4)',
                    },
                ],
                integration: 4,
                from: 1.3262500000000002,
                to: 1.33375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['silicone grease'],
        smiles: '',
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
                integration: 6,
                from: 0.28625,
                to: 0.29374999999999996,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['tetrahydrofuran'],
        smiles: 'C1COCC1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.57,
                        assignment: 'CH₂(2,5)',
                    },
                ],
                integration: 4,
                from: 3.5662499999999997,
                to: 3.57375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.4,
                        assignment: 'CH₂(3,4)',
                    },
                ],
                integration: 4,
                from: 1.39625,
                to: 1.4037499999999998,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['toluene'],
        smiles: 'Cc1ccccc1',
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
                integration: 3,
                from: 2.1062499999999997,
                to: 2.11375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.02,
                        assignment: 'CH(2,4,6)',
                    },
                ],
                integration: 3,
                from: 7.016249999999999,
                to: 7.02375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.13,
                        assignment: 'CH(3,5)',
                    },
                ],
                integration: 2,
                from: 7.12625,
                to: 7.13375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['triethylamine'],
        smiles: 'CCN(CC)CC',
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
                integration: 6,
                from: 0.93875,
                to: 0.98125,
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
                integration: 4,
                from: 2.37,
                to: 2.4299999999999997,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₆',
    },
    {
        names: ['water'],
        smiles: 'O',
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
                integration: 2,
                from: 1.02625,
                to: 1.03375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['acetic acid'],
        smiles: 'CC(=O)O',
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
                integration: 3,
                from: 1.75625,
                to: 1.76375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['acetone'],
        smiles: 'CC(=O)C',
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
                integration: 6,
                from: 1.76625,
                to: 1.77375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['acetonitrile'],
        smiles: 'CC#N',
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
                integration: 3,
                from: 1.20625,
                to: 1.2137499999999999,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['benzene'],
        smiles: 'c1ccccc1',
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
                integration: 6,
                from: 7.19625,
                to: 7.20375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['tert -butyl alcohol'],
        smiles: 'CC(C)(C)O',
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
                integration: 9,
                from: 1.1162500000000002,
                to: 1.12375,
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
                integration: 1,
                from: 1.2962500000000001,
                to: 1.30375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['chloroform'],
        smiles: 'ClC(Cl)Cl',
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
                integration: 1,
                from: 6.73625,
                to: 6.74375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['18-crown-6'],
        smiles: 'C1COCCOCCOCCOCCOCCO1',
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
                integration: 24,
                from: 3.40625,
                to: 3.4137500000000003,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['cyclohexane'],
        smiles: 'C1CCCCC1',
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
                integration: 12,
                from: 1.3662500000000002,
                to: 1.37375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['1,2-dichloroethane'],
        smiles: 'ClCCCl',
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
                integration: 4,
                from: 3.2562499999999996,
                to: 3.26375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['dichloromethane'],
        smiles: 'ClCCl',
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
                integration: 2,
                from: 4.766249999999999,
                to: 4.77375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['diethyl ether'],
        smiles: 'CCOCC',
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
                integration: 6,
                from: 1.07875,
                to: 1.12125,
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
                integration: 4,
                from: 3.2800000000000002,
                to: 3.34,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['diglyme'],
        smiles: 'COCCOCCOC',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.49,
                        assignment: 'CH₂',
                    },
                ],
                integration: 4,
                from: 3.48625,
                to: 3.4937500000000004,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 3.37,
                        assignment: 'CH₂',
                    },
                ],
                integration: 4,
                from: 3.36625,
                to: 3.3737500000000002,
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
                integration: 6,
                from: 3.15625,
                to: 3.1637500000000003,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['dimethylformamide'],
        smiles: 'C(=O)N(C)C',
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
                integration: 1,
                from: 7.72625,
                to: 7.733750000000001,
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
                integration: 3,
                from: 2.5062499999999996,
                to: 2.51375,
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
                integration: 3,
                from: 2.2962499999999997,
                to: 2.30375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['1,4-dioxane'],
        smiles: 'C1COCCOC1',
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
                integration: 8,
                from: 3.44625,
                to: 3.4537500000000003,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['DME', 'diethyl ether'],
        smiles: 'CCOCC',
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
                integration: 6,
                from: 3.16625,
                to: 3.17375,
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
                integration: 4,
                from: 3.36625,
                to: 3.3737500000000002,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['ethane'],
        smiles: 'CC',
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
                integration: 6,
                from: 0.78625,
                to: 0.7937500000000001,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['ethanol'],
        smiles: 'CCO',
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
                integration: 3,
                from: 1.03875,
                to: 1.08125,
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
                integration: 2,
                from: 3.48,
                to: 3.5399999999999996,
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
                integration: 1,
                from: 1.38625,
                to: 1.3937499999999998,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['ethyl acetate'],
        smiles: 'CC(=O)CC',
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
                integration: 3,
                from: 1.77625,
                to: 1.78375,
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
                integration: 2,
                from: 3.93,
                to: 3.9899999999999998,
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
                integration: 3,
                from: 1.01875,
                to: 1.06125,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['ethylene'],
        smiles: 'C=C',
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
                integration: 4,
                from: 5.28625,
                to: 5.29375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['ethylene glycol'],
        smiles: 'OCCO',
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
                integration: 4,
                from: 3.57625,
                to: 3.58375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['H greaseᶠ'],
        smiles: '',
        ranges: [
            {
                signals: [],
                integration: 6,
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
                integration: 10,
                from: 1.2962500000000001,
                to: 1.30375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['hexamethylbenzene'],
        smiles: 'CC1=C(C(=C(C(=C1C)C)C)C)C',
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
                integration: 18,
                from: 2.09625,
                to: 2.1037500000000002,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['n-hexane'],
        smiles: 'CCCCCC',
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
                integration: 6,
                from: 0.82875,
                to: 0.87125,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.19,
                        assignment: 'CH₂',
                    },
                ],
                integration: 8,
                from: 1.18625,
                to: 1.1937499999999999,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['HMDSO'],
        smiles: 'C[Si](C)(C)O[Si](C)(C)C',
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
                integration: 18,
                from: 0.09625,
                to: 0.10375000000000001,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['HMPA'],
        smiles: 'CN(C)P(=O)(N(C)C)N(C)C',
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
                integration: 18,
                from: 2.454375,
                to: 2.485625,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['hydrogen'],
        smiles: '',
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
                integration: 2,
                from: 4.48625,
                to: 4.49375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['imidazole'],
        smiles: 'C1=CN=CN1',
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
                integration: 1,
                from: 7.52625,
                to: 7.53375,
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
                integration: 2,
                from: 7.00625,
                to: 7.01375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['methane'],
        smiles: 'C',
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
                integration: 4,
                from: 0.14625,
                to: 0.15375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['methanol'],
        smiles: 'CO',
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
                integration: 3,
                from: 3.24625,
                to: 3.25375,
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
                integration: 1,
                from: 1.2962500000000001,
                to: 1.30375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['nitromethane'],
        smiles: 'C[N+](=O)[O-]',
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
                integration: 3,
                from: 3.5862499999999997,
                to: 3.59375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['n-pentane'],
        smiles: 'CCCCC',
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
                integration: 6,
                from: 0.81875,
                to: 0.86125,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.23,
                        assignment: 'CH₂',
                    },
                ],
                integration: 6,
                from: 1.22625,
                to: 1.23375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['propane'],
        smiles: 'CCC',
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
                integration: 6,
                from: 0.818,
                to: 0.862,
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
                integration: 2,
                from: 1.2015,
                to: 1.3185,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['2-propanol'],
        smiles: 'CC(O)C',
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
                integration: 6,
                from: 1.02875,
                to: 1.05125,
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
                integration: 1,
                from: 3.7712499999999998,
                to: 3.86875,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['propylene'],
        smiles: 'CC=C',
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
                integration: 3,
                from: 1.5645,
                to: 1.5955000000000001,
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
                integration: 1,
                from: 4.89375,
                to: 4.9262500000000005,
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
                integration: 1,
                from: 4.955,
                to: 5.005000000000001,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 5.72,
                        assignment: 'CH',
                    },
                ],
                integration: 1,
                from: 5.71625,
                to: 5.72375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['pyridine'],
        smiles: 'C1=CC=NC=C1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 8.51,
                        assignment: 'CH(2,6)',
                    },
                ],
                integration: 2,
                from: 8.50625,
                to: 8.51375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 6.9,
                        assignment: 'CH(3,5)',
                    },
                ],
                integration: 2,
                from: 6.89625,
                to: 6.9037500000000005,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.25,
                        assignment: 'CH(4)',
                    },
                ],
                integration: 1,
                from: 7.24625,
                to: 7.25375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['pyrrole'],
        smiles: 'C1=CNC=C1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 8.61,
                        assignment: 'NH',
                    },
                ],
                integration: 1,
                from: 8.60625,
                to: 8.61375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 6.62,
                        assignment: 'CH(2,5)',
                    },
                ],
                integration: 2,
                from: 6.61625,
                to: 6.62375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 6.27,
                        assignment: 'CH(3,4)',
                    },
                ],
                integration: 2,
                from: 6.266249999999999,
                to: 6.27375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['pyrrolidine'],
        smiles: 'C1CCNC1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 2.64,
                        assignment: 'CH₂(2,5)',
                    },
                ],
                integration: 4,
                from: 2.63625,
                to: 2.6437500000000003,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.43,
                        assignment: 'CH₂(3,4)',
                    },
                ],
                integration: 4,
                from: 1.42625,
                to: 1.4337499999999999,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['silicone grease'],
        smiles: '',
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
                integration: 6,
                from: 0.13625,
                to: 0.14375000000000002,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['tetrahydrofuran'],
        smiles: 'C1COCC1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.59,
                        assignment: 'CH₂(2,5)',
                    },
                ],
                integration: 4,
                from: 3.5862499999999997,
                to: 3.59375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.55,
                        assignment: 'CH₂(3,4)',
                    },
                ],
                integration: 4,
                from: 1.5462500000000001,
                to: 1.55375,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['toluene'],
        smiles: 'Cc1ccccc1',
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
                integration: 3,
                from: 2.15625,
                to: 2.1637500000000003,
            },
            {
                signals: [],
                integration: 3,
                from: 7.01,
                to: 7.08,
                multiplicity: 'm',
            },
            {
                signals: [],
                integration: 2,
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
        smiles: 'CCN(CC)CC',
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
                integration: 6,
                from: 0.9087500000000001,
                to: 0.95125,
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
                integration: 4,
                from: 2.3600000000000003,
                to: 2.42,
            },
        ],
        nucleus: '1H',
        solvent: 'C₆D₅Cl',
    },
    {
        names: ['water'],
        smiles: 'O',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 2.84,
                        multiplicity: 's',
                        assignment: 'OH',
                    },
                ],
                integration: 2,
                from: 2.8362499999999997,
                to: 2.84375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['acetic acid'],
        smiles: 'CC(=O)O',
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
                integration: 3,
                from: 1.95625,
                to: 1.9637499999999999,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['acetone'],
        smiles: 'CC(=O)C',
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
                integration: 6,
                from: 2.0862499999999997,
                to: 2.09375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['acetonitrile'],
        smiles: 'CC#N',
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
                integration: 3,
                from: 2.0462499999999997,
                to: 2.05375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['benzene'],
        smiles: 'c1ccccc1',
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
                integration: 6,
                from: 7.35625,
                to: 7.3637500000000005,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['tert -butyl alcohol'],
        smiles: 'CC(C)(C)O',
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
                integration: 9,
                from: 1.17625,
                to: 1.1837499999999999,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['chloroform'],
        smiles: 'ClC(Cl)Cl',
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
                integration: 1,
                from: 8.01625,
                to: 8.02375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['18-crown-6'],
        smiles: 'C1COCCOCCOCCOCCOCCO1',
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
                integration: 24,
                from: 3.5862499999999997,
                to: 3.59375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['cyclohexane'],
        smiles: 'C1CCCCC1',
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
                integration: 12,
                from: 1.42625,
                to: 1.4337499999999999,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['1,2-dichloroethane'],
        smiles: 'ClCCCl',
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
                integration: 4,
                from: 3.86625,
                to: 3.8737500000000002,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['dichloromethane'],
        smiles: 'ClCCl',
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
                integration: 2,
                from: 5.62625,
                to: 5.63375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['diethyl ether'],
        smiles: 'CCOCC',
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
                integration: 6,
                from: 1.08875,
                to: 1.13125,
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
                integration: 4,
                from: 3.3800000000000003,
                to: 3.44,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['diglyme'],
        smiles: 'COCCOCCOC',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.56,
                        assignment: 'CH₂',
                    },
                ],
                integration: 4,
                from: 3.55625,
                to: 3.56375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 3.47,
                        assignment: 'CH₂',
                    },
                ],
                integration: 4,
                from: 3.46625,
                to: 3.4737500000000003,
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
                integration: 6,
                from: 3.2762499999999997,
                to: 3.28375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['dimethylformamide'],
        smiles: 'C(=O)N(C)C',
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
                integration: 1,
                from: 7.95625,
                to: 7.96375,
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
                integration: 3,
                from: 2.93625,
                to: 2.94375,
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
                integration: 3,
                from: 2.7762499999999997,
                to: 2.78375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['1,4-dioxane'],
        smiles: 'C1COCCOC1',
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
                integration: 8,
                from: 3.5862499999999997,
                to: 3.59375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['DME', 'diethyl ether'],
        smiles: 'CCOCC',
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
                integration: 6,
                from: 3.2762499999999997,
                to: 3.28375,
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
                integration: 4,
                from: 3.45625,
                to: 3.46375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['ethane'],
        smiles: 'CC',
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
                integration: 6,
                from: 0.8262499999999999,
                to: 0.83375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['ethanol'],
        smiles: 'CCO',
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
                integration: 3,
                from: 1.0987500000000001,
                to: 1.14125,
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
                integration: 2,
                from: 3.54,
                to: 3.5999999999999996,
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
                integration: 1,
                from: 3.38625,
                to: 3.3937500000000003,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['ethyl acetate'],
        smiles: 'CC(=O)CC',
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
                integration: 3,
                from: 1.96625,
                to: 1.97375,
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
                integration: 2,
                from: 4.02,
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
                        delta: 1.2,
                        assignment: 'CH₂CH₃',
                    },
                ],
                integration: 3,
                from: 1.17875,
                to: 1.22125,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['ethylene'],
        smiles: 'C=C',
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
                integration: 4,
                from: 5.37625,
                to: 5.38375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['ethylene glycol'],
        smiles: 'OCCO',
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
                integration: 4,
                from: 3.2762499999999997,
                to: 3.28375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['H greaseᶠ'],
        smiles: '',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 0.9,
                        assignment: 'CH₃',
                    },
                ],
                integration: 6,
                from: 0.89625,
                to: 0.90375,
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
                integration: 10,
                from: 1.2862500000000001,
                to: 1.29375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['hexamethylbenzene'],
        smiles: 'CC1=C(C(=C(C(=C1C)C)C)C)C',
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
                integration: 18,
                from: 2.16625,
                to: 2.17375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['n-hexane'],
        smiles: 'CCCCCC',
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
                integration: 6,
                from: 0.85875,
                to: 0.90125,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.28,
                        assignment: 'CH₂',
                    },
                ],
                integration: 8,
                from: 1.27625,
                to: 1.28375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['HMDSO'],
        smiles: 'C[Si](C)(C)O[Si](C)(C)C',
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
                integration: 18,
                from: 0.06625,
                to: 0.07375000000000001,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['HMPA'],
        smiles: 'CN(C)P(=O)(N(C)C)N(C)C',
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
                integration: 18,
                from: 2.574375,
                to: 2.605625,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['hydrogen'],
        smiles: '',
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
                integration: 2,
                from: 4.53625,
                to: 4.54375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['imidazole'],
        smiles: 'C1=CN=CN1',
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
                integration: 1,
                from: 7.61625,
                to: 7.62375,
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
                integration: 2,
                from: 7.03625,
                to: 7.04375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['methane'],
        smiles: 'C',
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
                integration: 4,
                from: 0.16625,
                to: 0.17375000000000002,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['methanol'],
        smiles: 'CO',
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
                integration: 3,
                from: 3.30625,
                to: 3.31375,
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
                integration: 1,
                from: 3.11625,
                to: 3.1237500000000002,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['nitromethane'],
        smiles: 'C[N+](=O)[O-]',
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
                integration: 3,
                from: 4.42625,
                to: 4.43375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['n-pentane'],
        smiles: 'CCCCC',
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
                integration: 6,
                from: 0.85875,
                to: 0.90125,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.27,
                        assignment: 'CH₂',
                    },
                ],
                integration: 6,
                from: 1.26625,
                to: 1.27375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['propane'],
        smiles: 'CCC',
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
                integration: 6,
                from: 0.858,
                to: 0.902,
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
                integration: 2,
                from: 1.2515,
                to: 1.3685,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['2-propanol'],
        smiles: 'CC(O)C',
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
                integration: 6,
                from: 1.08875,
                to: 1.11125,
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
                integration: 1,
                from: 3.85125,
                to: 3.94875,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['propylene'],
        smiles: 'CC=C',
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
                integration: 3,
                from: 1.6644999999999999,
                to: 1.6955,
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
                integration: 1,
                from: 4.88375,
                to: 4.916250000000001,
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
                integration: 1,
                from: 4.975,
                to: 5.025,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 5.81,
                        assignment: 'CH',
                    },
                ],
                integration: 1,
                from: 5.8062499999999995,
                to: 5.81375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['pyridine'],
        smiles: 'C1=CC=NC=C1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 8.58,
                        assignment: 'CH(2,6)',
                    },
                ],
                integration: 2,
                from: 8.57625,
                to: 8.58375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.35,
                        assignment: 'CH(3,5)',
                    },
                ],
                integration: 2,
                from: 7.3462499999999995,
                to: 7.35375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.76,
                        assignment: 'CH(4)',
                    },
                ],
                integration: 1,
                from: 7.75625,
                to: 7.76375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['pyrrole'],
        smiles: 'C1=CNC=C1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 10.02,
                        assignment: 'NH',
                    },
                ],
                integration: 1,
                from: 10.01625,
                to: 10.02375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 6.77,
                        assignment: 'CH(2,5)',
                    },
                ],
                integration: 2,
                from: 6.766249999999999,
                to: 6.77375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 6.07,
                        assignment: 'CH(3,4)',
                    },
                ],
                integration: 2,
                from: 6.06625,
                to: 6.07375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['pyrrolidine'],
        smiles: 'C1CCNC1',
        ranges: [],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['silicone grease'],
        smiles: '',
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
                integration: 6,
                from: 0.12625,
                to: 0.13375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['tetrahydrofuran'],
        smiles: 'C1COCC1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.63,
                        assignment: 'CH₂(2,5)',
                    },
                ],
                integration: 4,
                from: 3.6262499999999998,
                to: 3.63375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.79,
                        assignment: 'CH₂(3,4)',
                    },
                ],
                integration: 4,
                from: 1.7862500000000001,
                to: 1.79375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['toluene'],
        smiles: 'Cc1ccccc1',
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
                integration: 3,
                from: 2.3162499999999997,
                to: 2.32375,
            },
            {
                signals: [],
                integration: 3,
                from: 7.1,
                to: 7.2,
                multiplicity: 'm',
            },
            {
                signals: [],
                integration: 2,
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
        smiles: 'CCN(CC)CC',
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
                integration: 6,
                from: 0.93875,
                to: 0.98125,
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
                integration: 4,
                from: 2.4200000000000004,
                to: 2.48,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂CO',
    },
    {
        names: ['water'],
        smiles: 'O',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.33,
                        multiplicity: 's',
                        assignment: 'OH',
                    },
                ],
                integration: 2,
                from: 3.32625,
                to: 3.33375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['acetic acid'],
        smiles: 'CC(=O)O',
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
                integration: 3,
                from: 1.90625,
                to: 1.9137499999999998,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['acetone'],
        smiles: 'CC(=O)C',
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
                integration: 6,
                from: 2.0862499999999997,
                to: 2.09375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['acetonitrile'],
        smiles: 'CC#N',
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
                integration: 3,
                from: 2.0662499999999997,
                to: 2.07375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['benzene'],
        smiles: 'c1ccccc1',
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
                integration: 6,
                from: 7.36625,
                to: 7.37375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['tert -butyl alcohol'],
        smiles: 'CC(C)(C)O',
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
                integration: 9,
                from: 1.1062500000000002,
                to: 1.11375,
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
                integration: 1,
                from: 4.18625,
                to: 4.1937500000000005,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['chloroform'],
        smiles: 'ClC(Cl)Cl',
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
                integration: 1,
                from: 8.31625,
                to: 8.32375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['18-crown-6'],
        smiles: 'C1COCCOCCOCCOCCOCCO1',
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
                integration: 24,
                from: 3.5062499999999996,
                to: 3.51375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['cyclohexane'],
        smiles: 'C1CCCCC1',
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
                integration: 12,
                from: 1.39625,
                to: 1.4037499999999998,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['1,2-dichloroethane'],
        smiles: 'ClCCCl',
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
                integration: 4,
                from: 3.8962499999999998,
                to: 3.90375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['dichloromethane'],
        smiles: 'ClCCl',
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
                integration: 2,
                from: 5.75625,
                to: 5.76375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['diethyl ether'],
        smiles: 'CCOCC',
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
                integration: 6,
                from: 1.06875,
                to: 1.11125,
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
                integration: 4,
                from: 3.35,
                to: 3.4099999999999997,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['diglyme'],
        smiles: 'COCCOCCOC',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.51,
                        assignment: 'CH₂',
                    },
                ],
                integration: 4,
                from: 3.5062499999999996,
                to: 3.51375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 3.38,
                        assignment: 'CH₂',
                    },
                ],
                integration: 4,
                from: 3.3762499999999998,
                to: 3.38375,
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
                integration: 6,
                from: 3.23625,
                to: 3.2437500000000004,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['dimethylformamide'],
        smiles: 'C(=O)N(C)C',
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
                integration: 1,
                from: 7.94625,
                to: 7.95375,
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
                integration: 3,
                from: 2.88625,
                to: 2.8937500000000003,
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
                integration: 3,
                from: 2.72625,
                to: 2.73375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['1,4-dioxane'],
        smiles: 'C1COCCOC1',
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
                integration: 8,
                from: 3.5662499999999997,
                to: 3.57375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['DME', 'diethyl ether'],
        smiles: 'CCOCC',
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
                integration: 6,
                from: 3.23625,
                to: 3.2437500000000004,
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
                integration: 4,
                from: 3.42625,
                to: 3.4337500000000003,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['ethane'],
        smiles: 'CC',
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
                integration: 6,
                from: 0.8162499999999999,
                to: 0.82375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['ethanol'],
        smiles: 'CCO',
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
                integration: 3,
                from: 1.03875,
                to: 1.08125,
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
                integration: 2,
                from: 3.41,
                to: 3.4699999999999998,
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
                integration: 1,
                from: 4.62625,
                to: 4.63375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['ethyl acetate'],
        smiles: 'CC(=O)CC',
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
                integration: 3,
                from: 1.98625,
                to: 1.99375,
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
                integration: 2,
                from: 4,
                to: 4.0600000000000005,
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
                integration: 3,
                from: 1.14875,
                to: 1.19125,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['ethylene'],
        smiles: 'C=C',
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
                integration: 4,
                from: 5.40625,
                to: 5.41375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['ethylene glycol'],
        smiles: 'OCCO',
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
                integration: 4,
                from: 3.3362499999999997,
                to: 3.34375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['H greaseᶠ'],
        smiles: '',
        ranges: [
            {
                signals: [],
                integration: 6,
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
                integration: 10,
                from: 1.23625,
                to: 1.24375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['hexamethylbenzene'],
        smiles: 'CC1=C(C(=C(C(=C1C)C)C)C)C',
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
                integration: 18,
                from: 2.13625,
                to: 2.1437500000000003,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['n-hexane'],
        smiles: 'CCCCCC',
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
                integration: 6,
                from: 0.83875,
                to: 0.88125,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.25,
                        assignment: 'CH₂',
                    },
                ],
                integration: 8,
                from: 1.24625,
                to: 1.25375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['HMDSO'],
        smiles: 'C[Si](C)(C)O[Si](C)(C)C',
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
                integration: 18,
                from: 0.056249999999999994,
                to: 0.06375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['HMPA'],
        smiles: 'CN(C)P(=O)(N(C)C)N(C)C',
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
                integration: 18,
                from: 2.514375,
                to: 2.545625,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['hydrogen'],
        smiles: '',
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
                integration: 2,
                from: 4.60625,
                to: 4.6137500000000005,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['imidazole'],
        smiles: 'C1=CN=CN1',
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
                integration: 1,
                from: 7.62625,
                to: 7.63375,
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
                integration: 2,
                from: 7.00625,
                to: 7.01375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['methane'],
        smiles: 'C',
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
                integration: 4,
                from: 0.19625,
                to: 0.20375000000000001,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['methanol'],
        smiles: 'CO',
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
                integration: 3,
                from: 3.15625,
                to: 3.1637500000000003,
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
                integration: 1,
                from: 4.00625,
                to: 4.01375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['nitromethane'],
        smiles: 'C[N+](=O)[O-]',
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
                integration: 3,
                from: 4.41625,
                to: 4.42375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['n-pentane'],
        smiles: 'CCCCC',
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
                integration: 6,
                from: 0.83875,
                to: 0.88125,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.27,
                        assignment: 'CH₂',
                    },
                ],
                integration: 6,
                from: 1.26625,
                to: 1.27375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['propane'],
        smiles: 'CCC',
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
                integration: 6,
                from: 0.848,
                to: 0.892,
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
                integration: 2,
                from: 1.2315,
                to: 1.3485,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['2-propanol'],
        smiles: 'CC(O)C',
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
                integration: 6,
                from: 1.02875,
                to: 1.05125,
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
                integration: 1,
                from: 3.7312499999999997,
                to: 3.82875,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['propylene'],
        smiles: 'CC=C',
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
                integration: 3,
                from: 1.6644999999999999,
                to: 1.6955,
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
                integration: 1,
                from: 4.92375,
                to: 4.956250000000001,
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
                integration: 1,
                from: 5.005,
                to: 5.055000000000001,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 5.8,
                        assignment: 'CH',
                    },
                ],
                integration: 1,
                from: 5.79625,
                to: 5.80375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['pyridine'],
        smiles: 'C1=CC=NC=C1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 8.58,
                        assignment: 'CH(2,6)',
                    },
                ],
                integration: 2,
                from: 8.57625,
                to: 8.58375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.39,
                        assignment: 'CH(3,5)',
                    },
                ],
                integration: 2,
                from: 7.3862499999999995,
                to: 7.39375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.79,
                        assignment: 'CH(4)',
                    },
                ],
                integration: 1,
                from: 7.78625,
                to: 7.79375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['pyrrole'],
        smiles: 'C1=CNC=C1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 10.75,
                        assignment: 'NH',
                    },
                ],
                integration: 1,
                from: 10.74625,
                to: 10.75375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 6.73,
                        assignment: 'CH(2,5)',
                    },
                ],
                integration: 2,
                from: 6.72625,
                to: 6.733750000000001,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 6.01,
                        assignment: 'CH(3,4)',
                    },
                ],
                integration: 2,
                from: 6.00625,
                to: 6.01375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['pyrrolidine'],
        smiles: 'C1CCNC1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 2.67,
                        assignment: 'CH₂(2,5)',
                    },
                ],
                integration: 4,
                from: 2.66625,
                to: 2.67375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.55,
                        assignment: 'CH₂(3,4)',
                    },
                ],
                integration: 4,
                from: 1.5462500000000001,
                to: 1.55375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['silicone grease'],
        smiles: '',
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
                integration: 6,
                from: -0.06375,
                to: -0.056249999999999994,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['tetrahydrofuran'],
        smiles: 'C1COCC1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.6,
                        assignment: 'CH₂(2,5)',
                    },
                ],
                integration: 4,
                from: 3.59625,
                to: 3.6037500000000002,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.76,
                        assignment: 'CH₂(3,4)',
                    },
                ],
                integration: 4,
                from: 1.75625,
                to: 1.76375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['toluene'],
        smiles: 'Cc1ccccc1',
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
                integration: 3,
                from: 2.2962499999999997,
                to: 2.30375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.18,
                        assignment: 'CH(2,4,6)',
                    },
                ],
                integration: 3,
                from: 7.17625,
                to: 7.18375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.25,
                        assignment: 'CH(3,5)',
                    },
                ],
                integration: 2,
                from: 7.24625,
                to: 7.25375,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['triethylamine'],
        smiles: 'CCN(CC)CC',
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
                integration: 6,
                from: 0.9087500000000001,
                to: 0.95125,
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
                integration: 4,
                from: 2.4000000000000004,
                to: 2.46,
            },
        ],
        nucleus: '1H',
        solvent: '(CD₃)₂SO',
    },
    {
        names: ['water'],
        smiles: 'O',
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
                integration: 2,
                from: 2.1262499999999998,
                to: 2.13375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['acetic acid'],
        smiles: 'CC(=O)O',
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
                integration: 3,
                from: 1.95625,
                to: 1.9637499999999999,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['acetone'],
        smiles: 'CC(=O)C',
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
                integration: 6,
                from: 2.07625,
                to: 2.08375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['acetonitrile'],
        smiles: 'CC#N',
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
                integration: 3,
                from: 1.95625,
                to: 1.9637499999999999,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['benzene'],
        smiles: 'c1ccccc1',
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
                integration: 6,
                from: 7.36625,
                to: 7.37375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['tert -butyl alcohol'],
        smiles: 'CC(C)(C)O',
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
                integration: 9,
                from: 1.15625,
                to: 1.1637499999999998,
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
                integration: 1,
                from: 2.17625,
                to: 2.1837500000000003,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['chloroform'],
        smiles: 'ClC(Cl)Cl',
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
                integration: 1,
                from: 7.57625,
                to: 7.58375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['18-crown-6'],
        smiles: 'C1COCCOCCOCCOCCOCCO1',
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
                integration: 24,
                from: 3.5062499999999996,
                to: 3.51375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['cyclohexane'],
        smiles: 'C1CCCCC1',
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
                integration: 12,
                from: 1.43625,
                to: 1.4437499999999999,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['1,2-dichloroethane'],
        smiles: 'ClCCCl',
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
                integration: 4,
                from: 3.80625,
                to: 3.81375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['dichloromethane'],
        smiles: 'ClCCl',
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
                integration: 2,
                from: 5.43625,
                to: 5.4437500000000005,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['diethyl ether'],
        smiles: 'CCOCC',
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
                integration: 6,
                from: 1.0987500000000001,
                to: 1.14125,
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
                integration: 4,
                from: 3.39,
                to: 3.4499999999999997,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['diglyme'],
        smiles: 'COCCOCCOC',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.53,
                        assignment: 'CH₂',
                    },
                ],
                integration: 4,
                from: 3.5262499999999997,
                to: 3.53375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 3.45,
                        assignment: 'CH₂',
                    },
                ],
                integration: 4,
                from: 3.44625,
                to: 3.4537500000000003,
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
                integration: 6,
                from: 3.28625,
                to: 3.29375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['dimethylformamide'],
        smiles: 'C(=O)N(C)C',
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
                integration: 1,
                from: 7.91625,
                to: 7.92375,
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
                integration: 3,
                from: 2.88625,
                to: 2.8937500000000003,
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
                integration: 3,
                from: 2.76625,
                to: 2.77375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['1,4-dioxane'],
        smiles: 'C1COCCOC1',
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
                integration: 8,
                from: 3.59625,
                to: 3.6037500000000002,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['DME', 'diethyl ether'],
        smiles: 'CCOCC',
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
                integration: 6,
                from: 3.2762499999999997,
                to: 3.28375,
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
                integration: 4,
                from: 3.44625,
                to: 3.4537500000000003,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['ethane'],
        smiles: 'CC',
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
                integration: 6,
                from: 0.84625,
                to: 0.85375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['ethanol'],
        smiles: 'CCO',
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
                integration: 3,
                from: 1.0987500000000001,
                to: 1.14125,
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
                integration: 2,
                from: 3.5100000000000002,
                to: 3.57,
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
                integration: 1,
                from: 2.46625,
                to: 2.4737500000000003,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['ethyl acetate'],
        smiles: 'CC(=O)CC',
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
                integration: 3,
                from: 1.96625,
                to: 1.97375,
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
                integration: 2,
                from: 4.029999999999999,
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
                        delta: 1.2,
                        assignment: 'CH₂CH₃',
                    },
                ],
                integration: 3,
                from: 1.17875,
                to: 1.22125,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['ethylene'],
        smiles: 'C=C',
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
                integration: 4,
                from: 5.40625,
                to: 5.41375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['ethylene glycol'],
        smiles: 'OCCO',
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
                integration: 4,
                from: 3.5062499999999996,
                to: 3.51375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['H greaseᶠ'],
        smiles: '',
        ranges: [],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['hexamethylbenzene'],
        smiles: 'CC1=C(C(=C(C(=C1C)C)C)C)C',
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
                integration: 18,
                from: 2.18625,
                to: 2.19375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['n-hexane'],
        smiles: 'CCCCCC',
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
                integration: 6,
                from: 0.86875,
                to: 0.91125,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.28,
                        assignment: 'CH₂',
                    },
                ],
                integration: 8,
                from: 1.27625,
                to: 1.28375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['HMDSO'],
        smiles: 'C[Si](C)(C)O[Si](C)(C)C',
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
                integration: 18,
                from: 0.06625,
                to: 0.07375000000000001,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['HMPA'],
        smiles: 'CN(C)P(=O)(N(C)C)N(C)C',
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
                integration: 18,
                from: 2.554375,
                to: 2.585625,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['hydrogen'],
        smiles: '',
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
                integration: 2,
                from: 4.56625,
                to: 4.57375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['imidazole'],
        smiles: 'C1=CN=CN1',
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
                integration: 1,
                from: 7.56625,
                to: 7.57375,
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
                integration: 2,
                from: 7.00625,
                to: 7.01375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['methane'],
        smiles: 'C',
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
                integration: 4,
                from: 0.19625,
                to: 0.20375000000000001,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['methanol'],
        smiles: 'CO',
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
                integration: 3,
                from: 3.2762499999999997,
                to: 3.28375,
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
                integration: 1,
                from: 2.15625,
                to: 2.1637500000000003,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['nitromethane'],
        smiles: 'C[N+](=O)[O-]',
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
                integration: 3,
                from: 4.3062499999999995,
                to: 4.31375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['n-pentane'],
        smiles: 'CCCCC',
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
                integration: 6,
                from: 0.86875,
                to: 0.91125,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.29,
                        assignment: 'CH₂',
                    },
                ],
                integration: 6,
                from: 1.2862500000000001,
                to: 1.29375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['propane'],
        smiles: 'CCC',
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
                integration: 6,
                from: 0.878,
                to: 0.922,
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
                integration: 2,
                from: 1.2715,
                to: 1.3885,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['2-propanol'],
        smiles: 'CC(O)C',
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
                integration: 6,
                from: 1.07875,
                to: 1.10125,
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
                integration: 1,
                from: 3.82125,
                to: 3.91875,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['propylene'],
        smiles: 'CC=C',
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
                integration: 3,
                from: 1.6844999999999999,
                to: 1.7155,
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
                integration: 1,
                from: 4.913749999999999,
                to: 4.94625,
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
                integration: 1,
                from: 5.015,
                to: 5.065,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 5.85,
                        assignment: 'CH',
                    },
                ],
                integration: 1,
                from: 5.8462499999999995,
                to: 5.85375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['pyridine'],
        smiles: 'C1=CC=NC=C1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 8.57,
                        assignment: 'CH(2,6)',
                    },
                ],
                integration: 2,
                from: 8.56625,
                to: 8.57375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.33,
                        assignment: 'CH(3,5)',
                    },
                ],
                integration: 2,
                from: 7.32625,
                to: 7.33375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.73,
                        assignment: 'CH(4)',
                    },
                ],
                integration: 1,
                from: 7.72625,
                to: 7.733750000000001,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['pyrrole'],
        smiles: 'C1=CNC=C1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 9.27,
                        assignment: 'NH',
                    },
                ],
                integration: 1,
                from: 9.26625,
                to: 9.27375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 6.75,
                        assignment: 'CH(2,5)',
                    },
                ],
                integration: 2,
                from: 6.74625,
                to: 6.75375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 6.1,
                        assignment: 'CH(3,4)',
                    },
                ],
                integration: 2,
                from: 6.0962499999999995,
                to: 6.10375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['pyrrolidine'],
        smiles: 'C1CCNC1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 2.75,
                        assignment: 'CH₂(2,5)',
                    },
                ],
                integration: 4,
                from: 2.74625,
                to: 2.75375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.61,
                        assignment: 'CH₂(3,4)',
                    },
                ],
                integration: 4,
                from: 1.6062500000000002,
                to: 1.61375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['silicone grease'],
        smiles: '',
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
                integration: 6,
                from: 0.07625,
                to: 0.08375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['tetrahydrofuran'],
        smiles: 'C1COCC1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.64,
                        assignment: 'CH₂(2,5)',
                    },
                ],
                integration: 4,
                from: 3.63625,
                to: 3.6437500000000003,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.8,
                        assignment: 'CH₂(3,4)',
                    },
                ],
                integration: 4,
                from: 1.7962500000000001,
                to: 1.80375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['toluene'],
        smiles: 'Cc1ccccc1',
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
                integration: 3,
                from: 2.32625,
                to: 2.33375,
            },
            {
                signals: [],
                integration: 3,
                from: 7.1,
                to: 7.3,
                multiplicity: 'm',
            },
            {
                signals: [],
                integration: 2,
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
        smiles: 'CCN(CC)CC',
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
                integration: 6,
                from: 0.93875,
                to: 0.98125,
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
                integration: 4,
                from: 2.4200000000000004,
                to: 2.48,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃CN',
    },
    {
        names: ['water'],
        smiles: 'O',
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
                integration: 2,
                from: 3.65625,
                to: 3.6637500000000003,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['acetic acid'],
        smiles: 'CC(=O)O',
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
                integration: 3,
                from: 2.05625,
                to: 2.06375,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['acetone'],
        smiles: 'CC(=O)C',
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
                integration: 6,
                from: 2.18625,
                to: 2.19375,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['acetonitrile'],
        smiles: 'CC#N',
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
                integration: 3,
                from: 1.94625,
                to: 1.9537499999999999,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['benzene'],
        smiles: 'c1ccccc1',
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
                integration: 6,
                from: 7.35625,
                to: 7.3637500000000005,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['tert -butyl alcohol'],
        smiles: 'CC(C)(C)O',
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
                integration: 9,
                from: 1.27625,
                to: 1.28375,
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
                integration: 1,
                from: 2.19625,
                to: 2.2037500000000003,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['chloroform'],
        smiles: 'ClC(Cl)Cl',
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
                integration: 1,
                from: 7.32625,
                to: 7.33375,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['18-crown-6'],
        smiles: 'C1COCCOCCOCCOCCOCCO1',
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
                integration: 24,
                from: 3.63625,
                to: 3.6437500000000003,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['cyclohexane'],
        smiles: 'C1CCCCC1',
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
                integration: 12,
                from: 1.46625,
                to: 1.47375,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['1,2-dichloroethane'],
        smiles: 'ClCCCl',
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
                integration: 4,
                from: 3.70625,
                to: 3.71375,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['dichloromethane'],
        smiles: 'ClCCl',
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
                integration: 2,
                from: 5.23625,
                to: 5.24375,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['diethyl ether'],
        smiles: 'CCOCC',
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
                integration: 6,
                from: 1.17875,
                to: 1.22125,
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
                integration: 4,
                from: 3.5500000000000003,
                to: 3.61,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['diglyme'],
        smiles: 'COCCOCCOC',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.67,
                        assignment: 'CH₂',
                    },
                ],
                integration: 4,
                from: 3.66625,
                to: 3.67375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 3.62,
                        assignment: 'CH₂',
                    },
                ],
                integration: 4,
                from: 3.61625,
                to: 3.6237500000000002,
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
                integration: 6,
                from: 3.40625,
                to: 3.4137500000000003,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['dimethylformamide'],
        smiles: 'C(=O)N(C)C',
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
                integration: 1,
                from: 7.85625,
                to: 7.8637500000000005,
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
                integration: 3,
                from: 2.97625,
                to: 2.98375,
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
                integration: 3,
                from: 2.8762499999999998,
                to: 2.88375,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['1,4-dioxane'],
        smiles: 'C1COCCOC1',
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
                integration: 8,
                from: 3.7562499999999996,
                to: 3.76375,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['DME', 'diethyl ether'],
        smiles: 'CCOCC',
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
                integration: 6,
                from: 3.3962499999999998,
                to: 3.40375,
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
                integration: 4,
                from: 3.6062499999999997,
                to: 3.61375,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['ethane'],
        smiles: 'CC',
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
                integration: 6,
                from: 0.84625,
                to: 0.85375,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['ethanol'],
        smiles: 'CCO',
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
                integration: 3,
                from: 1.19875,
                to: 1.24125,
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
                integration: 2,
                from: 3.68,
                to: 3.7399999999999998,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['ethyl acetate'],
        smiles: 'CC(=O)CC',
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
                integration: 3,
                from: 2.0262499999999997,
                to: 2.03375,
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
                integration: 2,
                from: 4.109999999999999,
                to: 4.17,
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
                integration: 3,
                from: 1.23875,
                to: 1.28125,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['ethylene'],
        smiles: 'C=C',
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
                integration: 4,
                from: 5.39625,
                to: 5.4037500000000005,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['ethylene glycol'],
        smiles: 'OCCO',
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
                integration: 4,
                from: 3.71625,
                to: 3.7237500000000003,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['H greaseᶠ'],
        smiles: '',
        ranges: [
            {
                signals: [],
                integration: 6,
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
                integration: 10,
                from: 1.3262500000000002,
                to: 1.33375,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['hexamethylbenzene'],
        smiles: 'CC1=C(C(=C(C(=C1C)C)C)C)C',
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
                integration: 18,
                from: 2.23625,
                to: 2.2437500000000004,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['n-hexane'],
        smiles: 'CCCCCC',
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
                integration: 6,
                from: 0.88875,
                to: 0.93125,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.31,
                        assignment: 'CH₂',
                    },
                ],
                integration: 8,
                from: 1.3062500000000001,
                to: 1.31375,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['HMDSO'],
        smiles: 'C[Si](C)(C)O[Si](C)(C)C',
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
                integration: 18,
                from: 0.07625,
                to: 0.08375,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['HMPA'],
        smiles: 'CN(C)P(=O)(N(C)C)N(C)C',
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
                integration: 18,
                from: 2.614375,
                to: 2.645625,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['hydrogen'],
        smiles: '',
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
                integration: 2,
                from: 4.52625,
                to: 4.53375,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['imidazole'],
        smiles: 'C1=CN=CN1',
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
                integration: 1,
                from: 7.60625,
                to: 7.6137500000000005,
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
                integration: 2,
                from: 7.02625,
                to: 7.03375,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['methane'],
        smiles: 'C',
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
                integration: 4,
                from: 0.17625,
                to: 0.18375,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['methanol'],
        smiles: 'CO',
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
                integration: 3,
                from: 3.43625,
                to: 3.44375,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['nitromethane'],
        smiles: 'C[N+](=O)[O-]',
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
                integration: 3,
                from: 4.27625,
                to: 4.28375,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['n-pentane'],
        smiles: 'CCCCC',
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
                integration: 6,
                from: 0.87875,
                to: 0.92125,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.33,
                        assignment: 'CH₂',
                    },
                ],
                integration: 6,
                from: 1.3262500000000002,
                to: 1.33375,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['propane'],
        smiles: 'CCC',
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
                integration: 6,
                from: 0.878,
                to: 0.922,
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
                integration: 2,
                from: 1.2715,
                to: 1.3885,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['2-propanol'],
        smiles: 'CC(O)C',
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
                integration: 6,
                from: 1.18875,
                to: 1.21125,
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
                integration: 1,
                from: 4.00125,
                to: 4.09875,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['propylene'],
        smiles: 'CC=C',
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
                integration: 3,
                from: 1.6844999999999999,
                to: 1.7155,
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
                integration: 1,
                from: 4.913749999999999,
                to: 4.94625,
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
                integration: 1,
                from: 5.005,
                to: 5.055000000000001,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 5.87,
                        assignment: 'CH',
                    },
                ],
                integration: 1,
                from: 5.86625,
                to: 5.87375,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['pyridine'],
        smiles: 'C1=CC=NC=C1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 8.45,
                        assignment: 'CH(2,6)',
                    },
                ],
                integration: 2,
                from: 8.44625,
                to: 8.45375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.4,
                        assignment: 'CH(3,5)',
                    },
                ],
                integration: 2,
                from: 7.39625,
                to: 7.4037500000000005,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.82,
                        assignment: 'CH(4)',
                    },
                ],
                integration: 1,
                from: 7.81625,
                to: 7.82375,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['pyrrole'],
        smiles: 'C1=CNC=C1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 6.84,
                        assignment: 'CH(2,5)',
                    },
                ],
                integration: 2,
                from: 6.83625,
                to: 6.84375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 6.24,
                        assignment: 'CH(3,4)',
                    },
                ],
                integration: 2,
                from: 6.23625,
                to: 6.24375,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['pyrrolidine'],
        smiles: 'C1CCNC1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.11,
                        assignment: 'CH₂(2,5)',
                    },
                ],
                integration: 4,
                from: 3.1062499999999997,
                to: 3.11375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.93,
                        assignment: 'CH₂(3,4)',
                    },
                ],
                integration: 4,
                from: 1.92625,
                to: 1.9337499999999999,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['silicone grease'],
        smiles: '',
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
                integration: 6,
                from: 0.15625,
                to: 0.16375,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['tetrahydrofuran'],
        smiles: 'C1COCC1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.78,
                        assignment: 'CH₂(2,5)',
                    },
                ],
                integration: 4,
                from: 3.7762499999999997,
                to: 3.78375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.91,
                        assignment: 'CH₂(3,4)',
                    },
                ],
                integration: 4,
                from: 1.90625,
                to: 1.9137499999999998,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['toluene'],
        smiles: 'Cc1ccccc1',
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
                integration: 3,
                from: 2.32625,
                to: 2.33375,
            },
            {
                signals: [],
                integration: 3,
                from: 7.1,
                to: 7.3,
                multiplicity: 'm',
            },
            {
                signals: [],
                integration: 2,
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
        smiles: 'CCN(CC)CC',
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
                integration: 6,
                from: 1.28875,
                to: 1.33125,
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
                integration: 4,
                from: 3.0900000000000003,
                to: 3.15,
            },
        ],
        nucleus: '1H',
        solvent: 'TFE-d₃',
    },
    {
        names: ['water'],
        smiles: 'O',
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
                integration: 2,
                from: 4.86625,
                to: 4.87375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['acetic acid'],
        smiles: 'CC(=O)O',
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
                integration: 3,
                from: 1.98625,
                to: 1.99375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['acetone'],
        smiles: 'CC(=O)C',
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
                integration: 6,
                from: 2.1462499999999998,
                to: 2.15375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['acetonitrile'],
        smiles: 'CC#N',
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
                integration: 3,
                from: 2.0262499999999997,
                to: 2.03375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['benzene'],
        smiles: 'c1ccccc1',
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
                integration: 6,
                from: 7.32625,
                to: 7.33375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['tert -butyl alcohol'],
        smiles: 'CC(C)(C)O',
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
                integration: 9,
                from: 1.39625,
                to: 1.4037499999999998,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['chloroform'],
        smiles: 'ClC(Cl)Cl',
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
                integration: 1,
                from: 7.89625,
                to: 7.9037500000000005,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['18-crown-6'],
        smiles: 'C1COCCOCCOCCOCCOCCO1',
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
                integration: 24,
                from: 3.63625,
                to: 3.6437500000000003,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['cyclohexane'],
        smiles: 'C1CCCCC1',
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
                integration: 12,
                from: 1.44625,
                to: 1.4537499999999999,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['1,2-dichloroethane'],
        smiles: 'ClCCCl',
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
                integration: 4,
                from: 3.7762499999999997,
                to: 3.78375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['dichloromethane'],
        smiles: 'ClCCl',
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
                integration: 2,
                from: 5.48625,
                to: 5.49375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['diethyl ether'],
        smiles: 'CCOCC',
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
                integration: 6,
                from: 1.15875,
                to: 1.20125,
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
                integration: 4,
                from: 3.4600000000000004,
                to: 3.52,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['diglyme'],
        smiles: 'COCCOCCOC',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.61,
                        assignment: 'CH₂',
                    },
                ],
                integration: 4,
                from: 3.6062499999999997,
                to: 3.61375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 3.58,
                        assignment: 'CH₂',
                    },
                ],
                integration: 4,
                from: 3.57625,
                to: 3.58375,
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
                integration: 6,
                from: 3.34625,
                to: 3.3537500000000002,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['dimethylformamide'],
        smiles: 'C(=O)N(C)C',
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
                integration: 1,
                from: 7.96625,
                to: 7.97375,
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
                integration: 3,
                from: 2.98625,
                to: 2.9937500000000004,
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
                integration: 3,
                from: 2.8562499999999997,
                to: 2.86375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['1,4-dioxane'],
        smiles: 'C1COCCOC1',
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
                integration: 8,
                from: 3.65625,
                to: 3.6637500000000003,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['DME', 'diethyl ether'],
        smiles: 'CCOCC',
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
                integration: 6,
                from: 3.34625,
                to: 3.3537500000000002,
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
                integration: 4,
                from: 3.51625,
                to: 3.52375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['ethane'],
        smiles: 'CC',
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
                integration: 6,
                from: 0.84625,
                to: 0.85375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['ethanol'],
        smiles: 'CCO',
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
                integration: 3,
                from: 1.16875,
                to: 1.21125,
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
                integration: 2,
                from: 3.5700000000000003,
                to: 3.63,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['ethyl acetate'],
        smiles: 'CC(=O)CC',
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
                integration: 3,
                from: 2.0062499999999996,
                to: 2.01375,
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
                integration: 2,
                from: 4.06,
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
                        delta: 1.24,
                        assignment: 'CH₂CH₃',
                    },
                ],
                integration: 3,
                from: 1.21875,
                to: 1.26125,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['ethylene'],
        smiles: 'C=C',
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
                integration: 4,
                from: 5.3862499999999995,
                to: 5.39375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['ethylene glycol'],
        smiles: 'OCCO',
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
                integration: 4,
                from: 3.5862499999999997,
                to: 3.59375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['H greaseᶠ'],
        smiles: '',
        ranges: [
            {
                signals: [],
                integration: 6,
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
                integration: 10,
                from: 1.2862500000000001,
                to: 1.29375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['hexamethylbenzene'],
        smiles: 'CC1=C(C(=C(C(=C1C)C)C)C)C',
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
                integration: 18,
                from: 2.18625,
                to: 2.19375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['n-hexane'],
        smiles: 'CCCCCC',
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
                integration: 6,
                from: 0.87875,
                to: 0.92125,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.29,
                        assignment: 'CH₂',
                    },
                ],
                integration: 8,
                from: 1.2862500000000001,
                to: 1.29375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['HMDSO'],
        smiles: 'C[Si](C)(C)O[Si](C)(C)C',
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
                integration: 18,
                from: 0.06625,
                to: 0.07375000000000001,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['HMPA'],
        smiles: 'CN(C)P(=O)(N(C)C)N(C)C',
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
                integration: 18,
                from: 2.624375,
                to: 2.655625,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['hydrogen'],
        smiles: '',
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
                integration: 2,
                from: 4.5562499999999995,
                to: 4.56375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['imidazole'],
        smiles: 'C1=CN=CN1',
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
                integration: 1,
                from: 7.66625,
                to: 7.67375,
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
                integration: 2,
                from: 7.04625,
                to: 7.05375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['methane'],
        smiles: 'C',
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
                integration: 4,
                from: 0.19625,
                to: 0.20375000000000001,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['methanol'],
        smiles: 'CO',
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
                integration: 3,
                from: 3.3362499999999997,
                to: 3.34375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['nitromethane'],
        smiles: 'C[N+](=O)[O-]',
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
                integration: 3,
                from: 4.33625,
                to: 4.34375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['n-pentane'],
        smiles: 'CCCCC',
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
                integration: 6,
                from: 0.87875,
                to: 0.92125,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.29,
                        assignment: 'CH₂',
                    },
                ],
                integration: 6,
                from: 1.2862500000000001,
                to: 1.29375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['propane'],
        smiles: 'CCC',
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
                integration: 6,
                from: 0.888,
                to: 0.932,
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
                integration: 2,
                from: 1.2815,
                to: 1.3985,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['2-propanol'],
        smiles: 'CC(O)C',
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
                integration: 6,
                from: 1.48875,
                to: 1.51125,
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
                integration: 1,
                from: 3.87125,
                to: 3.96875,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['propylene'],
        smiles: 'CC=C',
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
                integration: 3,
                from: 1.6844999999999999,
                to: 1.7155,
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
                integration: 1,
                from: 4.89375,
                to: 4.9262500000000005,
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
                integration: 1,
                from: 4.984999999999999,
                to: 5.035,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 5.82,
                        assignment: 'CH',
                    },
                ],
                integration: 1,
                from: 5.81625,
                to: 5.82375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['pyridine'],
        smiles: 'C1=CC=NC=C1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 8.53,
                        assignment: 'CH(2,6)',
                    },
                ],
                integration: 2,
                from: 8.52625,
                to: 8.53375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.44,
                        assignment: 'CH(3,5)',
                    },
                ],
                integration: 2,
                from: 7.43625,
                to: 7.4437500000000005,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.85,
                        assignment: 'CH(4)',
                    },
                ],
                integration: 1,
                from: 7.8462499999999995,
                to: 7.85375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['pyrrole'],
        smiles: 'C1=CNC=C1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 6.72,
                        assignment: 'CH(2,5)',
                    },
                ],
                integration: 2,
                from: 6.71625,
                to: 6.72375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 6.08,
                        assignment: 'CH(3,4)',
                    },
                ],
                integration: 2,
                from: 6.07625,
                to: 6.08375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['pyrrolidine'],
        smiles: 'C1CCNC1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 2.8,
                        assignment: 'CH₂(2,5)',
                    },
                ],
                integration: 4,
                from: 2.7962499999999997,
                to: 2.80375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.72,
                        assignment: 'CH₂(3,4)',
                    },
                ],
                integration: 4,
                from: 1.71625,
                to: 1.72375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['silicone grease'],
        smiles: '',
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
                integration: 6,
                from: 0.09625,
                to: 0.10375000000000001,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['tetrahydrofuran'],
        smiles: 'C1COCC1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.71,
                        assignment: 'CH₂(2,5)',
                    },
                ],
                integration: 4,
                from: 3.70625,
                to: 3.71375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.87,
                        assignment: 'CH₂(3,4)',
                    },
                ],
                integration: 4,
                from: 1.8662500000000002,
                to: 1.87375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['toluene'],
        smiles: 'Cc1ccccc1',
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
                integration: 3,
                from: 2.3162499999999997,
                to: 2.32375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.16,
                        assignment: 'CH(2,4,6)',
                    },
                ],
                integration: 3,
                from: 7.15625,
                to: 7.16375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.16,
                        assignment: 'CH(3,5)',
                    },
                ],
                integration: 2,
                from: 7.15625,
                to: 7.16375,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['triethylamine'],
        smiles: 'CCN(CC)CC',
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
                integration: 6,
                from: 1.02875,
                to: 1.07125,
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
                integration: 4,
                from: 2.5500000000000003,
                to: 2.61,
            },
        ],
        nucleus: '1H',
        solvent: 'CD₃OD',
    },
    {
        names: ['water'],
        smiles: 'O',
        ranges: [],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['acetic acid'],
        smiles: 'CC(=O)O',
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
                integration: 3,
                from: 2.07625,
                to: 2.08375,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['acetone'],
        smiles: 'CC(=O)C',
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
                integration: 6,
                from: 2.21625,
                to: 2.2237500000000003,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['acetonitrile'],
        smiles: 'CC#N',
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
                integration: 3,
                from: 2.05625,
                to: 2.06375,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['benzene'],
        smiles: 'c1ccccc1',
        ranges: [],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['tert -butyl alcohol'],
        smiles: 'CC(C)(C)O',
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
                integration: 9,
                from: 1.23625,
                to: 1.24375,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['chloroform'],
        smiles: 'ClC(Cl)Cl',
        ranges: [],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['18-crown-6'],
        smiles: 'C1COCCOCCOCCOCCOCCO1',
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
                integration: 24,
                from: 3.7962499999999997,
                to: 3.80375,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['cyclohexane'],
        smiles: 'C1CCCCC1',
        ranges: [],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['1,2-dichloroethane'],
        smiles: 'ClCCCl',
        ranges: [],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['dichloromethane'],
        smiles: 'ClCCl',
        ranges: [],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['diethyl ether'],
        smiles: 'CCOCC',
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
                integration: 6,
                from: 1.14875,
                to: 1.19125,
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
                integration: 4,
                from: 3.5300000000000002,
                to: 3.59,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['diglyme'],
        smiles: 'COCCOCCOC',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.67,
                        assignment: 'CH₂',
                    },
                ],
                integration: 4,
                from: 3.66625,
                to: 3.67375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 3.61,
                        assignment: 'CH₂',
                    },
                ],
                integration: 4,
                from: 3.6062499999999997,
                to: 3.61375,
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
                integration: 6,
                from: 3.36625,
                to: 3.3737500000000002,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['dimethylformamide'],
        smiles: 'C(=O)N(C)C',
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
                integration: 1,
                from: 7.91625,
                to: 7.92375,
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
                integration: 3,
                from: 3.0062499999999996,
                to: 3.01375,
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
                integration: 3,
                from: 2.84625,
                to: 2.8537500000000002,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['1,4-dioxane'],
        smiles: 'C1COCCOC1',
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
                integration: 8,
                from: 3.74625,
                to: 3.75375,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['DME', 'diethyl ether'],
        smiles: 'CCOCC',
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
                integration: 6,
                from: 3.36625,
                to: 3.3737500000000002,
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
                integration: 4,
                from: 3.59625,
                to: 3.6037500000000002,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['ethane'],
        smiles: 'CC',
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
                integration: 6,
                from: 0.8162499999999999,
                to: 0.82375,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['ethanol'],
        smiles: 'CCO',
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
                integration: 3,
                from: 1.14875,
                to: 1.19125,
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
                integration: 2,
                from: 3.62,
                to: 3.6799999999999997,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['ethyl acetate'],
        smiles: 'CC(=O)CC',
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
                integration: 3,
                from: 2.0662499999999997,
                to: 2.07375,
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
                integration: 2,
                from: 4.109999999999999,
                to: 4.17,
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
                integration: 3,
                from: 1.21875,
                to: 1.26125,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['ethylene'],
        smiles: 'C=C',
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
                integration: 4,
                from: 5.43625,
                to: 5.4437500000000005,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['ethylene glycol'],
        smiles: 'OCCO',
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
                integration: 4,
                from: 3.6462499999999998,
                to: 3.65375,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['H greaseᶠ'],
        smiles: '',
        ranges: [],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['hexamethylbenzene'],
        smiles: 'CC1=C(C(=C(C(=C1C)C)C)C)C',
        ranges: [],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['n-hexane'],
        smiles: 'CCCCCC',
        ranges: [],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['HMDSO'],
        smiles: 'C[Si](C)(C)O[Si](C)(C)C',
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
                integration: 18,
                from: 0.27625000000000005,
                to: 0.28375,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['HMPA'],
        smiles: 'CN(C)P(=O)(N(C)C)N(C)C',
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
                integration: 18,
                from: 2.594375,
                to: 2.625625,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['hydrogen'],
        smiles: '',
        ranges: [],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['imidazole'],
        smiles: 'C1=CN=CN1',
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
                integration: 1,
                from: 7.77625,
                to: 7.78375,
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
                integration: 2,
                from: 7.1362499999999995,
                to: 7.14375,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['methane'],
        smiles: 'C',
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
                integration: 4,
                from: 0.17625,
                to: 0.18375,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['methanol'],
        smiles: 'CO',
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
                integration: 3,
                from: 3.3362499999999997,
                to: 3.34375,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['nitromethane'],
        smiles: 'C[N+](=O)[O-]',
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
                integration: 3,
                from: 4.39625,
                to: 4.4037500000000005,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['n-pentane'],
        smiles: 'CCCCC',
        ranges: [],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['propane'],
        smiles: 'CCC',
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
                integration: 6,
                from: 0.858,
                to: 0.902,
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
                integration: 2,
                from: 1.2415,
                to: 1.3585,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['2-propanol'],
        smiles: 'CC(O)C',
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
                integration: 6,
                from: 1.15875,
                to: 1.18125,
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
                integration: 1,
                from: 3.9712499999999995,
                to: 4.06875,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['propylene'],
        smiles: 'CC=C',
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
                integration: 3,
                from: 1.6844999999999999,
                to: 1.7155,
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
                integration: 1,
                from: 4.93375,
                to: 4.9662500000000005,
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
                integration: 1,
                from: 5.034999999999999,
                to: 5.085,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 5.9,
                        assignment: 'CH',
                    },
                ],
                integration: 1,
                from: 5.89625,
                to: 5.9037500000000005,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['pyridine'],
        smiles: 'C1=CC=NC=C1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 8.52,
                        assignment: 'CH(2,6)',
                    },
                ],
                integration: 2,
                from: 8.51625,
                to: 8.52375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.45,
                        assignment: 'CH(3,5)',
                    },
                ],
                integration: 2,
                from: 7.44625,
                to: 7.45375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 7.87,
                        assignment: 'CH(4)',
                    },
                ],
                integration: 1,
                from: 7.86625,
                to: 7.87375,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['pyrrole'],
        smiles: 'C1=CNC=C1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 6.93,
                        assignment: 'CH(2,5)',
                    },
                ],
                integration: 2,
                from: 6.92625,
                to: 6.93375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 6.26,
                        assignment: 'CH(3,4)',
                    },
                ],
                integration: 2,
                from: 6.25625,
                to: 6.26375,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['pyrrolidine'],
        smiles: 'C1CCNC1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.07,
                        assignment: 'CH₂(2,5)',
                    },
                ],
                integration: 4,
                from: 3.0662499999999997,
                to: 3.07375,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.87,
                        assignment: 'CH₂(3,4)',
                    },
                ],
                integration: 4,
                from: 1.8662500000000002,
                to: 1.87375,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['silicone grease'],
        smiles: '',
        ranges: [],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['tetrahydrofuran'],
        smiles: 'C1COCC1',
        ranges: [
            {
                signals: [
                    {
                        js: [],
                        delta: 3.74,
                        assignment: 'CH₂(2,5)',
                    },
                ],
                integration: 4,
                from: 3.73625,
                to: 3.7437500000000004,
            },
            {
                signals: [
                    {
                        js: [],
                        delta: 1.88,
                        assignment: 'CH₂(3,4)',
                    },
                ],
                integration: 4,
                from: 1.87625,
                to: 1.8837499999999998,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['toluene'],
        smiles: 'Cc1ccccc1',
        ranges: [],
        nucleus: '1H',
        solvent: 'D₂O',
    },
    {
        names: ['triethylamine'],
        smiles: 'CCN(CC)CC',
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
                integration: 6,
                from: 0.96875,
                to: 1.01125,
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
                integration: 4,
                from: 2.54,
                to: 2.5999999999999996,
            },
        ],
        nucleus: '1H',
        solvent: 'D₂O',
    },
];
//# sourceMappingURL=protonImpurities.js.map