let n=prompt("Enter any number:");
let arr=[];
for(let i=0;i<n;i++){
    arr[i]=i+1;
}
console.log(arr);
let sum=arr.reduce((res,curr)=>{
    return res+curr;
})
console.log("sum=",sum);
let factorial=arr.reduce((res,curr)=>{
    return res*curr;
})
console.log("Factorial=",factorial);