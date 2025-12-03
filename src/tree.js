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
    if (!node) return null;
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

  height(value) {
    let node = this.find(this.root, value);

    if (!node) return null;

    function getNodeHeight(nodeParam) {
      if (!nodeParam) return 0;

      let height = 1;
      let leftHeight = getNodeHeight(nodeParam.left);
      let rightHeight = getNodeHeight(nodeParam.right);

      if (leftHeight < rightHeight) {
        return (height += rightHeight);
      } else {
        return (height += leftHeight);
      }
    }

    return getNodeHeight(node);
  }

  depth(node, value) {
    if (!node) return null;

    if (node.value === value) return 0;

    if (value < node.value) {
      const d = this.depth(node.left, value);
      if (d === null) return null;
      return 1 + d;
    } else {
      const d = this.depth(node.right, value);
      if (d === null) return null;
      return 1 + d;
    }
  }

  isBalanced(node) {
    if (!node) return { height: 0, balanced: true };

    let leftHeight = 1;
    let rightHeight = 1;
    leftHeight += this.isBalanced(node.left).height;
    rightHeight += this.isBalanced(node.right).height;

    if (leftHeight > rightHeight) {
      if (-1 <= leftHeight - rightHeight <= 1) {
        return { height: leftHeight, balanced: true };
      } else {
        return { height: leftHeight, balanced: false };
      }
    } else {
      if (-1 <= leftHeight - rightHeight <= 1) {
        return { height: rightHeight, balanced: true };
      } else {
        return { height: rightHeight, balanced: false };
      }
    }
  }
}
