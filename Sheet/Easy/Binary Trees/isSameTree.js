class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function isSameTree(tree1, tree2) {
    if(tree1 === null && tree2 === null) {
        return true;
    }
    
    if(tree1 === null || tree2 === null) {
        return false;
    }
    
    return (tree1.data === tree2.data) &&
        isSameTree(tree1.left, tree2.left) && 
        isSameTree(tree1.right, tree2.right);
}

// p: [1, 2, 3]
let p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);

// q: [1, 2, 3]
let q = new TreeNode(1);
q.left = new TreeNode(2);
q.right = new TreeNode(3);

console.log(isSameTree(p, q));