function isIsomorphic(root1, root2) {
    // Base case: both trees are empty
    if (root1 === null && root2 === null) {
        return true;
    }

    // Base case: one tree is empty and the other is not
    if (root1 === null || root2 === null) {
        return false;
    }

    // If the values of the current nodes are not the same
    if (root1.val !== root2.val) {
        return false;
    }

    // Check if the subtrees are isomorphic without swapping or with swapping
    return (isIsomorphic(root1.left, root2.left) && isIsomorphic(root1.right, root2.right)) ||
           (isIsomorphic(root1.left, root2.right) && isIsomorphic(root1.right, root2.left));
}

// Define the tree nodes
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// root1: [1, 2, 3, 4, 5, 6, 7]
let root1 = new TreeNode(1);
root1.left = new TreeNode(2, new TreeNode(4), new TreeNode(5));
root1.right = new TreeNode(3, new TreeNode(6), new TreeNode(7));

// root2: [1, 3, 2, 7, 6, 5, 4]
let root2 = new TreeNode(1);
root2.left = new TreeNode(3, new TreeNode(7), new TreeNode(6));
root2.right = new TreeNode(2, new TreeNode(5), new TreeNode(4));

// Check if the trees are isomorphic
console.log(isIsomorphic(root1, root2));  // Output: true
