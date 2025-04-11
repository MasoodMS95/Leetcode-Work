/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    let start = 0;
    let currIndex = 0;
    let charCount = {};
    let longestSubstring = 0;
    if(k===0){return 0}
    while(currIndex < s.length){
        if(charCount[s[currIndex]]){
            charCount[s[currIndex]]++;
        }
        else{
            charCount[s[currIndex]] = 1;
            while(Object.keys(charCount).length > k){
                if(charCount[s[start]] === 1){
                    delete charCount[s[start]]
                }
                else{
                    charCount[s[start]]--;
                }
                start++;
            }
        }
        longestSubstring = Math.max(longestSubstring, (currIndex - start) + 1)
        currIndex++;
    }
    return longestSubstring;
};