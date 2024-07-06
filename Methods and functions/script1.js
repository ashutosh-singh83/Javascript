let n=5;
let arr=[];
for(let i=0;i<n;i++){
    arr[i]=i+1;
}
console.log(arr);
let sum=arr.reduce((res,curr)=>{
    return res+curr;
})
console.log("sum=",sum);
let product=arr.reduce((res,curr)=>{
    return res*curr;
})
console.log("product=",product);