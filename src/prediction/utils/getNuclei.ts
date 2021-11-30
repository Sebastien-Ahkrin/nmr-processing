const nucleusMap: { [key: string]: string } = {
  h: '1H',
  c: '13C',
};

export function getNuclei(input: { [key: string]: string }) {
  return Object.values(input).map((e) => nucleusMap[e.toLowerCase()]);
}
