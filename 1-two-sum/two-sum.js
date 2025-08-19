/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let lookup = {};
    for(x in nums){
        lookup[nums[x]] = x
    }

    for(x = 0; x < nums.length; x++){
        if(lookup[target - nums[x]] && x !== parseInt(lookup[target - nums[x]])){
            return [x, parseInt(lookup[target-nums[x]])]
        }
    }
};