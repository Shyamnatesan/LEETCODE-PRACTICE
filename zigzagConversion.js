function zigzagConversion(s, n) {
  if (n === 1) {
    return s;
  }
  let result = "";
  for (let i = 0; i < n; i++) {
    let increment = 2 * (n - 1);
    for (let j = i; j < s.length; j += increment) {
      result += s[j];
      if (i > 0 && i < n - 1 && j + (increment - 2 * i) < s.length) {
        result += s[j + (increment - 2 * i)];
      }
    }
  }
  return result;
}

let s = "PAYPALISHIRING";
let n = 4;
console.log(zigzagConversion(s, n));
