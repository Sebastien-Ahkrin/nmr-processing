import { Matrix } from 'ml-matrix';
import simpleClustering from 'ml-simple-clustering';

import type { Signal1D } from '../signalsToXY';

interface Ids {
  [index: number]: number;
}

export function signalsToSpinSystem(signals: Signal1D[]) {
  const nSpins = signals.length;
  const chemicalShifts = new Array(nSpins);
  const multiplicity = new Array(nSpins);
  const couplingConstants = Matrix.zeros(nSpins, nSpins);
  //create a list of assignments
  const ids: Ids = {};
  for (let i = 0; i < nSpins; i++) {
    multiplicity[i] = 2;
    chemicalShifts[i] = signals[i].delta;
    const index = signals[i].atomIDs[0];
    ids[index] = i;
  }
  //create the coupling matrix
  for (let i = 0; i < nSpins; i++) {
    let { atomIDs: signalAssignment, js: jCoupling } = signals[i];
    const fromIndex = signalAssignment[0];
    for (let k = 0; k < jCoupling.length; k++) {
      let { coupling, atomIDs } = jCoupling[k];
      const toIndex = atomIDs[0];
      couplingConstants.set(ids[fromIndex], ids[toIndex], coupling);
      couplingConstants.set(ids[toIndex], ids[fromIndex], coupling);
    }
  }

  const connectivity = Matrix.ones(
    couplingConstants.rows,
    couplingConstants.rows,
  );
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
