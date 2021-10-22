import { xyIntegration } from 'ml-spectra-processing';
import jAnalyzer from './util/jAnalyzer';
import { joinRanges } from './util/joinRanges';
function checkSignalAfterCompilePattern(signal) {
    // if (!signal.symRank)
    //   throw new Error('Internal error, symRank was not calculated');
    if (!signal.mask)
        throw new Error('Internal Error, mask was not added');
    if (!signal.mask2)
        throw new Error('Internal Error, mask2 was not added');
    if (!signal.maskPattern) {
        throw new Error('Internal Error, maskPattern was not added');
    }
}
const assignSignal = (peak, frequency, nucleus) => {
    return {
        delta: NaN,
        nbPeaks: 1,
        kind: 'signal',
        startX: peak.x - peak.shape.width,
        stopX: peak.x + peak.shape.width,
        observe: frequency,
        nucleus,
        integralData: {
            from: peak.x - peak.shape.width * 3,
            to: peak.x + peak.shape.width * 3,
            value: 0,
        },
        peaks: [
            {
                x: peak.x,
                intensity: peak.y,
                shape: {
                    width: peak.shape.width,
                },
            },
        ],
    };
};
/**
 * This function clustering peaks and calculate the integration value for each range from the peak list returned from extractPeaks function.
 */
export function peaksToRanges(data, peakList, options = {}) {
    let { integrationSum = 100, joinOverlapRanges = true, clean = 0.4, compile = true, integralType = 'sum', frequency = 400, frequencyCluster = 16, keepPeaks = false, nucleus = '1H', } = options;
    let signalOptions = {
        integrationSum,
        integralType,
        frequencyCluster,
        frequency,
        nucleus,
    };
    if (data.x[0] > data.x[1]) {
        data.x = data.x.reverse();
        data.y = data.y.reverse();
    }
    let signals = detectSignals(data, peakList, signalOptions);
    if (clean) {
        for (let i = 0; i < signals.length; i++) {
            if (Math.abs(signals[i].integralData.value) < clean) {
                signals.splice(i, 1);
            }
        }
    }
    if (compile) {
        let nHi, sum;
        for (let i = 0; i < signals.length; i++) {
            signals[i] = jAnalyzer.compilePattern(signals[i]);
            let signal = signals[i];
            if (signal.maskPattern &&
                signal.multiplicity !== 'm' &&
                signal.multiplicity !== '') {
                checkSignalAfterCompilePattern(signal);
                // Create a new signal with the removed peaks
                nHi = 0;
                sum = 0;
                let peaksO = [];
                for (let j = signal.maskPattern.length - 1; j >= 0; j--) {
                    sum += computeArea(signal.peaks[j]);
                    if (signal.maskPattern[j] === false) {
                        let peakR = signal.peaks.splice(j, 1)[0];
                        peaksO.push({
                            x: peakR.x,
                            y: peakR.intensity,
                            shape: {
                                width: peakR.shape.width,
                            },
                        });
                        signal.mask.splice(j, 1);
                        signal.mask2.splice(j, 1);
                        signal.maskPattern.splice(j, 1);
                        signal.nbPeaks--;
                        nHi += computeArea(peakR);
                    }
                }
                if (peaksO.length > 0) {
                    nHi = (nHi * signal.integralData.value) / sum;
                    signal.integralData.value -= nHi;
                    let peaks1 = [];
                    for (let j = peaksO.length - 1; j >= 0; j--) {
                        peaks1.push(peaksO[j]);
                    }
                    signalOptions.integrationSum = Math.abs(nHi);
                    let ranges = detectSignals(data, peaks1, signalOptions);
                    for (const range of ranges) {
                        signals.push(range);
                    }
                }
            }
        }
        // it was a updateIntegrals function.
        let sumIntegral = 0;
        let sumObserved = 0;
        for (const signal of signals) {
            sumObserved += Math.abs(Math.round(signal.integralData.value));
        }
        if (sumObserved !== integrationSum) {
            sumIntegral = integrationSum / sumObserved;
            for (const signal of signals) {
                signal.integralData.value *= sumIntegral;
            }
        }
    }
    signals.sort((a, b) => {
        return b.delta - a.delta;
    });
    if (clean) {
        for (let i = signals.length - 1; i >= 0; i--) {
            if (Math.abs(signals[i].integralData.value) < clean) {
                signals.splice(i, 1);
            }
        }
    }
    let ranges = [];
    for (let i = 0; i < signals.length; i++) {
        let signal = signals[i];
        const range = {
            from: signal.integralData.from,
            to: signal.integralData.to,
            integration: signal.integralData.value,
        };
        const signalResult = {
            delta: signal.delta,
            kind: signal.kind || 'signal',
            multiplicity: signal.multiplicity,
        };
        if (keepPeaks) {
            signalResult.peaks = signal.peaks.map((peak) => {
                const newResult = {
                    y: peak.intensity,
                    ...peak,
                };
                delete newResult.intensity;
                return newResult;
            });
        }
        if (signal.nmrJs) {
            signalResult.js = signal.nmrJs;
        }
        range.signals = [signalResult];
        ranges[i] = range;
    }
    if (joinOverlapRanges)
        ranges = joinRanges(ranges);
    // return new Ranges(ranges);
    return ranges;
}
/**
 * Extract the signals from the peakList and the given spectrum.
 * @param {object} data - spectra data
 * @param {array} peakList - nmr signals
 * @param {object} [options = {}]
 * @param {number} [options.integrationSum='100'] - Number of hydrogens or some number to normalize the integration data, If it's zero return the absolute integration value
 * @param {string} [options.integralType='sum'] - option to chose between approx area with peaks or the sum of the points of given range
 * @param {number} [options.frequencyCluster=16] - distance limit to clustering the peaks.
 * range = frequencyCluster / observeFrequency -> Peaks withing this range are considered to belongs to the same signal1D
 * @param {string} [options.nucleus='1H'] - - Nucleus
 * @param {String} [options.frequency = 400] - Observed frequency
 * @return {array} nmr signals
 * @private
 */
