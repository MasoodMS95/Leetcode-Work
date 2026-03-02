/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let permGoal = {};
    let checkGoal = {};

    for(let char of s1){
        permGoal[char] = (permGoal[char] + 1 || 1);
    }

    let matches = Object.keys(permGoal).length;
    let currMatches = 0;
    let left = 0;

    for(let right = 0; right < s2.length; right++){
        //Match
        if(permGoal[s2[right]]){
            checkGoal[s2[right]] = (checkGoal[s2[right]] + 1 || 1)
            if(checkGoal[s2[right]] === permGoal[s2[right]]){
                currMatches++;
            }
            while(checkGoal[s2[right]] > permGoal[s2[right]]){
                if(checkGoal[s2[left]]){
                    if(checkGoal[s2[left]] === permGoal[s2[left]]){
                        currMatches--;
                    }
                    checkGoal[s2[left]]--;
                }
                left++;
            }
            if(currMatches === matches){
                return true;
            }
        }
        //Broken Match
        else{
            while(left < right){
                if(checkGoal[s2[left]]){
                    if(checkGoal[s2[left]] === permGoal[s2[left]]){
                        currMatches--;
                    }
                    checkGoal[s2[left]]--;
                }
                left++;
            }
        }
    }
    return false;
};