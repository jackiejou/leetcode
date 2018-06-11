/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    let flipToZero = (row, col) => {
        if (row < 0 || col < 0 || row >=  grid.length || col >= grid[row].length) return;
        if (grid[row][col]) {
            grid[row][col] = 0;
            flipToZero(row - 1, col);
            flipToZero(row + 1, col);
            flipToZero(row, col + 1);
            flipToZero(row, col - 1);
        }
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j]) {
                count++;
                flipToZero(i, j);
            }
        }
    }
    return count;
};
let g = [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 0]
];

console.log(numIslands(g));
