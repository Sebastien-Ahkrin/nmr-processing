import { Matrix } from 'ml-matrix';
import simpleClustering from 'ml-simple-clustering';

import { MakeMandatory } from '../../types/MakeMandatory';
import type { NMRSignal1D } from '../../types/NMRSignal1D';
import { Jcoupling } from '../../types/jcoupling';
import type { SpinSystem } from '../../types/spinSystem';

interface Ids {
  [index: number]: number;
}

type JcouplingFromPrediction = MakeMandatory<Jcoupling, 'atomIDs'>;
type Signal1DWidthAtomIDs = MakeMandatory<NMRSignal1D, 'atomIDs'>;
type Signal1DFromPrediction = Omit<Signal1DWidthAtomIDs, 'js'> & {
  js: JcouplingFromPrediction[];
};

function checkForMandatory(
  signals: NMRSignal1D[],
): asserts signals is Signal1DFromPrediction[] {
  for (const signal of signals) {
    if (!signal.js) throw new Error('there is not js');
    if (!signal.atomIDs) throw new Error('there is not atomIDs');
    for (const jcoupling of signal.js) {
      if (!jcoupling.atomIDs) throw new Error('there is not atomIDs');
    }
  }
}

export function signalsToSpinSystem(signals: NMRSignal1D[]): SpinSystem {
  checkForMandatory(signals);
  const nSpins = signals.length;
  const chemicalShifts: number[] = new Array(nSpins);
  const multiplicity: number[] = new Array(nSpins);
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
    for (const jcoupling of jCoupling) {
      let { coupling, atomIDs } = jcoupling;
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
