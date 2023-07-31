function smallestSubarrayGivenSum(arr, targetSum) {
  let minimumWindowLength = Number.MAX_SAFE_INTEGER;
  let currentWindowSum = 0;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    currentWindowSum += arr[windowEnd];

    while (currentWindowSum >= targetSum) {
      minimumWindowLength = Math.min(
        minimumWindowLength,
        windowEnd - windowStart + 1
      );
      currentWindowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  return minimumWindowLength;
}

let arr = [4, 2, 2, 7, 8, 1, 2, 8, 10];
let targetSum = 8;
console.log(smallestSubarrayGivenSum(arr, targetSum));
// SLIDING WINDOW WITH DYNAMIC WINDOW SIZE
