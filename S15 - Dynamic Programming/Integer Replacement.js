/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    ht = new Map();
    return f(n, ht);
};

function f(i, ht) {
    if (i <= 1) {
        return 0;
    }
    else {
        if (ht.has(i)) {
            return ht.get(i);
        }
        else {
            let ans = -1;
            if (i%2 === 0) {
                ans = 1 + f(i/2, ht);
            }
            else {
                ans = Math.min(f(i-1, ht), f(i+1, ht)) + 1;
            }
            ht.set(i, ans);
            return ans;
        }
    }
}