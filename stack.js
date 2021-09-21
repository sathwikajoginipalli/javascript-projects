var CStack = /** @class */ (function () {
    function CStack() {
        this.stack = [];
    }
    CStack.prototype.push = function (item) {
        this.stack.push(item);
    };
    CStack.prototype.pop = function () {
        return this.stack.pop();
    };
    CStack.prototype.peek = function () {
        return this.stack[this.length() - 1];
    };
    CStack.prototype.length = function () {
        return this.stack.length;
    };
    return CStack;
}());
var s = new CStack();
s.push("John");
s.push("Mary");
s.push("Adam");
s.push("Joe");
console.log(s.length());
console.log(s.pop());
console.log(s.length());
console.log(s.peek());
