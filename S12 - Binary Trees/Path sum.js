/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

let answer = false;
var hasPathSum = function(root, targetSum) {
    answer = false;
    preOrder(root, 0, targetSum);
    return answer;
};


function preOrder(node, sumTillParent, targetSum) {
    if (node !== null) {
        let sumTillMe = sumTillParent + node.val;
        
        if (node.left !== null) {
            preOrder(node.left, sumTillMe, targetSum);
        }
        if (node.right !== null) {
            preOrder(node.right, sumTillMe, targetSum);
        }
        
        if (sumTillMe === targetSum && node.left === null && node.right === null) {
            answer = true;
        }
    }
}

