/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let ans = 0, fp = 0, sp = 0;
  let n = s.length;
  let map = new Map();

  while (sp < n) {
    addToMap(map, s.charAt(sp));
    while (fp < sp && !isValid(map)) {
      deleteFromMap(map, s.charAt(fp));
      fp++;
    }
    let length = sp - fp + 1;
    if (length > ans) {
      ans = length;
    }
    sp++;
  }

  return ans;
};

function addToMap(map, ch) {
  if (!map.has(ch)) {
    map.set(ch, 1);
  }
  else {
    map.set(ch, map.get(ch) + 1);
  }
}

function deleteFromMap(map, ch) {
  map.set(ch, map.get(ch) - 1);
}

function isValid(map) {
  let valid = true;
  map.forEach((val, key) => {
    if (val > 1) {
      valid = false;
    }
  });
  return valid;
}
