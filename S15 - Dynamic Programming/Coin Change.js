/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let dp = new Array(amount + 1);
  for(let i = 0; i < amount + 1; i++) {
    dp[i] = 0;
  }
  return f(amount, coins, dp);
};

function f(i, coins, dp) {
  if (i <= 0) {
    return 0;
  }
  else {
    let ans = -1;
    if (dp[i] !== 0) {
      return dp[i];
    }
    for(let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        let val = f(i - coins[j], coins, dp);
        if (val !== -1 && (ans === -1 || val + 1 < ans )) {
          ans = val + 1;
        }
      }
    }
    dp[i] = ans;
    return ans;
  }
}
