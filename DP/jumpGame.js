function jumpGame(arr, i = 0, lookup = null) {
  lookup = lookup === null ? {} : lookup;
  if (i in lookup) {
    return lookup[i];
  } else if (i === arr.length - 1) {
    return true;
  } else if (i > arr.length - 1) {
    return false;
  } else {
    let result = false;
    for (let j = 1; j <= arr[i]; j++) {
      if (i + j <= arr.length - 1) {
        result = result || jumpGame(arr, i + j, lookup);
      }
    }
    lookup[i] = result;
    return lookup[i];
  }
}

function jumpGameTopDown(arr) {
  //   let dp = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     dp[i] = false;
  //   }
  //   let n = arr.length;
  //   dp[n - 1] = true;
  //   let result = 0;
  //   for (let index = n - 2; index >= 0; index--) {
  //     for (let j = 1; j < arr[index]; j++) {
  //       if (arr[index] + j === n - 1) {
  //         dp[index] = true;
  //         result = index;
  //       }
  //     }
  //   }
  //   return dp[result];
  let lastReachable = arr.length - 1;
  for (let i = arr.length - 2; i >= 0; i--) {
    if (i + arr[i] >= lastReachable) {
      lastReachable = i;
    }
  }
  return lastReachable === 0;
}

let arr = [2, 3, 1, 1, 4];
console.log(jumpGame(arr));
console.log(jumpGameTopDown(arr));
