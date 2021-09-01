const promise1 = new Promise((resolve,reject)=>{
    const todayRaining = false;
    if (todayRaining) {
        resolve("first time resolved");
    }else{
        reject("problem reject");
    }
})
promise1.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
})