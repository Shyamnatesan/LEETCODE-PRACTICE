function mine(nums, i, j, lookup) {
  const n = nums.length;
  const m = nums[0].length;
  if ([i, j] in lookup) {
    return lookup[[i, j]];
  }
  if (i === n || j === m || j < 0) {
    return 0;
  } else {
    lookup[[i, j]] =
      nums[i][j] +
      Math.max(
        mine(nums, i + 1, j - 1, lookup),
        mine(nums, i + 1, j, lookup),
        mine(nums, i + 1, j + 1, lookup)
      );
    return lookup[[i, j]];
  }
}

function goldMineTopDown(nums) {
  let maxGold = 0;
  let lookup = {};
  for (let i = 0; i < nums[0].length; i++) {
    maxGold = Math.max(maxGold, mine(nums, 0, i, lookup));
  }
  return maxGold;
}

function goldMineBottomUp(nums) {
  dp = [];
  const n = nums.length;
  const m = nums[0].length;
  for (let i = 0; i < n; i++) {
    dp[i] = [];
    for (let j = 0; j < m; j++) {
      dp[i][j] = 0;
    }
  }
  for (let j = 0; j < m; j++) {
    dp[0][j] = nums[0][j];
  }
  console.log(JSON.stringify(dp));
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let topLeft = dp[i - 1][j - 1] ? dp[i - 1][j - 1] : 0;
      let top = dp[i - 1][j] ? dp[i - 1][j] : 0;
      let topRight = dp[i - 1][j + 1] ? dp[i - 1][j + 1] : 0;
      dp[i][j] = nums[i][j] + Math.max(topLeft, top, topRight);
    }
  }

  return Math.max(...dp[n - 1]);
}

let nums = [
  [3, 2, 12, 15, 10],
  [6, 19, 7, 11, 17],
  [8, 5, 12, 32, 21],
  [3, 20, 2, 9, 7],
];

console.log(goldMineTopDown(nums));
console.log(goldMineBottomUp(nums));
