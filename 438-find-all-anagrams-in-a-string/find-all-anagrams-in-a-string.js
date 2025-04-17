/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    //P searching for string
    //S is search through string
    //
    if(p.length > s.length) return [];
    let foundIndices = [];
    let needMap = {};
    let haveMap = {};
    for(char of p){
        needMap[char] = (needMap[char] || 0) + 1;
        haveMap[char] = 0;
    }
    // console.log("needMap:")
    // for(key in needMap){
    //     console.log(`${key}:${needMap[key]}`)
    // }
    let needCount = Object.keys(needMap).length;
    let haveCount = 0;
    let start = 0;

    for(let x = 0; x < s.length; x++){
        let currChar = s[x];
        haveMap[currChar] = (haveMap[currChar] || 0) + 1;
        if(needMap[currChar]){
            if(needMap[currChar] === haveMap[currChar]){
                haveCount++;
            }
        }
        if(x - start + 1 > p.length){
            // console.log('Have valid window length', start, x, '\n', s, '\n');
            if(needMap[s[start]] === haveMap[s[start]]){
                haveCount--;
            }
            haveMap[s[start]]--;
            start++;
            // for(key in needMap){
            //     console.log(`NeedMap: ${key}:${needMap[key]}`);
            //     console.log(`HaveMap: ${key}:${haveMap[key]}\n`)
            // }
            // console.log(`Have:${haveCount}, Need:${needCount}`)
        }
        if(haveCount === needCount){
            foundIndices.push(start);
        }
    }
    return foundIndices;
};