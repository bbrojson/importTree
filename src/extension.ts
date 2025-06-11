import * as vscode from "vscode";
import { ImportTreePanel } from "./graphPanel/ImportTreePanel";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("importTree.show", () => {
      ImportTreePanel.show(context);
    })
  );
}
