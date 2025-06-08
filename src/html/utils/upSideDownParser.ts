import { GraphTree, Tree, TreeNode } from "../../graphPanel/tree/Tree";
import { TreeNodeType } from "../../graphPanel/types/types";

export function renderPastaNodes(tree: Tree<TreeNodeType>) {
  const graph = new GraphTree<TreeNodeType>();
  graph.buildFromReversingTree(tree);

  function renderGraph(graph: GraphTree<TreeNodeType>): string {
    if (graph.roots.length < 1) {
      return "";
    }

    function renderNode(node: TreeNode<TreeNodeType>, depth: number): string {
      if (!node) {
        return "";
      }

      console.log("node", node, node.value.id, node.children.length);

      const hasChildren = node.children.length > 0;
      const children = node.children
        .map((child) => renderNode(child, depth + 1))
        .join("");

      return `
					<li>
						${
              hasChildren
                ? `
							<details open>
								<summary>${node.value.id} <code>${node.value.id}</code></summary>
								<ul>
									${children}
								</ul>
							</details>
						`
                : `
							<span>${node.value.id}</span>
						`
            }
					</li>
				`;
    }

    const startPoint = new TreeNode<TreeNodeType>({
      id: "root",
      variable: null,
      file: undefined as never,
    });
    graph.roots.forEach((r) => {
      startPoint.addChildNode(r);
    });

    return renderNode(startPoint, 0);
  }

  console.log("graph", graph);
  return `<hr/><h1>treesBranches:</h1><ul class="tree">${renderGraph(
    graph
  )}</ul><hr/>`;
}
