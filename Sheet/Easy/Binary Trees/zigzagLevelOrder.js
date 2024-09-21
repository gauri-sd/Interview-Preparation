class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function zigzagLevelOrder(root) {
    if(root === null) {
        return [];
    }
    
    let result = [];
    let leftToRight = true;
    let queue = [root];
    
    while(queue.length > 0) {
        let level = queue.length;
        let currentLevel = [];
        
        for(let i = 0; i < level; i++) {
            let node = queue.shift();
            
            if(leftToRight) {
                currentLevel.push(node.data);
            } else {
                currentLevel.unshift(node.data);
            }
            
            if(node.left !== null) {
                queue.push(node.left);
            }
            
            if(node.right !== null) {
                queue.push(node.right)
            }
        }
        leftToRight = !leftToRight;
        result.push(currentLevel);
    }
    return result;
}

// root: [1, 2, 3, 4, 5, null, 6]
let root = new TreeNode(1);
root.left = new TreeNode(2, new TreeNode(4), new TreeNode(5));
root.right = new TreeNode(3, null, new TreeNode(6));

console.log(zigzagLevelOrder(root));  // Output: [[1], [3, 2], [4, 5, 6]]