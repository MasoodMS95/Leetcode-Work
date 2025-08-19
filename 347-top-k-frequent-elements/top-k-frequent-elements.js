/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freqMap = {};
    for (let n of nums) {
        freqMap[n] = (freqMap[n] || 0) + 1;
    }

    let sorted = Object.keys(freqMap)
        .sort((a, b) => freqMap[b] - freqMap[a]) // sort by frequency descending
        .slice(0, k);

    sorted = sorted.map((elm)=>parseInt(elm));

    return sorted;
};