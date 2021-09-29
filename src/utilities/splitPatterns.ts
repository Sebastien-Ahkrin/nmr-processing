
export function splitPatterns(multiplet: string) {
  let result = multiplet.match(
    / *(quint|hex|sept|hept|oct|nona|non|s|d|t|q|h|o|n) */g,
  );
  if (result) return result.map((entry) => entry.trim());
}