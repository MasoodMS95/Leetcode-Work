/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n <= 1){
        return n;
    }
    let one = 0;
    let two = 1;
    let curr;
    for(let x = 2; x <= n; x++){
        curr = one + two;
        one = two;
        two = curr;
    }
    return curr;
};