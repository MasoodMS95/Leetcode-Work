/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let threeSums = [];
    nums.sort((a, b) => a-b);
    for(let start = 0; start < nums.length-2; start++){
        if(start > 0 && nums[start] === nums[start-1]) continue;
        let left = start+1;
        let right = nums.length - 1;
        while(left < right){
            let currValue = nums[left] + nums[start] + nums[right];
            if(currValue === 0){
                threeSums.push([nums[left], nums[start], nums[right]]);
                while(nums[left] === nums[left+1]) left++;
                while(nums[right] === nums[right-1]) right--;
                left++;
                right--;
            }
            else if(currValue > 0){
                right--;
            }
            else{
                left++;
            }
        }
    }
    return threeSums;
};