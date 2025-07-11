/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0; 
    let right = numbers.length -1;
    while(left < right){
        if(numbers[left] + numbers[right] === target){
            break;
        }
        if(numbers[left] + numbers[right] > target){
            right--;
        }
        else{
            left++;
        }
    }
    return [left+1, right+1]
};