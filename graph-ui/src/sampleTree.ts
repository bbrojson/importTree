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
  const level1_1 = new TreeNode<TreeNodeType>({
    file: "module1",
    variable: null,
  });
  const level1_2 = new TreeNode<TreeNodeType>({
    file: "module2",
    variable: null,
  });
  const level1_3 = new TreeNode<TreeNodeType>({
    file: "module3",
    variable: null,
  });
  root.children = [level1_1, level1_2, level1_3];

  // Level 2 - 5 nodes
  const level2_1 = new TreeNode<TreeNodeType>({
    file: "sub1",
    variable: null,
  });
  const level2_3 = new TreeNode<TreeNodeType>({
    file: "sub3",
    variable: null,
  });
  const level2_4 = new TreeNode<TreeNodeType>({
    file: "sub4",
    variable: null,
  });
  const level2_5 = new TreeNode<TreeNodeType>({
    file: "sub5",
    variable: null,
  });
  const level2_6 = new TreeNode<TreeNodeType>({
    file: "sub6",
    variable: null,
  });

  level1_1.children = [level2_1];
  level1_2.children = [level2_3, level2_4];
  level1_3.children = [level2_5, level2_6];

  // Level 3 - 10 nodes
  const level3_1 = new TreeNode<TreeNodeType>({
    file: "component1",
    variable: null,
  });
  const level3_2 = new TreeNode<TreeNodeType>({
    file: "component2",
    variable: null,
  });
  const level3_4 = new TreeNode<TreeNodeType>({
    file: "component4",
    variable: null,
  });
  const level3_5 = new TreeNode<TreeNodeType>({
    file: "component5",
    variable: null,
  });
  const level3_6 = new TreeNode<TreeNodeType>({
    file: "component6",
    variable: null,
  });
  const level3_7 = new TreeNode<TreeNodeType>({
    file: "component7",
    variable: null,
  });
  const level3_8 = new TreeNode<TreeNodeType>({
    file: "component8",
    variable: null,
  });
  const level3_9 = new TreeNode<TreeNodeType>({
    file: "component9",
    variable: null,
  });
  const level3_10 = new TreeNode<TreeNodeType>({
    file: "component10",
    variable: null,
  });
  const level3_11 = new TreeNode<TreeNodeType>({
    file: "component11",
    variable: null,
  });

  // Base nodes
  const baseA = new TreeNode<TreeNodeType>({
    file: "baseA",
    variable: null,
  });
  const baseB = new TreeNode<TreeNodeType>({
    file: "baseB",
    variable: null,
  });

  // Distribute level 3 nodes among level 2 nodes
  level2_1.children = [level3_1, level3_2];
  level2_3.children = [level3_4, level3_5];
  level2_4.children = [level3_6, level3_7];
  level2_5.children = [level3_8, level3_9];
  level2_6.children = [level3_10, level3_11];

  // Add baseA as child to components 1-10
  level3_1.children = [baseA];
  level3_2.children = [baseA];
  level3_4.children = [baseA];
  level3_5.children = [baseA];
  level3_6.children = [baseA];
  level3_7.children = [baseA];
  level3_8.children = [baseA];
  level3_9.children = [baseA];
  level3_10.children = [baseA];

  // Add baseB as child to component 11
  level3_11.children = [baseB];

  return tree;
}
