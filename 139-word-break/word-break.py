class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        dp = [False] * (len(s) + 1)
        dp[0] = True

        for end in range(len(s) + 1):
            for start in range(0, end):
                if(dp[start]) == True:
                    currWord = s[start: end]
                    if(currWord in wordDict):
                        dp[end] = True
        return dp[-1]
