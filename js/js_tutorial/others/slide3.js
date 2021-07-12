//slide 3 

//1. Write a function that examines a user input for the following errors and prints all the errors: ​
//     1.User does not enter a valid number( if this test fails, no other checks can run)​
//     2.Number is less than 100 or greater than 1000​
//     3.Number is a prime number​
//     4. Number ends in the digit 3

var num = 100

function ErrorShow() {

    if (num < 100 || 1000) {}

}

var checkValid = function(n) {
    return n >= 100 && n <= 1000;
};
var isPrime = function(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
};
var isEndsWith3 = function(n) {
    let obj = String(n);
    return obj[obj.length - 1] == 3
};





// var num = 183;
// if (!checkValid(num))
//     console.log(`${num} is not valid, please enter a value from 100 to 1000 `);
// if (!isEndsWith3(num))
//     console.log(`${num} is should not end with 3, please enter a valid number `);
// else if (isPrime(num))
//     console.log(`${num} should not enter a prime number`);
// else 
// console.log(`${num} is valid`);

//var num = 181 ; if (!checkValid(num)) 

var num = 103;
if (!checkValid(num))
    console.log(`${num} is not valid`);
else {
    if (isEndsWith3(num))
        console.log(`${num} should not end with 3`);
    if (isPrime(num))
        console.log(`${num} You shouldn"t enter prime number`);
}

//String No2



var checkValid = function(n) {
    return n.length >= 10 && n.length <= 20;
};
var Mix = function(n) {
    return String(n).toLowerCase == String(n) && String(n).toUpperCase == String(n);
};
var notchar = function(n) {
    return String(n).includes("(") || String(n).includes(")");
};
var fullstop = function(n) {
    var len = n.length;
    if (n[len - 1] == '.') {
        return true;
    }

    // return obj[obj.length - 1] == ".";
    //return obj.includes(".");
};




var num = "hello WORLD";
if (!checkValid(num))
    console.log(`${num} should between 10 to 20`);
if (Mix) {
    console.log(`${num} should be mixed with uppercase and lowercase letters`)
}
if (!notchar) {
    console.log(`${num} should not contain (or) characters`)
}
if (fullstop) {
    console.log(`${num} should  not end with "."`)
}


// 3.Write a function that prints a multiplication table. 
//   Use closures to perform the multiplication and template strings to format the output

function tables(x) {
    function innertable() {
        for (var i = 1; i <= 10; i++) {
            console.log(x + " x " + i + " = " + (x * i))
        }
    }
    return innertable;
}
var m = tables(5);
m();