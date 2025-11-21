/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const oldColor = image[sr][sc];
    if (oldColor === color) {
        return image;
    }

    dfs(image, sr, sc, oldColor, color);
    return image;
};

function dfs(image, row, col, oldColor, newColor) {
    if (row < 0 || row >= image.length || col < 0 || col >= image[0].length || image[row][col] !== oldColor) {
        return;
    }

    image[row][col] = newColor;
    dfs(image, row - 1, col, oldColor, newColor);  // Up
    dfs(image, row + 1, col, oldColor, newColor);  // Down
    dfs(image, row, col - 1, oldColor, newColor);  // Left
    dfs(image, row, col + 1, oldColor, newColor);  // Right
}
