import type { NMRRange } from '../../xy/NMRRange';

export function joinRanges(ranges: NMRRange[]) {
  ranges.sort((a, b) => a.from - b.from);

  for (let i = 0; i < ranges.length - 1; i++) {
    const currentRange = ranges[i];
    const nextRange = ranges[i + 1];

    if (currentRange.to > nextRange.from) {
      currentRange.to = Math.max(nextRange.to, currentRange.to);
      if (currentRange.signals && nextRange.signals) {
        currentRange.signals = currentRange.signals.concat(nextRange.signals);
      }
      if (currentRange.integration !== undefined) {
        currentRange.integration += nextRange.integration || 0;
      }
      ranges.splice(i + 1, 1);
      i--;
    }
  }

  return ranges;
}
