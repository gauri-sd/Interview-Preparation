// Minimum element in BST - Done
//     input: [20, 8, 22, 4, 12]
//     output: 4

// Approach:
// Start at the root of the tree.
// Move to the left child repeatedly until you reach a node that does not have a left child.
// The node where you stop is the node with the minimum value.

class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function findMin(node) {
    if(node === null) {
        return null;
    }
    
    let current = node;
    while(current.left !== null) {
        current = current.left;
    }
    return current.data;
}

const root = new TreeNode(20);
root.left = new TreeNode(8, new TreeNode(4), new TreeNode(12));
root.right = new TreeNode(22);

const minValue = findMin(root);
console.log("The minimum value in the BST is:", minValue);