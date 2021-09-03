import { couplingPatterns } from '../constants/couplingPatterns';
import { couplingValues } from '../constants/couplingValues';

type couplingPatternKeys = keyof typeof couplingValues;
const getKeyValue = <T extends object, U extends keyof T>(obj: T, key: U) => obj[key];

/**
 *
 * @param {array<string>} patterns
 * @returns
 */
export function joinPatterns(patterns: couplingPatternKeys[]) {
  let sum = 0;
  for (let pattern of patterns) {
    sum += getKeyValue(couplingValues, pattern);
  }
  return couplingPatterns[sum];
}

