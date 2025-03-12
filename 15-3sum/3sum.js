/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let set = new Set();
    let foundSums = [];
    for(let x = 1; x < nums.length - 1; x++){
        let left = x-1;
        let right = x+1;
        while(left >= 0 && right < nums.length){
            let sum = nums[left] + nums[x] + nums[right];
            if(sum === 0){
                let key = [nums[left], nums[x], nums[right]].toString();
                if(set.has(key)){
                    left--;
                    right++;
                }
                else{
                    set.add(key)
                    foundSums.push([nums[left], nums[x], nums[right]])
                }
            }
            else if(sum < 0){
                right++;
            }
            else{
                left--;
            }
        }
    }
    return foundSums;
};