/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 2, j = 2;
    if(nums.length===2) return nums.length;
    while(j < nums.length){
        if(nums[i-2] !== nums[j]){
            nums[i] = nums[j];
            i++;
        }
        j++;
    }
    return i;
};