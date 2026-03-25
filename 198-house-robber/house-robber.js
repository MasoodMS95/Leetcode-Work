/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1){
        return nums[0];
    }
    if(nums.length === 2){
        return Math.max(nums[0], nums[1]);
    }
    let prev = nums[0];
    let lastBest = Math.max(nums[0], nums[1]);
    for(let x = 2; x < nums.length; x++){
        let prevBest = lastBest;
        lastBest = Math.max(lastBest, prev + nums[x]);
        prev = prevBest;
    }
    return lastBest;
};