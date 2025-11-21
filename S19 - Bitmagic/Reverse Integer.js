/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MIN = Math.pow(2, 31) * -1;
    const INT_MAX = Math.pow(2, 31) - 1;
    
    let reversedNum = 0;
    let sign = x < 0 ? -1 : 1;
    
    console.log(x);
    console.log(INT_MIN);

    if (x <= INT_MIN) {
        return 0;
    }
    
    x = Math.abs(x);

    while (x !== 0) {
        let digit = x % 10;
        if (reversedNum <= INT_MAX/10) {
            reversedNum = reversedNum * 10 + digit;
            x = Math.floor(x / 10);
        }
        else {
            return 0;
        }
    }

    return reversedNum *= sign;

};
