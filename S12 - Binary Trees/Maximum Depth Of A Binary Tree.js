/**
 * Definition for a binary tree node.\
 * function TreeNode(val, left, right) \{\
 *     this.val = (val===undefined ? 0 : val)\
 *     this.left = (left===undefined ? null : left)\
 *     this.right = (right===undefined ? null : right)\
 * }
 */
/**
 * @param \{TreeNode\} root\
 * @return \{number\}\
 */
var maxDepth = function(root) {
    return f(root);
};

function f(node) {
    if (node === null) {
        return  0;
    }
    else {
        return Math.max(f(node.left), f(node.right)) + 1;
    }
}
