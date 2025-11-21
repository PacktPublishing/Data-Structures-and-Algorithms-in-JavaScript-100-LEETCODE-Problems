/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    }
    else if (a[0] > b[0]) {
      return 1;
    }
    else {
      return a[1] - b[1];
    }
   });

  let answer = [];

  answer.push(intervals[0]);

  for(let i = 1; i < intervals.length; i++) {
    let currentInterval = intervals[i];
    let lastInterval = answer[answer.length - 1];
    if (currentInterval[0] <= lastInterval[1]) {
      let newInterval = [Math.min(currentInterval[0], lastInterval[0]), Math.max(currentInterval[1], lastInterval[1])];
      answer.pop();
      answer.push(newInterval);
    }
    else {
      answer.push(currentInterval);
    }
  }

  return answer;

};
