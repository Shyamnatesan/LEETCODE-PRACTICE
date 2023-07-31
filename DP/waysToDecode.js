function waysToDecodeTopDown(s, i = 0, lookup = null) {
  lookup = lookup === null ? {} : lookup;
  if (i in lookup) {
    return lookup[i];
  } else if (s[i] === "0") {
    return 0;
  } else if (i === s.length) {
    return 1;
  } else if (
    i + 1 < s.length &&
    s[i] + s[i + 1] >= "10" &&
    s[i] + s[i + 1] <= "26"
  ) {
    lookup[i] =
      waysToDecodeTopDown(s, i + 1, lookup) +
      waysToDecodeTopDown(s, i + 2, lookup);
    return lookup[i];
  } else {
    lookup[i] = waysToDecodeTopDown(s, i + 1, lookup);
    return lookup[i];
  }
}

function waysToDecodeBottomUp(s) {
  const n = s.length;
  dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = 0;
  }
  if (s[0] === "0") {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  dp[0] = 1;
  dp[1] =
    Number(s[1] !== "0") + Number(s[0] + s[1] >= "10" && s[0] + s[1] <= "26");
  for (let i = 2; i < n; i++) {
    if (s[i] !== "0") {
      dp[i] += dp[i - 1];
    }
    if (s[i] + s[i - 1] >= "10" && s[i] + s[i - 1] <= "26") {
      dp[i] += dp[i - 2];
    }
  }
  console.log(JSON.stringify(dp));
  return dp[n - 1];
}

let s = "512810120129";
console.log(waysToDecodeTopDown(s));
console.log(waysToDecodeBottomUp(s));
