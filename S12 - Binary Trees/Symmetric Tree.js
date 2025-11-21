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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return f(root.left, root.right);
};

function f(n1, n2) {
    if (n1 === null && n2 === null) return true;
    if (n1 !== null && n2 !== null) {
        return n1.val === n2.val && f(n1.left, n2.right) && f(n1.right, n2.left);
    }
    return false;
}