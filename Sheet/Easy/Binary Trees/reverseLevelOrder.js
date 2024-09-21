class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function reversal(root) {
    if(root === null) {
        return [];
    }
    
    let queue = [root];
    let result = [];
    
    while(queue.length > 0) {
        currentLevel = [];
        level = queue.length;
        
        for(let i = 0; i < level; i++) {
            let node = queue.shift();
            currentLevel.push(node.data);
            
            if(node.left !== null) {
                queue.push(node.left);
            }
            if(node.right !== null) {
                queue.push(node.right);
            }
        }
        result.unshift(...currentLevel);
    }
    return result;
}

// Construct the tree: [1, 2, 3, 4, 5, 6, 7]
let root = new TreeNode(1);
root.left = new TreeNode(2, new TreeNode(4), new TreeNode(5));
root.right = new TreeNode(3, new TreeNode(6), new TreeNode(7));

console.log(reversal(root));