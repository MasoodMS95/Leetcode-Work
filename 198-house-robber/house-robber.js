/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1){
        return nums[0];
    }

    let prevBest = nums[0];
    let currBest = Math.max(nums[0], nums[1]);

    if(nums.length === 2){
        return currBest;
    }

    for(let x = 2; x < nums.length; x++){
        let lastBest = currBest;
        currBest = Math.max(nums[x] + prevBest, currBest);
        prevBest = lastBest;
    }

    return currBest;
};