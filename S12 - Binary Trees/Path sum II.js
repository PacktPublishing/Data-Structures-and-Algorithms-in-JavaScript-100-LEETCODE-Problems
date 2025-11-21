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
 * @param {number} targetSum
 * @return {number[][]}
 */
let answer = [];
var pathSum = function(root, targetSum) {
    answer = [];
    preOrder(root, 0, [], targetSum);
    return answer;
};

function preOrder(node, sumTillParent, pathTillParent, targetSum) {
    if (node !== null) {
        let sumTillMe = sumTillParent + node.val;
        pathTillParent.push(node.val);
        
        if (node.left !== null) {
            preOrder(node.left, sumTillMe, pathTillParent, targetSum);
        }
        if (node.right !== null) {
            preOrder(node.right, sumTillMe, pathTillParent, targetSum);
        }
        
        if (sumTillMe === targetSum && node.left === null && node.right === null) {
            let currentPath = [];
            for(let i = 0; i < pathTillParent.length; i++) {
                currentPath.push(pathTillParent[i]);
            }
            answer.push(currentPath);
        }
        pathTillParent.pop();
    }
}

