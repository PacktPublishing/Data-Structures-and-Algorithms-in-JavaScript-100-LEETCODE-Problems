/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let left = new Array(nums.length);
  let right = new Array(nums.length);

  let n = nums.length;

  left[0] = 1;
  for(let i = 1; i < nums.length; i++) {
    left[i] = left[i-1]*nums[i-1];
  }

  right[n-1] = 1;
  for(let i = n - 2; i >= 0; i--) {
    right[i] = right[i+1]*nums[i+1];
  }

  let output = new Array(nums.length);

  for(let i = 0; i < n; i++) {
    output[i] = left[i]*right[i];
  }

  return output;
};
