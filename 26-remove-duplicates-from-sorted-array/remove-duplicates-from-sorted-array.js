/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    if(nums.length === 1){
        return 1;
    }
    for(let j = 1; j < nums.length; j++){
        if(nums[i] !== nums[j]){
            i++;
            nums[i] = nums[j];
        }
    }
    return i+1
};