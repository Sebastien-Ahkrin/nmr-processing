import correlationData from '../data/correlations';
import predictions from '../data/predictions';
import { createMapPossibleAssignment } from '../createMapPossibleAssignment';
import { formatCorrelations } from '../formatCorrelations';

const { targets } = formatCorrelations(correlationData);

describe('AutoAssignment - createMapPossibleAssignment', () => {
  it('create map', () => {
    const result = {}
    createMapPossibleAssignment(result, {
      restrictionByCS: {
        tolerance: 0.3,
        useChemicalShiftScore: true,
        chemicalShiftRestriction: true,
      },
      predictions,
      targets,
    });
    expect(result.C.carbon1).toStrictEqual(['6dVPFnCT', '*']);
    expect(result.C.carbon2).toStrictEqual(['aFEmeB3j', '*']);
    expect(result.C.carbon3).toStrictEqual(['rc5vsGS0', '*']);
    expect(result.C.carbon4).toStrictEqual(['*']);
  })
})