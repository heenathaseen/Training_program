
// this is the basic construct of an "if" statement
var number = 15;
if(number < 100) {
    console.log('1a This is a small number');
}
else {
    console.log("1b This is a big number");
}


// more branching
var number = 20;
if(number < 20) {
    console.log("2a Number is less than 20");
}
else if(number == 20) {
    console.log("2b Number is equal to 20");
}
else {
    console.log("2c Number is greater than 20");
}


// nested ifs are possible but best to avoid
//finding biggest of three numbers
var a = 7, b=10, c=5;

if(a>b){
    
    if(a>c){
        console.log("a is greater");
    }
    else{
        console.log("c is greater");
    }
}

else{

    if(b>c){
       console.log("b is greater");
    }
    else{
        console.log("c is greater");
    }
}


// in many cases code can be refactored 
if("abc" != "def" && 20 == 20) {
    console.log("3b This is an if with two conditions");
}

// any expression that evaluates to a Boolean can be used
x = true;
y = false;

// or
if(x || y) {
    console.log("4a " + true);
}

// and
if(x && y) {
    console.log("4b " + true);
}
else {
    console.log("4c " + false);
}

// not
if(!y) {
    console.log('4d y is false');
}

// note the symbol for equality
// both sides are coerced into the same type
if("100" == 100) {
    console.log('4e equals test is true');
}
else {
    console.log('4f equals test failed')
}

// note the symbol for equality
// test fails because we're comparing a string with a number
// always prefer strict equals 
// unless you have a very good reason not to use it
if("100" === 100) {
    console.log('4g equals test is true');
}
else {
    console.log('4h equals test failed')
}

// something commonly c
t = "true"
if(t) {
    console.log("4i t is true");
}

if(t == true) {
    console.log('4j t == true');
}
else {
    console.log("4k boolean string check failed");
}

// this is where undefined comes into the picture
// if the variable is undefined, the expression evaluates to false
// else it's true
var a = "";
var b;

if(a) {
    console.log("5a if(a) is true");
}

if(b) {
    console.log("5b if(b) is true");
}
else {
    console.log("5c Hmmm, what is b?");
    console.log(b);
}

// how about if a value is set to null?
var c = null;
if(b) {
    console.log("5d if(c) is true");
}
else {
    console.log("5e Hmmm, what is c?");
    console.log(c);
}

// however watch out
console.log("6a null == undefined evaluates to " + (null == undefined));
console.log("6b null === undefined evaluates to " + (null === undefined));


// === only works when both sides have the same type
// introducing the type of operator
var foo;
console.log("7a var foo:\t" + typeof foo);

foo = 10;
console.log("7b foo = 10:\t" + typeof foo);

foo = 'some text';
console.log("7c foo = 'some text':\t" + typeof foo);

foo = 10;
console.log("7d foo = 10:\t" + typeof foo);

foo = {};
console.log("7e foo = '{}':\t" + typeof foo);

foo = 10;
console.log("7f foo = 10:\t" + typeof foo);

foo = null;
console.log("7g foo = null:\t" + typeof foo);

var x = 12;

if(x<12){
    console.log("Good morning!!!");
}else if(x < 18){
    console.log("Good afternoon!!!");
}else{
    console.log("Good night!!!");
}