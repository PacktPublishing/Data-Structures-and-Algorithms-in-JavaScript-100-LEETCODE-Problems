/**
 * @param {number[]} nums
 * @return {number}
 */
let dp;
var rob = function(nums) {
  dp = new Array(2);
  dp[0] = new Array(nums.length);
  dp[1] = new Array(nums.length);
  for(let i = 0; i < 2; i++) {
    for(let j = 0; j < nums.length; j++) {
      dp[i][j] = -1;
    }
  }

  return f(0, 1, nums);
};

function f(i, canRob, nums) {
  if (i === nums.length - 1) {
    if (canRob) {
      return nums[i];
    }
    else {
      return 0;
    }
  }
  else {
    if (dp[canRob][i] !== -1) {
      return dp[canRob][i];
    }
    if (canRob) {
      dp[canRob][i] = Math.max(nums[i] + f(i + 1, 0, nums), f(i + 1, 1, nums));
    }
    else {
      dp[canRob][i] = f(i + 1, 1, nums);
    }

    return dp[canRob][i];
  }
}
