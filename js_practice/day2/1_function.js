function test(){
    console.log("this is test");
}
test();


function printName(name){
    return("my name is " +name);
}
var name =printName("heena");
console.log(name)


function sum(a,b){
    return a+b;
}
var addition =sum(100,500)
console.log(addition)


//****** */

var x=0;
function sums(num){
    return x+num;
}
var y=sums(10)
console.log(y)
//************ */

function testContScope(){
    const someConstant ="new value";
    console.log(someConstant)

}
testContScope();
//*********** */
var product=function(x,y){
    return x*y;
}
console.log(product(10,20));

{let varyNum=10;
console.log(varyNum);}
varyNum=300;
console.log(varyNum)

var summ=function(){
    return 10+20;
}
console.log(summ)
summ =function(){
    return 10 *20
}
console.log(summ);


/***** */

function returnMultiplyFunction(num){
    return (x)=>{
        return x*num;
    }
}
var multiplyFive=returnMultiplyFunction(5);
console.log(multiplyFive(2))
//*** inside the fn is like this */
multiplyFive=(x)=>{
    return x*num;
}


//***** Closure*/


function outerFunction(){
    console.log("iam at the start of the outer function");
    var innerFunc=function(){
        console.log("inner function")
    }
    innerFunc()

}
outerFunction()

//**********8 */

function outerFunction(temp){
    console.log("iam at the start of the outer function"+temp);
    var innerFunc=function(){
        console.log("inner function"+temp)
    }
    innerFunc()

}
outerFunction()

//*************** */

function outerFn(num){
    var innerFn=function(x){
return num*x;    }
   return innerFn;

}
outerFn()
var tempinnerfn=outerFn(10);
var products = tempinnerfn(2);
console.log(products)

//recrusion
function countDown(x){
    console.log("coundown")
    y=x-1;
    if(y>0){
        countDown(y)
    }
    console.log(y)
}
countDown(10)




