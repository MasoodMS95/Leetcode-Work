/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0){
        return 0;
    }
    let longest = 1;
    let lIndex = 0;
    let contains = new Set();
    contains.add(s[lIndex]);
    for(let x = 1; x < s.length; x++){
        while(contains.has(s[x])){
            contains.delete(s[lIndex]);
            lIndex++;
        }
        contains.add(s[x]);
        longest = contains.size > longest ? contains.size : longest;
    }

    return longest;
};