class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }    
}

function mirrorTree(root) {
    if(root === null) {
        return null;
    }
    
    let left = mirrorTree(root.left);
    let right = mirrorTree(root.right);
    
    root.left = right;
    root.right = left;
    
    return root;
}

// root: [1, 2, 3, 4, 5, null, 6]
let root = new TreeNode(1);
root.left = new TreeNode(2, new TreeNode(4), new TreeNode(5));
root.right = new TreeNode(3, null, new TreeNode(6));

// Create the mirror of the tree
let mirroredRoot = mirrorTree(root);
// Print the mirrored tree
console.log(mirroredRoot);  // Output: 1 3 2 6 5 4