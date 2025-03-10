/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    strippedString = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    let left = 0;
    let right = strippedString.length -1;
    while(left < right){
        if(strippedString[left] !== strippedString[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
};