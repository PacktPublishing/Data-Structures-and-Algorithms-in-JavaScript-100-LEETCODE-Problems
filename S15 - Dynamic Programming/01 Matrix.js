function updateMatrix(mat) {
  const m = mat.length;
  const n = mat[0].length;
  const distance = new Array(m).fill().map(() => new Array(n).fill(0));
  const que = [];

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if (mat[i][j] == 1) {
        distance[i][j] = m * n;
      }
      else {
        que.push([i, j]);
      }
    }
  }

  while (que.length > 0) {
    const [row, col] = que.shift();
    const newDistance = distance[row][col] + 1;

    if (isValid(row - 1, col, mat) && distance[row-1][col] > newDistance) {
      distance[row-1][col] = newDistance;
      que.push([row - 1, col]);
    }
    if (isValid(row + 1, col, mat) && distance[row+1][col] > newDistance) {
      distance[row+1][col] = newDistance;
      que.push([row + 1, col]);
    }
    if (isValid(row, col - 1, mat) && distance[row][col - 1] > newDistance) {
      distance[row][col - 1] = newDistance;
      que.push([row, col - 1]);
    }
    if (isValid(row, col + 1, mat) && distance[row][col + 1] > newDistance) {
      distance[row][col + 1] = newDistance;
      que.push([row, col + 1]);
    }
  }

  return distance;
}

function isValid(row, col, mat) {
  const m = mat.length;
  const n = mat[0].length;
  if (row < 0 || row >= m) return false;
  if (col < 0 || col >= n) return false;
  if (mat[row][col] !== 1) return false;
  return true;
}

