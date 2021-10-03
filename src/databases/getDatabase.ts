import { fetch } from 'cross-fetch';

import { resurrectRange } from '../utilities/resurrectRange';

import { DatabaseNMREntry } from './DatabaseNMREntry';

export async function getDatabase(
  url = 'https://docs.google.com/spreadsheets/d/1uwyq_L38PMRWCcT4If_EhPbHKyY3q_2tpjV8vr5_zh0/edit?usp=sharing',
) {
  if (url.includes('google.com')) {
    url = `https://googledocs.cheminfo.org/spreadsheets/d/${extractGoogleUUID(
      url,
    )}/export?format=tsv`;
  }

  const response = await fetch(url);
  const result = await response.text();
  const parsed = parseData(result);

  const results = [];

  for (let line of parsed.data) {
    const result: DatabaseNMREntry = {
      smiles: '',
      solvent: '',
      nucleus: '',
      jcampURL: '',
      names: [],
      meta: {},
      ranges: [],
    };
    for (let i = 0; i < line.length; i++) {
      switch (parsed.kinds[i]) {
        case 'smiles':
          result.smiles = line[i];
          break;
        case 'solvent':
          result.solvent = line[i];
          break;
        case 'nucleus':
          result.nucleus = line[i];
          break;
        case 'jcampURL':
          result.jcampURL = line[i];
          break;
        case 'name':
          if (result.names) result.names.push(line[i]);
          break;
        case 'meta':
          if (result.meta) result.meta[parsed.labels[i]] = line[i];
          break;
        case 'signal': {
          const range = resurrectRange(line[i]);
          if (range) result.ranges.push(range);
          break;
        }
        default:
          throw new Error(`Unknown column kind: ${parsed.kinds[i]}`);
      }
    }
    results.push(result);
  }
  return results;
}

function extractGoogleUUID(url: string): string {
  return url.replace(/.*\/(?<uuid>[^/]{20,50}).*/, '$<uuid>');
}

function parseData(text: string) {
  const matrix = text
    .split(/\r?\n/)
    .filter((line) => !/^\s*$/.exec(line))
    .map((line: string) => line.split('\t').map((cell: string) => cell.trim()));

  const labels = matrix[0];
  const kinds = matrix[1];
  const data = matrix.slice(2);
  return {
    labels,
    kinds,
    data,
  };
}
