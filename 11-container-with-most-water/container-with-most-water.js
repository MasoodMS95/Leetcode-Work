/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0; let right = height.length-1;
    let maxWater = 0;
    while(left < right){
        let minHeight = Math.min(height[left], height[right]);
        let length = right-left;
        let currAmountOfWater = minHeight * length;
        maxWater = currAmountOfWater > maxWater ? currAmountOfWater : maxWater;
        if(height[right] < height[left]){
            right--;
        }
        else{left++;}
    }
    return maxWater;
};