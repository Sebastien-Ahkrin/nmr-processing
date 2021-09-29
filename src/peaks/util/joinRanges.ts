import type { Range } from '../../types/range';

export function joinRanges(ranges: Range[]) {
  ranges.sort((a, b) => a.from - b.from);
  for (let i = 0; i < ranges.length - 1; i++) {
    if (ranges[i].to > ranges[i + 1].from) {
      const currentRange = ranges[i];
      const nextRange = ranges[i + i];
      ranges[i].to = Math.max(ranges[i + 1].to, ranges[i].to);
      if (currentRange.signals && nextRange.signals) {
        currentRange.signals = currentRange.signals.concat(nextRange.signals);
      }
      if (currentRange.integration) {
        currentRange.integration += nextRange.integration || 0;
      }
      ranges.splice(i + 1, 1);
      i--;
    }
  }
  return ranges;
}
