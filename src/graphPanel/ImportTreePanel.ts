import * as vscode from "vscode";
import { ProjectImportsTree } from "./projectImportsTree/ProjectImportsTree";
import { getTreeViewHtml } from "../html/getTreeViewHtml";
import { getGraphHtml } from "../html/graph/getGraphHtml";
import { getGraphHtmlExample } from "../html/graph/getGraphHtmlExample";

export class ImportTreePanel {
  public static readonly viewType = "importTree";

  public static show(context: vscode.ExtensionContext) {
    const column = vscode.window.activeTextEditor
      ? vscode.window.activeTextEditor.viewColumn
      : undefined;

    const panel = vscode.window.createWebviewPanel(
      ImportTreePanel.viewType,
      "Import Tree",
      column || vscode.ViewColumn.One
    );

    panel.webview.html = this._getHtmlForWebview(context, panel.webview);
  }

  private static _getHtmlForWebview(
    context: vscode.ExtensionContext,
    webview: vscode.Webview
  ) {
    console.time("_getHtmlForWebview");
    console.time("ProjectImportsTree");
    const projectTree = new ProjectImportsTree();
    console.timeEnd("ProjectImportsTree");

    const currentFile = vscode.window.activeTextEditor?.document;
    if (!currentFile) {
      vscode.window.showWarningMessage("importTree: currentFile not found!");
      return "couldn't read the file" + currentFile;
    }

    console.time("buildTree");
    const tree = projectTree.buildTree(currentFile);
    console.timeEnd("buildTree");

    const graph = projectTree.buildGraph(tree);

    const styles = webview.asWebviewUri(
      vscode.Uri.joinPath(context.extensionUri, "media", "graph.css")
    );

    console.log("tree", tree);
    console.log("graph", JSON.stringify(graph));

    console.time("generateHtml");
    const html = `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">

				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Import Tree</title>

								<link href="${styles}" rel="stylesheet">
			</head>
			<body>
			<div class="importTree">
				<h1>Import tree</h1>
			
					${getTreeViewHtml(tree)}
					${getGraphHtml(graph)}
					${getGraphHtmlExample()}
				</div>
			</body>
			</html>`;
    console.timeEnd("generateHtml");

    console.timeEnd("_getHtmlForWebview");
    return html;
  }
}
