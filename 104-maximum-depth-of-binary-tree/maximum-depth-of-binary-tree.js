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
var maxDepth = function(root) {
    if(!root){
        return 0;
    }
    let level = 1;
    let lChildDepth = 1, rChildDepth = 1;
    if(root.left){
        lChildDepth = level + maxDepth(root.left);
    }
    if(root.right){
        rChildDepth = level + maxDepth(root.right);
    }
    return Math.max(lChildDepth, rChildDepth)
};