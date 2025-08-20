from collections import Counter
import heapq
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counts = Counter(nums)
        heap = []

        for num, value in counts.items():
            heapq.heappush(heap, (value, num))
            if len(heap) > k:
                heapq.heappop(heap)

        orderedResult = []
        for value, num in heap:
            orderedResult.append(num)
        return orderedResult