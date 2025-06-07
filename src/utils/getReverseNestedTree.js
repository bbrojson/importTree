"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReverseNestedTree = getReverseNestedTree;
const NestedTree_1 = require("./NestedTree");
function getReverseNestedTree(tree) {
    const nestedTree = new NestedTree_1.NestedTree();
    const bottomNodes = [];
    tree.traverse((node) => {
        if (node.children.length === 0) {
            const roots = nestedTree.getRoots();
            const wasHere = roots.some((root) => root.value.file.getFilePath() === node.value.file.getFilePath());
            if (!wasHere) {
                nestedTree.addRoot(node.value);
            }
            bottomNodes.push(node);
        }
    });
    bottomNodes.forEach((bn) => {
        const roots = nestedTree.getRoots();
        const nestedRoot = roots.find((root) => root.value.file.getFilePath() === bn.value.file.getFilePath());
        let child = nestedRoot;
        bn.traverseToRoot((bnParent) => {
            if (bnParent.children.length > 0) {
                const parentFilePath = bnParent.value.file.getFilePath();
                const nestedNode = nestedTree.findNode((val) => {
                    return val.file.getFilePath() === parentFilePath;
                });
                if (nestedNode) {
                    child = nestedNode.addChild(bnParent.value);
                    return;
                }
                child = child?.addChild(bnParent.value);
            }
        });
    });
    console.log("======> nestedTree: ", nestedTree);
    nestedTree.traverse((b) => {
        console.log("nestedTree: ", b.value.file.getBaseName());
    });
    return nestedTree;
}
//# sourceMappingURL=getReverseNestedTree.js.map