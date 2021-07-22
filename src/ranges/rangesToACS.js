import { signalJoinCouplings } from '../signal/signalJoinCouplings';
import { signalMultiplicityPattern } from '../signal/signalMultiplicityPattern';

const globalOptions = {
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

/**
 *
 * @param {array} ranges
 * @param {object} [options={}]
 * @param {boolean} [options.filter=true] remove annotated signals as solvent and impurities
 * @param {number} [options.nucleus]
 * @param {number} [options.nbDecimalDelta] default value depends of nucleus
 * @param {number} [options.nbDecimalJ] default value depends of nucleus
 * @param {number} [options.observedFrequency] default value depends of nucleus 1H: 400MHz
 */
export function rangesToACS(ranges, options = {}) {
  if (!options.nucleus) options.nucleus = '1H';
  let nucleus = options.nucleus.toLowerCase().replace(/[0-9]/g, '');
  let defaultOptions = globalOptions[nucleus];
  options = Object.assign(
    {},
    defaultOptions,
    { ascending: false, format: 'IMJA' },
    options,
  );

  ranges = JSON.parse(JSON.stringify(ranges));
  if (options.ascending === true) {
    ranges.sort((a, b) => {
      let fromA = Math.min(a.from, a.to);
      let fromB = Math.min(b.from, b.to);
      return fromA - fromB;
    });
  }
  let acsString = formatAcs(ranges, options);

  if (acsString.length > 0) acsString += '.';

  return acsString;
}

function formatAcs(ranges, options) {
  let acs = spectroInformation(options);
  if (acs.length === 0) acs = 'δ ';
  let acsRanges = [];
  for (let range of ranges) {
    if (uselessKind(range.kind, options.filter)) continue;
    pushDelta(range, acsRanges, options);
  }
  if (acsRanges.length > 0) {
    return acs + acsRanges.join(', ');
  } else {
    return '';
  }
}

function spectroInformation(options) {
  let parenthesis = [];
  let strings = `${formatNucleus(options.nucleus)} NMR`;
  if (options.solvent) {
    parenthesis.push(formatMF(options.solvent));
  }
  if (options.frequencyObserved) {
    parenthesis.push(`${(options.frequencyObserved * 1).toFixed(0)} MHz`);
  }
  if (parenthesis.length > 0) {
    strings += ` (${parenthesis.join(', ')}): δ `;
  } else {
    strings += ': δ ';
  }
  return strings;
}

function pushDelta(range, acsRanges, options) {
  let strings = '';
  let parenthesis = [];
  let fromTo = [range.from, range.to];

  if (Array.isArray(range.signal)) {
    range.signal = range.signal.filter(
      (signal) => !uselessKind(signal.kind, options.filter),
    );
  }

  if (Array.isArray(range.signal) && range.signal.length > 0) {
    let signals = range.signal;
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
        switchFormat({}, signal, parenthesis, options);
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
    switchFormat(range, [], parenthesis, options);
    if (parenthesis.length > 0) strings += ` (${parenthesis.join(', ')})`;
  }
  acsRanges.push(strings);
}

function getIntegral(range, options) {
  let integration = '';
  if (range.pubIntegral) {
    integration = range.pubIntegral;
  } else if (range.integration) {
    integration =
      range.integration.toFixed(0) + options.nucleus[options.nucleus.length - 1];
  }
  return integration;
}

function pushIntegral(range, parenthesis, options) {
  let integration = getIntegral(range, options);
  if (integration.length > 0) parenthesis.push(integration);
}

function pushMultiplicityFromSignal(signal, parenthesis) {
  let multiplicity = signal.multiplicity;
  if (!multiplicity) {
    let joinedCouplings = signalJoinCouplings(signal, { tolerance: 0.05 });
    multiplicity = signalMultiplicityPattern(joinedCouplings);
  }
  if (multiplicity.length > 0) parenthesis.push(multiplicity);
}

function switchFormat(range, signal, parenthesis, options) {
  for (const char of options.format) {
    switch (char.toUpperCase()) {
      case 'I':
        pushIntegral(range, parenthesis, options);
        break;
      case 'M':
        pushMultiplicityFromSignal(signal, parenthesis);
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

function formatMF(mf) {
  return mf.replace(/(?<num>[0-9]+)/g, '<sub>$<num></sub>');
}

function formatNucleus(nucleus) {
  return nucleus.replace(/(?<num>[0-9]+)/g, '<sup>$<num></sup>');
}

function appendSeparator(strings) {
  if (strings.length > 0 && !strings.match(/ $/) && !strings.match(/\($/)) {
    strings += ', ';
  }
  return strings;
}

function formatAssignment(assignment) {
  assignment = assignment.replace(/(?<num>[0-9]+)/g, '<sub>$<num></sub>');
  assignment = assignment.replace(/"(?<i>[^"]*)"/g, '<i>$<i></i>');
  return assignment;
}

function pushCoupling(signal, parenthesis, options) {
  if (Array.isArray(signal.j) && signal.j.length > 0) {
    signal.j.sort(function (a, b) {
      return b.coupling - a.coupling;
    });

    let values = [];
    for (let j of signal.j) {
      if (j.coupling !== undefined) {
        values.push(j.coupling.toFixed(options.nbDecimalJ));
      }
    }
    if (values.length > 0) {
      parenthesis.push(`<i>J</i> = ${values.join(', ')} Hz`);
    }
  }
}

function pushAssignment(signal, parenthesis) {
  if (signal.pubAssignment) {
    parenthesis.push(formatAssignment(signal.pubAssignment));
  } else if (signal.assignment) {
    parenthesis.push(formatAssignment(signal.assignment));
  }
}

function uselessKind(kind = '', filter = true) {
  kind = kind.toLowerCase();
  if (filter && (kind === 'impurity' || kind === 'solvent')) return true;
  return false;
}
