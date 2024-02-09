const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a promise");
        resolve("success");
    });
};
let promise=getPromise();
//when promise fulfilled
promise.then((res)=>{
    console.log("promise fulfilled",res);
})
//when promise rejected
promise.catch((err)=>{
    console.log("promise rejected",err);
})