import { Tree, TreeNode } from "../../src/graphPanel//tree/Tree";
import type { TreeNodeType } from "../../src/graphPanel/types/types";

// Create a sample tree with 20 nodes
export function createSampleTree(): Tree<TreeNodeType> {
  const tree = new Tree<TreeNodeType>();

  // Root node
  const root = new TreeNode<TreeNodeType>({
    file: "root",
    variable: null,
  });
  tree.root = root;

  // Level 1 - 3 nodes
  const a1 = root.addChild({
    file: "a1",
    variable: null,
  });
  const a2 = a1.addChild({
    file: "a2",
    variable: null,
  });
  a2.addChild({
    file: "pa",
    variable: null,
  });

  const b1 = root.addChild({
    file: "b1",
    variable: null,
  });
  const b2 = b1.addChild({
    file: "b2",
    variable: null,
  });
  const b21 = b1.addChild({
    file: "b21",
    variable: null,
  });
  b21.addChild({
    file: "ba",
    variable: null,
  });
  b2.addChild({
    file: "ba",
    variable: null,
  });

  const v1 = root.addChild({
    file: "v1",
    variable: null,
  });
  const v2 = v1.addChild({
    file: "v2",
    variable: null,
  });
  const v21 = v2.addChild({
    file: "v21",
    variable: null,
  });
  const v22 = v2.addChild({
    file: "v22",
    variable: null,
  });
  v22.addChild({
    file: "vp",
    variable: null,
  });
  v21.addChild({
    file: "vp",
    variable: null,
  });

  const vb1 = v2.addChild({
    file: "b21",
    variable: null,
  });
  vb1.addChild({
    file: "ba",
    variable: null,
  });

  return tree;
}
