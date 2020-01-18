//Implement an iterator over a BST. Your iterator will be initialized with the root node of a BST
//Calling next() will return the next smallest number in the BST
var BSTIterator = function(root) {
    var stack = [];
    return {hasNext, next};

    function hasNext() {
        return root || stack.length;
    }

    function next() {
        while(root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        var result = root.val;
        root = root.right;
        return result;
    }
};