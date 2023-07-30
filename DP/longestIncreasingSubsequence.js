// SOLUTION 1
function lis(arr, i = 0, prev = Number.MIN_SAFE_INTEGER) {
  if (i === arr.length) {
    return 0;
  } else if (arr[i] <= prev) {
    return lis(arr, i + 1, prev);
  } else {
    return Math.max(1 + lis(arr, i + 1, arr[i]), lis(arr, i + 1, prev));
  }
}
// SOLUTION 2
function lis2(arr) {
  //O(N^2)
  lookup = {};
  function rec(arr, i, lookup = null) {
    if (i in lookup) {
      return lookup[i];
    }
    let maxlen = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        maxlen = Math.max(maxlen, rec(arr, j, lookup));
      }
    }
    lookup[i] = 1 + maxlen;
    return lookup[i];
  }
  return Math.max(...arr.map((value, i) => rec(arr, i, lookup)));
}

//SOLUTION 3
function lisBottomUp(arr) {
  //O(N^2)
  const n = arr.length;
  let dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = 0;
  }
  dp[0] = 1;
  for (let i = 1; i < n; i++) {
    let maxlen = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && dp[j] > maxlen) {
        maxlen = dp[j];
      }
    }
    dp[i] = 1 + maxlen;
  }
  return Math.max(...dp);
}

let arr = [7, 5, 2, 4, 7, 2, 3, 6, 4, 5, 12, 1, 7];
console.log(lis(arr));
console.log(lis2(arr));
console.log(lisBottomUp(arr));
