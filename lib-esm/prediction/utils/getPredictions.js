export async function getPredictions(key, molecule, predictOptions, predictor, predictions) {
    let prediction;
    if (predictions && predictions[key]) {
        prediction = predictions[key];
    }
    else if (predictor) {
        const fromPredictor = predictor[key];
        prediction = fromPredictor
            ? await fromPredictor(molecule, predictOptions[key])
            : undefined;
    }
    return prediction;
}
//# sourceMappingURL=getPredictions.js.map