"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMorphReferences = findMorphReferences;
const ts_morph_1 = require("ts-morph");
const retrieveSourceFileReferences_1 = require("./utils/retrieveSourceFileReferences");
const Tree_1 = require("src/utils/Tree");
async function findMorphReferences(document, tsConfigPath) {
    if (!tsConfigPath) {
        throw new Error("TS config file not found!");
    }
    const project = new ts_morph_1.Project({
        tsConfigFilePath: tsConfigPath,
    });
    const sourceFile = project.getSourceFileOrThrow(document.fileName);
    const tree = new Tree_1.Tree();
    // const start = retrieveSourceFileReferences(sourceFile);
    const root = tree.setRoot({
        file: sourceFile,
        variable: null,
    });
    function findReferences(node) {
        const newNode = (0, retrieveSourceFileReferences_1.retrieveSourceFileReferences)(node.value.file);
        for (let index = 0; index < newNode.files.length; index++) {
            const file = newNode.files[index];
            if (file.getBaseName().includes(".spec.")) {
                continue;
            }
            const child = node.addChild({
                variable: newNode.variable,
                file,
            });
            findReferences(child);
        }
    }
    findReferences(root);
    return tree;
}
//# sourceMappingURL=morphReferences.js.map