/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let [left, right] = [0, nums.length-1];
    if(nums.length === 1){
        if(nums[0] === target){
            return 0;
        }
        else{
            return -1;
        }
    }
    while(left <= right){
        let mid = Math.floor((left+right) / 2);
        if(nums[mid] === target){
            return mid;
        }
        if(target < nums[mid]){
            right = mid-1;
        }
        else{
            left = mid+1;
        }
    }
    return -1;
};