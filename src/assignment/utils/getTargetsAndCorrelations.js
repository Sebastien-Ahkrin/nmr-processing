import { buildCorrelationData } from 'nmr-correlation';
import { getIntegrationOfAttachedProton } from './getIntegrationOfAttachedProton';

export function getTargetsAndCorrelations(spectra, options) {
  //add indirect links, if a carbon C1 is attached to a proton H1 that correlating
  //with carbon C2, so the carbon C1 and C2 are also correlating

  const correlations = buildCorrelationData(spectra, options);

  for (let i = 0; i < correlations.length; i++) {
    const { H: attachmentH = [] } = correlations[i].attachment;
    let indirectLinks = {};
    for (let match of attachmentH) {
      const links = correlations[match].link;
      for (let link of links) {
        indirectLinks[link.signal.id] = link;
      }
    }
    correlations[i].indirectLinks = []; //Object.values(indirectLinks);
  }
  //formatting correlation by atomType
  const targets = {};
  for (const correlation of correlations) {
    if (correlation.pseudo) continue;
    const { signal, atomType } = correlation;
    if (!targets[atomType]) targets[atomType] = {};
    targets[atomType][signal.id] = correlation;
    if (targets[atomType][signal.id].integration === undefined) {
      targets[atomType][signal.id].integration = getIntegrationOfAttachedProton(
        correlation,
        correlations,
      );
    }
  }

  return { targets, correlations };
}
