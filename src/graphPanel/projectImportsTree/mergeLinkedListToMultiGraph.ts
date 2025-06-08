import { MultiGraph } from "../multiGraph/MultiGraph";

export function mergeLinkedListToMultiGraph<T extends { id: string }>(
  linkedLists: T[][]
): MultiGraph {
  const graph = new MultiGraph();

  // Process each linked list
  for (const list of linkedLists) {
    // Add all nodes to the graph first
    for (const node of list) {
      const nodeId = node.id;
      graph.addNode(nodeId);
    }

    // Add edges between consecutive nodes in the list
    for (let i = 0; i < list.length - 1; i++) {
      const fromNode = list[i].id;
      const toNode = list[i + 1].id;

      // Create a label that includes information about the variable/function if present
      let label: string | undefined;
      const id = list[i + 1].id;
      if (id) {
        label = id;
      }

      graph.addEdge(fromNode, toNode, label);
    }
  }

  return graph;
}
