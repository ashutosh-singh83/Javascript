const incrementTwice=(arr)=>{
    for(let ele of arr){
        return ele+=2;
    }
    
}
let arr=[1,2,3,4,5];
incrementTwice(arr);
console.log(arr);