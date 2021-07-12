var n = 7; 
var string = "";
for (var i = 1; i <= n; i++) {
  for (var j = 0; j < i; j++) {
    string += " # ";
  }
  string += "\n";
}
console.log(string);

num =16;
// num *=num;
var x=num**2;
console.log("sqrt is"+x);

var n1=3,n2=4;
if(n1>n2){
    console.log("n1 is greater")
}else{
   console.log("n2 is greater") 
}


var x=20;
var z= x%5;
console.log("the modulus of 5 is " +z) 

//n-10 and n+10
var n=20;
for (i=n-10;i<30;i++){
    console.log(i);
}
var n1=20;

 for (j=n1+10;j<10;j--){
    console.log(j);
}



var num =12;

if(n%2==0){
  for(i=0;i<num;i+2){
    console.log("even number" +i);

  }
}else{
    for(i=0;i<num;i+1){
        console.log(" odd number" +i);
    
      }
}

var numb =20;

for(i=1; i<=numb; i++){

    

   

    if(i % 2 == 0){

        console.log("Even number")

      console.log(i);

    }

    

    

  }

  for(i=1;i<=numb;i++){

  if(i%2 !=0){

    console.log("Odd number")

    console.log(i);

  }

}

num =5;

for(i=1;i<=num;i++){
    console.log(num)
}

var s=-10;

for(i=s;i<=10;i++){
    console.log(i)
}








// var n=10;
// for(var i=n;i>=1;i++){
//     var res="";
//     for(j=i;j>=1;j++){
//         res +="*"
//     }
//     console.log(res)
// }