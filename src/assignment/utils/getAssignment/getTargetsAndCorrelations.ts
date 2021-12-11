import { buildCorrelationData } from 'nmr-correlation';
import type { Types } from 'nmr-correlation';

import { SpectraDataWithIds } from './addIDs';
import { getIntegrationOfAttachedProtons } from './getIntegrationOfAttachedProtons';

export interface CorrelationWithIntegration
  extends Pick<
    Types.Correlation,
    'link' | 'atomType' | 'label' | 'attachment' | 'protonsCount'
  > {
  integration: number;
  indirectLinks: Array<Types.Link>;
}
export interface Targets {
  [key: string]: CorrelationWithIntegration;
}
export interface TargetsByAtomType {
  H: Targets;
  C: Targets;
}
export interface TargetsAndCorrelations {
  targets: TargetsByAtomType;
  correlations: CorrelationWithIntegration[];
}
export function getTargetsAndCorrelations(
  spectra: SpectraDataWithIds[],
  options: any,
): TargetsAndCorrelations {
  //add indirect links, if a carbon C1 is attached to a proton H1 that correlating
  //with carbon C2, so the carbon C1 and C2 are also correlating

  const { values: correlations } = buildCorrelationData(spectra, options);

  for (const correlation of correlations) {
    const { H: attachmentH = [] } = correlation.attachment;
    let indirectLinks: { [key: string]: any } = {};
    for (let match of attachmentH) {
      const links = correlations[match].link;
      for (let link of links) {
        indirectLinks[link.signal.id] = link;
      }
    }
    correlation.indirectLinks = [];
  }
  //formatting correlation by atomType
  let targets: any = {};
  for (const correlation of correlations) {
    if (correlation.pseudo) continue;
    const { link, atomType } = correlation;
    const targetID = link.signal.id;
    if (!targets[atomType]) targets[atomType] = {};
    targets[atomType][targetID] = correlation;
    if (atomType === 'H') {
      targets[atomType][targetID].integration =
        correlation.link[0].signal.integration;
    } else {
      targets[atomType][targetID].integration = getIntegrationOfAttachedProtons(
        correlation,
        correlations,
      );
    }
  }
  return {
    targets,
    correlations,
  };
}
