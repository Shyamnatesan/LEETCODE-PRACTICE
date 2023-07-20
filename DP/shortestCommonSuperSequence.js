function scsTopDown(s1, s2, i = 0, j = 0, lookup = null) {
  lookup = lookup === null ? {} : lookup;
  if ([i, j] in lookup) {
    return lookup[[i, j]];
  } else if (i === s1.length) {
    return s2.length - j;
  } else if (j === s2.length) {
    return s1.length - i;
  } else if (s1[i] === s2[j]) {
    lookup[[i, j]] = 1 + scsTopDown(s1, s2, i + 1, j + 1, lookup);
    return lookup[[i, j]];
  } else {
    lookup[[i, j]] =
      1 +
      Math.min(
        scsTopDown(s1, s2, i + 1, j, lookup),
        scsTopDown(s1, s2, i, j + 1, lookup)
      );
    return lookup[[i, j]];
  }
}

function scsBottomUp(s1, s2) {
  const n = s1.length;
  const m = s2.length;
  let dp = [];
  for (let i = 0; i < n + 1; i++) {
    dp[i] = [];
    for (let j = 0; j < m + 1; j++) {
      dp[i][j] = 0;
    }
  }
  for (let i = 0; i < n + 1; i++) {
    dp[i][m] = n - i;
  }

  for (let j = 0; j < m; j++) {
    dp[n][j] = m - j;
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      if (s1[i] === s2[j]) {
        dp[i][j] = 1 + dp[i + 1][j + 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }

  return dp[0][0];
}

let s1 = "abac";
let s2 = "cab";
console.log(scsTopDown(s1, s2));
console.log(scsBottomUp(s1, s2));
