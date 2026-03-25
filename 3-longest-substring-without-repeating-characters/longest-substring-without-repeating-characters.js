/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let left = 0;
    let freqCount = {};
    for(let right = 0; right < s.length; right++){
        freqCount[s[right]] = (freqCount[s[right]] || 0) + 1;
        while(freqCount[s[right]] > 1){
            if(freqCount[s[left]] > 1){
                freqCount[s[left]]--;
            }
            else{
                delete freqCount[s[left]];
            }
            left++;
        }
        longest = Math.max(longest, right - left + 1);
    }
    return longest;
};