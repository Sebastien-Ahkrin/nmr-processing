import { rangeFromSignal } from '../rangeFromSignal';

describe('general test rangeFromSignal', () => {
  it('singlet', () => {
    const fromTo = rangeFromSignal(
      {
        delta: 1,
        js: [],
        multiplicity: 's',
      },
      { nucleus: '1h' },
    );

    const expectedHalfWidth = 1.5 / 400;
    expect(fromTo.from).toBeCloseTo(1 - expectedHalfWidth, 3);
    expect(fromTo.to).toBeCloseTo(1 + expectedHalfWidth, 3);
  });

  it('doublet', () => {
    const fromTo = rangeFromSignal(
      {
        delta: 1,
        js: [{ coupling: 4, multiplicity: 'd' }],
        multiplicity: 'd',
      },
      { nucleus: '1h' },
    );

    const expectedHalfWidth = 1.5 / 400 + 0.005;
    expect(fromTo.from).toBeCloseTo(1 - expectedHalfWidth, 3);
    expect(fromTo.to).toBeCloseTo(1 + expectedHalfWidth, 3);
  });
});
