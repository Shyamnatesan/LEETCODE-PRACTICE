function rotateArray(nums, k) {
  if (k > nums.length) {
    k = k % nums.length;
  }
  reverseArray(nums, 0, nums.length - k - 1);
  reverseArray(nums, nums.length - k, nums.length - 1);
  reverseArray(nums, 0, nums.length - 1);
  return nums;
}

function reverseArray(nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start += 1;
    end -= 1;
  }
}

let nums = [-1, -100, 3, 99];
let k = 2;
console.log(rotateArray(nums, k));
