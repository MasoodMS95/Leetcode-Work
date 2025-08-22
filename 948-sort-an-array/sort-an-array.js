/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length === 1){
        return nums;
    }
    let mid = Math.floor(nums.length / 2);
    let leftArr = nums.slice(0, mid);
    let rightArr = nums.slice(mid, nums.length);

    let sortedLeftArr = sortArray(leftArr);
    let sortedRightArr = sortArray(rightArr);

    let mergedSortedArray = [];
    let lIndex = 0;
    let rIndex = 0;

    while(lIndex < sortedLeftArr.length && rIndex < sortedRightArr.length){
        let leftElm = sortedLeftArr[lIndex];
        let rightElm = sortedRightArr[rIndex];
        if(leftElm < rightElm){
            mergedSortedArray.push(leftElm);
            lIndex++;
        }
        else{
            mergedSortedArray.push(rightElm);
            rIndex++;
        }
    }
    while(lIndex < sortedLeftArr.length){
        mergedSortedArray.push(sortedLeftArr[lIndex]);
        lIndex++;
    }
    while(rIndex < sortedRightArr.length){
        mergedSortedArray.push(sortedRightArr[rIndex])
        rIndex++;
    }
    return mergedSortedArray;
};