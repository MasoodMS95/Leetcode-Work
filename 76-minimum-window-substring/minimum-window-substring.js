/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let minString = "";
    let start = 0;
    let currIndex = 0;
    
    let needChars = {};
    for(char of t){
        needChars[char] = needChars[char] ? needChars[char] + 1 : 1;
    }
    let needCount = Object.keys(needChars).length;

    let haveChars = {};
    for(char of t){
        haveChars[char] = 0;
    }
    let haveCount = 0;

    while(currIndex < s.length){
        let cChar = s[currIndex];
        if(t.includes(cChar)){
            haveChars[cChar]++;
            if(haveChars[cChar] === needChars[cChar]){
                haveCount++;
            }
        }
        while(haveCount === needCount){
            let checkString = s.slice(start, currIndex+1);
            
            if(minString.length > checkString.length || minString.length === 0){
                minString = checkString;
            }
            if(t.includes(s[start])){
                haveChars[s[start]]--;
                if(haveChars[s[start]] < needChars[s[start]]){haveCount--;}
            }
            start++;
        }
        currIndex++;
    }
    return minString;
};