function waysToClimbTopDown(jumps, n, lookup = null) {
  lookup = lookup === null ? {} : lookup;
  if (n in lookup) {
    return lookup[n];
  }
  if (n === 0) {
    return 1;
  } else {
    jumpCount = 0;
    for (let jump of jumps) {
      if (n - jump >= 0) {
        jumpCount += waysToClimbTopDown(jumps, n - jump, lookup);
      }
    }
    lookup[n] = jumpCount;
    return lookup[n];
  }
}

function waysToClimbBottomUp(jumps, n) {
  dp = [];
  for (let j = 0; j < n + 1; j++) {
    dp[j] = 0;
  }
  dp[0] = 1;
  for (let i = 1; i < n + 1; i++) {
    for (let jump of jumps) {
      if (i - jump >= 0) {
        dp[i] += dp[i - jump];
      }
    }
  }

  return dp[n];
}

let n = 10;
let jumps = [2, 4, 5, 8];
console.log(waysToClimbTopDown(jumps, n));
console.log(waysToClimbBottomUp(jumps, n));
