/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let foundSums = [];
    for(let x = 0; x < nums.length-2; x++){
        if (x > 0 && nums[x] === nums[x - 1]) continue;
        let left = x+1;
        let right = nums.length-1;
        while(left < right){
            let sum = nums[left] + nums[x] + nums[right];
            if(sum === 0){
                foundSums.push([nums[x], nums[left], nums[right]])
                while(left < right && nums[left] === nums[left+1]){left++;}
                while(left < right && nums[right] === nums[right-1]){right--;}
                left++;
                right--;
            }
            else if(sum < 0){
                left++;
            }
            else{
                right--;
            }
        }
    }
    return foundSums;
};