export function splitParenthesis(part) {
    const match = / *(?<before>[^(]*?) *\( *(?<inside>.*?) *\) *(?<after>.*?) */.exec(part);
    if (!match) {
        return { before: part, inside: '', after: '' };
    }
    return match.groups;
}
//# sourceMappingURL=splitParenthesis.js.map