/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let sortedNums = nums.sort((a,b)=>a-b)
    let found = [];
    for(let x = 0; x < nums.length-2; x++){
         if (x > 0 && sortedNums[x] === sortedNums[x - 1]) continue;
        let left = x+1, right = nums.length - 1;
        while(left < right){
            value = sortedNums[x] + sortedNums[left] + sortedNums[right];
            currArr = [sortedNums[x], sortedNums[left], sortedNums[right]]
            if(value === 0){
                while(left < right && sortedNums[left] === sortedNums[left+1]) left++;
                while(left < right && sortedNums[right] === sortedNums[right-1]) right--;
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