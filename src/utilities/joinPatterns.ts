import { couplingPatterns } from '../constants/couplingPatterns';
import { couplingValues } from '../constants/couplingValues';

type couplingPatternKeys = keyof typeof couplingValues;
/**
 *
 * @param {array<string>} patterns
 * @returns
 */
export function joinPatterns(patterns: string[]) {
  let sum = 0;
  for (let pattern of patterns) {
    sum += couplingValues[pattern as couplingPatternKeys];
  }
  return couplingPatterns[sum];
}

