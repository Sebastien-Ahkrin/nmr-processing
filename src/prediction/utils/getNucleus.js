const nucleusMap = {
  h: '1H',
  c: '13C',
};

export function getNucleus(input) {
  return Object.values(input).map((e) => nucleusMap[e.toLowerCase()] || '');
}
