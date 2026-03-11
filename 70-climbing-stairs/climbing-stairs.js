/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 2){
        return n;
    }
    let total = 0;
    let sequence = [0, 1 ,2];
    for(let i = 3; i <= n; i++){
        let oneStep = sequence[i-1];
        let twoSteps = sequence[i-2];
        sequence[i] = oneStep + twoSteps;
    }
    return sequence[n];
};