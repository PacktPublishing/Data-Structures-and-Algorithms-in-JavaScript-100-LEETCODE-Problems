var combinationSum = function(candidates, target) {
    let answer = [];

    function f(i, rem, combination, candidates) {
        if (i === candidates.length) {
            if (rem === 0) {
                let combi = [...combination];
                answer.push(combi);
            }
        }
        else {
            let maxTimes = Math.floor(rem / candidates[i]);
            for (let k = 0; k <= maxTimes; k++) {
                let newTarget = rem - k * candidates[i];
                for (let j = 0; j < k; j++) {
                    combination.push(candidates[i]);
                }
                f(i + 1, newTarget, combination, candidates);
                for (let j = 0; j < k; j++) {
                    combination.pop();
                }
            }
        }
    }

    f(0, target, [], candidates);
    return answer;
};
