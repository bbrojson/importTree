import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function getTsconfigPath() {
	if (!vscode.workspace.workspaceFolders) {
		vscode.window.showErrorMessage('No workspace is open.');
		return null;
	}

	const workspaceRoot = vscode.workspace.workspaceFolders[0].uri.fsPath;
	const tsconfigPath = path.join(workspaceRoot, 'tsconfig.json');

	if (fs.existsSync(tsconfigPath)) {
		return tsconfigPath;
	} else {
		vscode.window.showWarningMessage('tsconfig.json not found in workspace root.');
		return null;
	}
}
