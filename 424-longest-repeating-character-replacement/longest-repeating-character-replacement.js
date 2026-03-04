/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    if(s.length === 1){
        return 1;
    }
    let charCount = {};
    let maxFreq = 0;
    let left = 0; 
    let right = 0;
    let longestSubstring = 0;
    while(right < s.length){
        charCount[s[right]] = (charCount[s[right]] || 0) + 1;
        maxFreq = Math.max(maxFreq, charCount[s[right]]);
        while(((right - left) + 1) - maxFreq > k){
            charCount[s[left]]--;
            left++;
        }
        longestSubstring = Math.max(longestSubstring, (right - left) + 1)
        right++;
    }
    return longestSubstring
};