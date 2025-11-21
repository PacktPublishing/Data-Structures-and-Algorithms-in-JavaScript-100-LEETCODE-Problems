**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let mp = new Map();
    return f(0, n, mp);
};

function f(i, n, mp) {
    if (i > n) {
        return 0;
    }
    else if (i == n) {
        return 1;
    }
    else {
        if (mp.has(i)) {
            return mp.get(i);
        }
        else {
            let ans = f(i + 1, n, mp) + f(i + 2, n, mp);
            mp.set(i, ans);
            return ans;
        }
    }
}