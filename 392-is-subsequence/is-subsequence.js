/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    s = s.split('');
    for(char of t){
        if(char === s[0]){
            s.shift();
        }
    }
    return s.length === 0;
};