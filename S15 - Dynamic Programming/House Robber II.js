/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n = nums.length;
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return nums[0];
    }
    else if (n == 2) {
        return Math.max(nums[0], nums[1]);
    }
    else {
        return Math.max(houseRob(nums, 0, n - 2), houseRob(nums, 1, n - 1));
    }
};

function houseRob(nums, start, end) {
    let n = nums.length;
    let dp = new Array(n).fill(0);
    
    dp[start] = nums[start];
    dp[start + 1] = Math.max(nums[start], nums[start + 1]);
    
    for(let i = start + 2; i <= end; i++) {
        dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1]);
    }
    
    return dp[end];
}
