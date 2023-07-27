function maxSubarray(nums) {
  let maxSum = nums[0];
  let current = maxSum;
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(current + nums[i], nums[i]);
    maxSum = Math.max(maxSum, current);
  }
  return maxSum;
}

let nums = [5, 4, -1, 7, 8];
console.log(maxSubarray(nums));
