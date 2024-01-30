let companies=['bloomberg','microsoft','uber','google','IBM', 'Netflix'];
console.log(companies);
// remove first company from array
let deleted=companies.shift();
console.log(`${deleted} is deleted`);
console.log(companies);
//remove uber and add ola
companies.splice(1,1,"OLA");
console.log(companies);
//add amazon at end
companies.push("Amazon");
console.log(companies);