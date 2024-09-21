class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }    
}

function levelOrder(root) {
    if(root === null) {
        return null;
    }
    
    let queue = [root];
    let result = [];
    
    while(queue.length > 0) {
        let level = queue.length;
        let currentLevel = [];
        
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
        result.push(currentLevel);
    }
    return result;
}

// Construct the tree:
// root: [3, 9, 20, null, null, 15, 7]
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));

console.log(levelOrder(root));