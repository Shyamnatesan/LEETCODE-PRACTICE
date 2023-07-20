function coinChangeTopDown(amount, possibleCoins, lookup = null) {
  lookup = lookup === null ? {} : lookup;
  if (amount in lookup) {
    return lookup[amount];
  }
  if (amount === 0) {
    return 0;
  } else {
    let minimumCoins = Infinity;
    for (let coin of possibleCoins) {
      if (amount - coin >= 0) {
        minimumCoins = Math.min(
          minimumCoins,
          1 + coinChangeTopDown(amount - coin, possibleCoins, lookup)
        );
      }
    }
    lookup[amount] = minimumCoins;
    return lookup[amount];
  }
}

function coinChangeMemoization(amount, possibleCoins) {
  let minimumCoins = coinChangeTopDown(amount, possibleCoins);
  if (minimumCoins === Infinity) {
    return -1;
  }
  return minimumCoins;
}

function coinChangeBottomUp(amount, possibleCoins) {
  let dp = [];
  for (let i = 0; i < amount + 1; i++) {
    dp[i] = Infinity;
  }

  dp[0] = 0;
  for (let i = 1; i < amount + 1; i++) {
    for (let coin of possibleCoins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
  }
  if (dp[amount] === Infinity) {
    return -1;
  }
  return dp[amount];
}

let amount = 11;
let possibleCoins = [1, 2, 5];
console.log(coinChangeMemoization(amount, possibleCoins));
console.log(coinChangeBottomUp(amount, possibleCoins));
