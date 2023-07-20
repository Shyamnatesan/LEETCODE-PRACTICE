function climbingStairsTopDown(n, lookup = null) {
  lookup = lookup === null ? {} : lookup;
  if (n in lookup) {
    return lookup[n];
  } else if (n === 0) {
    return 1;
  } else if (n < 0) {
    return 0;
  } else {
    lookup[n] =
      climbingStairsTopDown(n - 1, lookup) +
      climbingStairsTopDown(n - 2, lookup);
    return lookup[n];
  }
}
function climbingStairsBottomUp(n) {
  let dp = new Array(n + 1).fill(0);
  dp[n] = 1;
  dp[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    dp[i] = dp[i + 1] + dp[i + 2];
  }
  return dp[0];
}

n = 5;
console.log(climbingStairsTopDown(n));
console.log(climbingStairsBottomUp(n));
