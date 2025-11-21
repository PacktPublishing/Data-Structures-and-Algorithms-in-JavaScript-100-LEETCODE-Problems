/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
  let f = 0;
  let s = numbers.length - 1;
  const ans = [];

  while (f < s) {
    const sum = numbers[f] + numbers[s];
    if (sum < target) {
      f++;
    } else if (sum > target) {
      s--;
    } else {
      ans.push(f + 1);
      ans.push(s + 1);
      break;
    }
  }
  return ans;
}


