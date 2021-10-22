const nucleusMap = {
    h: '1H',
    c: '13C',
};
export function getNuclei(input) {
    return Object.values(input).map((e) => (nucleusMap[e.toLowerCase()]));
}
//# sourceMappingURL=getNuclei.js.map