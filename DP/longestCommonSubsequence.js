function subSequenceTopDown(s1, s2, i = 0, j = 0, lookup = null) {
  lookup = lookup === null ? {} : lookup;
  if ([i, j] in lookup) {
    return lookup[[i, j]];
  }

  if (i === s1.length || j === s2.length) {
    return 0;
  } else if (s1[i] === s2[j]) {
    lookup[[i, j]] = 1 + subSequenceTopDown(s1, s2, i + 1, j + 1, lookup);
    return lookup[[i, j]];
  } else {
    lookup[[i, j]] = Math.max(
      subSequenceTopDown(s1, s2, i + 1, j, lookup),
      subSequenceTopDown(s1, s2, i, j + 1, lookup)
    );

    return lookup[[i, j]];
  }
}

function subSequenceBottomUp(s1, s2) {
  let n = s1.length;
  let m = s2.length;
  dp = [];
  for (let i = 0; i < n + 1; i++) {
    dp[i] = [];
    for (let j = 0; j < m + 1; j++) {
      dp[i][j] = 0;
    }
  }
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (s1[i] === s2[j]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[n][m];
}

let s1 = "inside";
let s2 = "index";
console.log(subSequenceTopDown(s1, s2));
console.log(subSequenceBottomUp(s1, s2));
