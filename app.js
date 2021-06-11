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