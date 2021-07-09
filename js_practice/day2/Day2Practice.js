// Write a function that takes two arguments and returns their minimum.
function funTwoNum(a, b){
    if(a > b){
         return ("B is minimum " + b);
    }
    else{
       return ("A is minimum " + a)
    }  
 }  
 var x =funTwoNum(12,14);
 console.log(x);  


 // Write a function that converts temperature from Centigrade to Fahrenheit
 function convertemp(temp){   
       return (temp*1.8)+32; 
      /* or other formula will be 
      return (temp*9/5)+32; */
 }  
 var y =convertemp(30);
 console.log("Final Result Will be in F "+y);   

 // Write a function that converts inches to centimeters and vice-versa depending on user inputs
// convert inch to cm
 function convertinchtocm(inch){   
    return (inch*2.54);  
}  
var z =convertinchtocm(30);
console.log("Final Result Will be in Cm "+z);  

// concert into cm to inch
function convertcmtoinch(cm){   
    return (cm*0.393);   
    /* or other formula will be 
    return (cm/2.54);*/ 
}  
var x =convertcmtoinch(10);
console.log("Final Result Will be in inch "+x);


// Write a function that takes two numbers and the name of an operation. Depending on input, the program should perform the desired operation on the numbers. If a particular operation cannot be performed, the program should print a desired error message. What are some numeric operations which cannot be performed?
function opeTwoNum(a,b,op){
    if(op=="+"){
        return (a+b); 
    }
    else if (op == "-")
    {
        return a-b; 
    }
    else if (op =="/"){
         return a/b;
    } 
    else{
        return "Error";
    }
    }
   var x = opeTwoNum(10,20,"+");
   console.log("Result will be "+x); 

// Write a recursive function to generate a fibonacci series
function fibo(numb) {
    if(numb < 2) {
        return numb;
    }
    else {
        return fibo(numb-1) + fibo(numb - 2);
    }
}
 n = 10;
if(n <=0) {
    console.log("Error")
}
else {
    for(let i=0; i<n; i++) {
        console.log(fibo(i));
    }

}
//prime number
function prime(num, i)
{

    if (num <= 2)
        return  false;
    if (num % i == 0)
        return false;
    if (i * i > num)
        return true;
    
    return prime(num, i+1);
}

   let input = 5;

    if (prime(input, 2))
        console.log("Yes");
    else
    console.log("No");


//E-3(1)
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
var num = 103;
if (!checkValid(num))
    console.log(`${num} is not valid`);
else {
    if (isEndsWith3(num))
        console.log(`${num} should not end with 3`);
    if (isPrime(num))
        console.log(`${num} You shouldn"t enter prime number`);
}





// Write a function that prints a multiplication table. Use closures to perform the multiplication and template strings to format the output

function getMultiplicationFn(num) {

    function secondfn (i)  {
        for(var i=1;i<=10;i++){
          
            result = i*num;
             console.log(num + " * " + i + " = " +result );
            
          }
    }
    return secondfn
}
var mul = getMultiplicationFn(2);
mul();

var name ="helloworldfsdfsdfsdfddd";
function checkString(name){
(name.length>=10 && str.length<=20)?
console.log(`The given string ${name} passed the first validation`)
:console.log(`The given string ${name} failed the first validation`);
(name.includes("(" || ")"))?
console.log(`The given string ${name} failed the third validation`)
:console.log(`The given string ${name} passed the third validation`);
(name.endsWith("."))?
console.log(`The given string ${name} failed the fourth validation `)
:console.log(`The given string ${name} passed the fourth validation`);
}
 
 
checkString("Hi Team.");

