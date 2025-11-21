function solve(board) {
    const m = board.length;
    const n = board[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'P';
            }
        }
    }

    for (let j = 0; j < n; j++) {
        dfsCore(0, j, board);
    }
    for (let j = 0; j < n; j++) {
        dfsCore(m - 1, j, board);
    }
    for (let i = 0; i < m; i++) {
        dfsCore(i, 0, board);
    }
    for (let i = 0; i < m; i++) {
        dfsCore(i, n - 1, board);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'P') {
                board[i][j] = 'X';
            }
        }
    }
}

function dfsCore(row, col, board) {
    if (row >= 0 && row < board.length && col >= 0 && col < board[0].length && board[row][col] === 'P') {
        board[row][col] = 'O';
        dfsCore(row - 1, col, board);
        dfsCore(row + 1, col, board);
        dfsCore(row, col - 1, board);
        dfsCore(row, col + 1, board);
    }
}
