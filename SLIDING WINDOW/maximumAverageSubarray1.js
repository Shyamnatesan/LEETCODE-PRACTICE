function findMaxAverage(nums, k) {
  let maximum = -Infinity;
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }
  let windowAverage = windowSum / k;
  maximum = Math.max(maximum, windowAverage);
  for (let j = k; j < nums.length; j++) {
    windowSum = windowSum - nums[j - k] + nums[j];
    windowAverage = windowSum / k;
    maximum = Math.max(maximum, windowAverage);
  }

  return maximum;
}

const nums = [1, 12, -5, -6, 50, 3];
const k = 4;
console.log(findMaxAverage(nums, k));
