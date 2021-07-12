//Time: 10 minutes

// recursion is the idea of a function calling itself
// it has a definite end state, 
// else the program will go into an infinite loop
// everytime you need to navigate down several levels
// recursive logic works very well
// we will revisit recursion at various points in the course

//Start off wi
function countDown(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}
countDown(3);
console.log("\n");

// simple example that 
function printAllNumbers(x, myStr) {
    myStr = myStr || "";
    if(x > 0) {
        myStr = printAllNumbers(x-1, myStr + " " + x);
    }    
    return myStr;
}
console.log(printAllNumbers(10));
console.log("\n");

// factorial is another example
function factorial(x, f) {
    f = f || 1;
    if(x > 0) {
        f = factorial(x-1, x * f);
    }    
    //  console.log(myStr);
    return f;
}
console.log(factorial(6));
console.log("\n");


// https://www.cs.utah.edu/~germain/PPS/Topics/recursion.html