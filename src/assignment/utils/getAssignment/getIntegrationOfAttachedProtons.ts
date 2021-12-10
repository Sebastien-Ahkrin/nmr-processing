import { Types } from 'nmr-correlation';

import type { Targets } from './getTargetsAndCorrelations';

export function getIntegrationOfAttachedProtons(
  target: Targets,
  correlations: Types.Values,
) {
  const { H: attachment = [] } = target.attachment;
  let integration = 0;
  for (const match of attachment) {
    const correlation = correlations[match];
    integration += Number(correlation.link[0].signal.integration);
  }
  return integration;
}