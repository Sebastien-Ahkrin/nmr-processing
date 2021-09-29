import { generateSpectrum2D } from 'spectrum-generator';
import type { XYNumber } from 'spectrum-generator';

import type { Signal2D } from '../types/signal2D';

interface signals2DToZOptions {
  from?: number | XYNumber;
  to?: number | XYNumber;
  nbPoints?: number | XYNumber;
  width?: number | XYNumber;
}

export interface Peak2DSeries {
  x: number[];
  y: number[];
  z: number[];
}

export function signals2DToZ(
  signals: Signal2D[],
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
