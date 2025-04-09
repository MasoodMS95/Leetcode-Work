/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longestCount = 0;
    if(s.length === 1) return 1;
    for(let x = 0; x < s.length - 1; x++){
        let subString = new Set();
        let y = x;
        while(y < s.length && !subString.has(s[y])){
            subString.add(s[y]);
            y++;
        }
        if(subString.size > longestCount) longestCount = subString.size;
    }
    return longestCount;
};