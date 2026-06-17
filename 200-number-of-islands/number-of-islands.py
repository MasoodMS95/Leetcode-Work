class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        visitedIslands = set()
        numIslands = 0

        def bfs(i,j):
            queue = [[i,j]]
            checkRoutes = [
                [1, 0],
                [0, 1],
                [-1, 0],
                [0, -1]
            ]
            while(len(queue)):
                currCoord = queue.pop(0)
                x = currCoord[0]
                y = currCoord[1]
                if(x < 0 
                or x >= len(grid)
                or y < 0
                or y >= len(grid[0])
                or grid[x][y] == '0'):
                    continue
                if(f"({x}, {y})" not in visitedIslands):
                    visitedIslands.add(f"({x}, {y})")
                    for xAdd, yAdd in checkRoutes:
                        queue.append([x + xAdd, y + yAdd])
                

        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if(f"({i}, {j})" not in visitedIslands):
                    if(grid[i][j] == "1"):
                        numIslands += 1
                    bfs(i,j)
        return numIslands