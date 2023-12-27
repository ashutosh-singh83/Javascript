// let content=document.querySelector("h2");
//         console.dir(content.innerText);
//         content.innerText+=" from Apna College."
let divs=document.querySelectorAll(".box");
console.log(divs);
let i=1;
for(div of divs){
    div.innerText=`new unique text ${i}`;
    i++;
}