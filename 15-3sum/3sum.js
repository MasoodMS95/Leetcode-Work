/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let found = [];
    for(let x = 0; x < nums.length-2; x++){
         if (x > 0 && nums[x] === nums[x - 1]) continue;
        let left = x+1, right = nums.length - 1;
        while(left < right){
            value = nums[x] + nums[left] + nums[right];
            currArr = [nums[x], nums[left], nums[right]]
            if(value === 0){
                while(left < right && nums[left] === nums[left+1]) left++;
                while(left < right && nums[right] === nums[right-1]) right--;
                found.push(currArr)
                left++;
                right--;
            }
            else if (value > 0){right--;}
            else{left++;}
        }
    }
    return found;
};