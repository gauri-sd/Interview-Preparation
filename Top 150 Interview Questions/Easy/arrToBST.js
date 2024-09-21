// Convert Sorted Array to Binary Search Tree
    // Input: nums = [-10,-3,0,5,9]
    // Output: [0,-3,9,-10,null,5]
    // Explanation: [0,-10,5,null,-3,null,9] is also accepted:

    // ### Steps:
    // 1. Find the middle element of the array.
    // 2. Create a node with that middle element as the root.
    // 3. Recursively do the same for the left and right halves of the array.
    
class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data,
        this.left = left,
        this.right = right
    }
}

function sortedArrayToBST(arr) {
    function buildBST(left, right) {
        if(left > right) {
            return null;
        }
        
        let mid = Math.floor((left + right) / 2);
        
        let node = new TreeNode(arr[mid]);
        
        node.left = buildBST(left, mid - 1);
        node.right = buildBST(mid + 1, right);
        
        return node;
    }
    return buildBST(0, arr.length - 1);
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));