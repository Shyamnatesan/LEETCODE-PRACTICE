function mainFunction(n) {
  let obj = {};
  let result = false;
  return isHappy(n, obj, result);
}
function isHappy(number, obj, result) {
  let sum = 0;
  while (number > 0) {
    let lastNumber = number % 10;
    sum += lastNumber * lastNumber;
    number = Math.floor(number / 10);
  }
  if (sum === 1) result = true;
  else if (obj.hasOwnProperty(sum)) result = false;
  else {
    obj[sum] = true;
    return isHappy(sum, obj, result);
  }
  return result;
}

let number = 13;
console.log(mainFunction(number));
