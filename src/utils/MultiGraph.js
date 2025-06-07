"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiGraph = exports.Edge = void 0;
class Edge {
    from;
    to;
    label;
    constructor(from, to, label) {
        this.from = from;
        this.to = to;
        this.label = label;
    }
}
exports.Edge = Edge;
class MultiGraph {
    nodes = new Set();
    edges = [];
    addNode(id) {
        this.nodes.add(id);
    }
    addEdge(from, to, label) {
        if (!this.nodes.has(from) || !this.nodes.has(to)) {
            throw new Error("Both nodes must exist before adding an edge.");
        }
        this.edges.push(new Edge(from, to, label));
    }
    getNodes() {
        return Array.from(this.nodes);
    }
    getEdges() {
        return this.edges;
    }
    // For visualization: grouped edges
    getAdjacencyList() {
        const adjacency = {};
        for (const node of this.nodes) {
            adjacency[node] = [];
        }
        for (const edge of this.edges) {
            adjacency[edge.from].push(edge);
        }
        return adjacency;
    }
}
exports.MultiGraph = MultiGraph;
//# sourceMappingURL=MultiGraph.js.map