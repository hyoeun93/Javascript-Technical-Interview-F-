var diameterOfBinaryTree = function(root) {
    let sum = 0;

    let longestPath = function(root) {
        if(!root) return 0;
        let left = longestPath(root.left);
        let right = longestPath(root.right);
        sum = Math.max(sum, left + right);
        return Math.max(left + 1, right + 1);
    }

    longestPath(root);
    return sum;
}