class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }    
}

function invertBinaryTree(root) {
    if(root === null) {
        return null;
    }
    
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    invertBinaryTree(root.left);
    invertBinaryTree(root.right);
    
    return root;
}

// Construct the tree:
// root: [4, 2, 7, 1, 3, 6, 9]
let root = new TreeNode(4);
root.left = new TreeNode(2, new TreeNode(1), new TreeNode(3));
root.right = new TreeNode(7, new TreeNode(6), new TreeNode(9));

console.log(invertBinaryTree(root));