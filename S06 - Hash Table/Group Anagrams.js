function groupAnagrams(strs) {
  const map = new Map();
  for (const str of strs) {
    const arr = str.split("");
    arr.sort();
    const key = arr.join("");
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }
  const ans = [];
  for (const key of map.keys()) {
    ans.push(map.get(key));
  }
  return ans;
}

