import getWorkFlow from '../getWorkFlow';
import correlations from '../../data/correlations';

describe('getWorkflow', () => {
  it('simple test case', () => {
    const result = getWorkFlow(correlations);
    const desired = {
      assignmentOrder: [['C'], ['H']],
      experimentTypes: {
        types: ["C", "H", "hmbc", "hsqc"],
        hasProton: true,
        hascarbon: true,
        hasHSQC: true,
      },
    };
    result.experimentTypes.types.sort();
    expect(result).toStrictEqual(desired);
  });
  it('with justAssign', () => {
    const result = getWorkFlow(correlations, ["C"]);
    const desired = {
      assignmentOrder: [['C']],
      experimentTypes: {
        types: ["C", "H", "hmbc", "hsqc"],
        hasProton: true,
        hascarbon: true,
        hasHSQC: true,
      },
    };
    result.experimentTypes.types.sort();
    expect(result).toStrictEqual(desired);
  });
  it('with justAssign', () => {
    const result = getWorkFlow(correlations, ["C", 'H', 'N']);
    const desired = {
      assignmentOrder: [['C', 'H']],
      experimentTypes: {
        types: ["C", "H", "hmbc", "hsqc"],
        hasProton: true,
        hascarbon: true,
        hasHSQC: true,
      },
    };
    result.experimentTypes.types.sort();
    expect(result).toStrictEqual(desired);
  });
});
