/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = [];
    let n = nums.length;
    nums.sort((a, b) => a - b);
    for(let i = 0; i < n; i++) {
        if (i == 0 || (i >= 1 && nums[i] != nums[i-1])) {
            let firstNo = nums[i];
            let target = -firstNo;
            let pairs = findPairs(nums, i + 1, n - 1, target);
            for(let j = 0; j < pairs.length; j++) {
                ans.push([firstNo, pairs[j][0], pairs[j][1]]);
            }
        }
    }
    
    return ans;
};

function findPairs(nums, start, end, target) {
    let f = start;
    let s = end;
    let pairs = [];
    
    while (f < s) {
        if (f - 1 >= start && nums[f-1] === nums[f]) {
            f++;
            continue;
        }
        if (s + 1 <= end && nums[s+1] === nums[s]) {
            s--;
            continue;
        }
        
        if (nums[f] + nums[s] < target) {
            f++;
        }
        else if (nums[f] + nums[s] > target) {
            s--;
        }
        else {
            pairs.push([nums[f], nums[s]]);
            f++;
        }
    }
    
    return pairs;
}