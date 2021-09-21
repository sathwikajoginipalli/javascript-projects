// import fetch from 'node-fetch';
// const arr = [5,4,2,1,9];
// const double = arr.map((i)=>{
//     return i*2;
// });

// const triple = arr.map((i)=>{
//     return i*3;

// });

// const binary = arr.map((i)=>{
//     let x = i.toString(2);
//     return x.length<4?"0".repeat(4-x.length)+x:x;
// });

// const filter = arr.filter((i)=>{
//     return i>=2;
// })

// console.log(binary);


// let sname = {
//   firstname: "Sathwika",
//   lastname: "Joginipalli"
// }

// let printname = function(hometown,city) {
//   console.log(this.firstname+" "+this.lastname+" from "+hometown+"   "+city);
// }

// printname.call(sname,"karimnagar","knr");
// printname.apply(sname,["karimnagar","knr"]);

// let printnames = printname.bind(sname,"karimnagar");
// printnames("knr");

// Function.prototype.mybind = function(...args){
//     let obj = this;
//     params = args.slice(1);
//     return function(...args1){
//         obj.apply(args[0],[...params,...args1]);}

// }
// let printn = printname.mybind(sname,"karimnagar");
// printn("knr");

// function hello(){
//     return callback();
// }

// function callback(){
//     console.log("lol");
//     return another();
    
// }
// async function another(){
//     let data = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("here we go!");
//         },2000);
//     }).then(values=>console.log(values));
//     return await data; 
// }
// hello();


// arr = [1,2,3,4];
// const reducer=(prev,curr)=>prev*curr;
// let triple = arr.reduce(reducer,5);
// console.log(triple);

// var counter = (function() {
//     var privateCounter = 0;
//     function changeBy(val) {
//       privateCounter += val;
//     }
  
//     return {
//       increment: function() {
//         changeBy(1);
//       },
  
//       decrement: function() {
//         changeBy(-1);
//       },
  
//       value: function() {
//         return privateCounter;
//       }
//     };
//   })();

// console.log(counter.value()); 

// counter.increment();
// counter.increment();
// console.log(counter.value());  

// counter.decrement();
// console.log(counter.value()); 
  

// function counter(){
//     let count = 0;

//     function increment(step){
//         count+=step;
//         return count;
//     }
//     return increment;
// }


// let hi = counter();
// console.log(hi(9));


// const btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//   alert('You clicked me!');

//   let pElem = document.createElement('p');
//   pElem.textContent = 'This is a newly-added paragraph.';
//   document.body.appendChild(pElem);
// });