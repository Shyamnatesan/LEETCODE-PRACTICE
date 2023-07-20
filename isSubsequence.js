function isSubsequence(s, t) {
  let firstpointer = 0;
  let secondpointer = 0;
  while (firstpointer < s.length && secondpointer < t.length) {
    if (s[firstpointer] != t[secondpointer]) {
      secondpointer += 1;
    } else {
      firstpointer += 1;
      secondpointer += 1;
    }
  }
  return firstpointer === s.length;
}

const s = "axc";
const t = "ahbgdc";
console.log(isSubsequence(s, t));
