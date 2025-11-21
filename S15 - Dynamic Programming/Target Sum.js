/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  let map = new Map();
  return f(0, target, nums, map);
};

function f(i, requiredSum, nums, map) {
  if (i === nums.length - 1) {
    if (requiredSum === 0 && nums[i] === 0) {
      return 2;
    }
    else if (requiredSum !== 0 && Math.abs(requiredSum) === Math.abs(nums[i])) {
      return 1;
    }
    else {
      return 0;
    }
  }
  else {
    let key = i + '-' + requiredSum;
    if (!map.has(key)) {
      let ans = f(i + 1, requiredSum - nums[i], nums, map) + f(i + 1, requiredSum + nums[i], nums, map);
      map.set(key, ans);
    }
    return map.get(key);
  }
}
