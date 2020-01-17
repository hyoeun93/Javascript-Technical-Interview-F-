/*Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees. */

var isValidBST = function(root) {
    if(!root) {
        return true; //sanity check for passing test case'[]'
    }
    function helper(root, min, max) {
        if(!root) {
            return true; //we hit the end of the path
        }
        if((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
            return false;
        }
        //contiue to scan left and right
        return helper(root.left, min, root.val) && helper(root.right, root.val, max);
    }
    return helper(root, null, null);
}