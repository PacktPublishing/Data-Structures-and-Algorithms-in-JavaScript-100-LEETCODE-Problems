/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let start = 1;
  let end = nums.length - 1;

  let ans = 1;

  while (start <= end) {
    let mid = Math.floor((start + end)/2);

    let count = 0;
    for(let i = 0; i < nums.length; i++) {
      if (nums[i] <= mid) {
        count++;
      }
    }

    if (count <= mid) {
      start = mid + 1;
    }
    else {
      ans = mid;
      end = mid - 1;
    }
  }

  return ans;
};
