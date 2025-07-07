/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){return false;}
    let numString = x.toString();
    let left = 0; 
    let right = numString.length-1;
    while(left < right){
        if(numString[left] === numString[right]){
            left++;
            right--;
            continue;
        }
        else{
            return false;
        }
    }
    return true;
};