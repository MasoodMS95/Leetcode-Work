/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let shortest = "";
    if(t.length > s.length){
        return shortest;
    }

    have = {};
    wants = {};
    for(let char of t){
        wants[char] = (wants[char] || 0) + 1
        have[char] = 0;
    }
    
    let matchGoal = Object.keys(wants).length;
    let matchCurr = 0;
    let start = 0;
    let curr = 0;
    while(curr < s.length){
        // console.log(`CurrIndex = ${curr}`);
        if(wants[s[curr]]){
            have[s[curr]]++;
            if(wants[s[curr]] === have[s[curr]]){
                matchCurr++;
                // console.log(`Found a match! New match: ${matchCurr}`)
            }
        }
        while(matchGoal === matchCurr){
            let currSlice = s.slice(start, curr+1);
            // console.log(currSlice);
            shortest = shortest.length < currSlice.length && shortest.length !== 0 ? shortest : currSlice;
            if(wants[s[start]]){
                if(wants[s[start]] === have[s[start]]){
                    matchCurr--;
                }
                have[s[start]]--;
            }
            start++;
        }
        curr++;
    }
    return shortest;
};