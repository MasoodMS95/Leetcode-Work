/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let opens = {
        ')': '(', 
        '}': "{", 
        ']': '['
    }
    for(let char of s){
        if(!opens[char]){
            stack.push(char);
        }
        else{
            let lifo = stack.pop();
            let opposite = opens[char];
            if(lifo !== opposite){
                return false;
            }
        }
    }
    return stack.length === 0;
};