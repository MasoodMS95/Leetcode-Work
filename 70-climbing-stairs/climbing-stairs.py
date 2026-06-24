class Solution:
    def climbStairs(self, n: int) -> int:
        if(n == 2):
            return 2
        if(n == 1):
            return 1

        dp = []
        dp.append(1)
        dp.append(2)

        for x in range(2, n):
            dp.append(dp[x-2] + dp[x-1])
        
        return dp[-1]