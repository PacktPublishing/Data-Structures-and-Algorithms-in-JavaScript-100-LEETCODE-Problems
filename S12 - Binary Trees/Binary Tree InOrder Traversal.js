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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let ans = [];
    inorder(root, ans);
    return ans;
};

function inorder(node, ans) {
    if (node !== null) {
        inorder(node.left, ans);
        ans.push(node.val);
        inorder(node.right, ans);
    }
}