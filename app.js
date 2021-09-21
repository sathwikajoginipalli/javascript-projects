// function multiply(f){
//   return function(x){
//     return function(y){
//       return f(x,y);
//     }
//   }

// }

// function sum(x,y){
//   console.log(x+y);
// }
// let multiplytwo = multiply(sum);
// multiplytwo(12)(5);
// function cuurying

// let sname = {
//   firstname: "Sathwika",
//   lastname: "Joginipalli"
// }

// let printname = function(hometown) {
//   console.log(this.firstname+" "+this.lastname+" from "+hometown);
// }

// printname.call(sname,"karimnagar");
// printname.apply(sname,["karimnagar"]);

// let printnames = printname.bind(sname,"karimnagar");
// printnames();
//  call, apply and bind methods

// let sname = {
//     firstname: "Sathwika",
//     lastname: "Joginipalli"
//   }
  
//   let printname = function(hometown,city) {
//     console.log(this.firstname+" "+this.lastname+" from "+hometown+" ,"+city);
//   }

//   let printnames = printname.bind(sname,"karimnagar");
//   printnames("karimnagar");

//   Function.prototype.mybind = function(...args){
//     let obj = this;
//     params = args.slice(1);
//     return function(...args2){
//       obj.apply(args[0],[...params,...args2])
      
//     }
//   }

//   let printname2 = printname.mybind(sname,"karimnagar");
//   printname2("karimnagar");
//  polyfill for bind function


// const sname = [
// {name: "Sathwika"},
// {name: "Joginipalli"}

// ]

// function getname(){
//     setTimeout(()=>{
//         let output='';
//         sname.map((s)=>{
//             output+=`<li>${s.name}</li>`;
//         });

//         document.body.innerHTML = output;

//     },1000);
// }


// function setname(p){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             sname.push(p);
//             error = false;
//             if (!error){
//                 resolve();
//             }
//             else{
//                 reject('error:something went wrong!!');
//             }
    
//         },2000);

//     })
// }

// setname({name:"sathwi"})
// .then(getname)
// .catch(err=>{
//     console.log(err);
// });
//Promise

// const sname = [
//     {name: "Sathwika"},
//     {name: "Joginipalli"}
    
//     ]
    
//     function getname(){
//         setTimeout(()=>{
//             let output='';
//             sname.map((s)=>{
//                 output+=`<li>${s.name}</li>`;
//             });
    
//             document.body.innerHTML = output;
    
//         },1000);
//     }
//     function setname(p){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 sname.push(p);
//                 error = false;
//                 if(!error){
//                     resolve();
//                 }
//                 else{
//                     reject('error:something happened');
//                 }
//             },7000);

//         })

//     }
//     async function init(){
//         await setname({name:"dhruv"})
//         getname();
//     }
//     init();
// async await

// const promise1 = Promise.resolve("Hello");
// const promise2 = 90;
// const promise3 = new Promise((resolve,reject)=>{
//     flag = true;
//     if (!flag){
//         setTimeout(resolve,2000,'helloooooo');
//     }
//     else{
//         reject('error:I am an error');
//     }
// })

// Promise.all([promise1,promise2,promise3]).then(values=>{
//     console.log(values);
// }).catch(err=>{
//     console.log(err);
// })
//Promise /all

// let radius = [2,3,4,5];

// Array.prototype.calculate=function(callback){
//     let output = []
//     for(let i=0;i<this.length;i++){
//         output.push(callback(this[i]));
//     }
//     return output;

// }
// //polufill for map function

// const area=(radius)=>{
//     return Math.PI*radius*radius;
// }

// const circumference=(radius)=>{
//     return 2*Math.PI*radius;
// }

// const diameter=(radius)=>{
//     return 2*radius;
// }

// console.log(radius.calculate(area));
// console.log(radius.calculate(circumference));
// console.log(radius.calculate(diameter));
// console.log(radius.map(area));

// let sname = {
//     firstname: "Sathwika",
//     lastname: "Joginipalli"
//   }
  
//   let printname = function(hometown,city) {
//     console.log(this.firstname+" "+this.lastname+" from "+hometown+" ,"+city);
//   }

//   let printnames = printname.bind(sname,"karimnagar");
//   printnames("karimnagar");

//   Function.prototype.mybind = function (...args){
//     let obj = this;
//     params = args.slice(1);
//     return function(...args2){
//     obj.apply(args[0],[...params,...args2])
      
//     }
//   }

//   let printname2 = printname.mybind(sname,"karimnagar");
//   printname2("karimnagar");

// const o1 = { question: null, answer: 42 };
// const o2 = { question: null,answer: 42 };
// console.log(JSON.stringify(o1) === JSON.stringify(o2)); 

// let x;
// console.log(x);


// function sum(x){
//     return function hello(){
//         return ()=>{
//             console.log(`I'm a callback function,I can access ${x}`)
//         }
//     }
// }

// const hi = sum(3);
// hi()();

// function* gen()
//         {
//             yield 5;
//             yield 6;
//         }
// let a = gen();
// console.log(a.next());
// console.log(a.next());
// console.log(a.next()); 

// function* gen() {
//     document.write('<br>observer:', yield 1);
// }
// var a = gen();
// var i = a.next();
// while (!i.done) {
//     document.write('<br>iterator:', i.value);
//     i = a.next(100);
// }

// let str = "Hello JavaScript";
//         // does the same as
//         // for (let char of str) console.log(char);
//         let iterator = str[Symbol.iterator]();
//         while (true) {
//             let result = iterator.next();
//             if (result.done) break;
//             console.log(' ', result.value); // outputs characters one by one
//         }

// const a= 10;
// if(true){
// console.log(a);
// const a=20;
// }

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
// //   res.write(req.url);
//   res.end("Hello World");
// }).listen(8080);

// let n = [1,2,2,3,4,5];
// let x = [2,3,4,5];
//  y=[...x,...n];
// console.log(y)


