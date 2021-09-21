interface Stack{
    push(item);
    pop();
    peek();
    length():number;
}

class CStack implements Stack{
    private stack = [];
    push(item){
        this.stack.push(item);
    }
    pop(){
        return this.stack.pop();
    }
    peek(){
        return this.stack[this.length()-1];
    }
    length():number{
        return this.stack.length;
    }
}

var s = new CStack();
s.push("John");
s.push("Mary");
s.push("Adam");
s.push("Joe");
console.log(s.length());  //4
console.log(s.pop());     //Joe
console.log(s.length());  //3
console.log(s.peek());    //Adam