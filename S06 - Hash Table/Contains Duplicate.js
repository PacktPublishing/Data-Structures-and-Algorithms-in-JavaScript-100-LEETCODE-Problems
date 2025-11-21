/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map();
    for (let num of nums) {
        if (!map.has(num)) {
            map.set(num, 1);
        } else {
            return true;
        }
    }
    return false;
};
