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
async function getAllData(){
    console.log("getting data 1.......");
    await getData(1);
    console.log("getting data 2.......");
    await getData(2);
    console.log("getting data 3.......");
    await getData(3);
}
//getAllData();//if we dont want to use this then we use IIFE
//IIFE
(async function getAllData(){
    console.log("getting data 1.......");
    await getData(1);
    console.log("getting data 2.......");
    await getData(2);
    console.log("getting data 3.......");
    await getData(3);
})();