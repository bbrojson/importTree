"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGraphPathsV2 = getGraphPathsV2;
const mergeLinkedListToMultiGraph_1 = require("./mergeLinkedListToMultiGraph");
function getGraphPathsV2(tree) {
    const bottomNodes = [];
    tree.traverse((node) => {
        if (node.children.length === 0) {
            bottomNodes.push(node);
        }
    });
    const nodes = [];
    for (let i = 0; i < bottomNodes.length; i++) {
        const bottomNode = bottomNodes[i];
        nodes.push([]);
        bottomNode.traverseToRoot((child) => {
            nodes[i].push(child.value);
        });
    }
    console.log("======> nodes: ", nodes.length);
    nodes.forEach((n1, dix) => {
        console.log("======> nodes: ", dix, n1.map((n2) => `${n2.file.getBaseName()}`));
    });
    return (0, mergeLinkedListToMultiGraph_1.mergeLinkedListToMultiGraph)(nodes);
}
//# sourceMappingURL=getGraphPathsV2.js.map