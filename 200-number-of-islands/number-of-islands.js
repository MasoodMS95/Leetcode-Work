/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islands = 0;
    let visited = new Set();
    let rows = grid.length;
    let cols = grid[0].length;

    var bfs = function(row, col){
        let queue = [[row, col]];
        visited.add((`${row}, ${col}`));
        let directions = [[0, 1], [1, 0], [-1, 0], [0, -1]];
        while(queue.length > 0){
            let poppedLoc = queue.shift();
            let r = poppedLoc[0], c = poppedLoc[1]
            for(direction of directions){
                let neighborRow = r + Number(direction[0])
                let neighborCol = c + Number(direction[1])
                if(grid[neighborRow] &&
                    grid[neighborRow][neighborCol] &&
                    grid[neighborRow][neighborCol] === "1" &&
                    !visited.has((`${neighborRow}, ${neighborCol}`))
                ){
                    visited.add((`${neighborRow}, ${neighborCol}`));
                    queue.push([neighborRow, neighborCol])
                }
            }
        }
    }

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(grid[i][j] === "1" && !visited.has((`${i}, ${j}`))){
                    islands++;
                    bfs(i, j);
            }
        }
    }
    return islands;
};