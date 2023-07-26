function twoSum(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let result = [];
  while (start < end) {
    let sum = nums[start] + nums[end];
    if (sum === target) {
      result.push(start + 1, end + 1);
      return result;
    } else if (sum > target) {
      end -= 1;
    } else {
      start += 1;
    }
  }
  return result;
}

let nums = [-1, 0];
let target = -1;
console.log(twoSum(nums, target));
// input array is sorted
// solve using two pointers
