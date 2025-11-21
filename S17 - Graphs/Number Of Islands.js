/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0;
  const isValid = (row, col) => {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
      return false;
    }
    if (grid[row][col] == '1') {
      return true;
    }
    return false;
  };
  const dfs = (row, col) => {
    if (isValid(row, col)) {
      grid[row][col] = '2';
      dfs(row - 1, col);
      dfs(row + 1, col);
      dfs(row, col - 1);
      dfs(row, col + 1);
    }
  };
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] == '1') {
        count++;
        dfs(row, col);
      }
    }
  }
  return count;
};
