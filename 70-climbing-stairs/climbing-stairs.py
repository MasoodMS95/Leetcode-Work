class Solution:
    def climbStairs(self, n: int) -> int:
        if(n == 2):
            return 2
        if(n == 1):
            return 1

        prev = 1
        curr = 2

        for x in range(2, n):
            newCurr = prev + curr
            prev = curr
            curr = newCurr
            
        return curr