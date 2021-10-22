import { couplingPatterns } from '../constants/couplingPatterns';
import { couplingValues } from '../constants/couplingValues';
export function joinPatterns(patterns) {
    const sum = patterns.reduce((sum, pattern) => {
        if (isNaN(couplingValues[pattern])) {
            throw new Error(`pattern ${pattern} is not in ${Object.keys(couplingValues).join(' ')}`);
        }
        return sum + couplingValues[pattern];
    }, 0);
    if (!couplingPatterns[sum]) {
        throw new Error("The joined pattern doesn't exist");
    }
    return couplingPatterns[sum];
}
//# sourceMappingURL=joinPatterns.js.map