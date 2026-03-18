/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let nIslands = 0;
    var bfs = (row, col) => {
        if( row < 0 ||
            col < 0 ||
            row >= grid.length ||
            col >= grid[0].length ||
            grid[row][col] === '0'
        ){
            return;
        }
        grid[row][col] = '0';
        bfs(row+1,col);
        bfs(row-1,col);
        bfs(row,col+1);
        bfs(row,col-1);
    }

    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[0].length; col++){
            if(grid[row][col] === '1'){
                nIslands++;
                bfs(row, col);
            }
        }
    }
    return nIslands;
};