import * as vscode from "vscode";
import { Project } from "ts-morph";
import { getTsconfigPath } from "../getTsconfigPath";
import { TreeNodeType } from "../types/types";
import { Tree, TreeNode } from "../tree/Tree";
import { retrieveSourceFileReferences } from "./retrieveSourceFileReferences";

export class ProjectImportsTree {
  private project: Project;

  constructor() {
    const tsConfigPath = getTsconfigPath();

    if (!tsConfigPath) {
      throw new Error("TS config file not found!");
    }

    this.project = new Project({
      tsConfigFilePath: tsConfigPath,
    });
  }

  public buildTree(document: vscode.TextDocument) {
    const sourceFile = this.project.getSourceFileOrThrow(document.fileName);

    const tree = new Tree<TreeNodeType>();

    const root = tree.setRoot({
      id: sourceFile.getBaseName(),
      file: sourceFile,
      variable: null,
    });

    function findReferences(node: TreeNode<TreeNodeType>) {
      const newNode = retrieveSourceFileReferences(node.value.file);
      for (let index = 0; index < newNode.files.length; index++) {
        const file = newNode.files[index];

        if (file.getBaseName().includes(".spec.")) {
          continue;
        }

        const child = node.addChild({
          id: file.getBaseName(),
          variable: newNode.variable,
          file,
        });

        findReferences(child);
      }
    }

    findReferences(root);

    return tree;
  }
}
