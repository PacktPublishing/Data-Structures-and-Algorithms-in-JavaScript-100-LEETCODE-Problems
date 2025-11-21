/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function getSum(a, b) {
    let carry = 0;
    while (b !== 0) {
        let carry = (a & b) << 1;
        a = a ^ b;
        b = carry;
    }

    return a;
}
