function leftViewUtil(node, level, maxLevel, result) {
    if (node === null) {
        return;
    }

    // If this is the first node of its level
    if (maxLevel[0] < level) {
        result.push(node.val);
        maxLevel[0] = level;
    }

    // Recur for the left subtree first, then the right subtree
    leftViewUtil(node.left, level + 1, maxLevel, result);
    leftViewUtil(node.right, level + 1, maxLevel, result);
}

function leftView(root) {
    let result = [];
    leftViewUtil(root, 1, [0], result);
    return result;
}

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Construct the tree:
// root: [1, 2, 3, 4, 5, null, 6, null, null, null, 7]
let root = new TreeNode(1);
root.left = new TreeNode(2, new TreeNode(4), new TreeNode(5, null, new TreeNode(7)));
root.right = new TreeNode(3, null, new TreeNode(6));

console.log(leftView(root));  // Output: [1, 2, 4, 7]