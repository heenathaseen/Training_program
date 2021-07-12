// multiplication using closures - from exercises
function gentable(x) {
    return function(n) {
        for (let i = 1; i<= n; i++) {
            console.log(`${x} x ${i} = ${x*i}`)
        }
    }
}
let table5 = gentable(5)
table5(10)


// IIFE for the above
// IIFE: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
let table5 = (function gentable(x) {
    return function(n) {
        for (let i = 1; i<= n; i++) {
            console.log(`${x} x ${i} = ${x*i}`)
        }
    }
})(5)
table5(10)


// Issue with var
var f = []
for (var i = 0; i < 3; i++) {
    f[i] = function() {
        console.log('i am in a function =', i)
    }
}
for (var j = 0; j < 3; j++) {
    f[j]()
}

// IIFE solution to the above
// IIFE: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
var f = []
for (var i = 0; i < 3; i++) {
    f[i] = (function(i) {
        return function() {
        console.log('i am in a function =', i)
        }
    })(i)
}
for (var j = 0; j < 3; j++) {
    f[j]()
}

//Fat arrows
// regular declaration
function c2f_1(c) {
    return c*9/5+32
}

// fat arrow declaration of the same
const c2f_2 = (c) => c*9/5+32

// testing...
console.log(c2f_1(40))
console.log(c2f_2(40))