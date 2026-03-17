/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 2){
        return n;
    }
    let one = 1;
    let two = 2;
    let curr;
    for(let x = 3; x <= n; x++){
        curr = one + two;
        one = two;
        two = curr;
    }
    return curr;
};