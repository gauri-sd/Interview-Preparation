function isSubtree(root, subRoot) {
    // Helper function to check if two trees are identical
    function areIdentical(tree1, tree2) {
        // If both trees are null, they are identical
        if (tree1 === null && tree2 === null) {
            return true;
        }
        // If one of them is null, they are not identical
        if (tree1 === null || tree2 === null) {
            return false;
        }
        // Check if the current nodes are identical and recursively check left and right subtrees
        return (tree1.val === tree2.val) &&
               areIdentical(tree1.left, tree2.left) &&
               areIdentical(tree1.right, tree2.right);
    }

    // Base case: if subRoot is null, it's a subtree of any tree
    if (subRoot === null) {
        return true;
    }

    // If root is null, and subRoot is not, then subRoot can't be a subtree
    if (root === null) {
        return false;
    }

    // Check if the current tree rooted at 'root' is identical to subRoot
    if (areIdentical(root, subRoot)) {
        return true;
    }

    // Otherwise, check recursively in the left and right subtrees
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

// Example usage:
// Define the tree nodes
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Construct the trees:
// root: [3,4,5,1,2]
let root = new TreeNode(3);
root.left = new TreeNode(4, new TreeNode(1), new TreeNode(2));
root.right = new TreeNode(5);

// subRoot: [4,1,2]
let subRoot = new TreeNode(4, new TreeNode(1), new TreeNode(2));

// Check if subRoot is a subtree of root
console.log(isSubtree(root, subRoot));  // Output: true
