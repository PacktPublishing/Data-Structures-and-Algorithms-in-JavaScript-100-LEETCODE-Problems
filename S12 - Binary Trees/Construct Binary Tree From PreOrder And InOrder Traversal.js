/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let preorderIndex = 0;
    const inorderMap = new Map();

    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }

    return constructBinaryTree(preorder, inorder, 0, inorder.length - 1);

    function constructBinaryTree(preorder, inorder, inorderStart, inorderEnd) {
        if (inorderStart > inorderEnd) {
            return null;
        }

        const rootValue = preorder[preorderIndex];
        const root = new TreeNode(rootValue);

        const rootIndex = inorderMap.get(rootValue);

        preorderIndex++;

        root.left = constructBinaryTree(preorder, inorder, inorderStart, rootIndex - 1);
        root.right = constructBinaryTree(preorder, inorder, rootIndex + 1, inorderEnd);

        return root;
    }
};
