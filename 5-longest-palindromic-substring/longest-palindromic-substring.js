/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length === 1) return s;
    let longestPalindrome = s[0];
    for(let x = 0; x < s.length-1; x++){
        let oddPalindrome = s[x];
        let evenPalindrome = ""
        let left = x-1;
        let right = x+1;
        while(left >= 0 && right <= s.length-1 && s[left] === s[right]){
            oddPalindrome = s[left] + oddPalindrome + s[right];
            left--;
            right++;
        }
        left = x;
        right = x+1;
        while(left >= 0 && right <= s.length-1 && s[left] === s[right]){
            evenPalindrome = s[left] + evenPalindrome + s[right];
            left--;
            right++;
        }
        if(oddPalindrome.length > longestPalindrome.length) longestPalindrome = oddPalindrome;
        if(evenPalindrome.length > longestPalindrome.length) longestPalindrome = evenPalindrome;
    }
    return longestPalindrome;
};