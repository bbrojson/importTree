import { Tree, TreeNode } from "../../src/graphPanel//tree/Tree";
import type { TreeNodeType } from "../../src/graphPanel/types/types";
import { SourceFile } from "ts-morph";

// Mock SourceFile implementation for sample tree
class MockSourceFile {
  constructor(private fileName: string) {}
  getBaseName() {
    return this.fileName;
  }
  getFilePath() {
    return `/mock/${this.fileName}.ts` as any;
  }
}

// Create a sample tree with 20 nodes
export function createSampleTree(): Tree<TreeNodeType> {
  const tree = new Tree<TreeNodeType>();

  // Root node
  const root = new TreeNode<TreeNodeType>({
    id: "root",
    variable: null,
    file: new MockSourceFile("root") as unknown as SourceFile,
  });
  tree.root = root;

  // Level 1 - 3 nodes
  const a1 = root.addChild({
    id: "a1",
    variable: null,
    file: new MockSourceFile("a1") as unknown as SourceFile,
  });
  const a2 = a1.addChild({
    id: "a2",
    variable: null,
    file: new MockSourceFile("a2") as unknown as SourceFile,
  });
  const a3 = a2.addChild({
    id: "a3",
    variable: null,
    file: new MockSourceFile("a3") as unknown as SourceFile,
  });
  a3.addChild({
    id: "pa",
    variable: null,
    file: new MockSourceFile("pa") as unknown as SourceFile,
  });

  const b1 = root.addChild({
    id: "b1",
    variable: null,
    file: new MockSourceFile("b1") as unknown as SourceFile,
  });
  const b2 = b1.addChild({
    id: "b2",
    variable: null,
    file: new MockSourceFile("b2") as unknown as SourceFile,
  });
  const b21 = b1.addChild({
    id: "b21",
    variable: null,
    file: new MockSourceFile("b21") as unknown as SourceFile,
  });
  b21.addChild({
    id: "ba",
    variable: null,
    file: new MockSourceFile("ba") as unknown as SourceFile,
  });
  const b3 = b2.addChild({
    id: "b3",
    variable: null,
    file: new MockSourceFile("b3") as unknown as SourceFile,
  });
  b3.addChild({
    id: "ba",
    variable: null,
    file: new MockSourceFile("ba") as unknown as SourceFile,
  });

  const v1 = root.addChild({
    id: "v1",
    variable: null,
    file: new MockSourceFile("v1") as unknown as SourceFile,
  });
  const v2 = v1.addChild({
    id: "v2",
    variable: null,
    file: new MockSourceFile("v2") as unknown as SourceFile,
  });
  const v21 = v2.addChild({
    id: "v21",
    variable: null,
    file: new MockSourceFile("v21") as unknown as SourceFile,
  });
  const v22 = v2.addChild({
    id: "v22",
    variable: null,
    file: new MockSourceFile("v22") as unknown as SourceFile,
  });
  v22.addChild({
    id: "vp",
    variable: null,
    file: new MockSourceFile("vp") as unknown as SourceFile,
  });
  v21.addChild({
    id: "vp",
    variable: null,
    file: new MockSourceFile("vp") as unknown as SourceFile,
  });

  const vb1 = v2.addChild({
    id: "b21",
    variable: null,
    file: new MockSourceFile("b21") as unknown as SourceFile,
  });
  vb1.addChild({
    id: "ba",
    variable: null,
    file: new MockSourceFile("ba") as unknown as SourceFile,
  });

  return tree;
}
