let diagonalError = 0.05;
let tolerance = 0.05;
export function clean(peaks, threshold) {
    let max = Number.NEGATIVE_INFINITY;
    // double min = Double.MAX_VALUE;
    for (let i = peaks.length - 1; i >= 0; i--) {
        if (Math.abs(peaks[i].z) > max) {
            max = Math.abs(peaks[i].z);
        }
    }
    max *= threshold;
    for (let i = peaks.length - 1; i >= 0; i--) {
        if (Math.abs(peaks[i].z) < max) {
            peaks.splice(i, 1);
        }
    }
    return peaks;
}
export function enhanceSymmetry(signals) {
    let properties = initializeProperties(signals);
    let output = signals.slice();
    // First step of the optimization: Symmetry validation
    let hits;
    for (let i = output.length - 1; i >= 0; i--) {
        let signal = output[i];
        if (signal.peaks && signal.peaks.length > 1) {
            properties[i][1]++;
        }
        if (properties[i][0] === 1) {
            let index = exist(output, properties, signal, -1, true);
            if (index >= 0) {
                properties[i][1] += 2;
                properties[index][1] += 2;
            }
        }
    }
    // Second step of the optimization: Diagonal image existence
    for (let i = output.length - 1; i >= 0; i--) {
        let signal = output[i];
        if (properties[i][0] === 0) {
            hits = checkCrossPeaks(output, properties, signal, true);
            properties[i][1] += hits;
            // checkCrossPeaks(output, properties, signal, false);
        }
    }
    // Now, each peak have a score between 0 and 4, we can complete the patterns which
    // contains peaks with high scores, and finally, we can remove peaks with scores 0 and 1
    let count = 0;
    for (let i = output.length - 1; i >= 0; i--) {
        if (properties[i][0] !== 0 && properties[i][1] > 2) {
            count++;
            count += completeMissingIfNeeded(output, properties, output[i], properties[i]);
        }
        if (properties[i][1] >= 2 && properties[i][0] === 0) {
            count++;
        }
    }
    let toReturn = new Array(count);
    count--;
    for (let i = output.length - 1; i >= 0; i--) {
        if ((properties[i][0] !== 0 && properties[i][1] > 2) ||
            (properties[i][0] === 0 && properties[i][1] > 1)) {
            toReturn[count--] = output[i];
        }
    }
    return toReturn;
}
// export function alignDimensions(signals2D, references) {
//   // For each reference dimension
//   for (let i = 0; i < references.length; i++) {
//     let ref = references[i];
//     if (ref) {
//       alignSingleDimension(signals2D, ref);
//     }
//   }
// }
function completeMissingIfNeeded(output, properties, thisSignal, thisProp) {
    // Check for symmetry
    let index = exist(output, properties, thisSignal, -thisProp[0], true);
    let addedPeaks = 0;
    let newSignal;
    let tmpProp = null;
    if (index < 0) {
        // If this signal have no a symmetry image, we have to include it
        newSignal = {
            x: {
                nucleus: thisSignal.x.nucleus,
                resolution: thisSignal.x.resolution,
                delta: thisSignal.y.delta,
            },
            y: {
                nucleus: thisSignal.y.nucleus,
                resolution: thisSignal.y.resolution,
                delta: thisSignal.x.delta,
            },
            peaks: [{ x: thisSignal.y.delta, y: thisSignal.x.delta, z: 1 }],
        };
        output.push(newSignal);
        tmpProp = [-thisProp[0], thisProp[1]];
        properties.push(tmpProp);
        addedPeaks++;
    }
    // Check for diagonal peaks
    let signal;
    let diagX = false;
    let diagY = false;
    for (let j = output.length - 1; j >= 0; j--) {
        signal = output[j];
        if (properties[j][0] === 0) {
            if (Math.abs(signal.x.delta - thisSignal.x.delta) < diagonalError) {
                diagX = true;
            }
            if (Math.abs(signal.y.delta - thisSignal.y.delta) < diagonalError) {
                diagY = true;
            }
        }
    }
    if (diagX === false) {
        newSignal = {
            x: {
                delta: thisSignal.y.delta,
                nucleus: thisSignal.x.nucleus,
                resolution: thisSignal.x.resolution,
            },
            y: {
                delta: thisSignal.x.delta,
                nucleus: thisSignal.y.nucleus,
                resolution: thisSignal.y.resolution,
            },
            peaks: [{ x: thisSignal.x.delta, y: thisSignal.x.delta, z: 1 }],
        };
        newSignal.peaks = [{ x: thisSignal.x.delta, y: thisSignal.x.delta, z: 1 }];
        output.push(newSignal);
        tmpProp = [0, thisProp[1]];
        properties.push(tmpProp);
        addedPeaks++;
    }
    if (diagY === false) {
        newSignal = {
            x: {
                delta: thisSignal.y.delta,
                nucleus: thisSignal.x.nucleus,
                resolution: thisSignal.x.resolution,
            },
            y: {
                delta: thisSignal.y.delta,
                nucleus: thisSignal.y.nucleus,
                resolution: thisSignal.y.resolution,
            },
            peaks: [{ x: thisSignal.y.delta, y: thisSignal.y.delta, z: 1 }],
        };
        output.push(newSignal);
        tmpProp = [0, thisProp[1]];
        properties.push(tmpProp);
        addedPeaks++;
    }
    return addedPeaks;
}
// Check for any diagonal peak that match this cross peak
function checkCrossPeaks(output, properties, signal, updateProperties) {
    let hits = 0;
    let shift = signal.x.delta * 4;
    let crossPeaksX = [];
    let crossPeaksY = [];
    let cross;
    for (let i = output.length - 1; i >= 0; i--) {
        cross = output[i];
        if (properties[i][0] !== 0) {
            if (Math.abs(cross.x.delta - signal.x.delta) < diagonalError) {
                hits++;
                if (updateProperties) {
                    properties[i][1]++;
                }
                crossPeaksX.push(i);
                shift += cross.x.delta;
            }
            else {
                if (Math.abs(cross.y.delta - signal.y.delta) < diagonalError) {
                    hits++;
                    if (updateProperties) {
                        properties[i][1]++;
                    }
                    crossPeaksY.push(i);
                    shift += cross.y.delta;
                }
            }
        }
    }
    // Update found crossPeaks and diagonal peak
    shift /= crossPeaksX.length + crossPeaksY.length + 4;
    if (crossPeaksX.length > 0) {
        for (let i = crossPeaksX.length - 1; i >= 0; i--) {
            output[crossPeaksX[i]].x.delta = shift;
        }
    }
    if (crossPeaksY.length > 0) {
        for (let i = crossPeaksY.length - 1; i >= 0; i--) {
            output[crossPeaksY[i]].y.delta = shift;
        }
    }
    signal.x.delta = shift;
    signal.y.delta = shift;
    return hits;
}
function exist(output, properties, signal, type, symmetricSearch) {
    for (let i = output.length - 1; i >= 0; i--) {
        if (properties[i][0] === type) {
            if (distanceTo(signal, output[i], symmetricSearch) < tolerance) {
                if (!symmetricSearch) {
                    let shiftX = (output[i].x.delta + signal.x.delta) / 2.0;
                    let shiftY = (output[i].y.delta + signal.y.delta) / 2.0;
                    output[i].x.delta = shiftX;
                    output[i].y.delta = shiftY;
                    signal.x.delta = shiftX;
                    signal.y.delta = shiftY;
                }
                else {
                    let shiftX = signal.x.delta;
                    let shiftY = output[i].x.delta;
                    output[i].y.delta = shiftX;
                    signal.y.delta = shiftY;
                }
                return i;
            }
        }
    }
    return -1;
}
/**
 * Try to determine the position of each signal within the spectrum matrix.
 * Peaks could be of 3 types: upper diagonal, diagonal or under diagonal 1,0,-1
 * respectively.
 * @param {Array} signals
 * @return {*} A matrix containing the properties of each signal
 * @private
 */
