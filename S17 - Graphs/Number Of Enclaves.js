function numEnclaves(grid) {
    for (let i = 0; i < grid.length; i++) {
        if (grid[i][0] == 1) {
            dfs(grid, i, 0);
        }
        if (grid[i][grid[0].length - 1] == 1) {
            dfs(grid, i, grid[0].length - 1);
        }
    }
    for (let i = 0; i < grid[0].length; i++) {
        if (grid[0][i] == 1) {
            dfs(grid, 0, i);
        }
        if (grid[grid.length - 1][i] == 1) {
            dfs(grid, grid.length - 1, i);
        }
    }

    let maxCount = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                maxCount += dfs(grid, i, j);
            }
        }
    }
    return maxCount;
}

function dfs(grid, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == 0) {
        return 0;
    }
    grid[i][j] = 0;
    let count = 1;
    return count + dfs(grid, i + 1, j) + dfs(grid, i - 1, j) + dfs(grid, i, j + 1) + dfs(grid, i, j - 1);
}

