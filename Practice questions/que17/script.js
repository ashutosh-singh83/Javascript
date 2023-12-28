let button=document.createElement("button");
button.innerText="Click Me";

let body=document.querySelector("body");
body.prepend(button);
button.style.color="white";
button.style.backgroundColor="red";