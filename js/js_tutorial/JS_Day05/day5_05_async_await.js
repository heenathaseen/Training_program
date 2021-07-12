function makeRequest(flag) {
    return new Promise((resolve, reject) => {
        console.log('Our request will be processed...')
        if(flag) {
            setTimeout(() => {
                resolve('Request successful!')
            }, 1000)
        } else {
            setTimeout(() => {
                reject('Request Failed...')
            }, 1000)
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}

// through chaining
/*makeRequest(false).then(response => {
    console.log(`response received ${response}`)
    return processRequest(response)
}).then(response => {
    console.log(`after processing the request ${response}`)
}).catch(err => {
    console.log(`Error... ${err}`)
})*/

/*async function doWork() {
    let response = await makeRequest(true)
    console.log(`Response received: ${response}`)
    const processedResponse = await processRequest(response)
    console.log(`Processed Response is: ${processedResponse}`)
}
doWork();*/

async function doWork() {
    try {
        let res = await makeRequest(false)
        console.log(`Response received: ${res}`)
        let processedRes = await processRequest(res)
        console.log(`Processed Response is: ${processedRes}`)
    } catch (err) {
        console.log(err)
    }
}
doWork();

