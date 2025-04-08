/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let n1Ind = m-1;
    let n2Ind = n-1;
    let currIndex = nums1.length-1;
    if(n === 0){return;}
    while(currIndex >= 0){
        if(nums1[currIndex] === 0){
            if(n1Ind < 0 || nums2[n2Ind] > nums1[n1Ind]){
                console.log(`Inserting ${nums2[n2Ind]}`)
                nums1[currIndex] = nums2[n2Ind];
                n2Ind--;
            }
            else{
                nums1[currIndex] = nums1[n1Ind];
                nums1[n1Ind] = 0;
                n1Ind--;
            }
        }
        currIndex--;
    }
};