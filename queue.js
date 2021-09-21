var CQueue = /** @class */ (function () {
    function CQueue() {
        this.queue = [];
    }
    CQueue.prototype.enqueue = function (item) {
        this.queue.push(item);
    };
    CQueue.prototype.dequeue = function () {
        return this.queue.shift();
    };
    CQueue.prototype.length = function () {
        return this.queue.length;
    };
    return CQueue;
}());
var q = new CQueue();
q.enqueue("John");
q.enqueue("Adam");
q.enqueue("Joe");
q.enqueue("Tom");
console.log(q.length());
console.log(q.dequeue());
console.log(q.length());
