import type { Range } from '../types/range';
import { Signal1D } from '../types/signal1D';

export interface DataResurrect {
  experiment: any;
  ranges: Range[];
  acsString: string;
  normalized: string;
  parts?: any;
}

export function resurrect(acsString: string) {
  const data: any = {
    experiment: {},
    ranges: [],
    acsString,
    normalized: acsString
      .replace(/[\r\n\t]/g, ' ')
      .replace(/[;:]/g, ',')
      .replace(/\}/g, ')')
      .replace(/\{/g, '(')
      .replace(/[\u2011\u2012\u2013\u2014\u2015\u2212]/g, '-'),
  };
  createParts(data);
  parseParts(data);
  return data;
}

function parseParts(data: DataResurrect) {
  for (const part of data.parts) {
    if (part.toLowerCase().includes('nmr')) {
      processExperiment(data, part);
    } else {
      processRange(data, part);
    }
  }
}

function processRange(data: DataResurrect, part: any) {
  const split = splitParenthesis(part);
  // before parenthesis there should be only numbers but we will still split with space
  const beforeParts = split.before
    .split(/(?: |(?<=[0-9])-)/)
    .map((part: string) => Number(part))
    .filter((part: number) => !Number.isNaN(part));
  if (beforeParts.length < 1 || beforeParts.length > 2) return;
  const from = beforeParts[0];
  const to = beforeParts.length > 1 ? beforeParts[1] : beforeParts[0];

  const insideParts = split.inside.split(/ *, */);
  let signal: Signal1D = { delta: -1000, js: [] };
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

  const multiplicities = (signal.multiplicity || '').split(/(?=.)/); // will have to be improved for quint, hex, hept, ...
  if (multiplicities.length === jCouplings.length) {
    for (let i = 0; i < multiplicities.length; i++) {
      if (!signal.js) throw new Error('signal has not js');
      signal.js.push({
        coupling: jCouplings[i],
        multiplicity: multiplicities[i],
      });
    }
  }

  data.ranges.push(range);
}

function processExperiment(data: DataResurrect, part: any) {
  const split = splitParenthesis(part);
  const before = split.before
    .replace(/[ -]*nmr[ -]*/i, '')
    .replace(/[ -]/g, '');
  if (before.match(/^[0-9]+[A-Z][a-z]?$/)) {
    // 36Cl, 1H, 13C, ...
    data.experiment.nucleus = before;
  }
  if (before.match(/^[A-Z][a-z]?[0-9]+$/)) {
    // Cl35, H1, C13, ...
    data.experiment.nucleus = before.replace(/^([A-Z][a-z]?)([0-9]+)$/, '$2$1');
  }
  if (split.inside) {
    // some frequency and solvent ???
    const insideParts = split.inside.split(/[,]/);
    const frequencyParts = insideParts.filter((part: any) =>
      part.match(/[0-9]{2}/),
    );
    if (frequencyParts.length) {
      const frequency = frequencyParts[0].replace(/[^[0-9.]]/g, '');
      if (frequency.length > 1) data.experiment.frequency = Number(frequency);
    }
    const solventParts = insideParts.filter(
      (part: any) => !part.match(/[0-9]{2}/),
    );
    if (solventParts.length) {
      data.experiment.solvent = solventParts[0];
    }
  }
}

function createParts(data: DataResurrect) {
  console.log(data.normalized);
  const parts = data.normalized
    .split(/\)(?![^()]*\))/)
    .map((part) => part.replace(/^\s*(.*?)\s*$/, '$1'))
    .filter((part) => part)
    .map((part) => `${part})`)
    .map((part) => part.split(/[,;](?![^()]*\))/))
    .flat()
    .map((part) => part.replace(/^\s*(.*?)\s*$/, '$1'))
    .filter((part) => part);
  console.log(parts);
  data.parts = parts;
}

function splitParenthesis(part: any) {
  if (!part.includes('(')) return { before: part, inside: '', after: '' };
  if (!part.includes(')')) {
    throw new Error(`A part does not contain closing parenthesis: ${part}`);
  }
  return part.match(
    / *(?<before>[^(]*?) *\( *(?<inside>.*?) *\) *(?<after>.*?) */,
  ).groups;
}
