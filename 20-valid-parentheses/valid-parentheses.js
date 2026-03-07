/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let opens = ['(', '{', '['];
    let closures = [')', '}', ']'];
    let indices = {}
    for(let char of s){
        if(opens.includes(char)){
            stack.push(char);
        }
        else{
            let lifo = stack.pop();
            if(opens.indexOf(lifo) !== closures.indexOf(char)){
                return false;
            }
        }
    }
    return stack.length === 0;
};