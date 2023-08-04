function jumpGame2(arr, i = 0, lookup = null) {
  lookup = lookup === null ? {} : lookup;
  if (i in lookup) {
    return lookup[i];
  } else if (i >= arr.length - 1) {
    return 0;
  } else {
    let result = Number.MAX_SAFE_INTEGER;
    for (let j = 1; j <= arr[i]; j++) {
      if (i + j <= arr.length - 1) {
        result = Math.min(result, 1 + jumpGame2(arr, i + j, lookup));
      }
    }
    lookup[i] = result;
    return lookup[i];
  }
}
function jumpGame2BottomUp(arr) {
  let dp = [];
  let n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    dp[i] = Number.MAX_SAFE_INTEGER;
  }

  dp[n - 1] = 0;

  for (let index = n - 2; index >= 0; index--) {
    let maxJump = Math.min(index + arr[index], n - 1);
    for (let j = 1 + index; j <= maxJump; j++) {
      dp[index] = Math.min(dp[index], 1 + dp[j]);
    }
  }

  return dp[0];
}

let arr = [2, 3, 0, 1, 4];
console.log(jumpGame2(arr));
console.log(jumpGame2BottomUp(arr));
