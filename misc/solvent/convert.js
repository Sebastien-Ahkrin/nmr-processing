'use strict';

const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const { rangeFromSignal } = require('../../lib/');

const text1h = readFileSync(join(__dirname, './1h.tsv'), 'utf8');
const text13c = readFileSync(join(__dirname, './13c.tsv'), 'utf8');

const results1h = convert(text1h, '1H');
writeFileSync(
  join(__dirname, '../../src/databases/protonImpurities.ts'),
  getHeader('proton') + JSON.stringify(results1h, undefined, 2),
  'utf8',
);

const results13c = convert(text13c, '13C');
writeFileSync(
  join(__dirname, '../../src/databases/carbonImpurities.ts'),
  getHeader('carbon') + JSON.stringify(results13c, undefined, 2),
  'utf8',
);

function convert(text, nucleus) {
  const matrix = text
    .split(/\r?\n/)
    .filter((line) => !line.match(/^\s*$/))
    .map((line) => line.split(/\t/));

  const header = matrix[0];
  const data = matrix.slice(1);

  const results = [];
  let result;

  for (let i = nucleus === '1H' ? 5 : 3; i < header.length; i++) {
    for (let line of data) {
      const name = line[0];
      const smiles = line[1];
      if (name) {
        result = {
          names: name.split(/, /),
          smiles,
          ranges: [],
          nucleus,
          solvent: header[i],
        };
        results.push(result);
      }
      if (!line[i]) continue;

      result.ranges.push(
        getRange(
          line[i],
          line[2],
          nucleus === '1H' ? line[4] : '',
          nucleus === '1H' && Number(line[3]),
        ),
      );
    }
  }
  return results;
}

function getRange(delta, assignment, mult, integration) {
  const range = { signals: [] };
  if (integration) range.integration = integration;
  if (delta.match(/\d-\d/)) {
    const [from, to] = delta.split(/(?<=\d)-(?=[\d-])/);
    range.from = Number(from);
    range.to = Number(to);
    range.multiplicity = mult;
  } else {
    const js = [];
    range.from = Number(delta);
    range.to = Number(delta);
    const multParts = mult.split(/, ?/);
    const multiplicity = splitPatterns(multParts[0]);

    let signal;

    if (mult === '') {
      signal = {
        delta: Number(delta),
        assignment,
      };
    } else if (mult === 'm' || mult === 'br t') {
      signal = {
        js,
        delta: Number(delta),
        assignment,
      };
    } else if (multiplicity.length > 1 || multiplicity[0] !== 's') {
      if (multiplicity.length === multParts.length - 1) {
        for (let i = 0; i < multiplicity.length; i++) {
          js.push({
            coupling: Number(multParts[i + 1]),
            multiplicity: multiplicity[i],
          });
        }
      } else {
        console.log('ERROR', mult);
      }
      signal = {
        js,
        delta: Number(delta),
        assignment,
      };
    } else {
      signal = {
        js,
        delta: Number(delta),
        multiplicity: multParts[0],
        assignment,
      };
    }
    const fromTo = rangeFromSignal(signal);
    range.from = fromTo.from;
    range.to = fromTo.to;
    range.signals.push(signal);
  }

  return range;
}
function splitPatterns(multiplet) {
  if (/^\s*$/.exec(multiplet)) return [];
  let result = multiplet.match(
    / *(quint|hex|sept|hept|oct|nona|non|s|d|t|q|h|o|n) */g,
  );
  if (result) return result.map((entry) => entry.trim());
  return [multiplet];
}

function getHeader(label) {
  return `import type { DatabaseNMREntry } from './DatabaseNMREntry';

export const ${label}Impurities: DatabaseNMREntry[] = `;
}
