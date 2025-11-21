/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */


var networkDelayTime = function(times, N, K) {
    const graph = Array.from({ length: N }, () => []);
    for (const [u, v, w] of times) {
        graph[u - 1].push({ key: v - 1, value: w });
    }

    const distance = computeDistance(graph, K - 1);
    let ma = -Infinity;
    for (const d of distance) {
        ma = Math.max(ma, d);
    }
    if (ma === Infinity) {
        return -1;
    } else {
        return ma;
    }
};

function computeDistance(graph, k) {
    const dist = new Array(graph.length).fill(Infinity);
    const pq = new MinPriorityQueue({ compare: (a, b) => a[1] > b[1] });
    pq.enqueue([ k, 0 ]);
    while (!pq.isEmpty()) {
        const [top, currentDistance] = pq.dequeue();
        if (dist[top] > currentDistance) {
            dist[top] = currentDistance;
            for (const { key: v, value: w } of graph[top]) {
                if (dist[v] > currentDistance + w) {
                    pq.enqueue([v, currentDistance + w ]);
                }
            }
        }
    }
    return dist;
}
