/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(nums.length === 2){
        return nums[0] + nums[1] === target ? [0,1] : [];
    }
    sortedNums = nums.toSorted((a,b)=>a-b)
    let left = 0; right = nums.length-1;
    while(left < right){
        currValue = sortedNums[left] + sortedNums[right]; 
        if(currValue === target){
            if(sortedNums[left] === sortedNums[right]){return [nums.indexOf(sortedNums[left]), nums.indexOf(sortedNums[right], nums.indexOf(sortedNums[right])+1)];}
            return [nums.indexOf(sortedNums[left]), nums.indexOf(sortedNums[right])];
        }
        else if (currValue < target){left++;}
        else{right--;}
    }
};