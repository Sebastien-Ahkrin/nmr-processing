import simpleClustering from 'ml-simple-clustering';
import jAnalyzer from '../peaks/util/jAnalyzer';
export function xyzJResAnalyzer(signals, options = {}) {
    let { reference = 0, referenceMaxShiftError = 0.08, tolerances = [10, 100], nuclei = ['1H', '1H'], observedFrequencies = [400, 400], jAnalyzer = {
        jAxisKey: { jAxis: 'y', intensity: 'z' },
    }, } = options;
    let temporalSignals = compilePattern(signals, {
        observedFrequencies,
        tolerances,
        nuclei,
        jAnalyzer,
    });
    //check if the signal are symmetric around the reference
    let result = [];
    for (const tempSignal of temporalSignals) {
        let delta = tempSignal.y.delta;
        if (Math.abs(delta - reference) > referenceMaxShiftError)
            continue;
        result.push(tempSignal);
    }
    return result;
}
function compilePattern(signals, options) {
    let { observedFrequencies, tolerances, nuclei, jAnalyzer: jAnalyzerOptions, } = options;
    let signalOptions = {
        observedFrequencies,
        tolerances,
        nuclei,
        dx: signals[0].x.resolution,
        dy: signals[0].y.resolution,
    };
    const newSignals = JSON.parse(JSON.stringify(signals));
    //adapt to 1D jAnalyzer
    for (const signal of newSignals) {
        let peaks = signal.peaks;
        signal.nbPeaks = signal.peaks.length;
        signal.multiplicity = '';
        signal.pattern = '';
        signal.delta1 = signal.shiftY;
        signal.observe = observedFrequencies[1];
        signal.integralData = {
            from: Number.MAX_SAFE_INTEGER,
            to: Number.MIN_SAFE_INTEGER,
        };
        for (const peak of peaks) {
            if (!peak.width)
                peak.width = 0.02;
        }
        peaks.sort((a, b) => a.y - b.y);
    }
    for (let i = 0; i < signals.length; i++) {
        jAnalyzer.compilePattern(newSignals[i], jAnalyzerOptions);
        if (newSignals[i].maskPattern &&
            newSignals[i].multiplicity !== 'm' &&
            newSignals[i].multiplicity !== '') {
            // Create a new signal with the removed peaks
            let peaksO = [];
            for (let j = newSignals[i].maskPattern.length - 1; j >= 0; j--) {
                if (newSignals[i].maskPattern[j] === false) {
                    let peakR = newSignals[i].peaks.splice(j, 1)[0];
                    peaksO.push(peakR);
                    newSignals[i].mask.splice(j, 1);
                    newSignals[i].mask2.splice(j, 1);
                    newSignals[i].maskPattern.splice(j, 1);
                    newSignals[i].nbPeaks--;
                }
            }
            if (peaksO.length > 0) {
                peaksO.reverse();
                let ranges = createSignals2D(peaksO, signalOptions);
                for (const range of ranges) {
                    newSignals.push(range);
                }
            }
        }
    }
    signals.sort((a, b) => {
        return b.x.delta - a.x.delta;
    });
    return signals;
}
function createSignals2D(peaksInput, options) {
    let { observedFrequencies, tolerances, nuclei, dx, dy } = options;
    const peaks = JSON.parse(JSON.stringify(peaksInput));
    let [nucleusX, nucleusY] = nuclei;
    let [toleranceX, toleranceY] = tolerances;
    let [observeFrequencyX, observeFrequencyY] = observedFrequencies;
    // The connectivity matrix is an square and symmetric matrix, so we'll only store the upper diagonal in an
    // array like form
    let connectivity = [];
    for (let i = 0; i < peaks.length; i++) {
        for (let j = i; j < peaks.length; j++) {
            if (Math.abs(peaks[i].x - peaks[j].x) * observeFrequencyX < toleranceX &&
                Math.abs(peaks[i].y - peaks[j].y) * observeFrequencyY < toleranceY) {
                // 24*24Hz We cannot distinguish peaks with less than 20 Hz of separation
                connectivity.push(1);
            }
            else {
                connectivity.push(0);
            }
        }
    }
    let clusters = simpleClustering(connectivity);
    let signals = [];
    if (clusters) {
        for (let cluster of clusters) {
            let signal = {
                nucleusX,
                nucleusY,
                integralData: {
                    from: Number.MAX_SAFE_INTEGER,
                    to: Number.MIN_SAFE_INTEGER,
                },
                nbPeaks: 0,
                multiplicity: '',
                pattern: '',
                observe: observeFrequencyY,
                resolutionX: dx,
                resolutionY: dy,
                shiftX: 0,
                shiftY: 0,
            };
            let peaks2D = [];
            let minMax1 = [Number.MAX_VALUE, 0];
            let minMax2 = [Number.MAX_VALUE, 0];
            let sumZ = 0;
            for (let jPeak = cluster.length - 1; jPeak >= 0; jPeak--) {
                if (cluster[jPeak] === 1) {
                    signal.nbPeaks++;
                    if (!peaks[jPeak].width)
                        peaks[jPeak].width = 0.02;
                    peaks2D.push(peaks[jPeak]);
                    signal.shiftX += peaks[jPeak].x * peaks[jPeak].z;
                    signal.shiftY += peaks[jPeak].y * peaks[jPeak].z;
                    sumZ += peaks[jPeak].z;
                    if (peaks[jPeak].minX < minMax1[0]) {
                        minMax1[0] = peaks[jPeak].minX;
                    }
                    if (peaks[jPeak].maxX > minMax1[1]) {
                        minMax1[1] = peaks[jPeak].maxX;
                    }
                    if (peaks[jPeak].minY < minMax2[0]) {
                        minMax2[0] = peaks[jPeak].minY;
                    }
                    if (peaks[jPeak].maxY > minMax2[1]) {
                        minMax2[1] = peaks[jPeak].maxY;
                    }
                }
            }
            signal.fromTo = [
                { from: minMax1[0], to: minMax1[1] },
                { from: minMax2[0], to: minMax2[1] },
            ];
            signal.shiftX /= sumZ;
            signal.shiftY /= sumZ;
            signal.delta1 = signal.shiftY;
            signal.peaks = peaks2D;
            signals.push(signal);
        }
    }
    return signals;
}
//# sourceMappingURL=xyzJResAnalyzer.js.map