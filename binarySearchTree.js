// the node class represents every node in the tree 
// there are 3 data properties (data, left, right)
class Node {
    constructor(date, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;

    }
}

// creates the top of the tree
class BST {
    constructor() {
        this.root = null;
    }
}

// this is a function how we are gonna add to the tree
function add(data) {
    const node = this.root;
    // if it's the first node we are adding...
    if (node === null) {
        this.root = new Node(data);
        return;
    } //if not, we have to find where we want to add the data to the tree using recursive function
    else {
        const searchTree = function(node) {
            if (data < node.data) {
                if (node.left === null) {
                    node.left = new Node(data);
                    return;
                } else if (node.left !== null) {
                    return searchTree(node.left);
                }
            } else if (data > node.data) {
                if (node.right === null) {
                    node.right = new Node(data);
                    return;
                } else if (node.right !== null) {
                    return searchTree(node.right);
                }
            } //if the data is equal...
            else {
                return null;
            }
        };
        return searchTree(node);
    }
}

