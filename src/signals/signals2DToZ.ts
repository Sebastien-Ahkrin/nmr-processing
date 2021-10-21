import { generateSpectrum2D } from 'spectrum-generator';
import type { XYNumber } from 'spectrum-generator';

import type { NMRSignal2D } from '../types/NMRSignal2D';

interface signals2DToZOptions {
  /**
   * lower limit in the spectrum, if it is a number the value will be defined for both axes
   * @default -1
   */
  from?: number | XYNumber;
  /**
   * upper limit in the spectrum, if it is a number the value will be defined for both axes
   * @default 12
   */
  to?: number | XYNumber;
  /**
   * Number of points of each dimension of the spectrum,
   * if it is a number the value will be defined for both axes
   * @default 512
   */
  nbPoints?: number | XYNumber;
  /**
   * full width at half maximum of signals for each dimension,
   * if it is a number the value will be defined for both axes.
   * @default 0.02
   */
  width?: number | XYNumber;
}

export interface Peak2DSeries {
  x: number[];
  y: number[];
  z: number[];
}

export function signals2DToZ(
  signals: NMRSignal2D[],
  options: signals2DToZOptions = {},
) {
  let { from = -1, to = 12, nbPoints = 512, width = 0.02 } = options;

  const peaks = signals.reduce<Peak2DSeries>(
    (acc, { x, y }) => {
      acc.x.push(x.delta);
      acc.y.push(y.delta);
      acc.z.push(100);
      return acc;
    },
    { x: [], y: [], z: [] },
  );

  width = ensureXYNumber(width);
  return generateSpectrum2D(peaks, {
    generator: {
      from: ensureXYNumber(from),
      to: ensureXYNumber(to),
      nbPoints: ensureXYNumber(nbPoints),
    },
    peaks: {
      width,
    },
  });
}

function ensureXYNumber(input: number | XYNumber): XYNumber {
  let result = typeof input !== 'object' ? { x: input, y: input } : input;
  return result;
}
