/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 1){
        return 1;
    }
    let longestSubString = 0;
    for(let x = 0; x < s.length; x++){
        let y = x+1;
        let currString = s[x];
        while(y <= s.length-1 && !currString.includes(s[y])){
            currString = currString.concat(s[y]);
            y++;
        }
        longestSubString = currString.length > longestSubString ? currString.length : longestSubString;
    }
    return longestSubString;
};