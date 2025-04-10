/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longestCount = 0;
    if(s.length === 1) return 1;
    let subString = new Set();
    let start = 0;
    let curr = 0;
    while(curr < s.length){
        if(!subString.has(s[curr])){
            subString.add(s[curr])
            longestCount = Math.max(longestCount, subString.size);
            curr++;
        }
        else{
            subString.delete(s[start]);
            start++;
        }
    }
    return longestCount;
};