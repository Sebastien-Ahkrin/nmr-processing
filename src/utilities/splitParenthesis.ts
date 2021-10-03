export function splitParenthesis(part: string): {
  before: string;
  inside: string;
  after: string;
} {
  const match =
    / *(?<before>[^(]*?) *\( *(?<inside>.*?) *\) *(?<after>.*?) */.exec(part);
  if (!match) {
    return { before: part, inside: '', after: '' };
  }
  return match.groups as { before: string; inside: string; after: string };
}
