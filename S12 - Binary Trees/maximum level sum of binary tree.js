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
var maxLevelSum = function(root) {
    queue = new Queue();
    queue.enqueue({ level: 1, node: root });
    
    map = new Map();
    while (queue.size() > 0) {
        let { level, node } = queue.front();
        queue.dequeue();
        if (!map.has(level)) {
            map.set(level, node.val);
        }
        else {
            map.set(level, map.get(level) + node.val);
        }
        if (node.left !== null) {
            queue.enqueue({ 'level': level + 1, node: node.left });
        }
        if (node.right !== null) {
            queue.enqueue({ 'level': level + 1, node: node.right })
        }
    }
    
    let ans = 1;
    map.forEach((val, key) => {
        if (val > map.get(ans)) {
            ans = key;
        }
    });
    
    return ans;
    
};