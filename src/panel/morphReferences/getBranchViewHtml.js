"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBranchViewHtml = getBranchViewHtml;
function getBranchViewHtml(tree) {
    if (tree.getDepth() === 0 || !tree.root) {
        return '<div class="imports"><p>No branches found.</p></div>';
    }
    function getBranches(node) {
        if (node.children.length === 0) {
            return [[node]];
        }
        const branches = [];
        node.children.forEach((child) => {
            const childBranches = getBranches(child);
            childBranches.forEach((branch) => {
                branches.push([node, ...branch]);
            });
        });
        return branches;
    }
    const branches = getBranches(tree.root);
    function renderBranch(branch, index) {
        return `
      <li class="branch-item">
        <details open>
          <summary class="branch-summary">
            <span class="branch-number">Branch ${index + 1}</span>
            <span class="branch-length">${branch.length} nodes</span>
          </summary>
          <ul class="branch-nodes">
            ${branch
            .map((node, nodeIndex) => `
              <li class="branch-node">
                <div class="node-content">
                  <span class="node-level">${nodeIndex + 1}</span>
                  <span class="file-name">${node.value.file.getBaseName()}</span>
                  ${node.value.variable
            ? `<span>${node.value.variable.getName()}</span>`
            : ""}
                </div>
              </li>
            `)
            .join("")}
          </ul>
        </details>
      </li>
    `;
    }
    return `<style>
  .tree {
    --spacing: 1.4rem;
    --radius: 7px;
    --branch-color: #4a90e2;
    --node-color: #666;
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

  .branch-item {
    margin-bottom: 1rem;
    background: #f8f9fa;
    border-radius: 8px;
    padding: 0.5rem;
  }

  .branch-summary {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    background: #fff;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .branch-summary:hover {
    background: #f0f2f5;
  }

  .branch-number {
    font-weight: 600;
    color: var(--branch-color);
  }

  .branch-length {
    font-size: 0.9em;
    color: var(--node-color);
    background: #e9ecef;
    padding: 2px 8px;
    border-radius: 12px;
  }

  .branch-nodes {
    margin-top: 0.5rem;
    padding-left: 1rem;
  }

  .branch-node {
    border-left: 2px solid #e9ecef;
    margin-bottom: 0.5rem;
    padding-left: 1rem;
  }

  .branch-node:last-child {
    border-color: transparent;
  }

  .node-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    background: #fff;
    border-radius: 4px;
  }

  .node-level {
    color: var(--node-color);
    font-size: 0.9em;
    font-weight: 600;
    min-width: 1.5rem;
    text-align: center;
  }

  .file-name {
    font-weight: 500;
    color: #2c3e50;
  }

  .variable-badge {
    background-color: #e8f0fe;
    color: #1a73e8;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.85em;
    border: 1px solid #c2d7fe;
  }

  details {
    margin-bottom: 0.5rem;
  }

  details[open] > summary {
    margin-bottom: 0.5rem;
  }

  summary::marker,
  summary::-webkit-details-marker {
    display: none;
  }

  summary:focus {
    outline: none;
  }

  summary:focus-visible {
    outline: 1px dotted #000;
  }
  </style>
  <ul class="tree">
    ${branches.map((branch, index) => renderBranch(branch, index)).join("")}
  </ul>`;
}
//# sourceMappingURL=getBranchViewHtml.js.map