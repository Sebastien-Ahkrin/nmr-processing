import { Range } from '../types/range';
import { Signal1D } from '../types/signal1D';

import { splitPatterns } from './splitPatterns';

export function resurrectRange(part: string) {
  const split = splitParenthesis(part);
  if (!split.before) return;
  // before parenthesis there should be only numbers but we will still split with space
  const beforeParts = split.before
    .split(/(?: |(?<=[0-9])-)/)
    .map((part: string) => Number(part))
    .filter((part: number) => !Number.isNaN(part));
  if (beforeParts.length < 1 || beforeParts.length > 2) {
    return;
  }
  const from = beforeParts[0];
  const to = beforeParts.length > 1 ? beforeParts[1] : beforeParts[0];

  const insideParts = split.inside.split(/ *, */);
  let signal: Signal1D = { delta: NaN, js: [] };
  let range: Range = { from, to, signals: [signal] };

  const integrationParts = insideParts.filter((part: any) =>
    part.match(/^[0-9]+H$/),
  );
  if (integrationParts.length === 1) {
    range.integration = Number(integrationParts[0].replace('H', ''));
  }

  const multiplicityParts = insideParts.filter((part: any) =>
    part.match(/^[a-zA-Z]+$/),
  );
  if (multiplicityParts.length === 1) {
    const multiplicity = multiplicityParts[0];
    if (multiplicity === 'm') {
      if (beforeParts.length === 1) {
        // a complex signal
        signal.delta = beforeParts[0];
        signal.multiplicity = multiplicity;
      } else {
        // a real range
        signal.delta = (beforeParts[0] + beforeParts[1]) / 2;
        signal.multiplicity = multiplicity;
      }
    } else {
      // looks like a real multiplicity, s, d, dd, etc..
      if (beforeParts.length === 1) {
        // a complex signal
        signal.delta = beforeParts[0];
        signal.multiplicity = multiplicity;
      }
    }
  }

  const jCouplings = insideParts
    .filter((part: any) => part.match(/(Hz|J|^[0-9.]+$)/))
    .map((jCoupling: string) => Number(jCoupling.replace(/[^0-9.]/g, '')));

  const multiplicities = splitPatterns(signal.multiplicity || '');
  if (multiplicities.length === jCouplings.length) {
    for (let i = 0; i < multiplicities.length; i++) {
      if (!signal.js) {
        throw new Error('signal has not js');
      }
      signal.js.push({
        coupling: jCouplings[i],
        multiplicity: multiplicities[i],
      });
    }
  }
  return range;
}

export function splitParenthesis(part: any) {
  if (!part.includes('(')) return { before: part, inside: '', after: '' };
  if (!part.includes(')')) {
    throw new Error(`A part does not contain closing parenthesis: ${part}`);
  }
  return part.match(
    / *(?<before>[^(]*?) *\( *(?<inside>.*?) *\) *(?<after>.*?) */,
  ).groups;
}
