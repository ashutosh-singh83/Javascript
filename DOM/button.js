let newBtn=document.createElement("button");
newBtn.innerText="Click Me";
newBtn.style.backgroundColor="Red";
newBtn.style.color="white";
let body=document.querySelector("body");
body.prepend(newBtn);
