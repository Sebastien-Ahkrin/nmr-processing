import { gsd, joinBroadPeaks, optimizePeaks } from 'ml-gsd';
import { xyExtract, xNoiseSanPlot, xAbsoluteMedian, } from 'ml-spectra-processing';
export function xyAutoPeaksPicking(data, options = {}) {
    const { from, to, noiseLevel, thresholdFactor = 3, minMaxRatio = 0.05, broadRatio = 0.00025, useSanPlot = false, smoothY = true, optimize = false, factorWidth = 4, realTopDetection = true, shape = { kind: 'gaussian' }, optimization = { kind: 'lm' }, broadWidth = 0.25, lookNegative = false, sgOptions = { windowSize: 9, polynomial: 3 }, } = options;
    if (from !== undefined && to !== undefined) {
        data = xyExtract(data, { zones: [{ from, to }] });
    }
    const cutOff = getCutOff(data.y, { noiseLevel, useSanPlot, thresholdFactor });
    let getPeakOptions = {
        shape,
        broadWidth,
        optimize,
        factorWidth,
        sgOptions,
        minMaxRatio,
        broadRatio,
        noiseLevel: cutOff.positive,
        smoothY,
        optimization,
        realTopDetection,
    };
    let peaks = getPeakList(data, getPeakOptions);
    if (lookNegative) {
        getPeakOptions.noiseLevel = cutOff.negative;
        peaks.push(...getNegativePeaks(data, getPeakOptions));
    }
    return peaks;
}
function getPeakList(data, options) {
    const { shape, broadWidth, optimize, factorWidth, sgOptions, minMaxRatio, broadRatio, noiseLevel, smoothY, optimization, realTopDetection, } = options;
    let peakList = gsd(data, {
        shape,
        sgOptions,
        minMaxRatio,
        broadRatio,
        noiseLevel,
        smoothY,
        realTopDetection,
    });
    if (broadWidth) {
        peakList = joinBroadPeaks(peakList, {
            width: broadWidth,
            shape,
            optimization,
        });
    }
    if (optimize) {
        peakList = optimizePeaks(data, peakList, {
            shape,
            factorWidth,
            optimization,
        });
    }
    return peakList;
}
function getNegativePeaks(data, options) {
    let { x, y } = data;
    let negativeDataY = new Float64Array(data.y.length);
    for (let i = 0; i < negativeDataY.length; i++) {
        negativeDataY[i] = -1 * y[i];
    }
    let peakList = getPeakList({ x, y: negativeDataY }, options);
    for (const peak of peakList) {
        peak.y *= -1;
    }
    return peakList;
}
function getCutOff(data, options) {
    const { noiseLevel, useSanPlot, thresholdFactor } = options;
    const formatResult = (noiseLevel) => typeof noiseLevel === 'number'
        ? { positive: noiseLevel, negative: -noiseLevel }
        : noiseLevel;
    if (noiseLevel) {
        return formatResult(noiseLevel);
    }
    else {
        return useSanPlot
            ? xNoiseSanPlot(data, { factorStd: thresholdFactor })
            : formatResult(xAbsoluteMedian(data) * thresholdFactor);
    }
}
//# sourceMappingURL=xyAutoPeaksPicking.js.map