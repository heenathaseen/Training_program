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
    }, 1000)
})

Promise.all([
    firstPromise,
    secondPromise,
    thirdPromise
]).then((messages) => {
    console.log('Promise.all...')
    console.log(messages)
})

Promise.race([
    firstPromise,
    secondPromise,
    thirdPromise
]).then((messages) => {
    console.log('Promise.race...')
    console.log(messages)
})

