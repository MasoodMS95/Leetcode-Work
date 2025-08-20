/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let ordered = nums.sort((a,b)=>b-a);
    console.log(ordered);
    return ordered[k-1]
};