function majorityElement(nums) {
  let n = nums.length;
  let obj = {};
  for (let i = 0; i < n; i++) {
    if (obj.hasOwnProperty(nums[i])) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }
  let result;
  for (let key in obj) {
    if (obj[key] > n / 2) {
      result = key;
      break;
    }
  }
  return result;
}

let nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));
