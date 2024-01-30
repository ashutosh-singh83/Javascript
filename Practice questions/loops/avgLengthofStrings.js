let strings=["I","am","a","college","student"];

let totalLength=0;
let numberOfStrings=0;
for(string of strings){
    totalLength+=string.length;
    numberOfStrings++;
}
console.log("Average length of Strings:",totalLength/numberOfStrings);