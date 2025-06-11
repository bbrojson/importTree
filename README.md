# Import Tree — Visualize where file was imported

A VS Code extension that provides a visual tree representation of file import dependencies. This extension helps developers understand and navigate through the import relationships between files in their project.

## Features

- Visualize import dependencies in a tree structure

## How to Use

1. Open the Import Tree view in the VS Code sidebar
2. Select a file in your project that you want to investigate
3. Type the importTree.show command

## Requirements

- VS Code 1.49 or higher

## Installation

1. Open VS Code
2. Go to the Extensions view (`Ctrl+Shift+X`)
3. Search for "Import Tree"
4. Click Install

## Development

To contribute to this extension:

1. Clone the repository
2. Run `npm install`
3. Run `npm run watch` or `npm run compile`
4. Press `F5` to start debugging

## VS Code API

This extension uses the following VS Code APIs:

- `window.registerWebviewViewProvider` for the tree visualization
- File system APIs for analyzing imports
- Tree view APIs for displaying the dependency structure

## License

MIT
