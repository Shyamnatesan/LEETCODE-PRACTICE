function subsetSum(arr, target, i = 0, lookup = null) {
  lookup = lookup === null ? {} : lookup;
  if ([target, i] in lookup) {
    return lookup[[target, i]];
  }
  if (target === 0) {
    return 1;
  } else if (i === arr.length || target < 0) {
    return 0;
  } else {
    lookup[[target, i]] =
      subsetSum(arr, target - arr[i], i + 1, lookup) +
      subsetSum(arr, target, i + 1, lookup);
    return lookup[[target, i]];
  }
}

let arr = [1, 2, 3, 1, 4];
let k = 6;
console.log(subsetSum(arr, k));
