//addition
//traditional function
function add(a,b){
    return a+b;
}
//traditional multiply function
function multiply(a,b){
    return a*b;
}
//arrow multiply function
const arrowMul=(a,b)=>a*b;
//arrow function
const arrowSum=(a,b)=>a+b;
let a=5,b=10;
let c=add(a,b);
let d=arrowSum(a,b);
console.log("Sum=",c);
console.log("arrowSum=",d);
console.log("Multiplication:",multiply(a,b));
console.log("arrowMultiplication:",arrowMul(a,b));