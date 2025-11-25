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
        - While root and right.left: - root equals root.left.
          root.right = recursively delete root right and root value
      - return root.
