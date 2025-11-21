/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    
    let ans = 0;
    
    for(let num of nums) {
        if (!set.has(num  -1)) {
            let currentNum = num;
            let currentStreak = 1;
            
            while (set.has(currentNum + 1)) {
                currentStreak++;
                currentNum++;
            }
            
            if (currentStreak > ans) {
                ans = currentStreak;
            }
        }
    }
    
    return ans;
};
