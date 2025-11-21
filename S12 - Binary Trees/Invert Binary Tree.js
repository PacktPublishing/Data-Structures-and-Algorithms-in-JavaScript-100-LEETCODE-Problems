/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    return invert(root);
};

function invert(node) {
    if (node !== null) {
        let left = invert(node.left);
        let right = invert(node.right);
        node.left = right;
        node.right = left;
    }
    return node;
}