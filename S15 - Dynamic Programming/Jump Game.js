/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let maxReachable = nums[0];
  let i = 0;
  while (i < nums.length && maxReachable >= i) {
    if (i + nums[i] > maxReachable) {
      maxReachable = i + nums[i];
    }
    i++;
  }

  return maxReachable >= nums.length - 1;
};
