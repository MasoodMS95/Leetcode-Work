/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0){
        return 0;
    }
    if(s.length === 1){
        return 1;
    }
    if(s.length === 2){
        if(s[0] === s[1]){
            return 1;
        }
        return 2;
    }

    let start = 0;
    let end = 1;
    let longestSubString = 0;
    let seen = new Set();
    seen.add(s[start])
    while(end < s.length){
        while(seen.has(s[end])){
            seen.delete(s[start]);
            start++;
        }
        seen.add(s[end]);
        let currLen = (end - start) + 1;
        if(currLen > longestSubString){
            longestSubString = currLen;
        }
        end++;
    }
    return longestSubString;
};