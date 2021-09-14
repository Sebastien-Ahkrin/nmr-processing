import { couplingPatterns } from '../constants/couplingPatterns';
import { couplingValues } from '../constants/couplingValues';

/**
 *
 * @param {array<string>} patterns
 * @returns
 */
export function joinPatterns(patterns: string[]) {
  const sum = patterns.reduce((sum, pattern) => {
    if (!couplingValues[pattern]) {
      throw new Error(
        `pattern ${pattern} is not in ${Object.keys(couplingValues).join(' ')}`,
      );
    }
    return sum + couplingValues[pattern];
  }, 0);

  if (!couplingPatterns[sum]) {
    throw new Error("The joined pattern doesn't exist");
  }

  return couplingPatterns[sum];
}
