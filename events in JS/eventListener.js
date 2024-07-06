let btn1=document.querySelector("#btn1");
btn1.addEventListener("click",()=>{
    console.log("buttin 1 was clickred-HANDLER1");
})
btn1.addEventListener("click",()=>{
    console.log("buttin 1 was clickred-HANDLER2");
})
let handler3=()=>{
    console.log("buttin 1 was clickred-HANDLER3");
}
btn1.addEventListener("click",handler3);
btn1.addEventListener("click",()=>{
    console.log("buttin 1 was clickred-HANDLER4");
})
btn1.removeEventListener("click",handler3)