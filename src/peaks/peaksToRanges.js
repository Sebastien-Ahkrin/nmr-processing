import round from 'lodash.round';
import { Ranges } from 'spectra-data-ranges';

import peaksFilterImpurities from './peaksFilterImpurities';
import jAnalyzer from './util/jAnalyzer';

const defaultOptions = {
  nH: 100,
  clean: 0.5,
  thresholdFactor: 1,
  compile: true,
  integralType: 'sum',
  optimize: true,
  frequencyCluster: 16,
  keepPeaks: false,
};

/**
 * This function clustering peaks and calculate the integral value for each range from the peak list returned from extractPeaks function.
 * @param {SD} spectrum - SD instance
 * @param {Object} peakList - nmr signals
 * @param {Object} options - options object with some parameter for GSD, detectSignal functions.
 * @param {Number} [options.nH = 100] - Number of hydrogens or some number to normalize the integral data. If it's zero return the absolute integral value
 * @param {String} [options.integralType = 'sum'] - option to chose between approx area with peaks or the sum of the points of given range ('sum', 'peaks')
 * @param {Number} [options.frequencyCluster = 16] - distance limit to clustering peaks.
 * @param {Number} [options.clean] - If exits it remove all the signals with integral < clean value
 * @param {Boolean} [options.compile = true] - If true, the Janalyzer function is run over signals to compile the patterns.
 * @param {Boolean} [options.keepPeaks = false] - If true each signal will contain an array of peaks.
 * @param {String} [options.nucleus = '1H'] - Nucleus
 * @param {String} [options.frequency = 400] - Observed frequency
 * @returns {Array}
 */

export function peaksToRanges(peakList, options) {
  options = Object.assign({}, defaultOptions, options);
  let i, j;
  let nH = options.nH;
<<<<<<< HEAD
  peakList = peaksFilterImpurities(peakList, options.removeImpurity);
  let signals = detectSignals(spectrum, peakList, options);

=======
  peakList = filterImpurities(peakList, options.removeImpurity);
  let signals = detectSignals(peakList, options);
>>>>>>> chore: refactor peaksToRanges
  if (options.clean) {
    for (i = 0; i < signals.length; i++) {
      if (signals[i].integralData.value < options.clean) {
        signals.splice(i, 1);
      }
    }
  }

  if (options.compile) {
    let nHi, sum;
    for (i = 0; i < signals.length; i++) {
      jAnalyzer.compilePattern(signals[i]);

      if (
        signals[i].maskPattern &&
        signals[i].multiplicity !== 'm' &&
        signals[i].multiplicity !== ''
      ) {
        // Create a new signal with the removed peaks
        nHi = 0;
        sum = 0;
        let peaksO = [];
        for (j = signals[i].maskPattern.length - 1; j >= 0; j--) {
          sum += computeArea(signals[i].peaks[j]);
          if (signals[i].maskPattern[j] === false) {
            let peakR = signals[i].peaks.splice(j, 1)[0];
            peaksO.push({ x: peakR.x, y: peakR.intensity, width: peakR.width });
            signals[i].mask.splice(j, 1);
            signals[i].mask2.splice(j, 1);
            signals[i].maskPattern.splice(j, 1);
            signals[i].nbPeaks--;
            nHi += computeArea(peakR);
          }
        }
        if (peaksO.length > 0) {
          nHi = (nHi * signals[i].integralData.value) / sum;
          signals[i].integralData.value -= nHi;
          let peaks1 = [];
          for (j = peaksO.length - 1; j >= 0; j--) {
            peaks1.push(peaksO[j]);
          }
          options.nH = nHi;
          let ranges = detectSignals(peaks1, options);

          for (j = 0; j < ranges.length; j++) {
            signals.push(ranges[j]);
          }
        }
      }
    }
    // it was a updateIntegrals function.
    let sumIntegral = 0;
    let sumObserved = 0;
    for (i = 0; i < signals.length; i++) {
      sumObserved += Math.round(signals[i].integralData.value);
    }
    if (sumObserved !== nH) {
      sumIntegral = nH / sumObserved;
      for (i = 0; i < signals.length; i++) {
        signals[i].integralData.value *= sumIntegral;
      }
    }
  }

  signals.sort(function (a, b) {
    return b.delta1 - a.delta1;
  });

  if (options.clean) {
    for (i = signals.length - 1; i >= 0; i--) {
      if (signals[i].integralData.value < options.clean) {
        signals.splice(i, 1);
      }
    }
  }

  let ranges = new Array(signals.length);
  for (i = 0; i < signals.length; i++) {
    let signal = signals[i];
    ranges[i] = {
      from: round(signal.integralData.from, 5),
      to: round(signal.integralData.to, 5),
      integral: round(signal.integralData.value, 5),
      signal: [
        {
          nbAtoms: 0,
          diaID: [],
          multiplicity: signal.multiplicity,
          kind: '',
          remark: '',
        },
      ],
    };
    if (options.keepPeaks) {
      ranges[i].signal[0].peak = signal.peaks;
    }
    if (signal.nmrJs) {
      ranges[i].signal[0].j = signal.nmrJs;
    }
    if (!signal.asymmetric || signal.multiplicity === 'm') {
      ranges[i].signal[0].delta = round(signal.delta1, 5);
    }
  }

  return new Ranges(ranges);
}

