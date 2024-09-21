
// Approach
// Reverse In-order Traversal:
// Traverse the tree in reverse in-order (right subtree -> root -> left subtree).
// Keep track of how many nodes you’ve visited using a counter.
// When the counter reaches k, the current node is the Kth largest element.

class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function kthLargest(root, k) {
    let count = 0;
    let result = null;
    
    function reverseInOrder(node) {
        if(node === null || count >= k) {
            return;
        }
        
        reverseInOrder(node.right);
        
        count++;
        if(count === k) {
            result = node.data;
            return;
        }
        
        reverseInOrder(node.left);
    }
    
    reverseInOrder(root);
    return result;
}

const root = new TreeNode(5);
root.left = new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4));
root.right = new TreeNode(6);

const k = 3;
console.log(kthLargest(root, k)); // Output: 4