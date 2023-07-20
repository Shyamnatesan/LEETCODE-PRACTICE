function findPathTopDown(grid, i = 0, j = 0, lookup = null) {
  lookup = lookup === null ? {} : lookup;

  let n = grid.length;
  let m = grid[0].length;
  if ([i, j] in lookup) {
    return lookup[[i, j]];
  }
  if (i === n || j === m || grid[i][j] === 1) {
    return 0;
  } else if (i === n - 1 && j === m - 1) {
    return 1;
  } else {
    lookup[[i, j]] =
      findPathTopDown(grid, i + 1, j, lookup) +
      findPathTopDown(grid, i, j + 1, lookup);
    return lookup[[i, j]];
  }
}

function findPathBottomUp(grid) {
  const n = grid.length;
  const m = grid[0].length;
  let dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = [];
    for (let j = 0; j < m; j++) {
      dp[i][j] = 0;
    }
  }
  dp[0][0] = grid[0][0] === 0 ? 1 : 0;
  for (let j = 1; j < m; j++) {
    dp[0][j] = grid[0][j] !== 1 ? dp[0][j - 1] : 0;
  }
  for (let i = 1; i < n; i++) {
    dp[i][0] = grid[i][0] !== 1 ? dp[i - 1][0] : 0;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = grid[i][j] !== 1 ? dp[i - 1][j] + dp[i][j - 1] : 0;
    }
  }
  return dp[n - 1][m - 1];
}

let grid = [[0, 0]];
console.log(findPathTopDown(grid));
console.log(findPathBottomUp(grid));
