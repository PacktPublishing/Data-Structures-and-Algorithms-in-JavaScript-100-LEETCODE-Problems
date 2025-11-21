/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minSoFar = prices[0];
    let ans = 0;
    for(let i = 1; i < prices.length; i++) {
        ans = Math.max(ans, prices[i] - minSoFar);
        minSoFar = Math.min(minSoFar, prices[i]);
    }
    
    return ans;
};