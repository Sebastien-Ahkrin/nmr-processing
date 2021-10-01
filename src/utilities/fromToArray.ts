export function fromToArray(from: number, to: number, nbPoints: number) {
  let result = new Array(nbPoints);
  const jump = (to - from) / (nbPoints - 1);
  result.forEach((e, i, arr) => (arr[i] = from + i * jump));
  return result;
}
