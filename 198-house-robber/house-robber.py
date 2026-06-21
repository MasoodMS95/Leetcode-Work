class Solution:
    def rob(self, nums: List[int]) -> int:

        if(len(nums) == 0):
            return 0
        if(len(nums) == 1):
            return nums[0]
        if(len(nums) == 2):
            return max(nums[0], nums[1])

        dp = []
        dp.append(nums[0])
        dp.append(max(nums[0], nums[1]))
        
        for x in range(2, len(nums)):
            dp.append(max(dp[x-1], dp[x-2] + nums[x]))
        return dp[-1]