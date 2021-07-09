// what is a Symbol?

let s1 = Symbol();
s1 = Symbol('abc');
console.log(s1);
console.log("\n");

s2 = Symbol('abc');
console.log(s2);
console.log("\n");

// when comparing symbols
if(s1 == s2) {
    console.log('Both symbols are the same');
} 
else {
    console.log('Both symbols are not the same');
}
console.log("\n");

if(s1 == s2) {
    console.log('Both symbols still are the same');
} 
else {
    console.log('Both symbols are still not the same');
}
console.log("\n");

// how does string comparison work?
if("abc" == "abc") {
    console.log('both strings are same');
}
console.log("\n");

if("abc" === "abc") {
    console.log('both strings are still the same');
}
console.log("\n");

// typeof
console.log(typeof Symbol());




//time takento understand 3 to 5 miins
//for this object it will enough
//no need of improvements