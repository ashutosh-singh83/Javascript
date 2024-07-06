function getData(dataId,getNextData){
    //5s
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        },5000);
    });
    
}
getData(1);