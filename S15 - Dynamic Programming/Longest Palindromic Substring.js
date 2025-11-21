/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let ans = '';
    let n = s.length;
    
    let dp = new Array(n).fill(false)
    .map(() => new Array(n).fill(false));
    
    for(let i = 0; i < n; i++) {
        dp[i][i] = true;
        ans = s.substring(i, i + 1);
    }
    
    for(let i = 0; i < n - 1; i++) {
        if (s.charAt(i) === s.charAt(i + 1)) {
            dp[i][i + 1] = true;
            ans = s.substring(i, i + 2);
        }
    }
    
    for(let size = 3; size <= n; size++) {
        for(let i = 0; i + size - 1 < n; i++) {
            let start = i;
            let end = i + size - 1;
            if (s.charAt(start) === s.charAt(end)) {
                dp[start][end] = dp[start + 1][end - 1];
                if (dp[start][end] === true) {
                    ans = s.substring(start, end + 1);
                }
            }
        }
    }
    
    return ans;
};
