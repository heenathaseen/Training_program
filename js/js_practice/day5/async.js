// function getTime(){
//     let response =fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
//     console.log(response);
// }
// getTime();

function makeRequest(state) {
    return new Promise((resolve, reject) => {
        if (state) {
            setTimeout(() => {
                resolve("success")
            }, 2000)
        } else {
            setTimeout(() => {
                resolve("reject")
            }, 3000)
        }

    });
}
async function doSomeWork() {
    try {
        let response = await makeRequest(true)
        console.log("response recieved: " + response)

    }
    catch(err) {
        console.log("error" + err)
    }
}
doSomeWork();


