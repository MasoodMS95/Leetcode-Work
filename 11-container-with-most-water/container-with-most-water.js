/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0; right = height.length-1, best = -1;
    while(left < right){
        let length = right - left;
        let currHeight = Math.min(height[left], height[right]);
        let area = length * currHeight;
        best = best > area ? best : area;
        if(height[left] > height[right]){right--;}
        else{left++}
    }
    return best;
};