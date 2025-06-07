"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeLinkedListToMultiGraph = mergeLinkedListToMultiGraph;
const MultiGraph_1 = require("src/utils/MultiGraph");
function mergeLinkedListToMultiGraph(linkedLists) {
    const graph = new MultiGraph_1.MultiGraph();
    // Process each linked list
    for (const list of linkedLists) {
        // Add all nodes to the graph first
        for (const node of list) {
            const nodeId = node.file.getFilePath();
            graph.addNode(nodeId);
        }
        // Add edges between consecutive nodes in the list
        for (let i = 0; i < list.length - 1; i++) {
            const fromNode = list[i].file.getFilePath();
            const toNode = list[i + 1].file.getFilePath();
            // Create a label that includes information about the variable/function if present
            let label;
            const variable = list[i + 1].variable;
            if (variable) {
                label = variable.getName();
            }
            graph.addEdge(fromNode, toNode, label);
        }
    }
    return graph;
}
//# sourceMappingURL=mergeLinkedListToMultiGraph.js.map