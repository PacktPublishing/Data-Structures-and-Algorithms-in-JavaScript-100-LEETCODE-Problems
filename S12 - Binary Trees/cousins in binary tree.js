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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
let firstParent = null;
let firstLevel = -1;
let secondParent = null;
let secondLevel = -1;

var isCousins = function(root, x, y) {
    preOrder(root, x, y, null, 1);
    return (firstParent !== secondParent && firstLevel === secondLevel);
};

function preOrder(node, x, y, parent, level) {
    if (node !== null) {
        if (node.val === x) {
            firstParent = parent;
            firstLevel = level;
        }
        if (node.val === y) {
            secondParent = parent;
            secondLevel = level;
        }
        if (node.left !== null) {
            preOrder(node.left, x, y, node, level + 1);
        }
        if (node.right !== null) {
            preOrder(node.right, x, y, node, level + 1);
        }
    }
    
}
