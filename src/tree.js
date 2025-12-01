// Tree class constructor

import { Node } from "./node.js";

export class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  sortAndRemoveDuplicates(array) {
    array.sort((a, b) => a - b);
    const uniqueSortedArray = array.filter(
      (value, i, self) => value !== self[i - 1],
    );
    return uniqueSortedArray;
  }

  buildTree(array) {
    if (array.length === 0) return null;

    const mid = Math.floor(array.length / 2);
    const root = new Node(array[mid]);
    root.left = this.buildTree(array.slice(0, mid));
    root.right = this.buildTree(array.slice(mid + 1));

    return root;
  }

  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false,
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  insert(root, value) {
    if (!root) return new Node(value);

    if (value < root.value) {
      root.left = this.insert(root.left, value);
    } else {
      root.right = this.insert(root.right, value);
    }

    return root;
  }

  delete(root, value) {
    if (!root) return root;

    if (value < root.value) {
      root.left = this.delete(root.left, value);
    } else if (value > root.value) {
      root.right = this.delete(root.right, value);
    } else {
      if (!root.left) return root.right;
      if (!root.right) return root.left;
      let successor = root.right;
      while (successor.left) {
        successor = successor.left;
      }
      root.value = successor.value;
      root.right = this.delete(root.right, successor.value);
      return root;
    }
  }

  find(node, value) {
    if (!node) return `Oops! ${value} isn't in the binary search tree.`;
    if (node.value === value) return node;

    if (value < node.value) {
      return this.find(node.left, value);
    } else {
      return this.find(node.right, value);
    }
  }

  logValue(value) {
    console.log(value);
  }

  levelOrderForEach(callback) {
    if (typeof callback != "function")
      return `Oops! ${callback} must be a function.`;

    if (!this.root) return;

    const queue = [];
    queue.push(this.root);
    while (queue.length != 0) {
      callback(queue[0]);
      if (queue[0].left) queue.push(queue[0].left);
      if (queue[0].right) queue.push(queue[0].right);
      queue.shift();
    }
  }

  preOrderForEach(callback, root) {
    if (typeof callback != "function")
      return `Oops! ${callback} must be a function.`;

    if (!root) return;

    callback(root.value);
    this.preOrderForEach(callback, root.left);
    this.preOrderForEach(callback, root.right);
  }

  inOrderForEach(callback, root) {
    if (typeof callback != "function")
      return `Oops! ${callback} must be a function.`;

    if (!root) return;

    this.inOrderForEach(callback, root.left);
    callback(root.value);
    this.inOrderForEach(callback, root.right);
  }

  postOrderForEach(callback, root) {
    if (typeof callback != "function")
      return `Oops! ${callback} must be a function.`;

    if (!root) return;

    this.postOrderForEach(callback, root.left);
    this.postOrderForEach(callback, root.right);
    callback(root.value);
  }
}
