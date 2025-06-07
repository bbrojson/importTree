"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveSourceFileReferences = retrieveSourceFileReferences;
const ts_morph_1 = require("ts-morph");
function retrieveVariablesReferences(exportedVariables) {
    let importedSourceFile = [];
    for (let index = 0; index < exportedVariables.length; index++) {
        const variable = exportedVariables[index];
        const references = variable.findReferences();
        for (let refIndex = 0; refIndex < references.length; refIndex++) {
            const ref = references[refIndex];
            const referencedSymbols = ref.getReferences();
            for (let refEntryIndex = 0; refEntryIndex < referencedSymbols.length; refEntryIndex++) {
                const refEntry = referencedSymbols[refEntryIndex];
                const node = refEntry.getNode();
                const importDecl = node.getFirstAncestorByKind(ts_morph_1.SyntaxKind.ImportDeclaration);
                if (importDecl) {
                    const sourceFile = node.getSourceFile();
                    // console.log(`📄 Imported in: ${node.getSourceFile().getFilePath()}`);
                    // console.log(`📄 Base name: ${sourceFile.getBaseName()}`);
                    importedSourceFile.push(sourceFile);
                }
            }
        }
        break; // only first right now
    }
    return { files: importedSourceFile, variable: exportedVariables[0] };
}
function retrieveFunctionReferences(exportedFunctions) {
    let importedSourceFile = [];
    for (let index = 0; index < exportedFunctions.length; index++) {
        const func = exportedFunctions[index];
        const references = func.findReferences();
        for (let refIndex = 0; refIndex < references.length; refIndex++) {
            const ref = references[refIndex];
            const referencedSymbols = ref.getReferences();
            for (let refEntryIndex = 0; refEntryIndex < referencedSymbols.length; refEntryIndex++) {
                const refEntry = referencedSymbols[refEntryIndex];
                const node = refEntry.getNode();
                const importDecl = node.getFirstAncestorByKind(ts_morph_1.SyntaxKind.ImportDeclaration);
                if (importDecl) {
                    const sourceFile = node.getSourceFile();
                    // console.log(`📄 Base name: ${sourceFile.getBaseName()}`);
                    importedSourceFile.push(sourceFile);
                }
            }
        }
        break; // only first right now
    }
    return { files: importedSourceFile, variable: exportedFunctions[0] };
}
function retrieveSourceFileReferences(sourceFile) {
    const exportedVariables = sourceFile
        .getVariableDeclarations()
        .filter((decl) => {
        return decl.getVariableStatement()?.isExported();
    });
    const importedSourceFile = retrieveVariablesReferences(exportedVariables);
    if (importedSourceFile.files.length > 0) {
        return importedSourceFile;
    }
    const exportedFunctions = sourceFile
        .getFunctions()
        .filter((decl) => {
        return decl.isExported();
    });
    return retrieveFunctionReferences(exportedFunctions);
}
//# sourceMappingURL=retrieveSourceFileReferences.js.map