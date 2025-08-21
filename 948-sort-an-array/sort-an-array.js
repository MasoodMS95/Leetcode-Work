/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length <= 1){
        return nums
    }
    let middle = Math.min(nums.length/2);
    let left = nums.slice(0, middle);
    let right = nums.slice(middle, nums.length);

    let sortedLeft = sortArray(left);
    let sortedRight = sortArray(right);
    
    let merge = (leftArr, rightArr)=>{
        let leftArrIndex = 0, rightArrIndex = 0;
        let sorted = [];
        while(leftArrIndex < leftArr.length && rightArrIndex < rightArr.length){
            if(leftArr[leftArrIndex] < rightArr[rightArrIndex]){
                sorted.push(leftArr[leftArrIndex]);
                leftArrIndex++;
            }
            else{
                sorted.push(rightArr[rightArrIndex]);
                rightArrIndex++;
            }
        }
        while(leftArrIndex < leftArr.length){
            sorted.push(leftArr[leftArrIndex]);
            leftArrIndex++;
        }
        while(rightArrIndex < rightArr.length){
            sorted.push(rightArr[rightArrIndex]);
            rightArrIndex++;
        }
        return sorted;
    }
    return merge(sortedLeft, sortedRight);
};