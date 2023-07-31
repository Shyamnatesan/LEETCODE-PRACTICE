function maxSubarraySumWithSizeK(arr, k) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  let currentSum = 0;
  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }
  maxSum = Math.max(maxSum, currentSum);
  for (let j = k; j < arr.length; j++) {
    currentSum = currentSum + arr[j] - arr[j - k];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

let arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
let k = 3;
console.log(maxSubarraySumWithSizeK(arr, k));

// SLIDING WINDOW WITH STATIC WINDOW SIZE
