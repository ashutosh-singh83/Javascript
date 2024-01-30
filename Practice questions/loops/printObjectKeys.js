const obj={
    fullName:"Ashutosh",
    rollNo:46,
    age:20,
    cgpa:8.0
};
let count=0;
for(let key in obj){
    count++;
    console.log(key,":",obj[key]);
}
console.log("number of properties:",count);