function detectSignals(data, peakList, options = {}) {
    let { integrationSum = 100, integralType = 'sum', frequencyCluster = 16, frequency = 400, nucleus = '1H', } = options;
    let signal1D = assignSignal(peakList[0], frequency, nucleus);
    let peaks;
    let signals = [];
    let prevPeak = { x: Number.MIN_SAFE_INTEGER };
    let spectrumIntegral = 0;
    frequencyCluster /= frequency;
    for (const peak of peakList) {
        if (Math.abs(peak.x - prevPeak.x) > frequencyCluster) {
            signal1D = assignSignal(peak, frequency, nucleus);
            if (peak.kind)
                signal1D.kind = peak.kind;
            signals.push(signal1D);
        }
        else {
            let tmp = peak.x + peak.shape.width;
            signal1D.stopX = Math.max(signal1D.stopX, tmp);
            signal1D.startX = Math.min(signal1D.startX, tmp);
            signal1D.nbPeaks++;
            signal1D.peaks.push({
                x: peak.x,
                intensity: peak.y,
                shape: {
                    width: peak.shape.width,
                },
            });
            signal1D.integralData.from = Math.min(signal1D.integralData.from, peak.x - peak.shape.width * 3);
            signal1D.integralData.to = Math.max(signal1D.integralData.to, peak.x + peak.shape.width * 3);
            if (peak.kind)
                signal1D.kind = peak.kind;
        }
        prevPeak = peak;
    }
    for (let signal of signals) {
        peaks = signal.peaks;
        let integration = signal.integralData;
        let chemicalShift = 0;
        let integralPeaks = 0;
        for (const peak of peaks) {
            let area = computeArea(peak);
            chemicalShift += peak.x * area;
            integralPeaks += area;
        }
        signal.delta = chemicalShift / integralPeaks;
        if (integralType === 'sum') {
            integration.value = xyIntegration(data, {
                from: integration.from,
                to: integration.to,
            });
        }
        else {
            integration.value = integralPeaks;
        }
        spectrumIntegral += integration.value;
    }
    if (integrationSum > 0) {
        let integralFactor = integrationSum / spectrumIntegral;
        for (let signal of signals) {
            let integration = signal.integralData;
            integration.value *= integralFactor;
        }
    }
    return signals;
}
/**
 * Return the area of a Lorentzian function
 * @param {object} peak - object with peak information
 * @return {Number}
 * @private
 */
function computeArea(peak) {
    return Math.abs(peak.intensity * peak.shape.width * 1.57); // todo add an option with this value: 1.772453851
}
//# sourceMappingURL=peaksToRanges.js.map