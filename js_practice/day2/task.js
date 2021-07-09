
            //Exercise 1
//function that takes two arguments and returns their minimum.​
function min(a,b){
    if(a<b){
        return("a is min" +a);
    }else{
        return("b is min" +b);

    }
}
console.log(min(30,20));


//Write a function that converts temperature from Centigrade to Fahrenheit​
function cToF(temp){
    return (temp*1.8)+32;
     
}
console.log("temperature from Centigrade to Fahrenheit​: " +cToF(20))

//Write a function that converts inches to centimeters and vice-versa depending on user inputs
function intoCm(inch){
    return (inch*2.54);
     
}
console.log(intoCm(10))

//4
function num(n1,n2,op){
    if(op=="sum"){
        return n1+n2;
    }else{
        return ("error")
    }
}
console.log(num(2,3,""))
// //fibo
// function fibo(num){
//     if(num < 2){
//         return num;
//     }else{
//         for(let i=0;i<num;i++){
//             return fibo(num-1)+fibo(num-2);
            

//         }
//     }
// }
// console.log(fibo(5));
// if(n<=0){}

function prime(numb,i){
    if(numb <= 2) {
        return false;
    }
    if(numb%i==0) {
        return false;
    }
    return prime(numb,i);


}
// var input=3;
// if(prime(n,2)){    console.log("yes")

// }else{
//     console.log("no")

// }


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

        //  Write a function that examines a user input for the following errors and prints all the errors:​

        //  User does not enter a valid number (if this test fails, no other checks can run)​
         
        //  Number is less than 100 or greater than 1000​
         
        //  Number is a prime number​
         
        //  Number ends in the digit 3         

function check(userinput){
    if(userinput!=num){
        console.log("its not valid");
    }else if(userinput<100|| userinput>1000 ){
        console.log("it isless than 100 or greater than 1000​")
    }else if()
}
    



  