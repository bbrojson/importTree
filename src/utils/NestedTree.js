"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedTree = void 0;
const Tree_1 = require("./Tree");
class NestedTree {
    roots;
    constructor() {
        this.roots = [];
    }
    addRoot(value) {
        const root = new Tree_1.TreeNode(value);
        this.roots.push(root);
        return root;
    }
    removeRoot(root) {
        const index = this.roots.indexOf(root);
        if (index !== -1) {
            this.roots.splice(index, 1);
            return true;
        }
        return false;
    }
    getRoots() {
        return [...this.roots];
    }
    findNode(predicate) {
        for (const root of this.roots) {
            const found = root.findNode(predicate);
            if (found) {
                return found;
            }
        }
        return null;
    }
    traverse(callback) {
        for (const root of this.roots) {
            root.traverse(callback);
        }
    }
    map(callback) {
        return this.roots.flatMap((root) => root.map(callback));
    }
    getMaxDepth() {
        if (this.roots.length === 0) {
            return -1;
        }
        return Math.max(...this.roots.map((root) => root.getDepth()));
    }
    // Helper method to check if a node is a root
    isRoot(node) {
        return this.roots.includes(node);
    }
    // Get the total number of nodes in the tree
    getSize() {
        let size = 0;
        this.traverse(() => size++);
        return size;
    }
    // Clear all roots and their children
    clear() {
        this.roots = [];
    }
}
exports.NestedTree = NestedTree;
//# sourceMappingURL=NestedTree.js.map