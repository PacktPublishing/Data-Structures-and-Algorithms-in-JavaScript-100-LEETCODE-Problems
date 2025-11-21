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
 * @param {number} k
 * @return {number}
 */
let count = 0, ans = -1;
var kthSmallest = function(root, k) {
  count = 0;
  ans = -1;
  inorder(root, k);

  return ans;
};

function inorder(node, k) {
  if (node.left !== null) {
    inorder(node.left, k);
  }
  count++;
  if (k === count) {
    ans = node.val;
    return;
  }
  if (node.right != null) {
    inorder(node.right, k);
  }
}
