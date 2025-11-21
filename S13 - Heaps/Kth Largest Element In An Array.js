/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let pq = new MinPriorityQueue();
  for(let i = 0; i < k; i++) {
    pq.enqueue(nums[i]);
  }

  for(let i = k; i < nums.length; i++) {
    if (nums[i] >= pq.front().element) {
      pq.enqueue(nums[i]);
      pq.dequeue();
    }
  }

  return pq.front().element;
};
