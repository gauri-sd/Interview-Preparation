// Approach:
// Understand the Range:
// For any node, the potential values of its left children should be between the value of its ancestors (min) and the node itself (node.val - 1).
// For the right children, the potential values should be between the node itself (node.val + 1) and its ancestor (max).

// Detect Dead Ends:
// If a node has no left or right child (i.e., it is a leaf), and the difference between min and node.val is 1 and between node.val and max is also 1, then it is a dead end.

// Recursive Function:
// Traverse the tree while maintaining the min and max boundaries and check the conditions for a dead end.

class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function isDeadEnd(node, min = 1, max = Infinity) {
    if(node === null) {
        return false;
    }
    
    if(min === max) {
        return true;
    }
    
    return isDeadEnd(node.left, min, node.data - 1) || isDeadEnd(node.right, node.data + 1, max);
}

const root = new TreeNode(8);
root.left = new TreeNode(5, new TreeNode(2, new TreeNode(1)), new TreeNode(7));
root.right = new TreeNode(11, new TreeNode(10));

if (isDeadEnd(root)) {
    console.log("The BST contains a dead end.");
} else {
    console.log("The BST does not contain a dead end.");
}