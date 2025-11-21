/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    k = k%n;
    reverse(nums, 0, n - 1);
    reverse(nums, 0, k-1);
    reverse(nums, k, n - 1);
};

function reverse(nums, start, end) {
    let i = start, j = end;
    while (i < j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }
}
