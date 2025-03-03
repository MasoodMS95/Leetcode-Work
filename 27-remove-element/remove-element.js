/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let swapIndex = nums.length -1;
    let index = 0;
    let nonVal = 0;
    while(index <= swapIndex){
        if(nums[index] !== val){
            nonVal++;
            index++;
            continue;
        }
        while(nums[swapIndex] === val){
            swapIndex--;
        }
        if(swapIndex < index){
            break;
        }
        nums[index] = nums[swapIndex];
        nonVal++;
        index++;
        swapIndex--;
    }
    console.log(nonVal)
    return nonVal
};