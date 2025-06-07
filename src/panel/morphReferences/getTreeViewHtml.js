"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTreeViewHtml = getTreeViewHtml;
function getTreeViewHtml(tree) {
    if (tree.getDepth() === 0 || !tree.root) {
        return '<div class="imports"><p>Morph didn`t found any references.</p></div>';
    }
    function renderNode(node, depth) {
        if (!node) {
            return "";
        }
        const hasChildren = node.children.length > 0;
        const children = node.children
            .map((child) => renderNode(child, depth + 1))
            .join("");
        return `
      <li>
        ${hasChildren
            ? `
          <details open>
            <summary>${node.value.file.getBaseName()} <code>${node.value.file.getFilePath()}</code></summary>
            <ul>
              ${children}
            </ul>
          </details>
        `
            : `
          <span>${node.value.file.getBaseName()}</span>
        `}
      </li>
    `;
    }
    return `<style>
  .tree {
    --spacing: 1.4rem;
    --radius: 7px;
    font-family: Monaco, monospace;
  }

  .tree li {
    display: block;
    position: relative;
    padding-left: calc(2 * var(--spacing) - var(--radius) - 2px);
  }

  .tree ul {
    margin-left: calc(var(--radius) - var(--spacing));
    padding-left: 0;
  }

  .tree ul li {
    border-left: 2px solid #ddd;
    margin-bottom: 5px;
  }

  .tree ul li:last-child {
    border-color: transparent;
  }

  .tree ul li::before {
    content: '';
    display: block;
    position: absolute;
    top: calc(var(--spacing) / -2);
    left: -2px;
    width: calc(var(--spacing) + 2px);
    height: calc(var(--spacing) + 1px);
    border: solid #ddd;
    border-width: 0 0 2px 2px;
  }

  .tree summary {
    display: block;
    cursor: pointer;
    margin-bottom: 7px;
  }

  .tree details > summary code {
    display: inline-block;
  }

  .tree details[open] summary code {
    display: none;
  }

  .tree summary::marker,
  .tree summary::-webkit-details-marker {
    display: none;
  }

  .tree summary:focus {
    outline: none;
  }

  .tree summary:focus-visible {
    outline: 1px dotted #000;
  }

  .tree li::after,
  .tree summary::before {
    content: '';
    display: block;
    position: absolute;
    top: calc(var(--spacing) / 2 - var(--radius));
    left: calc(var(--spacing) - var(--radius) - 1px);
    width: calc(2 * var(--radius));
    height: calc(2 * var(--radius));
    border-radius: 50%;
    background: #ddd;
  }

  .tree summary::before {
    z-index: 1;
    background: #696;
  }

  details {
    margin-bottom: 7px;
  }

  .tree details[open] > summary::before {
    background-position: calc(-2 * var(--radius)) 0;
  }

  .variable-badge {
    background-color: #f0f0f0;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.85em;
    margin-left: 8px;
  }
  </style>
  <ul class="tree">
    ${renderNode(tree.root, 0)}
  </ul>`;
}
//# sourceMappingURL=getTreeViewHtml.js.map