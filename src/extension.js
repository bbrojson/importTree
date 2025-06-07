"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
const path_1 = __importDefault(require("path"));
const vscode = __importStar(require("vscode"));
const getTsconfigPath_1 = require("./utils/getTsconfigPath");
const morphReferences_1 = require("./panel/morphReferences/morphReferences");
const getTreeViewHtml_1 = require("./panel/morphReferences/getTreeViewHtml");
const getNestedTreeViewHtml_1 = require("./panel/morphReferences/getNestedTreeViewHtml");
const getReverseNestedTree_1 = require("./utils/getReverseNestedTree");
const getGraphPathsV2_1 = require("./getGraphPathsV2/getGraphPathsV2");
const getGraphHtml_1 = require("./panel/morphReferences/getGraphHtml");
function activate(context) {
    const disposable = vscode.commands.registerCommand("importtree.showImportTree", () => {
        showImportTreePanel(context);
    });
    context.subscriptions.push(disposable);
}
function showImportTreePanel(context) {
    // Create a webview panel
    const panel = vscode.window.createWebviewPanel("importTreePanel", "Import Tree", vscode.ViewColumn.One, {
        enableScripts: true,
        localResourceRoots: [
            vscode.Uri.file(path_1.default.join(context.extensionPath, "static")),
        ],
    });
    const currentFile = vscode.window.activeTextEditor?.document;
    if (!currentFile) {
        vscode.window.showWarningMessage("importtree: currentFile not found!");
        return;
    }
    const tsConfigPath = (0, getTsconfigPath_1.getTsconfigPath)();
    (0, morphReferences_1.findMorphReferences)(currentFile, tsConfigPath).then((tree) => {
        panel.webview.html = buildPanelHtml(currentFile, tree);
    });
    panel.onDidDispose(() => {
        panel.dispose();
    });
}
function buildPanelHtml(currentFile, tree) {
    return `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Import Tree</title>
      </head>
      <body>
      <h1>Import Tree v2 </h1>
      <h2>${path_1.default.basename(currentFile.fileName)}</h2>
          ${(0, getTreeViewHtml_1.getTreeViewHtml)(tree)}
          --------------------------------------
          ${(0, getGraphHtml_1.getGraphHtml)((0, getGraphPathsV2_1.getGraphPathsV2)(tree))}
          ${(0, getNestedTreeViewHtml_1.getNestedTreeViewHtml)((0, getReverseNestedTree_1.getReverseNestedTree)(tree))}
      </body>
      </html>
  `;
}
// TODO TEST file src\app\shared\components\requestModal\RequestModal.tsx
//# sourceMappingURL=extension.js.map