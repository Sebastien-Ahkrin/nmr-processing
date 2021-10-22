import { generateSpectrum2D } from 'spectrum-generator';
export function signals2DToZ(signals, options = {}) {
    let { from = -1, to = 12, nbPoints = 512, width = 0.02 } = options;
    const peaks = signals.reduce((acc, { x, y }) => {
        acc.x.push(x.delta);
        acc.y.push(y.delta);
        acc.z.push(100);
        return acc;
    }, { x: [], y: [], z: [] });
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
function ensureXYNumber(input) {
    let result = typeof input !== 'object' ? { x: input, y: input } : input;
    return result;
}
//# sourceMappingURL=signals2DToZ.js.map