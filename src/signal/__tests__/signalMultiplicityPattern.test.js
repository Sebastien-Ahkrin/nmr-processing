import { signalMultiplicityPattern } from '../signalMultiplicityPattern';

import signal from './dddd.json';

describe('signalMultiplicityPattern', () => {
  it('check dddd', () => {
    const result = signalMultiplicityPattern(signal);
    expect(result).toBe('dddd');
  });
});
