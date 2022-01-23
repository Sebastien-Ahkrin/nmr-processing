import { signalJoinCouplings } from '../signal/signalJoinCouplings';
import { signalMultiplicityPattern } from '../signal/signalMultiplicityPattern';
import type { NMRSignal1D } from '../signals/NMRSignal1D';
import type { NMRRange } from '../xy/NMRRange';

const globalOptions: Record<
  string,
  {
    nucleus: string;
    nbDecimalDelta: number;
    nbDecimalJ: number;
    observedFrequency: number;
  }
> = {
  h: {
    nucleus: '1H',
    nbDecimalDelta: 2,
    nbDecimalJ: 1,
    observedFrequency: 400,
  },
  c: {
    nucleus: '13C',
    nbDecimalDelta: 1,
    nbDecimalJ: 1,
    observedFrequency: 100,
  },
  f: {
    nucleus: '19F',
    nbDecimalDelta: 2,
    nbDecimalJ: 1,
    observedFrequency: 400,
  },
};

export interface RangesToACSOptions {
  /**
   * nucleus
   * @default '1H'
   */
  nucleus?: string;
  ascending?: boolean;
  format?: string;
  /**
   * default value depends of nucleus
   * @default 1|2
   */
  nbDecimalDelta?: number;
  /**
   * Number of decimals to round the scalar coupling value
   * @default 1
   */
  nbDecimalJ?: number;
  /**
   * default value depends of nucleus
   * @default 400|100
   */
  observedFrequency?: number;
  /**
   * @default true
   */
  filter?: boolean;
  /**
   * solvent name
   */
  solvent?: string;
}

export function rangesToACS(
  ranges: NMRRange[],
  options: RangesToACSOptions = {},
) {
  if (!options.nucleus) options.nucleus = '1H';
  const nucleus = options.nucleus.toLowerCase().replace(/[0-9]/g, '');
  const defaultOptions = globalOptions[nucleus];
  options = Object.assign(
    {},
    defaultOptions,
    { ascending: false, format: 'IMJA' },
    options,
  );

  ranges = JSON.parse(JSON.stringify(ranges));
  if (options.ascending === true) {
    ranges.sort((a, b) => {
      const fromA = Math.min(a.from, a.to);
      const fromB = Math.min(b.from, b.to);
      return fromA - fromB;
    });
  }

  let acsString = formatAcs(ranges, options);
  if (acsString.length > 0) acsString += '.';

  return acsString;
}

function formatAcs(ranges: NMRRange[], options: any) {
  let acs = spectroInformation(options);
  if (acs.length === 0) acs = 'δ ';
  const acsRanges: string[] = [];
  for (const range of ranges) {
    if (uselessKind(range.kind, options.filter)) continue;
    pushDelta(range, acsRanges, options);
  }
  if (acsRanges.length > 0) {
    return acs + acsRanges.join(', ');
  } else {
    return '';
  }
}

function spectroInformation(options: any) {
  const parenthesis = [];
  let strings = `${formatNucleus(options.nucleus)} NMR`;
  if (options.solvent) {
    parenthesis.push(formatMF(options.solvent));
  }
  if (options.observedFrequency) {
    parenthesis.push(`${(options.observedFrequency * 1).toFixed(0)} MHz`);
  }
  if (parenthesis.length > 0) {
    strings += ` (${parenthesis.join(', ')}): δ `;
  } else {
    strings += ': δ ';
  }
  return strings;
}

