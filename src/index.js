// Binary search tree JS index

import { sortAndRemoveDuplicates, Tree } from "./tree.js";

function getRandomNumberArr() {
  const randomNumberArr = [];
  for (let i = 0; i < 20; i++) {
    const randomNumber = Math.floor(Math.random() * 101);
    randomNumberArr.push(randomNumber);
  }
  return randomNumberArr;
}

const binarySearchTree = new Tree(
  sortAndRemoveDuplicates(getRandomNumberArr()),
);

console.log(binarySearchTree.prettyPrint(binarySearchTree.root, "", true));
console.log(binarySearchTree.isBalanced(binarySearchTree.root));
binarySearchTree.insert(binarySearchTree.root, 105);
binarySearchTree.insert(binarySearchTree.root, 110);
binarySearchTree.insert(binarySearchTree.root, 117);
console.log(binarySearchTree.isBalanced(binarySearchTree.root));
binarySearchTree.root = binarySearchTree.rebalance();
console.log(binarySearchTree.isBalanced(binarySearchTree.root));
console.log(binarySearchTree.prettyPrint(binarySearchTree.root, "", true));
