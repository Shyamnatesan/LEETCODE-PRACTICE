var merge = function (nums1, m, nums2, n) {
  let lastValidElementNums1 = m - 1;
  let lastVaildElementNums2 = n - 1;
  let lastElementNums1 = nums1.length - 1;
  while (lastElementNums1 >= 0) {
    if (lastValidElementNums1 < 0) {
      nums1[lastElementNums1] = nums2[lastVaildElementNums2];
      lastVaildElementNums2 -= 1;
    } else if (lastVaildElementNums2 < 0) {
      nums1[lastElementNums1] = nums1[lastValidElementNums1];
      lastValidElementNums1 -= 1;
    } else {
      if (nums1[lastValidElementNums1] < nums2[lastVaildElementNums2]) {
        nums1[lastElementNums1] = nums2[lastVaildElementNums2];
        lastVaildElementNums2 -= 1;
      } else {
        nums1[lastElementNums1] = nums1[lastValidElementNums1];
        lastValidElementNums1 -= 1;
      }
    }
    lastElementNums1 -= 1;
  }
  return nums1;
};

let nums1 = [0];
let nums2 = [1];
let m = 0;
let n = 1;
console.log(merge(nums1, m, nums2, n));
