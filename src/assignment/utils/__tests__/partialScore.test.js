import correlationData from '../data/correlations';
import predictions from '../data/predictions';
import { formatCorrelations } from '../formatCorrelations';
import { partialScore } from '../partialScore';

describe('partial score', () => {
  const { targets, correlations } = formatCorrelations(correlationData);
  const diaIDPeerPossibleAssignment = {
    C: ['carbon1', 'carbon2', 'carbon3', 'carbon4'],
  };

  it('scoring a partial assignation with chemicalShift scoring', () => {
    let partial = { C: new Array(4) };
    partial.C[0] = '6dVPFnCT';
    const result = partialScore(partial, {
      predictions,
      correlations,
      targets,
      restrictionByCS: {
        tolerance: 0.5,
        useChemicalShiftScore: true,
      },
      nbAllowedUnAssigned: 0,
      diaIDPeerPossibleAssignment,
    });
    expect(result).toBeCloseTo(0.96155, 2);
  });

  it('without chemicalShift scoring', () => {
    let partial = { C: new Array(4) };
    partial.C[0] = '6dVPFnCT';
    const result = partialScore(partial, {
      predictions,
      targets,
      restrictionByCS: {
        tolerance: 1,
        useChemicalShiftScore: false,
      },
      nbAllowedUnAssigned: 0,
      diaIDPeerPossibleAssignment,
      correlations,
    });
    expect(result).toBeCloseTo(1, 2);
  });

  it('with wrong assignment with chemicalShif scoring', () => {
    let partial = { C: new Array(4) };
    partial.C[0] = 'aFEmeB3j';
    const result = partialScore(partial, {
      predictions,
      atomTypes: ['C'],
      targets,
      restrictionByCS: {
        tolerance: 1,
        useChemicalShiftScore: true,
      },
      nbAllowedUnAssigned: 0,
      diaIDPeerPossibleAssignment,
      correlations,
    });
    expect(result).toBeCloseTo(0, 2);
  });

  it('with wrong assignment without chemicalShif scoring', () => {
    let partial = { C: new Array(4) };
    partial.C[0] = 'aFEmeB3j';
    const result = partialScore(partial, {
      predictions,
      targets,
      restrictionByCS: {
        tolerance: 1,
        useChemicalShiftScore: false,
      },
      nbAllowedUnAssigned: 0,
      diaIDPeerPossibleAssignment,
      correlations,
    });
    expect(result).toBeCloseTo(0, 2);
  });

  it('with correct assignment with chemicalShif scoring without hydrogens', () => {
    let partial = { C: new Array(4) };
    partial.C[1] = 'aFEmeB3j';
    const result = partialScore(partial, {
      predictions,
      targets,
      restrictionByCS: {
        tolerance: 0.05,
        useChemicalShiftScore: true,
      },
      nbAllowedUnAssigned: 0,
      diaIDPeerPossibleAssignment,
      correlations,
    });
    expect(result).toBeCloseTo(0.8705, 3);
  });
  it('with multi-assignments one wrong with chemicalShif scoring', () => {
    let partial = { C: new Array(4) };
    partial.C[0] = '6dVPFnCT';
    partial.C[1] = 'rc5vsGS0';
    const result = partialScore(partial, {
      predictions,
      atomTypes: ['C'],
      targets,
      restrictionByCS: {
        tolerance: 1,
        useChemicalShiftScore: true,
      },
      nbAllowedUnAssigned: 0,
      diaIDPeerPossibleAssignment,
      correlations,
    });
    expect(result).toBeCloseTo((0.90956 + 1) / 2, 3);

    //fix the assignment of the second atom
    partial.C[1] = 'aFEmeB3j';
    const result2 = partialScore(partial, {
      predictions,
      atomTypes: ['C'],
      targets,
      restrictionByCS: {
        tolerance: 1,
        useChemicalShiftScore: true,
      },
      nbAllowedUnAssigned: 0,
      diaIDPeerPossibleAssignment,
      correlations,
    });
    expect(result < result2).toBe(true);
  });
  it('with incorrect assignment with close CS but without hydrogens', () => {
    let partial = { C: new Array(4) };
    partial.C[3] = 'rc5vsGS0';
    const result = partialScore(partial, {
      predictions,
      targets,
      restrictionByCS: {
        tolerance: 1,
        useChemicalShiftScore: true,
      },
      nbAllowedUnAssigned: 0,
      diaIDPeerPossibleAssignment,
      correlations,
    });
    expect(result).toBeCloseTo(0, 3);
  });
});
