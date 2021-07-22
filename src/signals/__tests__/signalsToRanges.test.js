import { signalsToRanges } from '../signalsToRanges';

describe('signalsToRanges', function () {
  it('simple signals', () => {
    const signals = [{ delta: 1, nbAtoms: 1 }];
    const ranges = signalsToRanges(signals);
    expect(ranges).toStrictEqual([
      {
        from: 0.95,
        to: 1.05,
        integration: 1,
        signals: [{ delta: 1, nbAtoms: 1 }],
      },
    ]);
  });
  it('simple join signals', () => {
    const signals = [
      { delta: 1, nbAtoms: 1 },
      { delta: 1.02, nbAtoms: 2 },
    ];
    const ranges = signalsToRanges(signals);
    expect(ranges).toStrictEqual([
      {
        from: 0.95,
        to: 1.07,
        integration: 3,
        signals: [
          { delta: 1, nbAtoms: 1 },
          { delta: 1.02, nbAtoms: 2 },
        ],
      },
    ]);
  });
  it('advanced signals', () => {
    const signals = [
      { delta: 1, nbAtoms: 1 },
      { delta: 1.02, nbAtoms: 2 },
      { delta: 2, nbAtoms: 1, js: [{ coupling: 10 }] },
      { delta: 2.06, nbAtoms: 2, js: [{ coupling: 10 }] },
      { delta: 2.1, nbAtoms: 3, js: [{ coupling: 10 }, { coupling: 40 }] },
    ];
    const ranges = signalsToRanges(signals);
    expect(ranges).toStrictEqual([
      {
        from: 0.95,
        to: 1.07,
        integration: 3,
        signals: [
          { delta: 1, nbAtoms: 1 },
          { delta: 1.02, nbAtoms: 2 },
        ],
      },
      {
        from: 1.9375,
        to: 2.2125,
        integration: 6,
        signals: [
          { delta: 2, nbAtoms: 1, js: [{ coupling: 10 }] },
          { delta: 2.1, nbAtoms: 3, js: [{ coupling: 10 }, { coupling: 40 }] },
          { delta: 2.06, nbAtoms: 2, js: [{ coupling: 10 }] },
        ],
      },
    ]);
  });
});
