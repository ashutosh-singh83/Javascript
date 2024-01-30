const obj={
    fullName:"Ashutosh",
    college:"DYPIEMR",
    rollNo:46,
    age:20,
    cgpa:"8.0"
};
let dataType;
for(let key in obj){
    if(dataType===undefined){
        dataType=typeof obj[key];
    }
    else if(typeof obj[key]!==dataType){
        console.log("Values have different data types");
        return;
    }
}
console.log("Values have same data types");