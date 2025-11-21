
var MedianFinder = function() {
    this.minHeap = new MinPriorityQueue();
    this.maxHeap = new MaxPriorityQueue();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.maxHeap.enqueue(num);
    this.minHeap.enqueue(this.maxHeap.dequeue().element);
    if (this.maxHeap.size() < this.minHeap.size()) {
        this.maxHeap.enqueue(this.minHeap.dequeue().element);
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.maxHeap.size() > this.minHeap.size()) {
        return this.maxHeap.front().element;
    }
    else {
        return (this.maxHeap.front().element + this.minHeap.front().element)/2;
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
