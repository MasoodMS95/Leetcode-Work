class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left = 0
        longest = 0
        for right in range(0, len(s)):
            currChar = s[right]
            while(currChar in s[left:right]):
                left+=1
            newString = s[left:right+1]
            if(len(newString) > longest):
                longest = len(newString)
        return longest