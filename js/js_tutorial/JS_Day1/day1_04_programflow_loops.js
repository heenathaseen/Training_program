// sometimes the same code might need to be executed multiple times
// imagine this scenario

console.log("Number 1");
console.log("Number 2");
console.log("Number 3");
console.log("Number 4");
console.log("Number 5");
console.log("Number 6");
console.log("Number 7");
console.log("Number 8");
console.log("Number 9");
console.log("Number 10");

console.log("\n");

// a simple way of doing this is the whle loop
var n2 = 1;
while(n2 <= 10) {
    console.log("02 Number " + n2);
    n2 = n2 + 1;
}
console.log("\n");

// there is a short-cut for writing the last line
// a simple way of doing this is the whle loop
var n3 = 1;
while(n3 <= 10) {
    console.log("03 Number " + n3);
    n3 += 1;
}

console.log("\n");

// and an even shorter way
var n4 = 1;
while(n4 <= 10) {
    console.log("04 Number " + n4);
    n4++;
}

console.log("\n");

// do away with the line altogether
var n5 = 1;
while(n5++ <= 10) {
    console.log("05 Number " + n5);
}

console.log("\n");

// be careful, the value is computed after
// the expression is evaluated
// and so, the right way to do this is
var n6 = 0;
while(n6++ < 10) {
    console.log("06 Number " + n6);
}

console.log("\n");


// understanding postfix and prefix increment a little better
x = 10;
console.log("initial x value: " + x);

console.log("during postfix: " + x++);
console.log("after postfix: " + x);

console.log("during prefix: " + ++x);
console.log("after prefix: " + x);

console.log("\n");


// a more intuitive way of writing a simple loop
for(var n7 = 1; n7 <= 10; n7++) {
    console.log("07 Number " + n7);
}

console.log("\n");

// this is equivalent to
var n8 = 1;
while(n8 <= 10) {
    console.log("08 Number " + n8);
    n8++;
}

console.log("\n");

// what if you want your code or loop body to execute at least once?
var n9 = 1;
do {
    console.log("09 Number " + n9);
    n9++;
} while(n9 <= 10);

console.log("\n");

// or, similar to what we have seen before
var n9 = 1;
do {
    console.log("09 Number " + n9);
} while(n9++ < 10);

console.log("\n");

// loops can also be nested
for(var i = 1; i <= 5; i++) {
    for(j = 1; j <= 5; j++) {
        console.log(i + "\t" + j);
    }
}
