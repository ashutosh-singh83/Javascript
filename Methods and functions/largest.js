let nums=[1,2,5,9];
const output=nums.reduce((prev,curr)=>{
    return prev>curr?prev:curr;
})
console.log(output);