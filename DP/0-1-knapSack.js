function knapSack(values, weights, k, i = 0, lookup = null) {
  lookup = lookup === null ? {} : lookup;
  if ([k, i] in lookup) {
    return lookup[(k, i)];
  } else if (i === values.length) {
    return 0;
  } else if (weights[i] > k) {
    lookup[[k, i]] = knapSack(values, weights, k, i + 1, lookup);
    return lookup[[k, i]];
  } else {
    lookup[[k, i]] = Math.max(
      values[i] + knapSack(values, weights, k - weights[i], i + 1, lookup),
      knapSack(values, weights, k, i + 1, lookup)
    );
    return lookup[[k, i]];
  }
}

let values = [20, 30, 15];
let weights = [6, 13, 5];
let k = 20;
console.log(knapSack(values, weights, k));
