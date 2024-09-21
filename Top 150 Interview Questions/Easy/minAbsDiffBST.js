// Minimum Absolute Difference in BST
    // Input: root = [4,2,6,1,3]
    // Output: 1

class TreeNode{
    constructor(data, left = null, right = null) {
       this.data = data,
        this.left = left,
        this.right = right
    }    
}
    
function getMinimumDifference(node) {
    let minDiff = Infinity;
    let prev = null;
    
    function inOrderTraversal(node) {
        if(!node) {
            return;
        }
        
        inOrderTraversal(node.left);
        
        if(prev !== null) {
            minDiff = Math.min(minDiff, node.data - prev);
        }
        prev = node.data;
        
        inOrderTraversal(node.right);
    }
    
    inOrderTraversal(node);
    return minDiff;
}

let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

console.log(getMinimumDifference(root));