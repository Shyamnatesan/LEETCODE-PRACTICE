//TABULATION APPROACH
function minimumPathSumBottomUp(grid) {
  let n = grid.length;
  let m = grid[0].length;
  let dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = [];
    for (let j = 0; j < m; j++) {
      dp[i][j] = 0;
    }
  }
  dp[0][0] = grid[0][0];
  for (let i = 1; i < m; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }
  for (let j = 1; j < n; j++) {
    dp[j][0] = dp[j - 1][0] + grid[j][0];
  }
  for (let k = 1; k < n; k++) {
    for (let l = 1; l < m; l++) {
      dp[k][l] = grid[k][l] + Math.min(dp[k - 1][l], dp[k][l - 1]);
    }
  }
  return dp[n - 1][m - 1];
}

//MEMOIZATION APPROACH
function minimumPathSumTopDown(grid, i = 0, j = 0, lookup = null) {
  lookup = lookup === null ? {} : lookup;
  const n = grid.length;
  const m = grid[0].length;
  console.log(lookup);
  if ([i, j] in lookup) return lookup[[i, j]];
  if (i === n - 1 && j === m - 1) return grid[i][j];
  else if (i === n - 1) {
    lookup[[i, j]] = grid[i][j] + minimumPathSumTopDown(grid, i, j + 1, lookup);
    return lookup[[i, j]];
  } else if (j === m - 1) {
    lookup[[i, j]] = grid[i][j] + minimumPathSumTopDown(grid, i + 1, j, lookup);
    return lookup[[i, j]];
  } else {
    lookup[[i, j]] =
      grid[i][j] +
      Math.min(
        minimumPathSumTopDown(grid, i + 1, j, lookup),
        minimumPathSumTopDown(grid, i, j + 1, lookup)
      );
    return lookup[[i, j]];
  }
}

let grid = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(minimumPathSumBottomUp(grid));
console.log(minimumPathSumTopDown(grid));
