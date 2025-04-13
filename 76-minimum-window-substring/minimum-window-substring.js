var minWindow = function(s, t) {
    let queue = [];
    let visited = {};
    let needChars = {};

    for (char of t) {
        if (needChars[char]) {
            needChars[char]++;
        } else {
            needChars[char] = 1;
        }
        visited[char] = 0;
    }

    let needCount = Object.keys(needChars).length;
    let haveCount = 0;
    let currShortest = "";
    let currIndex = 0;

    while (currIndex < s.length) {
        if (t.indexOf(s[currIndex]) !== -1) {
            visited[s[currIndex]]++;
            if (visited[s[currIndex]] === needChars[s[currIndex]]) {
                haveCount++;
            }

            queue.push(currIndex);

            while (haveCount === needCount) {
                currShortest = currShortest.length > (currIndex - queue[0]) + 1 || currShortest.length === 0 ? s.slice(queue[0], currIndex + 1) : currShortest;

                let removed = queue.shift();
                if (visited[s[removed]] === needChars[s[removed]]) {
                    haveCount--;
                }
                visited[s[removed]]--;
            }
        }
        currIndex++;
    }

    return currShortest;
};
