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
    if(!root) return [];
    let queue = [root];
    let order = [];
    while(queue.length){
        let level = [];
        let currLevelSize = queue.length;
        for(let x = 0; x < currLevelSize; x++){
            let currNode = queue.shift();
            level.push(currNode.val);
            if(currNode.left){queue.push(currNode.left);}
            if(currNode.right){queue.push(currNode.right);}
        }
        order.push(level);
    }
    return order;
};