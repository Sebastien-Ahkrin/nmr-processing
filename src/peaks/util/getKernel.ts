export interface GetKernelOptions {
  sigma?: number;
  xLength?: number;
  yLength?: number;
}
export function getKernel(options: GetKernelOptions = {}) {
  let { sigma = 1.4, xLength = 9, yLength = 9 } = options;

  let factor = -40 / laplacianOfGaussian(0, 0, sigma);

  const xCenter = (xLength - 1) / 2;
  const yCenter = (yLength - 1) / 2;
  let matrix = new Array(xLength);
  for (let x = 0; x < xLength; x++) {
    matrix[x] = new Array(yLength);
    for (let y = 0; y < yLength; y++) {
      matrix[x][y] =
        laplacianOfGaussian(x - xCenter, y - yCenter, sigma) * factor;
    }
  }

  return matrix;
}

const laplacianOfGaussian = (x: number, y: number, sigma: number) => {
  let factor = -(Math.pow(x, 2) + Math.pow(y, 2)) / 2 / Math.pow(sigma, 2);
  return -(1 / Math.PI / Math.pow(sigma, 4)) * (1 + factor) * Math.exp(factor);
};
