// Approach:
// Start at the root of the tree.
// Compare the target value with the current node's value:
// If the target is equal to the current node's value, the search is successful.
// If the target is less than the current node's value, move to the left child.
// If the target is greater than the current node's value, move to the right child.
// Repeat this process until the target is found or the subtree becomes null (indicating that the target is not present in the tree).

class TreeNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function searchBST(node, target) {
   if(node === null) {
       return null;
   }
   
   if(node.data === target) {
       return node;
   } else if(node.data < target) {
       searchBST(node.left, target);
   } else {
       searchBST(node.right, target);
   }
}

const root = new TreeNode(20);
root.left = new TreeNode(8, new TreeNode(4), new TreeNode(12));
root.right = new TreeNode(22);

const target = 12;
const result = searchBST(root, target);

if (result !== null) {
    console.log(`The target ${target} is found in the BST.`);
} else {
    console.log(`The target ${target} is not found in the BST.`);
}