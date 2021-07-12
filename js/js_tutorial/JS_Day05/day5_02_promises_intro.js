

// the basic structure of a promise
let p = new Promise((resolve, reject) => {
    let a = true
    if (a) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

p.then(message => {
    console.log(`then message ${message}`)
}).catch(message => {
    console.log(`catch message ${message}›`)
})

function somePromise(flag) {
    return new Promise((resolve, reject) => {
        if(flag) {
            resolve("you have succeeded in a complex operation")
        } else {
            reject("you have failed in a complex operation")
        }
    })
}

p2 = somePromise(false)
p2.then(message => {
    console.log(`then message ${message}`)
}).catch(message => {
    console.log(`catch message ${message}`)
})


