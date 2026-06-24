class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        dp = [False] * (len(s) + 1)
        dp[0] = True

        for char in range(len(s) + 1):
            for lastValid in range(len(dp)):
                if(dp[lastValid]) == True:
                    currWord = s[lastValid: char]
                    print(currWord)
                    if(currWord in wordDict):
                        dp[char] = True
        print(dp)
        return dp[-1]
