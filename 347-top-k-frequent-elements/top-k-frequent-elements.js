/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let numCount = {};
    for(let x = 0; x < nums.length; x++){
        numCount[nums[x]] = (numCount[nums[x]] || 0) + 1
    }

    let sortedByFrequency = Object.keys(numCount).sort((a,b)=>{
        return numCount[b] - numCount[a]
    })
    
    return sortedByFrequency.slice(0,k).map(Number);
    
    return frequency;
};