function searchInsert(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let middle = Math.floor((end + start) / 2);
    if (target === nums[middle]) {
      return middle;
    } else if (target < nums[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return start;
}

let nums = [1, 3, 5, 6];
let target = 7;
console.log(searchInsert(nums, target));
