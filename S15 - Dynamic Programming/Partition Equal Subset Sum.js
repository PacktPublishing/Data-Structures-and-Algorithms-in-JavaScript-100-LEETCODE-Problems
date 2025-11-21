/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    
    if (sum%2 !== 0) {
        return false;
    }
    else {
        let target = sum/2;
        let dp = new Array(nums.length).fill(null).map(() => new Array(target + 1).fill(null));
        return partition(nums, 0, target, dp);
    }
};

function partition(nums, index, target, dp) {
    if (target < 0) {
        return false;
    }
    else if (index == nums.length) {
        return (target === 0);
    }
    else {
        if (dp[index][target] !== null) {
            return dp[index][target];
        }
        else {
            let result = partition(nums, index + 1, target - nums[index], dp) ||
                partition(nums, index + 1, target, dp);
            dp[index][target] = result;
            return result;
        }
    }
}
