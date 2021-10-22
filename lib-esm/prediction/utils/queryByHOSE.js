export function queryByHose(diaIDs, db, options) {
    const { maxSphereSize } = options;
    const toReturn = [];
    for (const element of diaIDs) {
        let res;
        let level = null;
        for (let k = maxSphereSize; !res && k >= 0; k--) {
            if (db[k]) {
                res = db[k][element.hose[k]];
                level = k;
            }
        }
        for (const atomNumber of element.atoms) {
            let atom = {
                diaIDs: [element.oclID],
                delta: res ? res[0] : null,
                atoms: [atomNumber],
                nbAtoms: 1,
                level: level,
                statistic: res && res.length > 1
                    ? {
                        mean: res[1],
                        sd: res[2],
                        min: res[3],
                        max: res[4],
                        nb: res[5],
                    }
                    : undefined,
            };
            toReturn.push(atom);
        }
    }
    return toReturn;
}
//# sourceMappingURL=queryByHOSE.js.map