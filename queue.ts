interface Queue{
    enqueue(item);
    dequeue();
    length():number;
}

class CQueue implements Queue{
    private queue=[];
    enqueue(item){
        this.queue.push(item);
    }
    dequeue(){
        return this.queue.shift();
    }
    length():number{
        return this.queue.length;
    }
}

var q = new CQueue();
q.enqueue("John");
q.enqueue("Adam");
q.enqueue("Joe");
q.enqueue("Tom");
console.log(q.length());  //4
console.log(q.dequeue()); //John
console.log(q.length());  //3