let nums=[3,4,5];
nums.forEach((num)=>{
    console.log(num*num);//num**2
})
//another method

function calcSquare(num){
    console.log(num*num);
}
nums.forEach(calcSquare);