function removeElement(nums1, val) {
  let firstPointer = 0;
  let secondPointer = nums1.length - 1;
  while (firstPointer < secondPointer) {
    if (nums1[firstPointer] === val && nums1[secondPointer] !== val) {
      [nums1[firstPointer], nums1[secondPointer]] = [
        nums1[secondPointer],
        nums1[firstPointer],
      ];
    }
    if (nums1[firstPointer] !== val) {
      firstPointer += 1;
    }
    if (nums1[secondPointer] === val) {
      secondPointer -= 1;
    }
  }

  let count = 0;
  for (let i = 0; i < firstPointer + 1; i++) {
    if (nums1[i] !== val) {
      count++;
    }
  }
  return count;
}

let nums1 = [4, 5];
let val = 4;
console.log(removeElement(nums1, val));
