//Given a binary tree, imagine yourself standing on the right side of it, 
//return the values of the nodes you can see ordered from top to bottom.
/* Example:
Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
*/

var rightSideView = function(root) {
    var stack = [];

    if(!root) return root;
    function helper() {
        while(root) {
            stack.push(root.right.val);
        }
    }
    return stack;
}

var rightSideView2 = function(root) {
    let res = [];
    function helper(root, level) {
        if(!root) return;
        if(!res[level]) res.push(root.val);
        helper(root.right, level + 1);
        helper(root.left, level + 1);
    }
    helper(root, 0);
    return res;
}