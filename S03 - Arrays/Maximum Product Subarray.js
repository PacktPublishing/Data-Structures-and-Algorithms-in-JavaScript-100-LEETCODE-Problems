/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let ans = 0;
  if (nums.length == 1) {
    return nums[0];
  }
  let currentProduct = 1;
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      currentProduct *= nums[i];
      ans = Math.max(ans, currentProduct);
    }
    else {
      currentProduct = 1;
    }
  }

  currentProduct = 1;
  for(let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] != 0) {
      currentProduct *= nums[i];
      ans = Math.max(ans, currentProduct);
    }
    else {
      currentProduct = 1;
    }
  }

  return ans;
};
