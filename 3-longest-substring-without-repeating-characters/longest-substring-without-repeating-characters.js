/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let lIndex = 0;
    let contains = new Set();
    for(let right = 0; right < s.length; right++){
        while(contains.has(s[right])){
            contains.delete(s[lIndex]);
            lIndex++;
        }
        contains.add(s[right]);
        longest = contains.size > longest ? contains.size : longest;
    }

    return longest;
};