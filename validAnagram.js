function validAnagram(s, t) {
  let hash = {};
  for (let string of s) {
    hash[string] = string in hash ? hash[string] + 1 : 1;
  }
  for (let string of t) {
    if (string in hash) {
      hash[string] -= 1;
    } else {
      return false;
    }
  }
  console.log(hash);
  for (let j in hash) {
    if (hash[j] !== 0) {
      return false;
    }
  }
  return true;
}

let s = "ab";
let t = "a";
console.log(validAnagram(s, t));
