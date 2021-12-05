export function getIntegrationOfAttachedProton(target, correlations) {
  const { H: attachment = [] } = target.attachment;
  let integration = 0;
  for (const match of attachment) {
    const correlation = correlations[match];
    integration += Number(correlation.integration);
  }
  return integration;
}
