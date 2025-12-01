# Binary search tree planning

## Does your program have a user interface? What will it look like? What functionality will the interface have?

- N/A.

## How do you plan to design the application state?

- Node class, which takes value param.
  - Constructor has value key set to param, and left and right keys each set to null.
  - No methods.
- Tree class:
  - Accepts an array parameter.
  - Constructor has root key which accepts root node value from build tree method.
  - Contains all methods for setting, manipulating and traversing the tree.

## How do you plan to organize your project files?

- index.js
- node.js
- tree.js

## What inputs will your program have? Will the user enter data or will you get input from somewhere else?

- Only input is array of numbers. That comes from function that returns array of random numbers < 100 in index.js file.

## Given your inputs, what are the steps necessary to return the desired output?

- Write node class.
  - Takes value parameter.
  - Constructor sets value key to value param, and left and right keys to null.
  - No methods.
- Write tree class.
  - Takes array parameter.
  - Constructor has root key. Root is set to result of buildTree method with array param.
  - Methods:
    - sortAndRemoveDuplicates(array):
      - Takes aray param.
      - uses array built in sort method: ((a, b) => a - b)
      - Creates new uniqueSortedArray and calls filter((value, i, self) => value !== self array value of i - 1). Since the array is sorted, if the value doesn't equal the value before it, it can be kept.
      - Return uniqueSortedArray.
    - buildTree(array):
      - Accepts array parameter.
      - base case is check if array param length equals 0 and return null if so.
      - Set mid variable to math floor of array length / 2.
      - Set root variable to new Node constructor of array value of mid index.
      - Set root left to buildTree recursive call of array sliced from 0 to mid.
      - Set root right to buildTree recursive call of array sliced from mid + 1.
      - Return root at the end.
    - prettyPrint method from project instructions.
    - insert(root, value):
      - Accepts root and value param.
      - Checks if root is null and if so, returns new node constructor with value param.
      - If key less than root value, then set root left to recursive call with root left and value.
      - Else, then set root right to recursive call with root right and value.
      - Return root.
    - delete(root, value):
      - if !root, return root.
      - if value less than root value, set root left to recursive function call with root left and value.
      - If value is greater than root value, set root right to recursive function call with root right and value.
      - Else:
        - if ! root left, return root right.
        - If ! root right, return root left.
        - initialize successor variable.
        - root = root.right.
        - While root and right.left:
          - root equals root.left.
          - root.right = recursively delete root right and root value
      - return root.
    - find(node, value):
      - if !node, return error saying the value isn't in the BST.
      - if node value === value param, return node.
      - if value < node, recursively call find() with node.left and value.
      - Else, recursively call find() with node.right and value.
    - levelOrderForEach(callback):
      - pass callback param. (I don't need to pass root because this method is inside of a tree class, where root is a stored key on the constructor)
      - Check to make sure typeof callback is function, and return error, if not.
      - initalize an array (queue)
      - push the root node to the array.
      - run a while loop that goes until the array (queue) is empty.
      - invoke callback function that console logs the first array node value
      - Add first array item right and left to the queue (if there are any).
      - call array shift
    - preOrderForEach(callback, node):
      - pass callback param and node, since need the node reference for recursive call.
      - Check to make sure typeof callback is function and return error, if not.
      - if !node, then return.
      - Invoke callback that console logs the node.value param.
      - Recursively call preOrderForEach with node.left.
      - Recursively call preOrderForEach with node.right.
    - inOrderForEach(callback, node):
      - pass callback param and node, since need the node reference for recursive call.
      - Check to make sure typeof callback is function and return error, if not.
      - if !node, then return.
      - Recursively call inOrderForEach with node.left.
      - Invoke callback that console logs the node.value param.
      - Recursively call inOrderForEach with node.right.
    - postOrderForEach(callback, node):
      - pass callback param and node, since need the node reference for recursive call.
      - Check to make sure typeof callback is function and return error, if not.
      - if !node, then return.
      - Recursively call postOrderForEach with node.left.
      - Recursively call postOrderForEach with node.right.
      - Invoke callback that console logs the node.value param.
    - height(value):
      - It returns the height of the node containing the given value. Height is defined as the number of edges in the longest path from that node to a leaf node. If the value is not found in the tree, the function should return null.
      - Takes value param.
      - sets node variable = find method invocation. It will works as follows:
        - find(node, value). Node param is tree root and value param is value from height method.
        - if !node, return error saying the value isn't in the BST.
        - if node value === value param, return node.
        - if value < node, recursively call find() with node.left and value.
        - Else, recursively call find() with node.right and value.
      - defines new function getNodeHeight(node):
        - pass node param, which is starter node for calculating height.
        - if !node, then return 0.
        - let height = 1.
        - let leftHeight = recursive getNodeHeight(node.left).
        - let rightHeight = recursive getNodeHeight(node.right).
        - If leftHight < rightHeight, then return height += rightHeight.
        - Else. return height += leftHeight.
    - depth(node, value):
      - Write a depth(value) function that returns the depth of the node containing the given value. Depth is defined as the number of edges in the path from that node to the root node. If the value is not found in the tree, the function should return null.
      - Takes node and value param.
      - if !node, then return error saying value isn't in the BST.
      - else if node.value === value, then return 0.
      - else:
        - let height = 1.
        - if value param < node, then return height += recursive depth(node.left, value).
        - else, return height += recursive depth(node.right,value).
    - isBalanced(node):
      - A binary tree is considered balanced if, for every node in the tree, the height difference between its left and right subtrees is no more than 1, and both the left and right subtrees are also balanced.
      - pass node param.
      - if !node, return {height: 0, isBalanced: undefined}.
      - let leftHeight = 1.
      - let rightHeight = 1.
      - leftHeight += isBalanced(node.left).height.
      - rightHeight += isBalanced(node.right).height.
      - if (leftHeight > rightHeight)
        - if (-1 <= (leftHeight - rightHeight) <=1), then return {height: leftHeight, isBalanced: true}
        - Else, return {height: leftHeight, isBalanced: false}.
      - else:
        - if (-1 <= (leftHeight - rightHeight) <=1), then return {height: rightHeight, isBalanced: true}
        - Else, return {height: rightHeight, isBalanced: false}.
    - rebalance():
      - set sortedArray = invocation of inOrderForEach(callback, node), with the callback adding each node value to an array. It will take tree root as the parameter.
      - return buildTree(sortedArray), which uses the classes existing build tree method to create a balanced BST with the new sorted array.
- Write the driver script in index.js.
  - Write simple function to generate array of random numbers < 100 using math.random function. Maybe say 20 numbers.
  - Create new class instance using an array the function.
  - Invoke isBalanced to confirm the tree is balanced.
  - Print all elements in level, pre, post and in order traversal to confirm works as expected.
  - Unbalance the tree by adding several numbers greater than 100.
  - Confirm tree is now unbalanced using isBalanced method.
  - Balance the tree using rebalance.
  - Confirm tree is now balanced using isBalanced.
  - Print out all elements in level, pre, post, and in order.
