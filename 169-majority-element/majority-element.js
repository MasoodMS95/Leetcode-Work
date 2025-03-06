/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let currCount = 1;
    let bestCount = 0;
    let bestNum = -1;
    let currNum = nums[0];
    nums.sort((a,b)=>a-b);
    for(let num = 0; num < nums.length; num++){
        if(nums[num] !== currNum || num === (nums.length -1)){
            if(num === nums.length -1){
                currCount++;
            }
            if(currCount > bestCount){
                bestCount = currCount;
                bestNum = currNum;
            }
            else if(currCount === bestCount){
                bestNum = currNum < bestNum ? bestNum:currNum
            }
            currNum = nums[num];
            currCount = 1;
        }
        else{
            currCount++;
        }
    }
    return bestNum
};