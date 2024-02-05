let array=[];
for(let i=0;i<3;i++){
    array.push(i+1);
}
array.push(4,5);
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}
//pop from array
for(let i=array.length-1;i>=0;i--){
    let a=array.pop();
    console.log(a);
    console.log(array);
}