/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let largestIndexLeft = m-1;
    let largestIndexRight = n-1;
    let currIndex = (m+n)-1
    let valToPlace;
    while(currIndex >= 0){
        console.log(`CURRENT INDEX: ${currIndex}`)
        if(largestIndexRight < 0){
            break;
        }
        if(nums1[largestIndexLeft] > nums2[largestIndexRight]){
            valToPlace = nums1[largestIndexLeft];
            nums1[largestIndexLeft] = 0;
            largestIndexLeft--;
            console.log("LEFT VAL IS LARGER")
        }
        else{
            valToPlace = nums2[largestIndexRight];
            largestIndexRight--;
            console.log("RIGHT VAL IS LARGER")
        }
        console.log(`COMPARING CURRENT INDEX VALUE ${nums1[currIndex]} TO ${valToPlace}`)
        if(valToPlace > nums1[currIndex] || nums1[currIndex] === 0){
            nums1[currIndex] = valToPlace;
        }
        console.log(`Currently sorted array: ${nums1}`)
        currIndex--;
    }
};