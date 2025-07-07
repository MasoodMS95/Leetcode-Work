/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let foundValues = [];
    nums.sort((a,b)=>a-b);
    for(let x = 0; x < nums.length - 2; x++){
        if(x > 0 && nums[x] === nums[x-1]){continue;}
        let left = x+1;
        let right = nums.length-1;
        while(left < right){
            let currAddVal = nums[x] + nums[left] + nums[right];
            if(currAddVal === 0){
                foundValues.push([nums[x], nums[left], nums[right]]);
                while(left < right && nums[left] === nums[left+1]){left++;}
                while(left < right && nums[right] === nums[right-1]){right--;}
            }
            if(currAddVal > 0){right--;}
            else{left++;}
        }
    }
    return foundValues;
}