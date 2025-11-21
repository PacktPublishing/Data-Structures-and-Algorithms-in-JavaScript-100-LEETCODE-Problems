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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let ans = [];
  let queue = new Queue();
  if (root === null) {
    return ans;
  }
  queue.enqueue({ node: root, level: 1 });

  while (queue.size() > 0) {
    let { node, level } = queue.front();
    queue.dequeue();

    if (ans.length < level) {
      ans.push([]);
    }
    ans[ans.length - 1].push(node.val);
    if (node.left !== null) {
      queue.enqueue({ node: node.left, level: level + 1 });
    }
    if (node.right !== null) {
      queue.enqueue({ node: node.right, level: level + 1 });
    }
  }

  return ans;
};
