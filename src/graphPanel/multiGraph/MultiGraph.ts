type NodeID = string;

export class Edge {
	constructor(public from: NodeID, public to: NodeID, public label?: string) {}
}

export class MultiGraph {
	private nodes = new Set<NodeID>();
	private edges: Edge[] = [];

	addNode(id: NodeID) {
		this.nodes.add(id);
	}

	addEdge(from: NodeID, to: NodeID, label?: string) {
		if (!this.nodes.has(from) || !this.nodes.has(to)) {
			throw new Error('Both nodes must exist before adding an edge.');
		}
		this.edges.push(new Edge(from, to, label));
	}

	getNodes(): NodeID[] {
		return Array.from(this.nodes);
	}

	getEdges(): Edge[] {
		return this.edges;
	}

	// For visualization: grouped edges
	getAdjacencyList(): Record<NodeID, Edge[]> {
		const adjacency: Record<NodeID, Edge[]> = {};
		for (const node of this.nodes) {
			adjacency[node] = [];
		}
		for (const edge of this.edges) {
			adjacency[edge.from].push(edge);
		}
		return adjacency;
	}
}
