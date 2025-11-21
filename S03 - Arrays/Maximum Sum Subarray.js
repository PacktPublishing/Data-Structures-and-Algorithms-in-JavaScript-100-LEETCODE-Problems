/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSoFar = nums[0];
    let currentSum = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        if (currentSum < 0) {
            currentSum = 0;
        }
        currentSum += nums[i];
        if (currentSum > maxSoFar) {
            maxSoFar = currentSum;
        }
    }
    
    return maxSoFar;
};