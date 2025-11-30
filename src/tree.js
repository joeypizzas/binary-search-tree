// Tree class constructor

import { Node } from "./node.js";

export class Tree {
  constructor(array) {}

  sortAndRemoveDuplicates(array) {
    array.sort((a, b) => a - b);
    const uniqueSortedArray = array.filter(
      (value, i, self) => value !== self[i - 1],
    );
    return uniqueSortedArray;
  }

  buildTree(array) {
    if (array.length === 0) return null;
  }
}
