/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sHas = {};
    let tHas = {};
    let matches = 0;
    if(s.length !== t.length){
        return false;
    }
    for(let x = 0; x < s.length; x++){
        if(sHas[s[x]]){
            sHas[s[x]]++;
        }
        else{
            sHas[s[x]] = 1;
            matches++;
        }
    }

    for(let x = 0; x < t.length; x++){
        if(tHas[t[x]]){
            tHas[t[x]]++;
        }
        else{
            tHas[t[x]] = 1;
            }
    }

    let currMatches = 0;
    for(key in tHas){
        if(sHas[key] && tHas[key] === sHas[key]){
            currMatches++;
        }
    }
    return currMatches === matches;
};