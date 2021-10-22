import { resurrectRange } from './resurrectRange';
import { splitParenthesis } from './splitParenthesis';
export function resurrect(acsString) {
    const data = {
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
function parseParts(data) {
    for (const part of data.parts) {
        if (part.toLowerCase().includes('nmr')) {
            processExperiment(data, part);
        }
        else {
            const { frequency, nucleus } = data.experiment;
            const range = resurrectRange(part, { frequency, nucleus });
            if (range)
                data.ranges.push(range);
        }
    }
}
function processExperiment(data, part) {
    const split = splitParenthesis(part);
    const before = split.before
        .replace(/[ -]*nmr[ -]*/i, '')
        .replace(/[ -]/g, '');
    if (/^[0-9]+[A-Z][a-z]?$/.exec(before)) {
        // 36Cl, 1H, 13C, ...
        data.experiment.nucleus = before;
    }
    if (/^[A-Z][a-z]?[0-9]+$/.exec(before)) {
        // Cl35, H1, C13, ...
        data.experiment.nucleus = before.replace(/^([A-Z][a-z]?)([0-9]+)$/, '$2$1');
    }
    if (split.inside) {
        // some frequency and solvent ???
        const insideParts = split.inside.split(/[,]/);
        const frequencyParts = insideParts.filter((part) => /[0-9]{2}/.exec(part));
        if (frequencyParts.length) {
            const frequency = frequencyParts[0].replace(/[^0-9]/g, '');
            if (frequency.length > 1)
                data.experiment.frequency = Number(frequency);
        }
        const solventParts = insideParts.filter((part) => !part.match(/[0-9]{2}/));
        if (solventParts.length) {
            data.experiment.solvent = solventParts[0];
        }
    }
}
function createParts(data) {
    const parts = data.normalized
        .split(/\)(?![^()]*\))/)
        .map((part) => part.replace(/^\s*(.*?)\s*$/, '$1'))
        .filter((part) => part)
        .map((part) => `${part})`)
        .map((part) => part.split(/[,;](?![^()]*\))/))
        .flat()
        .map((part) => part.replace(/^\s*(.*?)\s*$/, '$1'))
        .filter((part) => part);
    data.parts = parts;
}
//# sourceMappingURL=resurrect.js.map