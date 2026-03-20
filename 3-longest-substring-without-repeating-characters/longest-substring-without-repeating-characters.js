/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let visited = new Set();
    let left = 0;
    let longest = 0;
    for(let right = 0; right < s.length; right++){
        while(visited.has(s[right])){
            visited.delete(s[left]);
            left++;
        }
        visited.add(s[right])
        longest = Math.max(longest, right-left + 1)
    }
    return longest;
};