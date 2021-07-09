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
 let n = 10;
if(n <=0) {
    console.log("Error")
}
else {
    for(let i=0; i<n; i++) {
        console.log(fibo(i));
    }

}

// Write a function that prints a multiplication table. Use closures to perform the multiplication and template strings to format the output

function getMultiplicationFn(num) {

    return (x) => {
        return x * num;
    }
}

//prime number


function prime(numb,i){
    if(numb <= 2) {
        return false;
    }
    if(numb%i==0) {
        return false;
    }
    return prime(numb,i);


}
var nn=3;
if(prime(nn,2)){    console.log("yes")

}else{
    console.log("no")

}


     function prime(nn, i)
     {
    
         if (nn <= 2)
             return  false;
         if (nn % i == 0)
             return false;
         if (i * i > nn)
             return true;
         
         return prime(n1, i+1);
     }
    
        let nn = 5;
    
         if (prime(nn, 2))
             console.log("Yes");
         else
         console.log("No");


    

// let timesFive = getMultiplicationFn(5);
// console.log('3 x 5 = ' + timesFive(3));
// console.log('\n');

