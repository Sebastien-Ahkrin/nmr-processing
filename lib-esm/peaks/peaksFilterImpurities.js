import { impurities } from '../constants/impurities';
const toCheck = ['solvent', 'h2o', 'tms'];
/**
 * Try to remove peaks of impurities.
 */
export function peaksFilterImpurities(peakList, options = {}) {
    let { solvent, error = 0.025, remove = false } = options;
    if (solvent) {
        if (solvent === '(cd3)2so')
            solvent = 'dmso';
        if (solvent === 'meod')
            solvent = 'cd3od';
        let solventImpurities = impurities[solvent];
        for (let impurity of toCheck) {
            let impurityShifts = solventImpurities[impurity];
            checkImpurity(peakList, impurityShifts, {
                error,
                remove,
                name: impurity,
            });
        }
    }
    return peakList;
}
function checkImpurity(peakList, impurity, options) {
    let { name, error, remove } = options;
    let j, tolerance, difference;
    let i = impurity.length;
    while (i--) {
        j = peakList.length;
        while (j--) {
            tolerance = error + peakList[j].shape.width;
            difference = Math.abs(impurity[i].shift - peakList[j].x);
            if (difference < tolerance) {
                // && (impurity[i].multiplicity === '' || (impurity[i].multiplicity.indexOf(peakList[j].multiplicity)) { // some impurities has multiplicities like 'bs' but at presents it is unsupported
                if (remove) {
                    peakList.splice(j, 1);
                }
                else {
                    peakList[j].kind = name;
                }
            }
        }
    }
}
//# sourceMappingURL=peaksFilterImpurities.js.map