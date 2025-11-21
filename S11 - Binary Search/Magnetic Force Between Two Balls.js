/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
  position.sort((a, b) => a - b);
  let n = position.length;
  console.log(position);
  let start = 1, end = position[n - 1] - position[0];
  let ans = 1;

  while (start <= end) {
    let mid = Math.floor((start + end)/2);
    if (isDistancePossible(position, m, mid)) {
      ans = mid;
      start = mid + 1;
    }
    else {
      end = mid - 1;
    }
  }

  return ans;
};

function isDistancePossible(position, m, distance) {
  let noOfBalls = 1;
  let lastPosition = position[0];

  for(let i = 1; i < position.length && noOfBalls < m; i++) {
    if (position[i] >= lastPosition + distance) {
      noOfBalls++;
      lastPosition = position[i];
    }
  }

  return noOfBalls === m;
}
