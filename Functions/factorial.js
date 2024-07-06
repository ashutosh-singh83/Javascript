const findFactorial=(n)=>{
    if(n==0||n==1) return 1;
    return n*findFactorial(n-1);
}
let ans=findFactorial(4);
console.log(ans);