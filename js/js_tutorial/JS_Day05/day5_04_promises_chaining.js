const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First Promise Resolved")
    }, 3000)
})

const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Second Promise Resolved")
    }, 1000)
})

const thirdPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Third Promise Resolved")
    }, 1500)
})

// adding a wrapper function to throw an error
function getSecondPromise(flag) {
    if(flag) {
        return secondPromise
    } else {
        throw Error("some error")
    }
}

// how to chain promises
// to ensure order of execution
firstPromise.then(message => {
    console.log(`First Promise called: ${message}`)
    return getSecondPromise(false)
}).then(message => {
    console.log(`Second Promise called: ${message}`)
    return thirdPromise
}).then(message => {
    console.log(`Third Promise called: ${message}`)
}).catch(message => {
    console.log(`catch message ${message}`)
})

