class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        longestSubString = 1 if len(s) == 1 else 0
        for x in range(len(s)-1):
            currString = s[x]
            y = x + 1
            while(y <= len(s)-1 and s[y] not in currString):
                currString = currString + s[y]
                y+=1
            if(len(currString) > longestSubString):
                longestSubString = len(currString)
        return longestSubString
        