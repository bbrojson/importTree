import { GraphTree, Tree, TreeNode } from "../../graphPanel/tree/Tree";
import { TreeNodeType } from "../../graphPanel/types/types";

function mergeSimilarIdsInGraph(graph: GraphTree<TreeNodeType>) {
  const startPoint = new TreeNode<TreeNodeType>({
    id: "From root to file.",
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

  return newTree;
}

function checkForDuplicateNodes(tree: Tree<TreeNodeType>): void {
  const seenIds = new Set<string>();

  function checkNode(node: TreeNode<TreeNodeType> | null): void {
    if (!node) return;

    // Check if we've seen this ID before
    // if (seenIds.has(node.value.id) && node.value.id !== "root") {
    //   throw new Error(`Duplicate node ID found: ${node.value.id}`);
    // }

    // Add current node's ID to seen set
    seenIds.add(node.value.id);

    // Recursively check all children
    for (const child of node.children) {
      checkNode(child);
    }
  }

  checkNode(tree.root);
}

export function renderPastaNodes(tree: Tree<TreeNodeType>) {
  let graph = new GraphTree<TreeNodeType>();
  graph.buildFromReversingTree(tree);

  const tree2 = mergeSimilarIdsInGraph(graph);

  try {
    checkForDuplicateNodes(tree2);
    // No duplicates found
  } catch (error) {
    // Handle the error - it will contain the duplicate ID in the message
    console.error(error);
  }

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

  return `<hr/><ul class="tree">${renderTree(tree2)}</ul><hr/>`;
}
