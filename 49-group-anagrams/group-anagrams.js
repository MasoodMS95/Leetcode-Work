/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let anagrams = [];
    let anagramLoc = {};
    let currLoc = 0;

    for(let word of strs){
        let anagram = word.split('').sort().join("");
        if(anagram in anagramLoc){
            anagrams[anagramLoc[anagram]].push(word);
        }
        else{
            anagramLoc[anagram] = currLoc
            anagrams[currLoc] = [word];
            currLoc++;
        }
    }
    return anagrams;
};