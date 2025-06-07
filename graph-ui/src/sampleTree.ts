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
  const level1_1 = root.addChild({
    file: "module1",
    variable: null,
  });
  const level1_2 = root.addChild({
    file: "module2",
    variable: null,
  });
  const level1_3 = root.addChild({
    file: "module3",
    variable: null,
  });

  // Level 2 - 5 nodes
  const level2_1 = level1_1.addChild({
    file: "sub1",
    variable: null,
  });
  const level2_3 = level1_2.addChild({
    file: "sub3",
    variable: null,
  });
  const level2_4 = level1_2.addChild({
    file: "sub4",
    variable: null,
  });
  const level2_5 = level1_3.addChild({
    file: "sub5",
    variable: null,
  });
  const level2_6 = level1_3.addChild({
    file: "sub6",
    variable: null,
  });

  // Level 3 - 10 nodes
  const level3_1 = level2_1.addChild({
    file: "component1",
    variable: null,
  });
  const level3_2 = level2_1.addChild({
    file: "component2",
    variable: null,
  });
  const level3_4 = level2_3.addChild({
    file: "component4",
    variable: null,
  });
  const level3_5 = level2_3.addChild({
    file: "component5",
    variable: null,
  });
  const level3_6 = level2_4.addChild({
    file: "component6",
    variable: null,
  });
  const level3_7 = level2_4.addChild({
    file: "component7",
    variable: null,
  });
  const level3_8 = level2_5.addChild({
    file: "component8",
    variable: null,
  });
  const level3_9 = level2_5.addChild({
    file: "component9",
    variable: null,
  });
  const level3_10 = level2_6.addChild({
    file: "component10",
    variable: null,
  });
  const level3_11 = level2_6.addChild({
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

  // Add baseA as child to components 1-10
  level3_1.addChild(baseA.value);
  level3_2.addChild(baseA.value);
  level3_4.addChild(baseA.value);
  level3_5.addChild(baseA.value);
  level3_6.addChild(baseA.value);
  level3_7.addChild(baseA.value);
  level3_8.addChild(baseA.value);
  level3_9.addChild(baseA.value);
  level3_10.addChild(baseA.value);

  // Add baseB as child to component 11
  level3_11.addChild(baseB.value);

  return tree;
}