function pushDelta(range: NMRRange, acsRanges: string[], options: any) {
  let strings = '';
  let parenthesis: any = [];
  const fromTo = [range.from, range.to];

  if (range.signals) {
    range.signals = range.signals.filter(
      (signal) => !uselessKind(signal.kind, options.filter),
    );
  }

  if (range.signals && range.signals.length > 0) {
    let signals = range.signals;
    if (signals.length > 1) {
      if (options.ascending === true) {
        signals.sort((a, b) => {
          return a.delta - b.delta;
        });
      }
      strings += `${Math.min(...fromTo).toFixed(
        options.nbDecimalDelta,
      )}-${Math.max(...fromTo).toFixed(options.nbDecimalDelta)}`;
      strings += ` (${getIntegral(range, options)}`;
      for (let signal of signals) {
        parenthesis = [];
        if (signal.delta !== undefined) {
          strings = appendSeparator(strings);
          strings += signal.delta.toFixed(options.nbDecimalDelta);
        }
        const range: NMRRange = {
          from: Number.MIN_SAFE_INTEGER,
          to: Number.MAX_SAFE_INTEGER,
        };
        switchFormat(range, signal, parenthesis, options);
        if (parenthesis.length > 0) strings += ` (${parenthesis.join(', ')})`;
      }
      strings += ')';
    } else {
      parenthesis = [];
      if (signals[0].delta !== undefined) {
        strings += signals[0].delta.toFixed(options.nbDecimalDelta);
        switchFormat(range, signals[0], parenthesis, options);
        if (parenthesis.length > 0) strings += ` (${parenthesis.join(', ')})`;
      } else {
        strings += `${Math.min(...fromTo).toFixed(
          options.nbDecimalDelta,
        )}-${Math.max(...fromTo).toFixed(options.nbDecimalDelta)}`;
        switchFormat(range, signals[0], parenthesis, options);
        if (parenthesis.length > 0) strings += ` (${parenthesis})`;
      }
    }
  } else {
    strings += `${Math.min(...fromTo).toFixed(
      options.nbDecimalDelta,
    )}-${Math.max(...fromTo).toFixed(options.nbDecimalDelta)}`;
    const signal: any = {};
    switchFormat(range, signal, parenthesis, options);
    if (parenthesis.length > 0) strings += ` (${parenthesis.join(', ')})`;
  }
  acsRanges.push(strings);
}

function getIntegral(range: NMRRange, options: any) {
  let integration = '';
  if (range.pubIntegral) {
    integration = String(range.pubIntegral);
  } else if (range.integration) {
    integration =
      range.integration.toFixed(0) +
      options.nucleus[options.nucleus.length - 1];
  }
  return integration;
}

function pushIntegral(range: NMRRange, parenthesis: string[], options: any) {
  let integration = getIntegral(range, options);
  if (integration.length > 0) parenthesis.push(integration);
}

function pushmultiplicityFromSignal(
  signal: NMRSignal1D,
  parenthesis: string[],
) {
  let multiplicity = signal.multiplicity;
  if (!multiplicity) {
    let joinedCouplings = signalJoinCouplings(signal, {
      tolerance: 0.05,
      ignoreDiaIDs: true,
    });
    multiplicity = signalMultiplicityPattern(joinedCouplings);
  }
  if (multiplicity.length > 0) parenthesis.push(multiplicity);
}

function switchFormat(
  range: NMRRange,
  signal: NMRSignal1D,
  parenthesis: string[],
  options: any,
) {
  for (const char of options.format) {
    switch (char.toUpperCase()) {
      case 'I':
        pushIntegral(range, parenthesis, options);
        break;
      case 'M':
        pushmultiplicityFromSignal(signal, parenthesis);
        break;
      case 'A':
        pushAssignment(signal, parenthesis);
        break;
      case 'J':
        pushCoupling(signal, parenthesis, options);
        break;
      default:
        throw new Error(`Unknow format letter: ${char}`);
    }
  }
}

function formatMF(mf: string) {
  return mf.replace(/(?<num>[0-9]+)/g, '<sub>$<num></sub>');
}

function formatNucleus(nucleus: string) {
  return nucleus.replace(/(?<num>[0-9]+)/g, '<sup>$<num></sup>');
}

function appendSeparator(strings: string) {
  if (strings.length > 0 && !/ $/.exec(strings) && !/\($/.exec(strings)) {
    strings += ', ';
  }
  return strings;
}

function formatAssignment(assignment: string) {
  assignment = assignment.replace(/(?<num>[0-9]+)/g, '<sub>$<num></sub>');
  assignment = assignment.replace(/"(?<i>[^"]*)"/g, '<i>$<i></i>');
  return assignment;
}

function pushCoupling(
  signal: NMRSignal1D,
  parenthesis: string[],
  options: any,
) {
  if (Array.isArray(signal.js) && signal.js.length > 0) {
    signal.js.sort((a, b) => {
      return b.coupling - a.coupling;
    });

    let values = [];
    for (let j of signal.js) {
      if (j.coupling !== undefined) {
        values.push(j.coupling.toFixed(options.nbDecimalJ));
      }
    }
    if (values.length > 0) {
      parenthesis.push(`<i>J</i> = ${values.join(', ')} Hz`);
    }
  }
}

function pushAssignment(signal: NMRSignal1D, parenthesis: string[]) {
  if (signal.assignment) {
    parenthesis.push(formatAssignment(signal.assignment));
  }
}

function uselessKind(kind = '', filter = true) {
  kind = kind.toLowerCase();
  if (filter && (kind === 'impurity' || kind === 'solvent')) return true;
  return false;
}
