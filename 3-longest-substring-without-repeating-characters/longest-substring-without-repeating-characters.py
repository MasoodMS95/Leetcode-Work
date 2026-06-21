class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left = 0
        longest = 0
        currentString = set()
        for right in range(0, len(s)):
            currChar = s[right]
            while(currChar in currentString):
                currentString.remove(s[left])
                left+=1
            currentString.add(currChar)
            if(len(currentString) > longest):
                longest = len(currentString)
        return longest