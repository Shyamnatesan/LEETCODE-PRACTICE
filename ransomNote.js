function ransomNote(ransom, magazine) {
  let obj = {};
  for (let i = 0; i < ransom.length; i++) {
    if (obj.hasOwnProperty(ransom[i])) obj[ransom[i]] += 1;
    else obj[ransom[i]] = 1;
  }
  let uniqueElements = Object.keys(obj).length;
  for (let j = 0; j < magazine.length; j++) {
    if (obj.hasOwnProperty(magazine[j])) obj[magazine[j]] -= 1;
  }
  let count = 0;
  for (let key in obj) {
    if (obj[key] <= 0) count += 1;
  }
  return count === uniqueElements;
}

let ransom = "bg";
let magazine = "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj";
console.log(ransomNote(ransom, magazine));
