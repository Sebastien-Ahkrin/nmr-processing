import { Matrix } from 'ml-matrix';
import simpleClustering from 'ml-simple-clustering';
function checkForMandatory(signals) {
    for (const signal of signals) {
        if (!signal.js)
            throw new Error('there is not js');
        if (!signal.atoms)
            throw new Error('there is not atoms');
        for (const jcoupling of signal.js) {
            if (!jcoupling.atoms)
                throw new Error('there is not atoms');
        }
    }
}
export function signalsToSpinSystem(signals) {
    checkForMandatory(signals);
    const nSpins = signals.length;
    const chemicalShifts = new Array(nSpins);
    const multiplicity = new Array(nSpins);
    const couplingConstants = Matrix.zeros(nSpins, nSpins);
    //create a list of assignments
    const ids = {};
    for (let i = 0; i < nSpins; i++) {
        multiplicity[i] = 2;
        chemicalShifts[i] = signals[i].delta;
        const index = signals[i].atoms[0];
        ids[index] = i;
    }
    //create the coupling matrix
    for (let i = 0; i < nSpins; i++) {
        let { atoms: signalAssignment, js: jCoupling } = signals[i];
        const fromIndex = signalAssignment[0];
        for (const jcoupling of jCoupling) {
            let { coupling, atoms } = jcoupling;
            const toIndex = atoms[0];
            couplingConstants.set(ids[fromIndex], ids[toIndex], coupling);
            couplingConstants.set(ids[toIndex], ids[fromIndex], coupling);
        }
    }
    const connectivity = Matrix.ones(couplingConstants.rows, couplingConstants.rows);
    for (let i = 0; i < couplingConstants.rows; i++) {
        for (let j = i; j < couplingConstants.columns; j++) {
            if (couplingConstants.get(i, j) === 0) {
                connectivity.set(i, j, 0);
                connectivity.set(j, i, 0);
            }
        }
    }
    let clusters = simpleClustering(connectivity.to2DArray(), {
        out: 'indexes',
    });
    return {
        clusters,
        couplingConstants,
        chemicalShifts,
        multiplicity,
        connectivity,
    };
}
//# sourceMappingURL=signalsToSpinSystem.js.map