/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let maxStorage = 0;
    while(left < right){
        let currArea = (right-left) * Math.min(height[left], height[right]);
        if(maxStorage < currArea){
            maxStorage = currArea;
        }
        if(height[left] < height[right]){
            left++;
        }
        else{
            right--;
        }
    }
    return maxStorage;
};