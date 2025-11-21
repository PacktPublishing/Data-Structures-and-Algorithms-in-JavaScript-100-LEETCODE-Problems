/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let subsetsArr = [];
let numsArr = [];

var subsets = function(nums) {
  let subset = [];
  subsetsArr = [];
  numsArr = nums;
  backtrack(0, subset);
  return subsetsArr;
};

function backtrack(i, subset) {
  if (i >= numsArr.length) {
    let subsetArr = [];
    for(let i = 0; i < subset.length; i++) {
      subsetArr.push(subset[i]);
    }
    subsetsArr.push(subsetArr);
  }
  else {
    backtrack(i + 1, subset);

    subset.push(numsArr[i]);
    backtrack(i + 1, subset);
    subset.pop();
  }
}
