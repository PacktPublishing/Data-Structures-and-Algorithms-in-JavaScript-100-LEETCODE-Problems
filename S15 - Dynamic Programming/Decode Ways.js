/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (!s || s[0] == '0') {
        return 0;
    }
    
    let n = s.length;
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    
    for(let i = 2; i <= n; i++) {
        let singleDigit = parseInt(s.substr(i - 1, 1));
        let doubleDigit = parseInt(s.substr(i - 2, 2));
        
        if (singleDigit >= 1 && singleDigit <= 9) {
            dp[i] += dp[i-1];
        }
        if (doubleDigit >= 10 && doubleDigit <= 26) {
            dp[i] += dp[i-2];
        }
    }
    
    return dp[n];
};
