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
var diameterOfBinaryTree = function(root) {
  let { first, second } = f(root);
  return first;
};

function f(node) {
  if (node === null) {
    return { first: 0, second: 0 };
  }
  else {
    let left = f(node.left);
    let right = f(node.right);

    let height = Math.max(left.second, right.second) + 1;
    let diameter = Math.max(Math.max(left.first, right.first), left.second + right.second);
    return { first: diameter, second: height };
  }
}
