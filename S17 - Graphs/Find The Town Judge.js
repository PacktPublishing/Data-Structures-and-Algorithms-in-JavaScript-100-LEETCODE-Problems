/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
  let outdegree = new Array(n + 1);
  let indegree = new Array(n + 1);
  for(let i = 0; i < n + 1; i++) {
    indegree[i] = 0;
    outdegree[i] = 0;
  }

  for(let i = 0; i < trust.length; i++) {
    let rel = trust[i];
    let from = rel[0];
    let to = rel[1];
    indegree[to]++;
    outdegree[from]++;
  }

  for(let i = 1; i <= n; i++) {
    if (indegree[i] === n - 1 && outdegree[i] === 0) {
      return i;
    }
  }

  return -1;
};
