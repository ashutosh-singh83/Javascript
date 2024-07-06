const obj={
    fullName:"Ashutosh",
    
    rollNo:46,
    age:20,
    college:"DYPIEMR",
    cgpa:8.0
};
let strlength=0;
for(let key in obj){
    if(typeof obj[key]=="string"){
        strlength+=obj[key].length;
    }
}
console.log("Length of all string values:",strlength);
