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
var isValidBST = function(root) {
    return isValid(root, null, null);
};

function isValid(node, lower, upper) {
    if (node == null) {
        return true;
    }
    
    if ((lower != null && node.val <= lower) || (upper != null && node.val >= upper)) {
        return false;
    }
    
    return isValid(node.left, lower, node.val) && isValid(node.right, node.val, upper);
    
}
