"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveBranchesFromTree = retrieveBranchesFromTree;
function retrieveBranchesFromTree(tree) {
    const deepestNodes = [];
    tree.traverse((node) => {
        if (node.children.length > 0) {
            deepestNodes.push(node);
        }
    });
    return deepestNodes;
}
//# sourceMappingURL=retrieveBranchesFromTree.js.map