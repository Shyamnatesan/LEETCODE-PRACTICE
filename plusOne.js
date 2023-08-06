function plusOne(digits) {
  let result = [];
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    }
    digits[i] = 0;
  }
  result[0] = 1;
  for (let i = 0; i < digits.length; i++) {
    result.push(0);
  }
  return result;
}

let digits = [9];
console.log(plusOne(digits));
