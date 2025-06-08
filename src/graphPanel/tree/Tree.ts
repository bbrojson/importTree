import { mergeLinkedListToMultiGraph } from "../projectImportsTree/mergeLinkedListToMultiGraph";

export class TreeNode<T extends { id: string }> {
  value: T;
  children: TreeNode<T>[];
  parent: TreeNode<T> | null;
  depth: number;

  constructor(value: T, parent: TreeNode<T> | null = null) {
    this.value = value;
    this.children = [];
    this.parent = parent;
    this.depth = 0;
  }

  addChild(value: T): TreeNode<T> {
    const child = new TreeNode<T>(value, this);
    child.depth = this.depth + 1;
    this.children.push(child);
    return child;
  }

  addChildNode(childNode: TreeNode<T>): TreeNode<T> {
    childNode.parent = this;
    childNode.depth = this.depth + 1;
    this.children.push(childNode);
    return childNode;
  }

  removeChild(child: TreeNode<T>): boolean {
    const index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
      return true;
    }
    return false;
  }

  findNode(predicate: (value: T) => boolean): TreeNode<T> | null {
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

  traverse(callback: (node: TreeNode<T>) => void): void {
    callback(this);
    for (const child of this.children) {
      child.traverse(callback);
    }
  }

  reverseTraverse(callback: (node: TreeNode<T>) => void): void {
    for (let i = this.children.length - 1; i >= 0; i--) {
      this.children[i].reverseTraverse(callback);
    }
    callback(this);
  }

  map<U>(callback: (value: T, depth: number) => U): U[] {
    const result: U[] = [callback(this.value, this.depth)];
    for (const child of this.children) {
      result.push(...child.map(callback));
    }
    return result;
  }

  getDepth(): number {
    if (this.children.length === 0) {
      return 0;
    }
    return 1 + Math.max(...this.children.map((child) => child.getDepth()));
  }

  getPath(): T[] {
    const path: T[] = [this.value];
    let current: TreeNode<T> | null = this.parent;

    while (current !== null) {
      path.unshift(current.value);
      current = current.parent;
    }

    return path;
  }

  traverseToRoot(callback: (node: TreeNode<T>) => void): void {
    callback(this);
    if (this.parent) {
      this.parent.traverseToRoot(callback);
    }
  }

  toString() {}
}

export class Tree<T extends { id: string }> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  setRoot(value: T): TreeNode<T> {
    this.root = new TreeNode<T>(value);
    return this.root;
  }

  findNode(predicate: (value: T) => boolean): TreeNode<T> | null {
    if (!this.root) {
      return null;
    }
    return this.root.findNode(predicate);
  }

  traverse(callback: (node: TreeNode<T>) => void): void {
    if (this.root) {
      this.root.traverse(callback);
    }
  }

  reverseTraverse(callback: (node: TreeNode<T>) => void): void {
    if (this.root) {
      this.root.reverseTraverse(callback);
    }
  }

  map<U>(callback: (value: T, depth: number) => U): U[] {
    return this.root ? this.root.map(callback) : [];
  }

  getDepth(): number {
    return this.root ? this.root.getDepth() : -1;
  }
}

export class GraphTree<T extends { id: string }> {
  roots: TreeNode<T>[];

  constructor() {
    this.roots = [];
  }

  addRoot(value: T): TreeNode<T> {
    const root = new TreeNode<T>(value);
    this.roots.push(root);
    return root;
  }

  findNode(predicate: (value: T) => boolean): TreeNode<T> | null {
    throw new Error("Not implemented yet!" + predicate);
  }

  traverse(callback: (node: TreeNode<T>) => void): void {
    throw new Error("Not implemented yet!" + callback);
  }

  public buildFromReversingTree(tree: Tree<T>) {
    this.roots = [];
    const bottomNodes: TreeNode<T>[] = [];

    tree.traverse((node) => {
      if (node.children.length === 0) {
        bottomNodes.push(node);
      }
    });

    for (let i = 0; i < bottomNodes.length; i++) {
      const bottomNode = bottomNodes[i];
      let counter = 0;
      let lastChild: TreeNode<T>;
      bottomNode.traverseToRoot((child) => {
        if (counter === 0) {
          lastChild = this.addRoot(child.value);
        } else {
          lastChild = lastChild.addChild(child.value);
        }
        console.log("first", lastChild.value.id, counter);
        counter++;
      });
    }

    // return mergeLinkedListToMultiGraph(nodes);
  }
}
