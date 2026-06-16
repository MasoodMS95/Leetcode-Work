class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        dp = [False] * (len(s)+1)
        dp[0] = True
        start = 0
        currLetter = 0
        for end in range(1, len(s)+1):
            for start in range(0, end):
                if dp[start] and s[start:end] in wordDict:
                    dp[end] = True
        return dp[len(s)]