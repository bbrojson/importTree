import { Tree, TreeNode } from "../../src/graphPanel/tree/Tree.js";
import * as path from "path";
// Mock SourceFile class to satisfy the interface
class MockSourceFile {
    constructor(name, filePath) {
        this.name = name;
        this.filePath = filePath;
    }
    getBaseName() {
        return this.name;
    }
    getFilePath() {
        // Create a mock StandardizedFilePath object
        const normalizedPath = path.normalize(this.filePath);
        return Object.assign(normalizedPath, {
            _standardizedFilePathBrand: undefined,
        });
    }
    getBaseNameWithoutExtension() {
        return this.name.replace(/\.[^/.]+$/, "");
    }
    getExtension() {
        return this.name.split(".").pop() || "";
    }
    getDirectory() {
        const dir = path.dirname(this.filePath);
        return {
            getPath: () => Object.assign(path.normalize(dir), {
                _standardizedFilePathBrand: undefined,
            }),
        };
    }
}
// Create a sample tree with 20 nodes
export function createSampleTree() {
    const tree = new Tree();
    // Root node
    const root = new TreeNode({
        file: new MockSourceFile("root.ts", "/src/root.ts"),
        variable: null,
    });
    tree.root = root;
    // Level 1 - 3 nodes
    const level1_1 = new TreeNode({
        file: new MockSourceFile("module1.ts", "/src/modules/module1.ts"),
        variable: null,
    });
    const level1_2 = new TreeNode({
        file: new MockSourceFile("module2.ts", "/src/modules/module2.ts"),
        variable: null,
    });
    const level1_3 = new TreeNode({
        file: new MockSourceFile("module3.ts", "/src/modules/module3.ts"),
        variable: null,
    });
    root.children = [level1_1, level1_2, level1_3];
    // Level 2 - 6 nodes
    const level2_1 = new TreeNode({
        file: new MockSourceFile("submodule1.ts", "/src/modules/submodules/submodule1.ts"),
        variable: null,
    });
    const level2_2 = new TreeNode({
        file: new MockSourceFile("submodule2.ts", "/src/modules/submodules/submodule2.ts"),
        variable: null,
    });
    const level2_3 = new TreeNode({
        file: new MockSourceFile("submodule3.ts", "/src/modules/submodules/submodule3.ts"),
        variable: null,
    });
    const level2_4 = new TreeNode({
        file: new MockSourceFile("submodule4.ts", "/src/modules/submodules/submodule4.ts"),
        variable: null,
    });
    const level2_5 = new TreeNode({
        file: new MockSourceFile("submodule5.ts", "/src/modules/submodules/submodule5.ts"),
        variable: null,
    });
    const level2_6 = new TreeNode({
        file: new MockSourceFile("submodule6.ts", "/src/modules/submodules/submodule6.ts"),
        variable: null,
    });
    level1_1.children = [level2_1, level2_2];
    level1_2.children = [level2_3, level2_4];
    level1_3.children = [level2_5, level2_6];
    // Level 3 - 11 nodes
    const level3_1 = new TreeNode({
        file: new MockSourceFile("component1.ts", "/src/components/component1.ts"),
        variable: null,
    });
    const level3_2 = new TreeNode({
        file: new MockSourceFile("component2.ts", "/src/components/component2.ts"),
        variable: null,
    });
    const level3_3 = new TreeNode({
        file: new MockSourceFile("component3.ts", "/src/components/component3.ts"),
        variable: null,
    });
    const level3_4 = new TreeNode({
        file: new MockSourceFile("component4.ts", "/src/components/component4.ts"),
        variable: null,
    });
    const level3_5 = new TreeNode({
        file: new MockSourceFile("component5.ts", "/src/components/component5.ts"),
        variable: null,
    });
    const level3_6 = new TreeNode({
        file: new MockSourceFile("component6.ts", "/src/components/component6.ts"),
        variable: null,
    });
    const level3_7 = new TreeNode({
        file: new MockSourceFile("component7.ts", "/src/components/component7.ts"),
        variable: null,
    });
    const level3_8 = new TreeNode({
        file: new MockSourceFile("component8.ts", "/src/components/component8.ts"),
        variable: null,
    });
    const level3_9 = new TreeNode({
        file: new MockSourceFile("component9.ts", "/src/components/component9.ts"),
        variable: null,
    });
    const level3_10 = new TreeNode({
        file: new MockSourceFile("component10.ts", "/src/components/component10.ts"),
        variable: null,
    });
    const level3_11 = new TreeNode({
        file: new MockSourceFile("component11.ts", "/src/components/component11.ts"),
        variable: null,
    });
    // Distribute level 3 nodes among level 2 nodes
    level2_1.children = [level3_1, level3_2];
    level2_2.children = [level3_3];
    level2_3.children = [level3_4, level3_5];
    level2_4.children = [level3_6, level3_7];
    level2_5.children = [level3_8, level3_9];
    level2_6.children = [level3_10, level3_11];
    return tree;
}
//# sourceMappingURL=sampleTree.js.map