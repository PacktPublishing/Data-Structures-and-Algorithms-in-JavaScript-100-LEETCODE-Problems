/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const INT_MIN = -Math.pow(2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;
    if (dividend == INT_MIN && divisor === -1) {
        return INT_MAX;
    }
    else if (dividend === INT_MIN && divisor === +1) {
        return INT_MIN;
    }
    

    let isPositive = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0);
    let a = Math.abs(dividend);
    let b = Math.abs(divisor);

    let quotient = 0;

    if (a === b) {
        return isPositive ? 1 : -1;
    }

    while (a >= b) {
        let i = 0;
        while (b*Math.pow(2, i) <= a) {
            i++;
        }
        quotient += Math.pow(2, i - 1);
        a -= b*Math.pow(2, i - 1);
    }

    return isPositive ? quotient : -quotient;
};
