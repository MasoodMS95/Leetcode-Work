/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let n1Index = m-1;
    let n2Index = n-1;
    let currPointer = (m+n)-1;

    while(currPointer >= 0){
        if(n2Index < 0){
            break;
        }
        let valToPlace;
        let n1 = nums1[n1Index];
        let n2 = nums2[n2Index]
        if(n1 > n2){
            valToPlace = n1;
            nums1[n1Index] = 0;
            n1Index--;
        }
        else{
            valToPlace = n2;
            n2Index--;
        }
        if(nums1[currPointer] === 0){
            nums1[currPointer] = valToPlace;
        }
        currPointer--;
    }
};