function initializeProperties(signals) {
    let signalsProperties = new Array(signals.length);
    for (let i = signals.length - 1; i >= 0; i--) {
        signalsProperties[i] = [0, 0];
        // We check if it is a diagonal peak
        if (Math.abs(signals[i].x.delta - signals[i].y.delta) <= diagonalError) {
            signalsProperties[i][1] = 1;
            let shift = (signals[i].x.delta * 2 + signals[i].y.delta) / 3.0;
            signals[i].x.delta = shift;
            signals[i].y.delta = shift;
        }
        else {
            if (signals[i].x.delta - signals[i].y.delta > 0) {
                signalsProperties[i][0] = 1;
            }
            else {
                signalsProperties[i][0] = -1;
            }
        }
    }
    return signalsProperties;
}
/**
 * This function calculates the distance between 2 nmr signals . If toImage is true,
 * it will interchange x by y in the distance calculation for the second signal.
 * @param {object} a
 * @param {object} b
 * @param {boolean} toImage
 * @return {number}
 * @private
 */
function distanceTo(a, b, toImage) {
    if (!toImage) {
        return Math.sqrt(Math.pow(a.x.delta - b.x.delta, 2) + Math.pow(a.y.delta - b.y.delta, 2));
    }
    else {
        return Math.sqrt(Math.pow(a.x.delta - b.y.delta, 2) + Math.pow(a.y.delta - b.x.delta, 2));
    }
}
// type Signal2DWithHighlight = MakeMandatory<NMRSignal2D, '_highlight'>;
// function checkHighlight(signals2D: NMRSignal2D[]): asserts signals2D is Signal2DwithHighlight[] {
//   for (let signal of signals2D) {
//     if (!signal._highlight) throw new Error('there is not _hightlight property');
//     if (!signal.nucleusX) throw new Error('there is not nucleusX property');
//     if (!signal.nucleusY) throw new Error('there is not nucleusY property')
//   }
// }
// function alignSingleDimension(signals2D: NMRSignal2D[], references) {
//   // For each 2D signal
//   for (let i = 0; i < signals2D.length; i++) {
//     let signal2D = signals2D[i];
//     for (let j = 0; j < references.length; j++) {
//       const center = (references[j].startX + references[j].stopX) / 2;
//       const width = Math.abs(references[j].startX - references[j].stopX) / 2;
//       if (signal2D.nucleusX === references[j].nucleus) {
//         // The 2D peak overlaps with the 1D signal
//         if (Math.abs(signal2D.x.delta - center) <= width) {
//           signal2D._highlight.push(references[j]._highlight[0]);
//         }
//       }
//       if (signal2D.nucleusY === references[j].nucleus) {
//         if (Math.abs(signal2D.y.delta - center) <= width) {
//           signal2D._highlight.push(references[j]._highlight[0]);
//         }
//       }
//     }
//   }
// }
//# sourceMappingURL=peakOptimizer.js.map