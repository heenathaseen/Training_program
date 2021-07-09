// sometimes, you do not want to execute the entire loop
// there are different ways of doing this

var flag = true, n1 = 15;
while(flag) {
    console.log("01 The number is " + n1);
    if(n1 % 7 == 0) {
        flag = false;
    }
    n1++;
}

console.log("\n");


// if there was no break statement
// we would have something known as an infinite loop
// where we never find an exit condition
var n2 = 15;
while(true) {
    console.log("02 The number is " + n2);
    if(n2 % 7 == 0) {
       break;
    }
    n2++;
}

//continue skips the current loop and proceeds to the next loop
var n3=15;
for(var i=4; i<=n3; i++) {
    
    if(i % 7 == 0) {
       continue;
    }
    console.log("03 The number is " + i);
}