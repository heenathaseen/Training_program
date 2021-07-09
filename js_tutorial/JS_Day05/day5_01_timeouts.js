// what will be the order of printing these statements?
console.log("The wait begins...")
setTimeout(() => console.log("The wait is over!"), 1000);
console.log("What shall we do while we wait?");

// we're simulating a delay here
// in the real world the delay could be from anything
// network operation, file read, animation, etc
function return10x(x) {
    return 10 * x
}

function return10xAfterWait(x) {
    let y = return10x(x)
    setTimeout(() => {
        console.log(`I will return ${y}`)
        return y
    }
        , 1000);
    
}

// this clearly doesn't work
let y = return10xAfterWait(5)
console.log(y);

// Is it because we read the value of y too early?
// let's try again!
y2 = return10xAfterWait(3)
setTimeout(() => console.log(`The wait is over! ${y2}`), 1500);

// it's because the outer function is not the one returning the value
// the only way to execute code after an asynchronous block executes
// is to introduce a callback
function printValue(y) {
    console.log(`After waiting, the value is... ${y}`)
}

// we can restructure the wait function now
function doSomethingWith10xAfterWait(x, callBk) {
    let y = return10x(x)
    setTimeout(() => {
        console.log
        callBk(y)
    }, 1000);
}

function callBk(y) {
    console.log(`y in callBk ${y}`)
}
console.log("let's wait for the value")
doSomethingWith10xAfterWait(100, printValue);