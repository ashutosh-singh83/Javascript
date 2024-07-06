function getData(dataId,getNextData){
    //5s
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        },2000);
    });
    
}
//Promise chain
console.log("getting data1 ..............");
getData(1)
.then((res)=>{
    console.log("getting data2 ..............");
    return getData(2);
})
.then((res)=>{
    console.log("getting data3 ..............");
    return getData(3);
}).then((res)=>{
console.log(res);
})