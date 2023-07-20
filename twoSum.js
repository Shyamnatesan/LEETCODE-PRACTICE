function twoSum(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (obj.hasOwnProperty(difference) && obj[difference] !== i) {
      return [obj[difference], i];
    }
    obj[nums[i]] = i;
  }

  return -1;
}

let nums = [2, 2, 11, 15, 7];
let target = 9;
console.log(twoSum(nums, target));
