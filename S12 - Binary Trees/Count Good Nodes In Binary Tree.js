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
 * @return {number}
 */
let count = 0;

var goodNodes = function(root) {
    count = 0;
    traverse(root, null);
    return count;
};

function traverse(node, maxTillParent) {
    if (node !== null) {
        if (maxTillParent === null || node.val >= maxTillParent) {
            count++;
        }
        let maxTillMe = maxTillParent !== null ? Math.max(maxTillParent, node.val): node.val
        traverse(node.left, maxTillMe);
        traverse(node.right, maxTillMe);
    }
}
