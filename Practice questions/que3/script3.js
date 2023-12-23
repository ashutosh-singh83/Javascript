let score=prompt("Enter the score");
if(score>100 || score<0){
    console.log("Not valid");
}else if(score>=90&&score<=100){
    console.log("Your grade is A");
}else if(score>=70&&score<=89){
    console.log("Your grade is b");
}else if(score>=60&&score<=69){
    console.log("Your grade is C");
}else if(score>=50&&score<=59){
    console.log("Your grade is D");
}else{
    console.log("Your grade is F");
}