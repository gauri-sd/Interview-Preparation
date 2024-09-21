function toSumTree(node) {
    // Helper function that transforms the tree and returns the sum of all nodes in the original tree
    function transform(node) {
        // Base case: if the node is null, return 0
        if (node === null) {
            return 0;
        }

        // Recursively transform the left and right subtrees
        const leftSum = transform(node.left);
        const rightSum = transform(node.right);

        // Store the current node's value
        const oldValue = node.val;

        // Update the current node's value to the sum of the values of the left and right subtrees
        node.val = leftSum + rightSum;

        // Return the sum of the current node's original value and the sum of the left and right subtrees
        return oldValue + node.val;
    }

    // Initiate the transformation
    transform(node);
}

// Define the tree nodes
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Construct the tree:
// root: [10, -2, 6, 8, -4, 7, 5]
let root = new TreeNode(10);
root.left = new TreeNode(-2, new TreeNode(8), new TreeNode(-4));
root.right = new TreeNode(6, new TreeNode(7), new TreeNode(5));

// Transform to sum tree
toSumTree(root);

// The tree is now transformed to:
console.log(root.val);            // 20
console.log(root.left.val);       // 4
console.log(root.right.val);      // 12
console.log(root.left.left.val);  // 0
console.log(root.left.right.val); // 0
console.log(root.right.left.val); // 0
console.log(root.right.right.val); // 0
