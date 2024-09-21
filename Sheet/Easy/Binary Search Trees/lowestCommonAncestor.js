// Approach:
// Start at the root of the BST.
// If both nodes p and q are smaller than the root, then the LCA lies in the left subtree. Move to the left child.
// If both nodes p and q are greater than the root, then the LCA lies in the right subtree. Move to the right child.
// If one node is smaller and the other is larger (or one of them equals the root), the root is the LCA.

class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function lowestCommonAncestor(root, p, q) {
    while (root !== null) {
        if (p < root.data && q < root.data) {
            // Both nodes are in the left subtree
            root = root.left;
        } else if (p > root.data && q > root.data) {
            // Both nodes are in the right subtree
            root = root.right;
        } else {
            // We have found the split point, i.e. the LCA
            return root;
        }
    }
    return null;
}

// root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
const root = new TreeNode(6);
root.left = new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5)));
root.right = new TreeNode(8, new TreeNode(7), new TreeNode(9));

let p = 2;
let q = 8;

const lca = lowestCommonAncestor(root, p, q);
console.log("Lowest Common Ancestor:", lca ? lca.data : "None");