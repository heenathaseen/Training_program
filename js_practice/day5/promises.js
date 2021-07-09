function job() {
    return new Promise(function (resolve, reject) {
        if (state) {
            resolve("success")

        } else {
            reject("failed")

        }

    });
}
//commenting for next code to execute

// let myPromise = job(true);
// myPromise.then((data)=>{
//      console.log("data is " +data);
// }).catch((error)=>{
//     console.log("Error is " +error);
// });

let myPromise = job(true);
myPromise.then((data)=>{
     console.log("data is " +data);
    return job(false);
}).catch((error)=>{
    console.log("Error is " +error);
    return "error"
}).then((data)=>{
    console.log("again data is " +data );
    return job(true);
}).catch((error)=>{
    console.log("Error is " +error);
})