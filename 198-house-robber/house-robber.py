class Solution:
    def rob(self, nums: List[int]) -> int:
        if(len(nums) == 0):
            return 0
        if(len(nums) == 1):
            return nums[0]
        if(len(nums) == 2):
            return max(nums[0], nums[1])

        prev = nums[0]
        curr = max(nums[0], nums[1])

        for x in range(2, len(nums)):
            newCurr = max(curr, prev + nums[x])
            prev = curr
            curr = newCurr

        return curr