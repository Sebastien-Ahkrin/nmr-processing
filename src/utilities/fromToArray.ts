export function fromToArray(from: number, to: number, nbPoints: number) {
  let result = new Float64Array(nbPoints);
  const jump = (to - from) / (nbPoints - 1);
  for (let i = 0; i < nbPoints; i++) {
    result[i] = from + i * jump;
  }
  return result;
}
