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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root){
        return root;
    }
    let lChild = root.left;
    let rChild = root.right;
    root.left = rChild;
    root.right = lChild;
    invertTree(rChild);
    invertTree(lChild);
    return root;
}