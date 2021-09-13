export function queryByHose(diaIDs, db, options) {
  const { maxSphereSize } = options;

  const toReturn = [];
  for (const element of diaIDs) {
    let res;
    let level;
    for (let k = maxSphereSize; !res && k >= 0; k--) {
      if (db[k]) {
        res = db[k][element.hose[k]];
        level = k;
      }
    }

    if (!res) {
      res = [null];
      level = null;
    }

    for (const atomNumber of element.atoms) {
      let atom = { diaIDs: [element.oclID] };
      atom.delta = res[0];
      atom.atomIDs = [atomNumber];
      atom.nbAtoms = 1;
      atom.level = level;
      if (res.length > 1) {
        atom.statistic = {
          mean: res[1],
          sd: res[2],
          min: res[3],
          max: res[4],
          nb: res[5],
        };
      }
      toReturn.push(atom);
    }
  }
  return toReturn;
}
