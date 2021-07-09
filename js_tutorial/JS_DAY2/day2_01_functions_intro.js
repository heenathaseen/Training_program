//Time: 5 minutes

// a function is a piece of code that you repeat often
// and you would like to define only once

function myFirstFunction() {
    console.log("Welcome to the code on functions!");
}
myFirstFunction();
//myFirstFunction();
console.log("\n");


// a function can take an input
// this is equivalent to creating a variable with the same name
function mySecondFunction(name) {
    console.log("Hello there, " + name);
}
mySecondFunction("Sambhavi");
mySecondFunction("Green Tentacled Monster");
console.log("\n");

// This means we can use a function 
// to encapsulate important logic
function superSecretFormula(x) {
    console.log("The super secret answer is: " + x*10);
}
superSecretFormula(10);
superSecretFormula(0.15);
console.log("\n");

// A function can also return a value
function iReturnAValue(x) {
    return x + 10;
}
n1 = iReturnAValue(10);
n2 = iReturnAValue(0.5);
console.log("iReturnAValue gave us: " + n1 + " and " + n2);
console.log("\n");

// this brings us to the concept of "scope"
// what is the scope of arg1?
function hereIsAFunction(arg1) {
    return "---" + arg1 + "---";
}
someValue = hereIsAFunction("blah blah blah");
console.log(someValue);
//console.log("But what is arg1?\t" + arg1);
console.log("\n");

// variables in global scope can be accessed
// inside a function
function hereIsAnotherFunction(arg1) {
    console.log("Can I access someValue?\t" + someValue);
    return "---" + arg1 + "---";
}
anotherValue = hereIsAnotherFunction("la la la");
console.log("hereIsAnotherFunction gave us\t" + anotherValue);
console.log("\n");

// however, you can create a variable inside the function
// with the same name as a variable in global scope
function hereIsMyThirdFunction(arg1) {
    console.log("Can I access someValue?\t" + someValue);
    var someValue = "test";
    console.log("What is someValue?\t" + someValue);
    return "---" + arg1 + "---";
}

thirdValue = hereIsMyThirdFunction("la la la");
console.log("hereIsMyThirdFunction gave us\t" + thirdValue);
// the value of the variable with the same name
// in global scope does not change
console.log("someValue is still the same once we exit from the function!\t" + someValue);
console.log("\n");