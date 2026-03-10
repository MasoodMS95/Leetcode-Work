/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var visited = new Set();
    let islands = 0;
    let maxRows = grid.length;
    let maxCols = grid[0].length;

    let visitNeighbors = (row, col) => {
        let queue = [[row,col]];
        let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        while(queue.length){
            let currSpot = queue.pop();
            let r = currSpot[0];
            let c = currSpot[1];
                for(let direction of directions){
                    let neighborR = direction[0] + r;
                    let neighborC = direction[1] + c;
                    if(!visited.has(`${neighborR}, ${neighborC}`) && grid[neighborR] && grid[neighborR][neighborC] && grid[neighborR][neighborC] === '1'){
                        visited.add(`${neighborR}, ${neighborC}`);
                        queue.push([neighborR, neighborC])
                }
            }
        }
    }

    for(let i = 0; i < maxRows; i++){
        for(let j = 0; j < maxCols; j++){
            if(!visited.has(`${i}, ${j}`) && grid[i][j] === '1'){
                visited.add(`${i}, ${j}`);
                islands++;
                visitNeighbors(i, j);
            }
        }
    }
    return islands;
};