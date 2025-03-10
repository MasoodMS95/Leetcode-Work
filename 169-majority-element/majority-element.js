/**
 * @param {number[]} nums
 * @return {number}
 */


var majorityElement = function(nums) {
    nums.sort((a,b)=>a-b);
    if(nums.length < 3){return nums[nums.length - 1]}
    let mid = parseInt((nums.length/2), 10)
    return nums[mid]
};