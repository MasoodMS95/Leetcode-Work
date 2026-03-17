/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let numIslands = 0;
    var dfs = (row, col) => {
        if( row < 0 ||
            col < 0 || 
            row >= grid.length ||
            col >= grid[0].length ||
            grid[row][col] === '0'
            ){
                return;
            }
        grid[row][col] = '0';
        dfs(row+1, col);
        dfs(row-1, col);
        dfs(row, col+1);
        dfs(row, col-1);
    }

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === '1'){
                numIslands++;
                dfs(i, j);
            }
        }
    }
    return numIslands;
};