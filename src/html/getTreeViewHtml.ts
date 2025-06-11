import { Tree, TreeNode } from "../graphPanel/tree/Tree";
import { TreeNodeType } from "../graphPanel/types/types";

export function getTreeViewHtml(tree: Tree<TreeNodeType>): string {
  if (tree.getDepth() === 0 || !tree.root) {
    return '<div class="imports"><p>Morph didn`t found any references.</p></div>';
  }

  function renderNode(
    node: TreeNode<TreeNodeType>,
    depth: number,
    isLast = true
  ): string {
    if (!node) {
      return "";
    }

    const prefix = depth === 0 ? "" : isLast ? "└── " : "├── ";
    const indent = "    ".repeat(depth);
    const hasChildren = node.children.length > 0;

    let result = `${indent}${prefix}• ${node.value.file.getBaseName()} <code>${node.value.file.getFilePath()}</code>\n`;

    if (hasChildren) {
      node.children.forEach((child, index) => {
        const isLastChild = index === node.children.length - 1;
        result += renderNode(child, depth + 1, isLastChild);
      });
    }

    return result;
  }

  return `<style>
    .tree {
      font-family: Monaco, monospace;
      line-height: 1.5;
    }
    .tree code {
      color: #666;
      margin-left: 8px;
    }
    .tree pre {
      margin: 0;
      padding: 10px;
    }
  </style>
  <pre class="tree">
${renderNode(tree.root, 0)}
</pre>`;
}
