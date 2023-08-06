function isPalindrome(x) {
  if (x < 0) {
    return false;
  } else if (x < 9) {
    return true;
  }
  let y = 0;
  let temp = x;
  while (temp > 0) {
    let lastElement = temp % 10;
    y += lastElement;
    y *= 10;
    temp = Math.floor(temp / 10);
  }
  y = Math.floor(y / 10);
  return y === x;
}

let x = 121;
console.log(isPalindrome(x));
