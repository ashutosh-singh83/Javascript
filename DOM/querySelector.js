let h1=document.querySelector("h2");
console.dir(h1.innerText);
h1.innerText+=" from Apna College";
let divs=document.querySelectorAll(".box");
let i=1;
for(div of divs){
    div.innerText=`new unique value ${i}`;
    i++;
}