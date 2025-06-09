import { GraphTree, Tree, TreeNode } from "../../graphPanel/tree/Tree";
import { TreeNodeType } from "../../graphPanel/types/types";

function mergeSimilarIdsInGraph(graph: GraphTree<TreeNodeType>) {
  const startPoint = new TreeNode<TreeNodeType>({
    id: "dummyRoot",
    variable: null,
    file: undefined as never,
  });
  graph.roots.forEach((r) => {
    startPoint.addChildNode(r);
  });

  const newGraph = new GraphTree<TreeNodeType>();
  newGraph.roots = [startPoint];

  const newTree = new Tree<TreeNodeType>();

  function checkNode(
    treeNode: TreeNode<TreeNodeType>,
    node: TreeNode<TreeNodeType>
  ) {
    let treeChild = treeNode.findNode((n) => n.id === node.value.id);

    if (!treeChild) {
      treeChild = treeNode.addChild(node.value);
    }

    //if one of the node has the same id, it should have common parent
    for (let index = 0; index < node.children.length; index++) {
      const element = node.children[index];

      // const treeChild = treeNode.addChild(element.value);
      checkNode(treeChild, element);
    }
  }

  newTree.setRoot(newGraph.roots[0].value);
  if (!newTree.root) throw new Error("TS guard");
  checkNode(newTree.root, newGraph.roots[0]);

  console.log("newTree", newTree, newGraph);

  return newTree;
}

export function renderPastaNodes(tree: Tree<TreeNodeType>) {
  let graph = new GraphTree<TreeNodeType>();
  graph.buildFromReversingTree(tree);

  const tree2 = mergeSimilarIdsInGraph(graph);

  function renderTree(graph: Tree<TreeNodeType>): string {
    function renderNode(
      node: TreeNode<TreeNodeType> | null,
      depth: number
    ): string {
      if (!node) {
        return "";
      }

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

    return renderNode(graph.root, 0);
  }

  return `<hr/><h1>treesBranches:</h1><ul class="tree">${renderTree(
    tree2
  )}</ul><hr/>`;
}
