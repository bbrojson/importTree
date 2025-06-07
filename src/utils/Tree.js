"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = exports.TreeNode = void 0;
class TreeNode {
    value;
    children;
    parent;
    depth;
    constructor(value, parent = null) {
        this.value = value;
        this.children = [];
        this.parent = parent;
        this.depth = 0;
    }
    addChild(value) {
        const child = new TreeNode(value, this);
        child.depth = this.depth + 1;
        this.children.push(child);
        return child;
    }
    removeChild(child) {
        const index = this.children.indexOf(child);
        if (index !== -1) {
            this.children.splice(index, 1);
            return true;
        }
        return false;
    }
    findNode(predicate) {
        if (predicate(this.value)) {
            return this;
        }
        for (const child of this.children) {
            const found = child.findNode(predicate);
            if (found) {
                return found;
            }
        }
        return null;
    }
    traverse(callback) {
        callback(this);
        for (const child of this.children) {
            child.traverse(callback);
        }
    }
    reverseTraverse(callback) {
        for (let i = this.children.length - 1; i >= 0; i--) {
            this.children[i].reverseTraverse(callback);
        }
        callback(this);
    }
    map(callback) {
        const result = [callback(this.value, this.depth)];
        for (const child of this.children) {
            result.push(...child.map(callback));
        }
        return result;
    }
    getDepth() {
        if (this.children.length === 0) {
            return 0;
        }
        return 1 + Math.max(...this.children.map((child) => child.getDepth()));
    }
    getPath() {
        const path = [this.value];
        let current = this.parent;
        while (current !== null) {
            path.unshift(current.value);
            current = current.parent;
        }
        return path;
    }
    traverseToRoot(callback) {
        callback(this);
        if (this.parent) {
            this.parent.traverseToRoot(callback);
        }
    }
}
exports.TreeNode = TreeNode;
class Tree {
    root;
    constructor() {
        this.root = null;
    }
    setRoot(value) {
        this.root = new TreeNode(value);
        return this.root;
    }
    findNode(predicate) {
        if (!this.root) {
            return null;
        }
        return this.root.findNode(predicate);
    }
    traverse(callback) {
        if (this.root) {
            this.root.traverse(callback);
        }
    }
    reverseTraverse(callback) {
        if (this.root) {
            this.root.reverseTraverse(callback);
        }
    }
    map(callback) {
        return this.root ? this.root.map(callback) : [];
    }
    getDepth() {
        return this.root ? this.root.getDepth() : -1;
    }
}
exports.Tree = Tree;
//# sourceMappingURL=Tree.js.map