/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let ans = [-1, -1];
    let ht = new Map();
    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (ht.has(complement)) {
            ans[0] = ht.get(complement);
            ans[1] = i;
            break;
        }
        ht.set(nums[i], i);
    }
    return ans;
};