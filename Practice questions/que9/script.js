//finding average marks of student
let marks=[50,50,50,50,50];
let sum=0;
for(let i=0;i<marks.length;i++){
    sum+=marks[i];
}
console.log(`The average marks of class is: ${sum/marks.length}`);