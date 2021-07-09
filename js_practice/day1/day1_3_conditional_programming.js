var time = 11;
var bool = time <= 12;
console.log(bool)
if (time < 12) {
    console.log("good morning")
}
var time = 15;


if (time < 12) {
    console.log("good morning")
}
else {
    console.log("good afternoon")
}

var time = 18;

if (time < 12) {
    console.log("good morning")
}
else if (time < 17) {
    console.log("good afternoon")
} else {
    console.log("good evening")
}

//and operator
var a = 0, b = 5, c = 9;
if (a < b && a < c) {
    console.log("a is smallest")
} else if (b < c) {
    console.log("b is small")
} else {
    console.log("c is smallest")
}

//or operator
var x = 6, y = 7;
if (x < 5 || y < 5) {
    console.log("x or y less than 5")
} else {
    console.log("both x and y are greater than 5")
}

//not operator
var bool1=true;
var temp=!bool1;
console.log(temp)
if(!bool1){
    console.log("if is executed")
}else{
    console.log("else is executed")

}



//module operator
var num = 10;
if (num % 2 == 0) {
    console.log("num is even")
} else {
    console.log("num is odd")
}

//==
x=10;
var num=10;
if(x==num){
    console.log("x and num are equal")
}else{
    console.log("x and num are not equal")

}
// ===
x="10";
var num=10;
if(x===num){
    console.log("x and num are equal")
}else{
    console.log("x and num are not equal")

}


// if (a < b) {
//     if (a < c) {
//         console.log("a is small")
//     }
// }
