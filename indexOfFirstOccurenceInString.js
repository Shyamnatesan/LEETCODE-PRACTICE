function findIndexOfFirstOccurence(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let val = checkEqual(haystack.slice(i, i + needle.length), needle, i);
      if (val !== -1) {
        return i;
      }
    }
  }
  return -1;
}

function checkEqual(string1, string2, index) {
  if (string1 === string2) {
    return index;
  }
  return -1;
}

let haystack = "hello";
let needle = "ll";
console.log(findIndexOfFirstOccurence(haystack, needle));
