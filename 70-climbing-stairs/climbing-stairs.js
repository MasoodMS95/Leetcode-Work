/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 2){
        return n;
    }
    let steps = [0, 1, 2];
    for(let x = 3; x <= n; x++){
        steps[x] = steps[x-1] + steps[x-2];
    }
    console.log(steps);
    return steps[steps.length-1];
};