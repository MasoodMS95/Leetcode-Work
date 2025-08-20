import math
import heapq
class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        #y^2 + x^2 sqrt
        heap = []
        for x, y in points:
            distance = math.sqrt(y*y + x*x)
            heapq.heappush(heap, [distance, (x, y)])
        shortestDistances = []
        print(heap)
        for y in range(k):
            shortestDistances.append(heapq.heappop(heap)[1])
        return shortestDistances

