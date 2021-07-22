import { xyzAutoPeaksPicking } from './xyzAutoPeaksPicking';

export function xyzJResPeakPicking(spectraData, options = {}) {
  let {
    sizeToPad = 14,
    realTopDetection = false,
    thresholdFactor = 0.5,
    nucleus = ['1H', '1H'],
    observeFrequency,
    enhanceSymmetry = false,
    clean = true,
    maxPercentCutOff = 0.03,
    tolerances = [24, 24],
    convolutionByFFT = true,
    kernel: kernelOptions,
  } = options;

  const observeFrequencies = [observeFrequency, 1];

  const initialPeaks = 

}