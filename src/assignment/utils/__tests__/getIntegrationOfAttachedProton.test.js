import correlationData from '../data/correlations';
import { getTargetsAndCorrelations } from '../getTargetsAndCorrelations';
import { getIntegrationOfAttachedProton } from '../getIntegrationOfAttachedProton';

describe('getIntegrationOfAttachedProton', () => {
  const { targets, correlations } = getTargetsAndCorrelations(correlationData);
  it('simple test', () => {
    const carbonTarget = Object.values(targets.C);
    const expectedResult = [0,0,2];
    for (let i = 0; i < carbonTarget.length; i++) {
      const target = carbonTarget[i];
      const integration = getIntegrationOfAttachedProton(target, correlationData);
      expect(integration).toBe(expectedResult[i])
    }
  });
});
