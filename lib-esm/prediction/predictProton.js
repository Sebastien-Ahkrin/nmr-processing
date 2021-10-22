import fetch from 'cross-fetch';
import FormData from 'form-data';
import { addDiastereotopicMissingChirality, getConnectivityMatrix, getDiastereotopicAtomIDs, } from 'openchemlib-utils';
import { signalsJoin } from '../signals/signalsJoin';
import { signalsToRanges } from '../signals/signalsToRanges';
export async function predictProton(molecule, options = {}) {
    const { cache } = options;
    molecule = molecule.getCompactCopy();
    molecule.addImplicitHydrogens();
    addDiastereotopicMissingChirality(molecule);
    const molfile = molecule.toMolfile();
    let result;
    if (cache) {
        result = cache(molfile);
    }
    if (result === undefined) {
        const formData = new FormData();
        formData.append('molfile', molfile);
        const response = await fetch('https://www.nmrdb.org/service/predictor', {
            method: 'POST',
            //@ts-expect-error
            body: formData,
        });
        result = await response.text();
        if (cache) {
            cache(molfile, result);
        }
    }
    const diaIDs = getDiastereotopicAtomIDs(molecule);
    const signals = protonParser(result, molecule, diaIDs);
    const joinedSignals = signalsJoin(signals);
    return {
        molfile,
        diaIDs,
        nucleus: '1H',
        joinedSignals,
        signals,
        ranges: signalsToRanges(joinedSignals),
        molecule,
    };
}
function protonParser(result, molecule, diaIDs) {
    if (molecule.getAllAtoms() === 0)
        return [];
    if (result.includes('ERR')) {
        throw Error(`Spinus optimization: ${result}`);
    }
    let distanceMatrix = getConnectivityMatrix(molecule, { pathLength: true });
    let lines = result.split('\n').filter((line) => line);
    let signals = [];
    for (let line of lines) {
        let fields = line.split('\t');
        let couplings = fields.slice(4);
        let atom = Number(fields[0]) - 1;
        let signal = {
            atoms: [atom],
            diaIDs: [diaIDs[atom]],
            nbAtoms: 1,
            delta: Number(fields[2]),
            js: [],
        };
        if (!signal.js) {
            throw new Error(`For atom js property was not added`);
        }
        for (let i = 0; i < couplings.length; i += 3) {
            let linked = Number(couplings[i]) - 1;
            signal.js.push({
                coupling: Number(couplings[i + 2]),
                atoms: [linked],
                diaIDs: [diaIDs[linked]],
                multiplicity: 'd',
                distance: distanceMatrix[atom][linked],
            });
            signal.js.sort((a, b) => b.coupling - a.coupling);
        }
        signals.push(signal);
    }
    return signals;
}
//# sourceMappingURL=predictProton.js.map