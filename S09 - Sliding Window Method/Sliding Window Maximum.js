function maxSlidingWindow(nums, k) {
  const de = [];
  const answers = [];
  const n = nums.length;

  de.push(0);
  for (let i = 1; i < k; i++) {
    while (de.length > 0 && nums[de[de.length - 1]] < nums[i]) {
      de.pop();
    }
    de.push(i);
  }
  answers.push(nums[de[0]]);

  for (let j = k; j < n; j++) {
    const startingPoint = j - k + 1;
    while (de.length > 0 && de[0] < j - k + 1) {
      de.shift();
    }
    while (de.length > 0 && nums[de[de.length - 1]] < nums[j]) {
      de.pop();
    }
    de.push(j);
    answers.push(nums[de[0]]);
  }

  return answers;
}

