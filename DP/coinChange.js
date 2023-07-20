function coinChangeTopDown(amount, possibleCoins) {
  if (amount === 0) {
    return 0;
  } else {
    count = Infinity;
    for (let coin of possibleCoins) {
      if (amount - coin >= 0) {
        count = Math.min(
          count,
          1 + coinChangeTopDown(amount - coin, possibleCoins)
        );
      }
    }

    return count;
  }
}

let amount = 3;
let possibleCoins = [2];
console.log(coinChangeTopDown(amount, possibleCoins));
