/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    if(k === 0){
        return 0;
    }
    let charCounts = {};
    let longest = 0;
    let left = 0;
    for(let right = 0; right < s.length; right++){
        charCounts[s[right]] = (charCounts[s[right]] || 0) + 1;
        while(Object.keys(charCounts).length > k){
            if(charCounts[s[left]] === 1 ){
                delete charCounts[s[left]];
            }
            else{
                charCounts[s[left]]--;
            }
            left++;
        }
        longest = Math.max(longest, right-left+1);
    }
    return longest;
};