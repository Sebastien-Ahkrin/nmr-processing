function groupCarbonTargetByIntegrationZone(
  activeDomainOnTarget,
  targets,
  correlations,
) {
  let targetID = activeDomainOnTarget[0];
  let { H: attachments = [] } = targets[targetID].attachment;

  let targetByIntegral = [
    { targetIDs: [targetID], attachments: new Set(attachments) },
  ];

  for (let i = 1; i < activeDomainOnTarget.length; i++) {
    let targetID = activeDomainOnTarget[i];
    let target = targets[targetID];
    let { H: attachments = [] } = target.attachment;

    let alone = true;
    for (let group of targetByIntegral) {
      const pertain = attachments.some((attachment) =>
        group.attachments.has(attachment),
      );
      if (pertain) {
        alone = false;
        group.targetIDs.push(targetID);
        for (let attachment of attachments) {
          group.attachments.add(attachment);
        }
        break;
      }
    }
    if (alone) {
      targetByIntegral.push({
        targetIDs: [targetID],
        attachments: new Set(attachments),
      });
    }
  }
  return targetByIntegral.map((t) => ({
    atomType: 'C',
    targetIDs: t.targetIDs,
    integration: Array.from(t.attachments).reduce((sum, index) => {
      return correlations[index].integration + sum;
    }, 0),
  }));
}

export default groupCarbonTargetByIntegrationZone;
