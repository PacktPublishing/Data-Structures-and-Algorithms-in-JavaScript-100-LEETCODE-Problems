/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = [];
    for(let i = 0; i <= n; i++) {
        ans.push(getNoOfSetBits(i));
    }
    return ans;
};

function getNoOfSetBits(x) {
    let count = 0;
    for(let i = 0; i <= 31; i++) {
        if ((x & (1 << i)) > 0) {
            count++;
        }
    }
    return count;
}