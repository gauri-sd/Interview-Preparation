function maxDepth(root) {
    if(root === null) {
        return 0;
    }
    
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    
    return Math.max(leftDepth, rightDepth) + 1
}

class TreeNode {
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

// Construct the tree: [3, 9, 20, null, null, 15, 7]
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));

console.log(maxDepth(root));