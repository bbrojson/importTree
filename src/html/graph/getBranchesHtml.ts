import { Tree, TreeNode } from "../../graphPanel/tree/Tree";
import { TreeNodeType } from "../../graphPanel/types/types";

export function getBranchesHtml(tree: Tree<TreeNodeType>) {
  const bottomNodes: TreeNode<TreeNodeType>[] = [];

  tree.traverse((node) => {
    if (node.children.length === 0) {
      bottomNodes.push(node);
    }
  });

  const treesBranches: TreeNodeType[][] = [];

  for (let i = 0; i < bottomNodes.length; i++) {
    const bottomNode = bottomNodes[i];
    treesBranches.push([]);
    bottomNode.traverseToRoot((child) => {
      treesBranches[i].push(child.value);
    });
  }

  return `<div>
	${treesBranches
    .map((nodeArr) => {
      return nodeArr
        .map((node) => {
          return node.id;
        })
        .join("=> ");
    })
    .join("<hr/>")}
	
	</div>`;
}
