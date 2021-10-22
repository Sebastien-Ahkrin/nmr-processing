export function flatGroupedDiaIDs(groups) {
    let diaIDs = [];
    for (let group of groups) {
        for (let atom of group.atoms) {
            diaIDs[atom] = group.oclID;
        }
    }
    return diaIDs;
}
//# sourceMappingURL=flatGroupedDiaIDs.js.map