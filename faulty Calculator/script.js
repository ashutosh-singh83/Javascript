let a=Math.random();
console.log(a);
let b=Math.random();
console.log(b);
let op=prompt("Enter the operation to be performed: +,-,*,/");
if(a<10&&b<10){
    if(op=='+') console.log(a-b);
    else if(op=='*') console.log(a+b);
    else if(op=='-') console.log(a/b);
    else if(op=='/') console.log(a**b);
}else{
    if(op=='+') console.log(a+b);
    else if(op=='*') console.log(a*b);
    else if(op=='-') console.log(a-b);
    else if(op=='/') console.log(a/b);
}