/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let x = 0;
    for(let i = 0; i <= nums.length; i++) {
        x = x^i;
    }
    
    let y = 0;
    for(let i = 0; i < nums.length; i++) {
        y = y^nums[i];
    }
    
    return x^y;
};
