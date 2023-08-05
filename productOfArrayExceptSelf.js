function productOfArrayExceptSelf(nums) {
  let n = nums.length;
  let result = [];
  // developing the left array
  let left = [];
  left[0] = 1;
  for (let i = 1; i < n; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }
  // developing the right array
  let right = [];
  for (let i = 0; i < n; i++) right[i] = 0;
  right[n - 1] = 1;
  for (let j = n - 2; j >= 0; j--) {
    right[j] = nums[j + 1] * right[j + 1];
  }
  //merging both
  for (let i = 0; i < n; i++) {
    result[i] = left[i] * right[i];
  }
  return result;
}

let nums = [1, 2, 3, 4];
console.log(productOfArrayExceptSelf(nums));
