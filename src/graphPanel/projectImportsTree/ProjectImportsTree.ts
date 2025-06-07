import * as vscode from 'vscode';
import { FunctionDeclaration, Project, SourceFile, VariableDeclaration } from 'ts-morph';

import { getTsconfigPath } from '../getTsconfigPath';
import { Tree, TreeNode } from '../tree/Tree';
import { retrieveSourceFileReferences } from '../tree/utils/retrieveSourceFileReferences';
import { mergeLinkedListToMultiGraph } from './mergeLinkedListToMultiGraph';

export type TreeNodeType = {
	file: SourceFile;
	variable: VariableDeclaration | FunctionDeclaration | null;
};

export class ProjectImportsTree {
	private project: Project;

	constructor() {
		const tsConfigPath = getTsconfigPath();

		if (!tsConfigPath) {
			throw new Error('TS config file not found!');
		}

		this.project = new Project({
			tsConfigFilePath: tsConfigPath,
		});
	}

	public buildTree(document: vscode.TextDocument) {
		const sourceFile = this.project.getSourceFileOrThrow(document.fileName);

		const tree = new Tree<TreeNodeType>();

		const root = tree.setRoot({
			file: sourceFile,
			variable: null,
		});

		function findReferences(node: TreeNode<TreeNodeType>) {
			const newNode = retrieveSourceFileReferences(node.value.file);
			for (let index = 0; index < newNode.files.length; index++) {
				const file = newNode.files[index];

				if (file.getBaseName().includes('.spec.')) {
					continue;
				}

				const child = node.addChild({
					variable: newNode.variable,
					file,
				});

				findReferences(child);
			}
		}

		findReferences(root);

		return tree;
	}

	public buildGraph(tree: Tree<TreeNodeType>) {
		const bottomNodes: TreeNode<TreeNodeType>[] = [];

		tree.traverse((node) => {
			if (node.children.length === 0) {
				bottomNodes.push(node);
			}
		});

		const nodes: TreeNodeType[][] = [];

		for (let i = 0; i < bottomNodes.length; i++) {
			const bottomNode = bottomNodes[i];
			nodes.push([]);
			bottomNode.traverseToRoot((child) => {
				nodes[i].push(child.value);
			});
		}

		return mergeLinkedListToMultiGraph(nodes);
	}
}
