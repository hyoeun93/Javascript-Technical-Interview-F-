//find LCA of n1 and n2. The function assumes that both n1 and n2 are present in BST

function binaryST(n1, n2, root) {
    while (root !== null) {
        if (root > n1 && root > n2) {
            root = root.left
        }
        else if (root < n1 && root < n2) {
            root = root.right;
        }
        else break;
    }
    return root;
}