// Binary Tree to BST
//     input:  [10, 30, 15, 20, null, null, 5]
//     output: [5, 10, 15, 20, 30]

class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

// Function to store in-order traversal of the tree in a list
function storeInorder(node, inorderList) {
    if (!node) return;
    storeInorder(node.left, inorderList);
    inorderList.push(node.data);
    storeInorder(node.right, inorderList);
}

// Function to replace node values with sorted list in in-order manner
function arrayToBST(node, sortedValues, index) {
    if (!node) return index;

    // Recursively update left subtree
    index = arrayToBST(node.left, sortedValues, index);

    // Update current node value
    node.data = sortedValues[index];
    index++;

    // Recursively update right subtree
    index = arrayToBST(node.right, sortedValues, index);

    return index;
}

// Function to convert binary tree to BST
function binaryTreeToBST(root) {
    if (!root) return null;

    // Step 1: Store in-order traversal of the binary tree in a list
    let inorderList = [];
    storeInorder(root, inorderList);

    // Step 2: Sort the list
    inorderList.sort((a, b) => a - b);

    // Step 3: Convert the binary tree to BST using the sorted list
    arrayToBST(root, inorderList, 0);

    return root;
}

const root = new TreeNode(10);
root.left = new TreeNode(30, new TreeNode(20));
root.right = new TreeNode(15, null, new TreeNode(5));

storeInorder(root, []);
binaryTreeToBST(root);

console.log("Converted BST In-order:");
let inorderList = [];
storeInorder(root, inorderList);
console.log(inorderList); // Output: [5, 10, 15, 20, 30]