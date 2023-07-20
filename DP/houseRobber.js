function houseRobberTopDown(nums, i = 0, lookup = null) {
  lookup = lookup === null ? {} : lookup;
  if (lookup.hasOwnProperty(i)) {
    return lookup[i];
  }
  if (i >= nums.length) {
    return 0;
  } else {
    lookup[i] = Math.max(
      nums[i] + houseRobberTopDown(nums, i + 2, lookup),
      houseRobberTopDown(nums, i + 1, lookup)
    );
    return lookup[i];
  }
}

function houseRobberBottomDown(nums) {
  let n = nums.length;
  let dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = 0;
  }
  dp[0] = nums[0];
  dp[1] = Math.max(dp[0], nums[1]);
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[n - 1];
}

let nums = [1, 2, 3, 1];
console.log(houseRobberTopDown(nums));
console.log(houseRobberBottomDown(nums));
