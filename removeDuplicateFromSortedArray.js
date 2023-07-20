function removeDuplicates(nums) {
  let firstPointer = 0;
  let secondPointer = 1;
  while (firstPointer < nums.length && secondPointer < nums.length) {
    if (nums[firstPointer] === nums[secondPointer]) {
      secondPointer += 1;
    } else {
      [nums[firstPointer + 1], nums[secondPointer]] = [
        nums[secondPointer],
        nums[firstPointer + 1],
      ];
      firstPointer += 1;
      secondPointer += 1;
    }
  }
  return firstPointer + 1;
}

let nums = [1, 1, 2];
console.log(removeDuplicates(nums));
