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
let sum = 0;
var sumOfLeftLeaves = function(root) {
    sum = 0;
    preOrder(root, false);
    return sum;
};

function preOrder(node, isLeft) {
    if (node !== null) {
        let isLeaf = true;
        if (node.left !== null) {
            preOrder(node.left, true);
            isLeaf = false;
        }
        if (node.right !== null) {
            preOrder(node.right, false);
            isLeaf = false;
        }
        if (isLeft && isLeaf) {
            sum += node.val;
        }
    }
}