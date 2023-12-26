//function to count no. of vowels in a string
function numOfVowels(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
            count++;
        }
    }
    console.log(count);
}
numOfVowels("stringae");
//by using arrow function
const countVow=(str)=>{
    let count=0;
    for(let i=0;i<str.length;i++){
        
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
            count++;
        }
    }
    return count;
}