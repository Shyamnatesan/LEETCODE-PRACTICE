function editDistanceTopDown(word1, word2, i = 0, j = 0, lookup = null) {
  lookup = lookup === null ? {} : lookup;
  if ([i, j] in lookup) {
    return lookup[[i, j]];
  }
  if (i === word1.length) {
    return word2.length - j;
  } else if (j === word2.length) {
    return word1.length - i;
  } else if (word1[i] === word2[j]) {
    lookup[[i, j]] = editDistanceTopDown(word1, word2, i + 1, j + 1, lookup);
    return lookup[[i, j]];
  } else {
    lookup[[i, j]] =
      1 +
      Math.min(
        editDistanceTopDown(word1, word2, i + 1, j, lookup),
        editDistanceTopDown(word1, word2, i, j + 1, lookup),
        editDistanceTopDown(word1, word2, i + 1, j + 1, lookup)
      );
    return lookup[[i, j]];
  }
}

function editDistanceBottomUp(word1, word2) {
  const n = word1.length;
  const m = word2.length;
  dp = [];
  for (let i = 0; i < n + 1; i++) {
    dp[i] = [];
    for (let j = 0; j < m + 1; j++) {
      dp[i][j] = 0;
    }
  }

  for (let i = n; i >= 0; i--) {
    dp[i][m] = n - i;
  }

  for (let j = m - 1; j >= 0; j--) {
    dp[n][j] = m - j;
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      if (word1[i] === word2[j]) {
        dp[i][j] = dp[i + 1][j + 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i][j + 1], dp[i + 1][j], dp[i + 1][j + 1]);
      }
    }
  }

  return dp[0][0];
}

let word1 = "intention";
let word2 = "execution";
console.log(editDistanceTopDown(word1, word2));
console.log(editDistanceBottomUp(word1, word2));
