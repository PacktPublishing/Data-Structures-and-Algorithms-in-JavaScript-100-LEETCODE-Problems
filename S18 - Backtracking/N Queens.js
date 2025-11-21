/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const solutions = [];
    const board = Array(n).fill(".").map(() => Array(n).fill("."));
    backtrack(board, 0, solutions);
    return solutions;
};

function backtrack(board, row, solutions) {
    if (row === board.length) {
        solutions.push(board.map(row => row.join("")));
        return;
    }
    
    const n = board.length;
    for (let col = 0; col < n; col++) {
        if (isSafe(board, row, col)) {
            board[row][col] = "Q";
            backtrack(board, row + 1, solutions);
            board[row][col] = ".";
        }
    }
}

function isSafe(board, row, col) {
    const n = board.length;
    
    // Check for queens in the same column
    for (let i = 0; i < row; i++) {
        if (board[i][col] === "Q") {
            return false;
        }
    }
    
    // Check for queens in the upper-left diagonal
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === "Q") {
            return false;
        }
    }
    
    // Check for queens in the upper-right diagonal
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === "Q") {
            return false;
        }
    }
    
    return true;
}

