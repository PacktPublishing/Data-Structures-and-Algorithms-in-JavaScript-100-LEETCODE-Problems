/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  let st = [];
  st.push(0);

  let ans = new Array(nums.length);

  for(let i = 1; i < nums.length; i++) {
    let current = nums[i];
    while (st.length > 0 && nums[st[st.length - 1]] < current) {
      ans[st[st.length - 1]] = current;
      st.pop();
    }
    st.push(i);
  }

  for(let i = 0; i < nums.length; i++) {
    let current = nums[i];
    while (st.length > 0 && nums[st[st.length - 1]] < current) {
      ans[st[st.length - 1]] = current;
      st.pop();
    }
  }

  while (st.length > 0) {
    ans[st[st.length - 1]] = -1;
    st.pop();
  }


  return ans;

};
