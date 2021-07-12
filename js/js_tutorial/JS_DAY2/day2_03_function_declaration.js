//Time: 5 minutes
// two more ways of defining a function
// we will revisit in later sessions

// function as a variable
var someFunction = function() {
    console.log("abc");
}
someFunction();
console.log("\n");

let anotherFunction = function(x) {
    console.log("you sent me... " + x);
}
anotherFunction(1000);
console.log("\n");

someFunction = anotherFunction;
someFunction(10);
console.log("\n");

const constantFunction = function() {
    console.log("I am a constant function");
}
constantFunction();
console.log("\n");

// constantFunction = someFunction; // error

// arrow notation
//This notation has special implications.
//We will revisit this on Day 5.
const squareNumber = (x) => {
    return x * x;
}
console.log("square of 10 is\t" + squareNumber(10));

function returnMultiplyFunction(num) {
    return (x) => {
        return x * num;
    };
}

var multiplyFive = returnMultiplyFunction(5);
console.log(multiplyFive(10));
console.log("\n");

var multiplyThree = returnMultiplyFunction(3);
console.log(multiplyThree(10));