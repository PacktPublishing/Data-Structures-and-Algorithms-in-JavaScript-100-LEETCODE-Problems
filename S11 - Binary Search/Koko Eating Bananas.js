/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  let start = 1;
  let end = piles[0];
  for(let i = 1; i < piles.length; i++) {
    end = Math.max(end, piles[i]);
  }

  let ans = end;
  while (start <= end) {
    let mid = Math.floor((start + end)/2);

    if (isPossible(piles, h, mid)) {
      ans = mid;
      end = mid - 1;
    }
    else {
      start = mid + 1;
    }
  }

  return ans;

};

function isPossible(piles, h, speed) {
  let noOfHours = 0;
  for(let i = 0; i < piles.length; i++) {
    noOfHours += Math.ceil(piles[i]/speed);
  }

  return noOfHours <= h;
}
