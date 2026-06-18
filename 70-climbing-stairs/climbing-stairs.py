class Solution:
    def climbStairs(self, n: int) -> int:
        prevSteps = 1
        currSteps = 1
        steps = 1
        if(n < 2):
            return currSteps
        for x in range(2, n+1):
            newCount = currSteps + prevSteps
            prevSteps = currSteps
            currSteps = newCount
        return currSteps