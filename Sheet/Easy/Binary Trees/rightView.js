class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function rightSideView(node, level, maxLevel, result) {
    if(node === null) {
        return;
    }
    
    if(maxLevel[0] < level) {
        result.push(node.data);
        maxLevel[0] = level;
    }
    
   rightSideView(node.right, level + 1, maxLevel, result);
   rightSideView(node.left, level + 1, maxLevel, result);
}

function rightView(root) {
    let result = [];
    rightSideView(root, 1, [0], result);
    return result;
}

// root: [1, 2, 3, 4, 5, null, 6, null, null, null, 7]
let root = new TreeNode(1);
root.left = new TreeNode(2, new TreeNode(4), new TreeNode(5, null, new TreeNode(7)));
root.right = new TreeNode(3, null, new TreeNode(6));

console.log(rightView(root)); // Output: [1, 3, 6, 7]