/**
 * Extract the signals from the peakList and the given spectrum.
 * @param {object} spectrum - spectra data
 * @param {object} peakList - nmr signals
 * @param {object} options
 * @param {...number} options.nH - Number of hydrogens or some number to normalize the integral data, If it's zero return the absolute integral value
 * @param {String} options.integralType - option to chose between approx area with peaks or the sum of the points of given range
 * @param {...number} options.frequencyCluster - distance limit to clustering the peaks.
 * range = frequencyCluster / observeFrequency -> Peaks withing this range are considered to belongs to the same signal1D
 * @return {Array} nmr signals
 * @private
 */
function detectSignals(peakList, options = {}) {
  let {
    nH = 100,
    integralType = 'sum',
    frequencyCluster = 16,
    frequency = 400,
    nucleus = '1H',
  } = options;

  let i, j, signal1D, peaks;
  let signals = [];
  let prevPeak = { x: 100000 };
  let spectrumIntegral = 0;
  frequencyCluster /= frequency;
  for (i = 0; i < peakList.length; i++) {
    if (Math.abs(peakList[i].x - prevPeak.x) > frequencyCluster) {
      signal1D = {
        nbPeaks: 1,
        units: 'PPM',
        startX: peakList[i].x - peakList[i].width,
        stopX: peakList[i].x + peakList[i].width,
        multiplicity: '',
        pattern: '',
        observe: frequency,
        nucleus,
        integralData: {
          from: peakList[i].x - peakList[i].width * 3,
          to: peakList[i].x + peakList[i].width * 3,
        },
        peaks: [
          {
            x: peakList[i].x,
            intensity: peakList[i].y,
            width: peakList[i].width,
          },
        ],
      };
      signals.push(signal1D);
    } else {
      let tmp = peakList[i].x + peakList[i].width;
      signal1D.stopX = Math.max(signal1D.stopX, tmp);
      signal1D.startX = Math.min(signal1D.startX, tmp);
      signal1D.nbPeaks++;
      signal1D.peaks.push({
        x: peakList[i].x,
        intensity: peakList[i].y,
        width: peakList[i].width,
      });
      signal1D.integralData.from = Math.min(
        signal1D.integralData.from,
        peakList[i].x - peakList[i].width * 3,
      );
      signal1D.integralData.to = Math.max(
        signal1D.integralData.to,
        peakList[i].x + peakList[i].width * 3,
      );
    }
    prevPeak = peakList[i];
  }

  for (i = 0; i < signals.length; i++) {
    peaks = signals[i].peaks;
    let integral = signals[i].integralData;
    let chemicalShift = 0;
    let integralPeaks = 0;

    for (j = 0; j < peaks.length; j++) {
      let area = computeArea(peaks[j]);
      chemicalShift += peaks[j].x * area;
      integralPeaks += area;
    }
    signals[i].delta1 = chemicalShift / integralPeaks;

    if (integralType === 'sum') {
      integral.value = 10; //spectrum.getArea(integral.from, integral.to); //@TODO
    } else {
      integral.value = integralPeaks;
    }
    spectrumIntegral += integral.value;
  }

  if (nH > 0) {
    let integralFactor = nH / spectrumIntegral;
    for (i = 0; i < signals.length; i++) {
      let integral = signals[i].integralData;
      integral.value *= integralFactor;
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
  return Math.abs(peak.intensity * peak.width * 1.57); // todo add an option with this value: 1.772453851
}
