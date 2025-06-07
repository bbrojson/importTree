import { MultiGraph } from '../multiGraph/MultiGraph';
import { TreeNodeType } from './ProjectImportsTree';

export function mergeLinkedListToMultiGraph(linkedLists: TreeNodeType[][]): MultiGraph {
	const graph = new MultiGraph();

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
			let label: string | undefined;
			const variable = list[i + 1].variable;
			if (variable) {
				label = variable.getName();
			}

			graph.addEdge(fromNode, toNode, label);
		}
	}

	return graph;
}
