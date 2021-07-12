// the promise needn't be created explicitly
const asynTestFn = async (message) => {
    return `We have received your message ${message}`
}

let msg = asynTestFn('hello!')
console.log(msg)