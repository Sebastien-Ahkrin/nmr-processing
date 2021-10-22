import { fetch } from 'cross-fetch';
export async function fetchPrediction(molecule, options) {
    const { webserviceURL } = options;
    const response = await fetch(webserviceURL, {
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
        },
        body: JSON.stringify({ molfile: molecule.toMolfile() }),
        method: 'POST',
    });
    const prediction = (await response.json()).data;
    prediction.molecule = molecule
        .getOCL()
        .Molecule.fromMolfile(prediction.molfile);
    return prediction;
}
//# sourceMappingURL=fetchPrediction.js.map